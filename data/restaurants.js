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
    id: "man-in-the-moon",
    name: "Man in the Moon",
    url: "https://maninthemoon.se/dagens-lunch/",
    area: "Tegnérgatan 2C",
    walk: "",
    note: "Lunch serveras vardagar 11.00–14.00."
  }
]
