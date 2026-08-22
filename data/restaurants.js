/*
 * DIN RESTAURANGLISTA — den här filen redigerar vi för hand.
 *
 * Fält:
 *   id       Kort namn utan mellanslag, å, ä eller ö. MÅSTE vara unikt.
 *   name     Namnet som visas på sidan.
 *   url      Länken. Se "section" nedan för vad den ska peka på.
 *   section  Vilken del av startsidan restaurangen hamnar i:
 *
 *            "veckomeny" (standard om fältet utelämnas)
 *              Restaurangen publicerar en veckomeny som vi hämtar automatiskt.
 *              Kortet visar dagens rätt och leder till vår egen veckomenysida.
 *              url ska peka på sidan där veckomenyn finns.
 *
 *            "lunch"
 *              Ingen veckomeny att hämta. Kortet leder direkt till url, i en ny
 *              flik. url ska peka på deras menysida eller beställningssida.
 *              Ingenting hämtas automatiskt för dessa.
 *
 *   area     Valfritt. Adress eller område.
 *   walk     Valfritt. Gångtid från kontoret, t.ex. "4 min".
 *   note     Valfritt. Anteckning som visas för besökaren.
 *   linkText Valfritt, bara för section "lunch". Texten på kortets länk.
 *            Standard: "Öppna menyn".
 *   hint     Valfritt, bara för section "veckomeny". Instruktion till
 *            AUTOMATIKEN om var menyn finns. Visas inte för besökare.
 *            Ange aldrig en direktlänk till en PDF som byts varje vecka —
 *            peka url mot sidan där länken sitter.
 */
window.RESTAURANTS = [
  {
    id: "man-in-the-moon",
    name: "Man in the Moon",
    url: "https://maninthemoon.se/dagens-lunch/",
    section: "veckomeny",
    area: "Tegnérgatan 2C",
    walk: "",
    note: ""
  },
  {
    id: "sue-ellen",
    name: "Sue Ellen",
    url: "https://www.sue-ellen.se/",
    section: "veckomeny",
    area: "Tulegatan 17",
    walk: "",
    note: "Lunch 11.00–14.00. Billigare efter 13.00.",
    hint: "Menyn ligger INTE på sidan. Längre ner finns en länk med texten " +
          "\"Lunchmeny v.NN\" som pekar på en PDF hos cdn.prod.website-files.com. " +
          "Filnamnet byts varje vecka, så leta upp länken på nytt varje gång. " +
          "PDF:ens textlager är trasigt (små bokstäver blir frågetecken) — ladda " +
          "ner filen och läs den med Read, som renderar sidan som bild."
  },
  {
    id: "fullmoon-wok",
    name: "Fullmoon Wok",
    url: "https://order.openpos.tech/fullmoonwok/",
    section: "lunch",
    area: "Sveavägen 84",
    walk: "",
    note: "",
    linkText: "Beställ och se menyn"
  },
  {
    id: "the-good-gringo",
    name: "The Good Gringo",
    url: "https://www.thegoodgringo.se/our-menu",
    section: "lunch",
    area: "Kungstensgatan 14",
    walk: "",
    note: "",
    linkText: "Se menyn"
  },
  {
    id: "babel-deli",
    name: "Babel Deli",
    url: "https://qopla.com/restaurant/babel-deli---vasastan/qEQQeBrjz8/order",
    section: "lunch",
    area: "Kungstensgatan 33",
    walk: "",
    note: "",
    linkText: "Beställ och se menyn"
  }
]
