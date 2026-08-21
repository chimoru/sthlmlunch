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

  var TAG_LABELS = {
    veg: "Vegetariskt", vegan: "Veganskt", fisk: "Fisk",
    "kött": "Kött", glutenfri: "Glutenfritt"
  };

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

  // "Fredag 21 augusti" — bara veckodagen får stor bokstav, som svenskan vill ha det.
  function longToday() {
    var s = new Intl.DateTimeFormat("sv-SE", {
      timeZone: TZ, weekday: "long", day: "numeric", month: "long"
    }).format(new Date());
    return s.charAt(0).toUpperCase() + s.slice(1);
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

  // Restauranger glömmer ibland uppdatera sin sida. Anger de ett veckonummer
  // kan vi upptäcka det istället för att visa förra veckans meny som dagens.
  function staleWeekWarning(menu) {
    if (!menu || typeof menu.week !== "number") return null;
    var now = isoWeek(todayISO());
    if (menu.week === now) return null;
    return "Restaurangen anger vecka " + menu.week + " — nu är det vecka " + now +
           ". Menyn kan vara gammal.";
  }

  function dishMatchesFilter(dish, filter) {
    if (!filter) return true;
    return (dish.tags || []).indexOf(filter) !== -1;
  }

  function renderDish(dish) {
    var li = el("li");
    var head = el("div");
    if (dish.price) head.appendChild(el("span", "dish-price", dish.price));
    head.appendChild(el("span", "dish-name", dish.name || "Namnlös rätt"));
    (dish.tags || []).forEach(function (tag) {
      if (TAG_LABELS[tag]) head.appendChild(el("span", "tag", TAG_LABELS[tag]));
    });
    li.appendChild(head);
    if (dish.desc) li.appendChild(el("span", "dish-desc", dish.desc));
    return li;
  }

  /* ---------- Startsidan ---------- */

  function renderHome() {
    var grid = document.getElementById("grid");
    var todayEl = document.getElementById("today");
    var stampEl = document.getElementById("stamp");
    var emptyEl = document.getElementById("empty");

    todayEl.textContent = longToday();
    stampEl.textContent = stampText(window.MENUS && window.MENUS.fetched);

    if (!RESTAURANTS.length) {
      emptyEl.hidden = false;
      return;
    }

    var activeFilter = null;
    buildFilters();
    draw();

    function draw() {
      grid.textContent = "";
      RESTAURANTS.forEach(function (r) {
        grid.appendChild(card(r));
      });
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

      var weekWarning = staleWeekWarning(menu);
      if (weekWarning) a.appendChild(el("p", "status", weekWarning));

      var day = findToday(menu.days);
      var dishes = (day && day.dishes ? day.dishes : []).filter(function (d) {
        return dishMatchesFilter(d, activeFilter);
      });

      if (dishes.length) {
        var ul = el("ul", "dishes");
        dishes.forEach(function (d) { ul.appendChild(renderDish(d)); });
        a.appendChild(ul);
      } else if (day && day.dishes && day.dishes.length && activeFilter) {
        a.appendChild(el("p", "no-dish", "Inget som matchar filtret idag"));
      } else if (menu.days) {
        a.appendChild(el("p", "no-dish", "Ingen meny för idag"));
      }

      var foot = el("div", "card-foot");
      foot.appendChild(el("p", "price-info", menu.priceInfo || "Se hela veckomenyn →"));
      a.appendChild(foot);
      return a;
    }

    function buildFilters() {
      var box = document.getElementById("filters");
      var present = {};
      Object.keys(MENUS).forEach(function (id) {
        (MENUS[id].days || []).forEach(function (d) {
          (d.dishes || []).forEach(function (dish) {
            (dish.tags || []).forEach(function (t) { if (TAG_LABELS[t]) present[t] = true; });
          });
        });
      });

      var tags = Object.keys(present);
      if (!tags.length) return;

      tags.forEach(function (tag) {
        var b = el("button", null, TAG_LABELS[tag]);
        b.setAttribute("aria-pressed", "false");
        b.addEventListener("click", function () {
          activeFilter = activeFilter === tag ? null : tag;
          Array.prototype.forEach.call(box.querySelectorAll("button"), function (other) {
            other.setAttribute("aria-pressed", String(other === b && activeFilter === tag));
          });
          draw();
        });
        box.appendChild(b);
      });
    }
  }

  /* ---------- Veckomeny-sidan ---------- */

  function renderDetail() {
    var root = document.getElementById("detail");
    var id = new URLSearchParams(location.search).get("id");
    var r = RESTAURANTS.filter(function (x) { return x.id === id; })[0];

    root.textContent = "";

    if (!r) {
      root.appendChild(el("p", "empty", "Hittar ingen restaurang med det namnet."));
      return;
    }

    document.title = r.name + " — Sthlm Lunch";
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

    var weekWarning = staleWeekWarning(menu);
    if (weekWarning) root.appendChild(el("p", "status", weekWarning));

    if (menu.status === "stale") {
      root.appendChild(el("p", "status", "Kunde inte läsas vid senaste försöket. " + stampText(menu.fetched) + "."));
    } else if (menu.status === "error" || !menu.days || !menu.days.length) {
      root.appendChild(el("p", "status", "Ingen meny kunde läsas. Öppna restaurangens egen sida ovan."));
    }

    var todayDay = findToday(menu.days);
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

  /* ---------- Start ---------- */

  if (document.getElementById("grid")) renderHome();
  else if (document.getElementById("detail")) renderDetail();
})();
