/*
 * Ritar startsidan och veckomeny-sidan utifrån data/restaurants.js och data/menus.js.
 * Ingen byggprocess, inga bibliotek — filen körs direkt i webbläsaren.
 */
(function () {
  "use strict";

  var RESTAURANTS = window.RESTAURANTS || [];
  var MENUS = (window.MENUS && window.MENUS.restaurants) || {};
  var TZ = "Europe/Stockholm";
  var WEEKDAYS = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

  /* ---------- Datum ---------- */

  // Dagens datum som "2026-08-21", alltid i svensk tid oavsett var besökaren är.
  function todayISO() {
    return new Intl.DateTimeFormat("sv-SE", {
      timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit"
    }).format(new Date());
  }

  function todayWeekday() {
    var name = new Intl.DateTimeFormat("sv-SE", { timeZone: TZ, weekday: "long" }).format(new Date());
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  // Veckonummer enligt ISO 8601, samma räknesätt som svenska kalendrar.
  // Veckan tillhör det år som dess torsdag ligger i.
  function isoWeek(iso) {
    var d = new Date(iso + "T00:00:00Z");
    var offset = (d.getUTCDay() + 6) % 7;          // måndag = 0
    d.setUTCDate(d.getUTCDate() - offset + 3);      // flytta till veckans torsdag
    var firstThursday = new Date(Date.UTC(d.getUTCFullYear(), 0, 4));
    var fOffset = (firstThursday.getUTCDay() + 6) % 7;
    firstThursday.setUTCDate(firstThursday.getUTCDate() - fOffset + 3);
    return 1 + Math.round((d - firstThursday) / (7 * 24 * 3600 * 1000));
  }

  // Flyttar ett datum n dagar framåt. Används för att räkna ut nästa veckas
  // nummer genom kalendern istället för att addera 1 — det senare går fel vid
  // årsskiftet, där vecka 52 följs av vecka 1.
  function shiftISO(iso, days) {
    var d = new Date(iso + "T00:00:00Z");
    d.setUTCDate(d.getUTCDate() + days);
    return d.toISOString().slice(0, 10);
  }

  function isWeekend() {
    var day = todayWeekday();
    return day === "Lördag" || day === "Söndag";
  }

  // "Fredag 21 augusti" — bara veckodagen får stor bokstav, som svenskan vill ha det.
  function longToday() {
    var s = new Intl.DateTimeFormat("sv-SE", {
      timeZone: TZ, weekday: "long", day: "numeric", month: "long"
    }).format(new Date());
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  // "Vecka 34 · Fredag 21 augusti"
  function headerLine() {
    return "Vecka " + isoWeek(todayISO()) + " · " + longToday();
  }

  // "Uppdaterad idag 08:04" / "Uppdaterad 20 aug 06:03"
  function stampText(iso) {
    if (!iso) return "Ingen hämtning gjord än";
    var d = new Date(iso);
    if (isNaN(d)) return "Ingen hämtning gjord än";
    var time = new Intl.DateTimeFormat("sv-SE", { timeZone: TZ, hour: "2-digit", minute: "2-digit" }).format(d);
    var day = new Intl.DateTimeFormat("sv-SE", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
    if (day === todayISO()) return "Uppdaterad idag " + time;
    var pretty = new Intl.DateTimeFormat("sv-SE", { timeZone: TZ, day: "numeric", month: "short" }).format(d);
    return "Uppdaterad " + pretty + " " + time;
  }

  /* ---------- Hjälpare ---------- */

  // "veckomeny" är standard när fältet utelämnas, så äldre poster fungerar.
  function sectionOf(r) {
    return r.section === "lunch" ? "lunch" : "veckomeny";
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  // Hittar dagens dag i en veckomeny. Datum först, veckodagsnamn som reserv
  // (vissa restauranger skriver bara "Måndag" utan datum).
  // Datum först. Matchar inget datum — antingen för att sidan inte anger några,
  // eller för att de tillhör en annan vecka — faller vi tillbaka på veckodagens
  // namn. Båda vyerna anropar den här, så de kan aldrig svara olika.
  function findToday(days) {
    if (!days) return null;
    var iso = todayISO(), name = todayWeekday(), i;
    for (i = 0; i < days.length; i++) if (days[i].date === iso) return days[i];
    for (i = 0; i < days.length; i++) if (days[i].weekday === name) return days[i];
    return null;
  }

  // Anger restaurangen ett veckonummer kan vi se om menyn alls gäller nu.
  // Två olika fall, som inte ska beskrivas likadant:
  //   gammal  — restaurangen har inte uppdaterat sedan förra veckan
  //   framtid — de har redan lagt upp nästa vecka, denna vecka saknas
  // Returnerar null när menyn gäller nu, eller när inget veckonummer finns.
  // Returnerar { level, text } eller null. level styr tonen:
  //   "warn" gult, något är fel och besökaren bör veta det
  //   "info" neutralt, allt är som det ska men värt att nämna
  //
  // Att restaurangen lagt upp nästa veckas meny är ett problem på en tisdag och
  // fullkomligt normalt på en lördag — samma data, olika innebörd. Därför
  // avgörs tonen av vilken dag det är, inte bara av veckonumret.
  function weekNotice(menu) {
    if (!menu || typeof menu.week !== "number") return null;

    var now = isoWeek(todayISO());
    if (menu.week === now) return null;

    var next = isoWeek(shiftISO(todayISO(), 7));

    if (menu.week === next) {
      if (isWeekend()) {
        return { level: "info", text: "Nästa veckas meny (vecka " + menu.week +
                 "), som gäller från måndag." };
      }
      return { level: "warn", text: "Menyn gäller nästa vecka (vecka " + menu.week +
               "). Denna veckas meny finns inte uppe." };
    }

    if (menu.week < now) {
      return { level: "warn", text: "Restaurangen anger vecka " + menu.week +
               " — nu är det vecka " + now + ". Menyn har inte uppdaterats." };
    }

    return { level: "warn", text: "Menyn gäller vecka " + menu.week +
             ", inte den pågående vecka " + now + "." };
  }

  // Gäller menyn en annan vecka vet vi inte vad som serveras idag, och då ska
  // ingen rätt påstås vara dagens. Saknas veckonummer litar vi på veckodagen.
  function menuAppliesNow(menu) {
    return !menu || typeof menu.week !== "number" || menu.week === isoWeek(todayISO());
  }

  function renderDish(dish) {
    var li = el("li");
    var head = el("div");
    if (dish.price) head.appendChild(el("span", "dish-price", dish.price));
    head.appendChild(el("span", "dish-name", dish.name || "Namnlös rätt"));
    li.appendChild(head);
    if (dish.desc) li.appendChild(el("span", "dish-desc", dish.desc));
    return li;
  }

  /* ---------- Startsidan ---------- */

  function renderHome() {
    var grid = document.getElementById("grid");
    var gridLunch = document.getElementById("grid-lunch");
    if (!grid && !gridLunch) return;

    // Sätt text bara om elementet finns. En återvändande besökare kan ha ny HTML
    // och gammal cachad JS, eller omvänt — då saknas något element. Det får
    // aldrig kunna krascha innan korten ritas, för då blir sidan helt tom.
    var todayEl = document.getElementById("today");
    if (todayEl) todayEl.textContent = headerLine();

    var stampEl = document.getElementById("stamp");
    if (stampEl) stampEl.textContent = stampText(window.MENUS && window.MENUS.fetched);

    if (!RESTAURANTS.length) {
      var emptyEl = document.getElementById("empty");
      if (emptyEl) emptyEl.hidden = false;
      return;
    }

    var veckomeny = RESTAURANTS.filter(function (r) { return sectionOf(r) === "veckomeny"; });
    var lunch = RESTAURANTS.filter(function (r) { return sectionOf(r) === "lunch"; });

    if (grid) veckomeny.forEach(function (r) { grid.appendChild(card(r)); });
    if (gridLunch) lunch.forEach(function (r) { gridLunch.appendChild(linkCard(r)); });

    // En tom sektion ska inte visa sin rubrik — då ser sidan ut att sakna något.
    show("sektion-veckomeny", veckomeny.length);
    show("sektion-lunch", lunch.length);

    function show(id, antal) {
      var node = document.getElementById(id);
      if (node) node.hidden = !antal;
    }

    // Kort för "Lunch"-sektionen. Ingen meny hämtas för dessa, så kortet är i
    // praktiken en genväg — det leder direkt till restaurangens egen meny- eller
    // beställningssida, i ny flik eftersom besökaren lämnar vår sida.
    function linkCard(r) {
      var a = el("a", "card card-extern");
      a.href = r.url;
      a.target = "_blank";
      a.rel = "noopener";

      a.appendChild(el("h2", null, r.name));
      var bits = [r.area, r.walk].filter(Boolean);
      a.appendChild(el("p", "meta", bits.join(" · ") || " "));

      // Kompakt rad i stället för ruta: en ruta här gör kortet mycket högre än
      // de utan anteckning, och då blir sektionen ojämn.
      if (r.note) a.appendChild(el("p", "note-rad", r.note));

      var foot = el("div", "card-foot");
      foot.appendChild(el("p", "extern-lank", (r.linkText || "Öppna menyn") + " ↗"));
      a.appendChild(foot);
      return a;
    }

    function card(r) {
      var menu = MENUS[r.id] || {};
      var a = el("a", "card" + (menu.status === "stale" ? " is-stale" : ""));
      a.href = "restaurang.html?id=" + encodeURIComponent(r.id);

      a.appendChild(el("h2", null, r.name));
      var bits = [r.area, r.walk].filter(Boolean);
      a.appendChild(el("p", "meta", bits.join(" · ") || " "));

      if (menu.status === "stale") {
        a.appendChild(el("p", "status", "Kunde inte läsas idag — visar senast hämtade meny"));
      } else if (menu.status === "error" || !menu.days) {
        a.appendChild(el("p", "status", "Ingen meny kunde läsas från restaurangens sida"));
      }

      var notice = weekNotice(menu);
      if (notice) a.appendChild(el("p", notice.level, notice.text));

      var day = menuAppliesNow(menu) ? findToday(menu.days) : null;
      var dishes = (day && day.dishes) ? day.dishes : [];

      if (dishes.length) {
        var ul = el("ul", "dishes");
        dishes.forEach(function (d) { ul.appendChild(renderDish(d)); });
        a.appendChild(ul);
      } else if (menu.days) {
        a.appendChild(el("p", "no-dish",
          menuAppliesNow(menu) ? "Ingen meny för idag" : "Se hela veckan nedan"));
      }

      var foot = el("div", "card-foot");
      foot.appendChild(el("p", "price-info", menu.priceInfo || "Se hela veckomenyn →"));
      a.appendChild(foot);
      return a;
    }
  }

  /* ---------- Veckomeny-sidan ---------- */

  function renderDetail() {
    var root = document.getElementById("detail");
    if (!root) return;
    var id = new URLSearchParams(location.search).get("id");
    var r = RESTAURANTS.filter(function (x) { return x.id === id; })[0];

    root.textContent = "";

    if (!r) {
      root.appendChild(el("p", "empty", "Hittar ingen restaurang med det namnet."));
      return;
    }

    document.title = r.name + " — STHLM Lunch";
    var menu = MENUS[r.id] || {};

    var head = el("div", "detail-head");
    head.appendChild(el("h1", null, r.name));
    var bits = [r.area, r.walk].filter(Boolean);
    if (bits.length) head.appendChild(el("p", "meta", bits.join(" · ")));
    if (menu.priceInfo) head.appendChild(el("p", "price-info", menu.priceInfo));

    var link = el("a", "source", "Restaurangens egen sida →");
    link.href = r.url;
    link.rel = "noopener";
    link.target = "_blank";
    head.appendChild(link);
    root.appendChild(head);

    if (r.note) root.appendChild(el("p", "note", r.note));

    var notice = weekNotice(menu);
    if (notice) root.appendChild(el("p", notice.level, notice.text));

    if (menu.status === "stale") {
      root.appendChild(el("p", "status", "Kunde inte läsas vid senaste försöket. " + stampText(menu.fetched) + "."));
    } else if (menu.status === "error" || !menu.days || !menu.days.length) {
      root.appendChild(el("p", "status", "Ingen meny kunde läsas. Öppna restaurangens egen sida ovan."));
    }

    var todayDay = menuAppliesNow(menu) ? findToday(menu.days) : null;
    var days = el("div", "days");

    (menu.days || []).forEach(function (d) {
      var isToday = d === todayDay;
      var box = el("div", "day" + (isToday ? " is-today" : ""));

      var h = el("h3", null, d.weekday || "");
      if (isToday) h.appendChild(el("span", "badge-today", "Idag"));
      box.appendChild(h);

      if (d.date) {
        var pretty = new Intl.DateTimeFormat("sv-SE", { day: "numeric", month: "long" })
          .format(new Date(d.date + "T12:00:00"));
        box.appendChild(el("p", "day-date", pretty));
      }

      if (d.dishes && d.dishes.length) {
        var ul = el("ul", "dishes");
        d.dishes.forEach(function (dish) { ul.appendChild(renderDish(dish)); });
        box.appendChild(ul);
      } else {
        box.appendChild(el("p", "no-dish", "Ingen meny angiven"));
      }

      days.appendChild(box);
    });

    root.appendChild(days);

    if (menu.always && menu.always.length) {
      var box = el("section", "always");
      box.appendChild(el("h2", null, "Alltid på menyn"));
      var ul = el("ul", "dishes");
      menu.always.forEach(function (dish) { ul.appendChild(renderDish(dish)); });
      box.appendChild(ul);
      root.appendChild(box);
    }

    root.appendChild(el("p", "stamp", stampText(menu.fetched)));
  }

  /* ---------- Färgtema ---------- */

  // Tre lägen, i den ordning knappen växlar mellan dem. "system" följer datorns
  // inställning; de andra två låser fast valet. Utan "system" finns ingen väg
  // tillbaka när man en gång klickat.
  var TEMAN = ["system", "light", "dark"];
  var TEMA_TEXT = { system: "Auto", light: "Ljust", dark: "Mörkt" };

  // localStorage kan vara avstängt, och kastar då i stället för att svara.
  // Temat är inte värt ett kraschat sidhuvud, så allt sker inom try.
  function lastTema() {
    try {
      var v = localStorage.getItem("tema");
      return TEMAN.indexOf(v) === -1 ? "system" : v;
    } catch (e) { return "system"; }
  }

  function sparaTema(v) {
    try { localStorage.setItem("tema", v); } catch (e) {}
  }

  function systemArMorkt() {
    return !!(window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches);
  }

  // Samma nyckel och samma värden som skriptet i sidhuvudet använder.
  function anvandTema(val) {
    var morkt = val === "dark" || (val === "system" && systemArMorkt());
    document.documentElement.dataset.theme = morkt ? "dark" : "light";
  }

  function initTema() {
    var val = lastTema();
    anvandTema(val);

    // Byter besökaren systemtema medan sidan är öppen ska Auto följa med.
    if (window.matchMedia) {
      var mq = matchMedia("(prefers-color-scheme: dark)");
      if (mq.addEventListener) {
        mq.addEventListener("change", function () {
          if (lastTema() === "system") anvandTema("system");
        });
      }
    }

    var knapp = document.getElementById("tema");
    if (!knapp) return;

    function rita() {
      knapp.textContent = TEMA_TEXT[val];
      knapp.setAttribute("aria-label", "Färgtema: " + TEMA_TEXT[val] + ". Klicka för att byta.");
    }

    rita();
    knapp.addEventListener("click", function () {
      val = TEMAN[(TEMAN.indexOf(val) + 1) % TEMAN.length];
      sparaTema(val);
      anvandTema(val);
      rita();
    });
  }

  /* ---------- Start ---------- */

  initTema();

  if (document.getElementById("grid")) renderHome();
  else if (document.getElementById("detail")) renderDetail();
})();
