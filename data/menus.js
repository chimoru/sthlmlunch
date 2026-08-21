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
 * Innehållet nedan är PLATSHÅLLARE tills första riktiga hämtningen körts.
 */
window.MENUS = {
  "fetched": "2026-08-21T06:04:00Z",
  "week": 34,
  "restaurants": {
    "platshallare-1": {
      "status": "ok",
      "fetched": "2026-08-21T06:04:00Z",
      "priceInfo": "Dagens lunch 135 kr inkl. salladsbuffé, bröd och kaffe",
      "days": [
        {
          "weekday": "Måndag",
          "date": "2026-08-17",
          "dishes": [
            {
              "name": "Fläskkarré",
              "desc": "med gräddsås, lingon och pressgurka",
              "price": "135 kr",
              "tags": [
                "kött"
              ]
            },
            {
              "name": "Rotfruktsbiff",
              "desc": "med örtdressing",
              "price": "135 kr",
              "tags": [
                "veg"
              ]
            }
          ]
        },
        {
          "weekday": "Tisdag",
          "date": "2026-08-18",
          "dishes": [
            {
              "name": "Torskrygg",
              "desc": "med brynt smör och dillpotatis",
              "price": "145 kr",
              "tags": [
                "fisk"
              ]
            },
            {
              "name": "Linsgryta",
              "desc": "med kokosmjölk och koriander",
              "price": "135 kr",
              "tags": [
                "vegan"
              ]
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "date": "2026-08-19",
          "dishes": [
            {
              "name": "Köttbullar",
              "desc": "med potatismos, gräddsås och lingon",
              "price": "135 kr",
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
              "name": "Ärtsoppa och pannkakor",
              "desc": "med sylt och grädde",
              "price": "125 kr",
              "tags": [
                "kött"
              ]
            },
            {
              "name": "Halloumisallad",
              "desc": "med granatäpple och mynta",
              "price": "139 kr",
              "tags": [
                "veg",
                "glutenfri"
              ]
            }
          ]
        },
        {
          "weekday": "Fredag",
          "date": "2026-08-21",
          "dishes": [
            {
              "name": "Fish and chips",
              "desc": "med remouladsås och citron",
              "price": "149 kr",
              "tags": [
                "fisk"
              ]
            },
            {
              "name": "Svamprisotto",
              "desc": "med parmesan och timjan",
              "price": "139 kr",
              "tags": [
                "veg"
              ]
            }
          ]
        }
      ]
    },
    "platshallare-2": {
      "status": "ok",
      "fetched": "2026-08-21T06:04:00Z",
      "priceInfo": "Veckans lunch 129 kr, med efterrätt 149 kr",
      "days": [
        {
          "weekday": "Måndag",
          "date": "2026-08-17",
          "dishes": [
            {
              "name": "Kycklinggryta",
              "desc": "med curry och jasminris",
              "price": "129 kr",
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
              "name": "Pasta pesto",
              "desc": "med soltorkade tomater och pinjenötter",
              "price": "129 kr",
              "tags": [
                "veg"
              ]
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "date": "2026-08-19",
          "dishes": []
        },
        {
          "weekday": "Torsdag",
          "date": "2026-08-20",
          "dishes": [
            {
              "name": "Laxpudding",
              "desc": "med smält smör",
              "price": "135 kr",
              "tags": [
                "fisk"
              ]
            }
          ]
        },
        {
          "weekday": "Fredag",
          "date": "2026-08-21",
          "dishes": [
            {
              "name": "Hamburgare 150 g",
              "desc": "med cheddar och pommes",
              "price": "155 kr",
              "tags": [
                "kött"
              ]
            },
            {
              "name": "Falafelrulle",
              "desc": "med hummus och picklad rödlök",
              "price": "129 kr",
              "tags": [
                "vegan"
              ]
            }
          ]
        }
      ]
    },
    "platshallare-3": {
      "status": "stale",
      "fetched": "2026-08-20T06:03:00Z",
      "priceInfo": "Dagens 119 kr",
      "days": [
        {
          "weekday": "Torsdag",
          "date": "2026-08-20",
          "dishes": [
            {
              "name": "Korv Stroganoff",
              "desc": "med ris",
              "price": "119 kr",
              "tags": [
                "kött"
              ]
            }
          ]
        }
      ]
    }
  }
}
