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
 *
 * Menyerna hämtas automatiskt varje morgon och hamnar i data/menus.js.
 * Den filen ska du aldrig redigera för hand.
 */
window.RESTAURANTS = [
  {
    id: "platshallare-1",
    name: "Exempelkrogen",
    url: "https://example.com/lunch",
    area: "Kungsgatan 12",
    walk: "4 min",
    note: ""
  },
  {
    id: "platshallare-2",
    name: "Bistro Provisorisk",
    url: "https://example.com/veckans-lunch",
    area: "Sveavägen 44",
    walk: "7 min",
    note: "Byt ut mot en riktig restaurang."
  },
  {
    id: "platshallare-3",
    name: "Lunchhörnan",
    url: "https://example.com/meny",
    area: "Vasagatan 3",
    walk: "10 min",
    note: ""
  }
]
