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
  "fetched": "2026-08-22T22:19:09Z",
  "week": 34,
  "restaurants": {
    "man-in-the-moon": {
      "status": "ok",
      "fetched": "2026-08-22T22:19:09Z",
      "week": 35,
      "priceInfo": "Dagens Lunch 165 kr Inkl. salladsbuffé och kaffe · Serveras vardagar kl 11.00-14.00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Chipotleglaserad kalv tri-tip steak",
              "desc": "med rostad potatis och majsröra",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Kycklingfilé",
              "desc": "med tomatrisotto och gremolata",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Pytt Bellman",
              "desc": "med rödbetor, inlagd gurka och stekt ägg",
              "price": "165 kr"
            },
            {
              "name": "Fish and Chips",
              "desc": "med tartarsås och gröna ärtor",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Tagliatelle med högrevsragu",
              "desc": "soltorkade tomater och parmesan",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Ostpanerad schnitzel",
              "desc": "med krämig tomatsås och grönsaksris",
              "price": "165 kr"
            }
          ]
        }
      ],
      "always": [
        {
          "name": "Köttbullar",
          "desc": "med potatispuré, gräddsås och rårörda lingon",
          "price": "195 kr"
        },
        {
          "name": "Raggmunk",
          "desc": "med stekt fläsk och rårörda lingon",
          "price": "210 kr"
        },
        {
          "name": "Gravad lax",
          "desc": "med dillstuvad potatis och hovmästarsås",
          "price": "210 kr"
        },
        {
          "name": "Hamburgare",
          "desc": "med provoloneost, fänkålsslaw och pommes",
          "price": "230 kr"
        },
        {
          "name": "Pizza Bianca",
          "desc": "",
          "price": ""
        },
        {
          "name": "Pizza Calabria",
          "desc": "",
          "price": ""
        }
      ]
    },
    "sue-ellen": {
      "status": "ok",
      "fetched": "2026-08-22T22:19:09Z",
      "week": 35,
      "priceInfo": "Måndag–torsdag 156:- (13.00–14.00 146:-, Take Away 139:-) · Fredagar 163:- (13.00–14.00 153:-, Take Away 145:-) · 11.00–14.00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Örtgrillad opanerad fläskschnitzel",
              "desc": "lökgräddsky, kål- & vitlöksrostad potatis (L)",
              "price": "156:-"
            },
            {
              "name": "Halstrad kolja",
              "desc": "krispig chorizo, brynt smör, vårlökskokt potatis (L)",
              "price": "156:-"
            }
          ]
        },
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Wallenbergare",
              "desc": "rödvinssky, rårörda lingon, potatispuré, små gröna ärter (L,Ä,G)",
              "price": "156:-"
            },
            {
              "name": "Flundra fylld med fisk- & skaldjursfärs",
              "desc": "skaldjursås, dill, lök, citronkokt potatis (Ä,L)",
              "price": "156:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Chili- & vitlöksstekt majskyckling",
              "desc": "citron, vitt vin, grädde, purjolök, dirty fries (L)",
              "price": "156:-"
            },
            {
              "name": "Persiljesotad kapkummel",
              "desc": "tabascosmör, rött vin, lökrostad potatis",
              "price": "156:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Pannbiff fylld med bacon & ost",
              "desc": "dragonvinägersås, örter, råstekt potatis (L,Ä,G)",
              "price": "156:-"
            },
            {
              "name": "Örtbakad sejrygg",
              "desc": "vitvinsås, räkor, dill, spenat, tomatkokt potatis (L)",
              "price": "156:-"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Helstekt tempererad oxfilé",
              "desc": "bearnaisesås, marinerade bönor, pommes frites (Ä) — varje fredag",
              "price": "163:-"
            },
            {
              "name": "Krämig laxröra på toast",
              "desc": "sallad, tempererat ägg (Ä)",
              "price": "163:-"
            }
          ]
        }
      ],
      "always": [
        {
          "name": "Fisksoppa",
          "desc": "het aioli, vitlöksbröd (G,Ä)",
          "price": ""
        },
        {
          "name": "Vegetarisk",
          "desc": "pasta, pesto, champinjoner, grädde, parmesan, rucola (L,G)",
          "price": ""
        },
        {
          "name": "Soulfood",
          "desc": "tandoori chicken, nudelwok, grönsaker, koriander, purjolök (Ä,G)",
          "price": ""
        }
      ]
    },
    "adria": {
      "status": "ok",
      "fetched": "2026-08-22T22:19:09Z",
      "week": 35,
      "priceInfo": "Lunch tisdag - fredag 11:30-14:00 · Hembakad focaccia och olivolja ingår i lunchen · Dagens 165:- · Hela veckan 155:- · Ekologisk Glutenfri pasta + 20 SEK",
      "days": [
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Panerad koljafilé",
              "desc": "rostad potatis och morot, grön ärtkräm, citron",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Bräserad oxkind",
              "desc": "potatismos, karamelliserad lök, skysås",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Gnocchi 4 formaggi",
              "desc": "Potatisgnocchi med sås på fyra ostar, valnötter, päron",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Vongole",
              "desc": "Spaghetti, vongolemusslor från Adriatiska havet, chili, vitlök, persilja",
              "price": "165:-"
            }
          ]
        }
      ],
      "always": [
        {
          "name": "Mums Mums",
          "desc": "färska Sedanini med tryffelsalsiccia, svamp, lök, grädde, salvia, Parmigiano",
          "price": "155:-"
        },
        {
          "name": "Pomodoro e Burrata",
          "desc": "färska Tagliatelle med krämig tomatsås på datterinitomater, Parmigiano, basilika, burrata",
          "price": "155:-"
        },
        {
          "name": "Insalata di Pollo",
          "desc": "blandsallad med datterinitomater, morot, rädisa, friterad kyckling, chilimajonäs, Parmigiano, krutonger",
          "price": "155:-"
        }
      ]
    }
  }
}
