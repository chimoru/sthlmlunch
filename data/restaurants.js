/*
 * DIN RESTAURANGLISTA — den här filen redigerar vi för hand.
 *
 * En post per restaurang. Fält:
 *   id    Kort namn utan mellanslag, å, ä eller ö. Används i länken. MÅSTE vara unikt.
 *   name  Namnet som visas på sidan.
 *   url   Länken till sidan med VECKOMENYN (inte startsidan, om de skiljer sig).
 *   area  Valfritt. Adress eller område.
 *   walk  Valfritt. Gångtid från kontoret, t.ex. "4 min".
 *   note  Valfritt. Egen anteckning som visas på restaurangens sida.
 *   hint  Valfritt. Instruktion till AUTOMATIKEN om var menyn finns, t.ex. att
 *         den ligger bakom en länk eller i en PDF. Visas inte för besökare.
 *         Ange aldrig en direktlänk till en PDF som byts ut varje vecka —
 *         peka url mot sidan där länken sitter, så hittas rätt fil varje gång.
 *
 * Menyerna hämtas automatiskt varje morgon och hamnar i data/menus.js.
 * Den filen ska du aldrig redigera för hand.
 */
window.RESTAURANTS = [
  {
    id: "man-in-the-moon",
    name: "Man in the Moon",
    url: "https://maninthemoon.se/dagens-lunch/",
    area: "Tegnérgatan 2C",
    walk: "",
    note: ""
  },
  {
    id: "sue-ellen",
    name: "Sue Ellen",
    url: "https://www.sue-ellen.se/",
    area: "Tulegatan 17",
    walk: "",
    note: "Lunch 11.00–14.00. Billigare efter 13.00.",
    hint: "Menyn ligger INTE på sidan. Längre ner finns en länk med texten " +
          "\"Lunchmeny v.NN\" som pekar på en PDF hos cdn.prod.website-files.com. " +
          "Filnamnet byts varje vecka, så leta upp länken på nytt varje gång. " +
          "PDF:ens textlager är trasigt (små bokstäver blir frågetecken) — ladda " +
          "ner filen och läs den med Read, som renderar sidan som bild."
  }
]
