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

  // Kortet är en <div>, inte en <a>. Rubrikens länk täcker hela kortet med ett
  // ::after som spänns ut över ytan, så kortet är fortfarande klickbart i sin
  // helhet — men adressen kan vara en egen länk. En <a> inuti en <a> är ogiltig
  // HTML, och webbläsaren bryter sönder det yttre kortet om man försöker.
  // h3, eftersom kortet ligger inuti en sektion vars rubrik är h2. Nivån styr
  // inte storleken — den kommer från CSS — utan berättar för skärmläsare och
  // sökmotorer vilka kort som hör till vilken sektion.
  function kortRubrik(text, href, nyFlik) {
    var h = el("h3");
    var a = el("a", "kort-lank", text);
    a.href = href;
    if (nyFlik) { a.target = "_blank"; a.rel = "noopener"; }
    h.appendChild(a);
    return h;
  }

  // Adressen blir en kartlänk. Den ligger över kortets klickyta via z-index,
  // så ett klick på adressen öppnar kartan i stället för kortets egen länk.
  //
  // Sökningen innehåller restaurangens NAMN och inte bara adressen. Då matchar
  // Google mot verksamheten och visar dess platskort, i stället för att sätta en
  // nål på gatan. Det avgör också rätt bland flera adresser: The Good Gringo har
  // fyra ställen i Stockholm, och namn plus adress pekar ut Vasastan.
  //
  // Finns fältet placeId används det i stället. Det är Googles egen identifierare
  // och kan inte missförstås — men den måste letas upp för hand, så den behövs
  // bara om en restaurang hamnar fel.
  function kartlank(r) {
    var url = "https://www.google.com/maps/search/?api=1&query=" +
              encodeURIComponent([r.name, r.area, "Stockholm"].filter(Boolean).join(", "));
    if (r.placeId) url += "&query_place_id=" + encodeURIComponent(r.placeId);
    return url;
  }

  function adressRad(r) {
    var p = el("p", "meta");

    if (r.area) {
      var a = el("a", "karta", r.area);
      a.href = kartlank(r);
      a.target = "_blank";
      a.rel = "noopener";
      a.title = "Visa " + r.name + " på karta";
      p.appendChild(a);
    }

    if (r.walk) {
      p.appendChild(document.createTextNode((r.area ? " · " : "") + r.walk));
    }

    // Hårt blanksteg när båda saknas, så raden behåller sin höjd.
    if (!r.area && !r.walk) p.textContent = "\u00a0";
    return p;
  }

  // Pil som pekar ut ur sidan, ritad i stället för skriven. Tecknet ↗ har
  // emojiform som standard på iOS och blev en blå ruta i telefonen — en ritad
  // pil ärver textens färg och storlek och ser likadan ut överallt.
  function utPil() {
    var NS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("class", "ut-pil");
    svg.setAttribute("viewBox", "0 0 10 10");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");

    var strecket = document.createElementNS(NS, "path");
    strecket.setAttribute("d", "M2.2 7.8 L7.6 2.4");
    svg.appendChild(strecket);

    var spetsen = document.createElementNS(NS, "path");
    spetsen.setAttribute("d", "M4.1 2.4 H7.6 V5.9");
    svg.appendChild(spetsen);

    return svg;
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

    // Töms först, så att en omritning med färsk data ersätter korten i stället
    // för att lägga nya under de gamla.
    if (grid) grid.textContent = "";
    if (gridLunch) gridLunch.textContent = "";

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
      var a = el("div", "card card-extern");

      a.appendChild(kortRubrik(r.name, r.url, true));
      a.appendChild(adressRad(r));

      // Kompakt rad i stället för ruta: en ruta här gör kortet mycket högre än
      // de utan anteckning, och då blir sektionen ojämn.
      if (r.note) a.appendChild(el("p", "note-rad", r.note));

      var foot = el("div", "card-foot");
      var lankText = el("p", "extern-lank", r.linkText || "Öppna menyn");
      lankText.appendChild(utPil());
      foot.appendChild(lankText);
      a.appendChild(foot);
      return a;
    }

    function card(r) {
      var menu = MENUS[r.id] || {};
      var a = el("div", "card" + (menu.status === "stale" ? " is-stale" : ""));

      a.appendChild(kortRubrik(r.name, "restaurang.html?id=" + encodeURIComponent(r.id)));
      a.appendChild(adressRad(r));

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
    if (r.area || r.walk) head.appendChild(adressRad(r));
    if (menu.priceInfo) head.appendChild(el("p", "price-info", menu.priceInfo));

    // Samma ritade pil som på Lunch-korten, så "lämnar sidan" ser likadant ut
    // överallt. Tidigare stod här ett annat piltecken.
    var link = el("a", "source", "Restaurangens egen sida");
    link.appendChild(utPil());
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

      // h2: dagarna och "Alltid på menyn" är syskon direkt under restaurangens
      // h1. Tidigare var dagarna h3 medan "Alltid på menyn" var h2, vilket lät
      // som om rutan rangordnades över veckans dagar.
      var h = el("h2", null, d.weekday || "");
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

    // Färgen på webbläsarens ram och telefonens statusfält. Läses ur paletten
    // i stället för att skrivas som en egen hexkod, så den aldrig kan glida
    // ifrån temat.
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      var yta = getComputedStyle(document.documentElement)
                  .getPropertyValue("--surface").trim();
      if (yta) meta.setAttribute("content", yta);
    }
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

  /* ---------- Färsk data utan att sidan laddas om ---------- */

  // Datafilerna laddas som vanliga <script> för att första ritningen ska ske
  // direkt, men de kommer då ur webbläsarens cache och kan vara upp till tio
  // minuter gamla. På en telefon där sidan ligger på hemskärmen finns inget
  // adressfält att ladda om från, så sidan hämtar dem själv på nytt i stället.
  var DATAFILER = ["data/restaurants.js", "data/menus.js"];
  var hamtarNu = false;

  function rita() {
    if (document.getElementById("grid")) renderHome();
    else if (document.getElementById("detail")) renderDetail();
  }

  // Filerna sätter window.RESTAURANTS och window.MENUS. De körs mot ett tomt
  // skal, så att den nya datan kan jämföras med den gamla innan något byts ut.
  function tolka(texter) {
    var skal = {};
    texter.forEach(function (text) { new Function("window", text)(skal); });
    return skal;
  }

  function hamtaFarsk() {
    if (hamtarNu) return;
    hamtarNu = true;

    Promise.all(DATAFILER.map(function (fil) {
      // no-store: cachen ska inte kunna ligga i vägen. Frågetecknet är ett
      // bälte till hängslena för webbläsare som ändå cachar.
      return fetch(fil + "?t=" + Date.now(), { cache: "no-store" })
        .then(function (svar) {
          if (!svar.ok) throw new Error(fil + " svarade " + svar.status);
          return svar.text();
        });
    })).then(function (texter) {
      var ny = tolka(texter);
      var forandrat =
        JSON.stringify(ny.MENUS) !== JSON.stringify(window.MENUS) ||
        JSON.stringify(ny.RESTAURANTS) !== JSON.stringify(window.RESTAURANTS);

      if (forandrat) {
        window.RESTAURANTS = ny.RESTAURANTS || [];
        window.MENUS = ny.MENUS || {};
        RESTAURANTS = window.RESTAURANTS;
        MENUS = (window.MENUS && window.MENUS.restaurants) || {};
        rita();
      }
    }).catch(function () {
      // Utan nät eller vid ett serverfel behåller vi det som redan visas.
      // Gammal meny är bättre än en tom sida.
    }).then(function () {
      hamtarNu = false;
    });
  }

  /* ---------- Start ---------- */

  initTema();
  rita();

  // Direkt vid öppning, och varje gång sidan tas fram igen. Det senare är det
  // som gör att appen på hemskärmen visar dagens meny utan att laddas om.
  hamtaFarsk();
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") hamtaFarsk();
  });
  window.addEventListener("focus", hamtaFarsk);
})();
