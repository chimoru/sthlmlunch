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
 *   walk     Valfritt. Gångavstånd från kontoret, t.ex. "~250 m". Räknas ut
 *            med ./tools/avstand.sh "Gatunamn 12".
 *   note     Valfritt. Anteckning som visas för besökaren.
 *   linkText Valfritt, bara för section "lunch". Texten på kortets länk.
 *            Standard: "Öppna menyn".
 *   manual   Valfritt, bara för section "veckomeny". true betyder att menyn är
 *            fast och lagd för hand. Automatiken hämtar då INTE restaurangen och
 *            rör inte dess post i menus.js. Använd för ställen med en veckomeny
 *            som aldrig ändras.
 *   orderUrl Valfritt, bara för section "veckomeny". Extra länk på kortet, t.ex.
 *            till beställning. Kortet i övrigt leder fortfarande till veckomenyn.
 *   orderText Valfritt. Texten på orderUrl-länken. Standard: "Beställ".
 *   placeId  Valfritt. Googles plats-id för restaurangen. Behövs bara om
 *            kartlänken hamnar på fel ställe — namn plus adress räcker normalt.
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
    walk: "~290 m",
    note: ""
  },
  {
    id: "sue-ellen",
    name: "Sue Ellen",
    url: "https://www.sue-ellen.se/",
    section: "veckomeny",
    area: "Tulegatan 17",
    walk: "~180 m",
    note: "Lunch 11.00–14.00. Billigare efter 13.00.",
    hint: "Menyn ligger INTE på sidan. Längre ner finns en länk med texten " +
          "\"Lunchmeny v.NN\" som pekar på en PDF hos cdn.prod.website-files.com. " +
          "Filnamnet byts varje vecka, så leta upp länken på nytt varje gång. " +
          "PDF:ens textlager är trasigt (små bokstäver blir frågetecken) — ladda " +
          "ner filen och läs den med Read, som renderar sidan som bild."
  },
  {
    id: "adria",
    name: "Adria",
    url: "https://www.adriaristorante.se/menyer",
    section: "veckomeny",
    area: "Tulegatan 10",
    walk: "~170 m",
    note: "Lunch tisdag–fredag. Ingen måndagslunch.",
    hint: "Menyn ligger INTE på sidan. Under rubriken MENYER finns en länk med " +
          "texten \"LUNCH\" som pekar på en PDF, t.ex. /s/Lunch-V-34-2026.pdf. " +
          "Veckonumret står i filnamnet och byts varje vecka, så leta upp länken " +
          "på nytt varje gång. Ladda ner PDF:en och läs den med Read. " +
          "PDF:en har två delar: \"DAGENS\" är dagens rätter per veckodag, " +
          "\"HELA VECKAN\" hör till fältet always. Hoppa över lunchdessert, " +
          "lunchvin samt dryck och kaffe — det är inte lunchrätter. " +
          "Lunch serveras tisdag till fredag; ta inte med måndag."
  },
  {
    id: "bastard-burgers",
    name: "Bastard Burgers",
    url: "https://bastardburgers.com/se/meny/",
    orderUrl: "https://order.bastardburgers.com/se/sv-se",
    orderText: "Se meny och beställ",
    section: "veckomeny",
    manual: true,
    area: "Rehnsgatan 22",
    walk: "~240 m",
    note: "Närmast: Vasastan"
  },
  {
    id: "fullmoon-wok",
    name: "Fullmoon Wok",
    url: "https://order.openpos.tech/fullmoonwok/",
    section: "lunch",
    area: "Sveavägen 84",
    walk: "~250 m",
    note: "",
    linkText: "Beställ och se menyn"
  },
  {
    id: "the-good-gringo",
    name: "The Good Gringo",
    url: "https://www.thegoodgringo.se/our-menu",
    section: "lunch",
    area: "Kungstensgatan 14",
    walk: "~170 m",
    note: "",
    linkText: "Se menyn"
  },
  {
    id: "taameya",
    name: "Ta'ameya",
    url: "https://taameya.qopla.com/restaurant/taameya---t%C3%A9gnergatan/qJNKB22dq3/order",
    section: "lunch",
    area: "Tegnérgatan 18",
    walk: "~310 m",
    note: "",
    linkText: "Beställ och se menyn"
  },
  {
    id: "holy-kebab",
    name: "Holy Kebab",
    url: "https://qopla.com/restaurant/holy-kebab---vasastan/qQAZwgRZYW/order",
    section: "lunch",
    area: "Odengatan 45",
    walk: "~410 m",
    note: "",
    linkText: "Beställ och se menyn"
  },
  {
    id: "reggev-hummus",
    name: "Reggev Hummus",
    url: "https://yabie.online/reggevginga/en?deliveryType=takeAway&store=2#9d4f7805-9a57-4ace-b89b-a58403717c14",
    section: "lunch",
    area: "Döbelnsgatan 51",
    walk: "~90 m",
    note: "",
    linkText: "Beställ och se menyn"
  },
  {
    id: "akoya-sushi",
    name: "Akoya Sushi",
    url: "https://qopla.com/restaurant/akoya-sushi/qbg99gZ7rA/order",
    section: "lunch",
    area: "Döbelnsgatan 51",
    walk: "~90 m",
    note: "",
    linkText: "Beställ och se menyn"
  },
  {
    id: "babel-deli",
    name: "Babel Deli",
    url: "https://qopla.com/restaurant/babel-deli---vasastan/qEQQeBrjz8/order",
    section: "lunch",
    area: "Kungstensgatan 33",
    walk: "~140 m",
    note: "",
    linkText: "Beställ och se menyn"
  }
]
