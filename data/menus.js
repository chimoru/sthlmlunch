/*
 * MENYERNA — skrivs automatiskt av GitHub Actions varje vardagsmorgon.
 * Redigera inte för hand; dina ändringar skrivs över nästa morgon.
 *
 * status per restaurang:
 *   "ok"     hämtningen lyckades
 *   "stale"  hämtningen misslyckades, men vi visar förra hämtningens meny
 *   "error"  vi har ingen meny alls, bara länken visas
 *
 * Allt efter likhetstecknet nedan MÅSTE vara giltig JSON — inga kommentarer,
 * inga citattecken-lösa nycklar, inget kommatecken efter sista posten.
 * Det är så tools/validate.py kan kontrollera filen innan sidan publiceras.
 *
 * Saknar en dag datum betyder att restaurangen bara skriver ut veckodagar.
 * Sidan matchar då på veckodagsnamn istället — vi hittar inte på datum.
 */
window.MENUS = {
  "fetched": "2026-08-21T14:53:41Z",
  "week": 34,
  "restaurants": {
    "man-in-the-moon": {
      "status": "ok",
      "fetched": "2026-08-21T14:53:41Z",
      "week": 34,
      "priceInfo": "Dagens Lunch 165 kr Inkl. salladsbuffé och kaffe · Serveras vardagar kl 11.00-14.00",
      "days": [
        {
          "weekday": "Måndag",
          "date": "2026-08-17",
          "dishes": [
            {
              "name": "Krispig kycklinglårfilé",
              "desc": "med ugnsbakad potatis, parmesancréme och tomatsallad",
              "price": "165 kr",
              "tags": [
                "kött"
              ]
            }
          ]
        },
        {
          "weekday": "Tisdag",
          "date": "2026-08-18",
          "dishes": [
            {
              "name": "Mjukbakad torskfilé",
              "desc": "med fräst broccoli, ägg- och persiljesås, räkor och färskpotatis",
              "price": "165 kr",
              "tags": [
                "fisk"
              ]
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "date": "2026-08-19",
          "dishes": [
            {
              "name": "Wallenbergare",
              "desc": "med brynt smör, rårörda lingon och potatispuré",
              "price": "165 kr",
              "tags": [
                "kött"
              ]
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "date": "2026-08-20",
          "dishes": [
            {
              "name": "Bräserat lammlägg",
              "desc": "med örtkryddad potatisstomp, bordelaisesås och picklade rotsaker",
              "price": "165 kr",
              "tags": [
                "kött"
              ]
            }
          ]
        },
        {
          "weekday": "Fredag",
          "date": "2026-08-21",
          "dishes": [
            {
              "name": "Marinerad fläsknoisette",
              "desc": "med råstekt potatis, haricots verts och chilibearnaise",
              "price": "165 kr",
              "tags": [
                "kött"
              ]
            }
          ]
        }
      ],
      "always": [
        {
          "name": "Köttbullar",
          "desc": "med potatispuré, gräddsås och rårörda lingon",
          "price": "195 kr",
          "tags": [
            "kött"
          ]
        },
        {
          "name": "Raggmunk",
          "desc": "med stekt fläsk och rårörda lingon",
          "price": "210 kr",
          "tags": []
        },
        {
          "name": "Gravad lax",
          "desc": "med dillstuvad potatis och hovmästarsås",
          "price": "210 kr",
          "tags": [
            "fisk"
          ]
        },
        {
          "name": "Hamburgare",
          "desc": "med provoloneost, fänkålsslaw och pommes",
          "price": "230 kr",
          "tags": [
            "kött"
          ]
        },
        {
          "name": "Pizza Bianca",
          "desc": "",
          "price": "",
          "tags": []
        },
        {
          "name": "Pizza Calabria",
          "desc": "",
          "price": "",
          "tags": []
        }
      ]
    }
  }
}
