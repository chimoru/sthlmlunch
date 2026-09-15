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
  "fetched": "2026-09-15T11:20:14Z",
  "week": 38,
  "restaurants": {
    "man-in-the-moon": {
      "status": "ok",
      "fetched": "2026-09-15T11:20:14Z",
      "week": 38,
      "priceInfo": "Dagens Lunch 165 kr Inkl. salladsbuffé och kaffe · Serveras vardagar kl 11.00-14.00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Bräserad högrev",
              "desc": "med svartvinbärssås, kantareller och potatispuré",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Pytt Bellman",
              "desc": "med stekt ägg, saltgurka och rödbetor",
              "price": "165 kr"
            },
            {
              "name": "Fiskgryta",
              "desc": "med saffran, kräftstjärtar, krutonger och örtaioli",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Wallenbergare",
              "desc": "med lingongräddsås, råstekt blomkål och potatismos",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Krämig kycklingpasta",
              "desc": "med pesto, cocktailtomater och parmesan",
              "price": "165 kr"
            },
            {
              "name": "Panerad flundra",
              "desc": "med fänkålssallad, remouladsås och kokt potatis",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Schnitzel",
              "desc": "med bearnaisesmör, rödvinssky och råstekt potatis",
              "price": "165 kr"
            }
          ]
        }
      ],
      "always": [
        {
          "name": "Köttbullar",
          "desc": "med potatispuré, gräddsås och rårörda lingon",
          "price": "210 kr"
        },
        {
          "name": "Pasta",
          "desc": "med pesto, cocktailtomater och burrata",
          "price": "165 kr"
        },
        {
          "name": "Raggmunk",
          "desc": "med stekt fläsk och rårörda lingon",
          "price": "210 kr"
        },
        {
          "name": "Koljafilé",
          "desc": "med handskalade räkor, brynt smör, pepparrot och dillpotatis",
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
      "fetched": "2026-09-15T11:20:14Z",
      "week": 38,
      "priceInfo": "Lunchpris Måndag - torsdag 160:- (13:00-14:00 150:- Take Away 145:-) · Fredagar 170:- (13:00-14:00 160:- Take Away 150:-) · 14/9 - 18/9 11:00 - 14:00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Chili- & vitlöksgrillad schnitzel (opanerad)",
              "desc": "Rosépepparsås, lökchutney, dillpommes (L)",
              "price": "160:-"
            },
            {
              "name": "Örtångad hokifilé",
              "desc": "brynt smör, pepparrot, dill, räkor, potatis (L)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Wallenbergare",
              "desc": "rödvinssky, rårörda lingon, potatispuré, små gröna ärter (L,Ä,G)",
              "price": "160:-"
            },
            {
              "name": "Flundra fylld med kräft- & laxfärs",
              "desc": "saffran, grädde, vitt vin, dill, lök, citronkrossad potatis (Ä,L)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Grillad lövbiff",
              "desc": "chipotlebearnaise, tomatsallad, persiljestekt potatis (Ä)",
              "price": "160:-"
            },
            {
              "name": "Chimichurristekt kapkummel",
              "desc": "vitvinsås, spenat, picklad silverlök",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Klassisk pannbiff",
              "desc": "gräddsås, lingon, gurka, potatispuré (L,Ä,G)",
              "price": "160:-"
            },
            {
              "name": "Bouillabaissepocherad sejrygg",
              "desc": "örtaioli, rucola, buljongkokt potatis (Ä)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Helstekt tempererad oxfilé",
              "desc": "bearnaisesås, marinerade bönor, pommes frites (Ä) — varje fredag",
              "price": "170:-"
            },
            {
              "name": "Gravad lax",
              "desc": "dillstuvad potatis, hovmästarsås",
              "price": "170:-"
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
          "desc": "Pasta, svamp, vitlök, grädde, cream fraiche, spenat, parmesan (L,G)",
          "price": ""
        },
        {
          "name": "Soulfood",
          "desc": "Biff i röd currysås, picklad gurka, jasminris",
          "price": ""
        }
      ]
    },
    "adria": {
      "status": "ok",
      "fetched": "2026-09-15T11:20:14Z",
      "week": 38,
      "priceInfo": "Lunch tisdag - fredag 11:30-14:00 · Hembakad focaccia och olivolja ingår i lunchen · Dagens 165:- · Hela veckan 155:-",
      "days": [
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "All´Amatriciana",
              "desc": "Färska Maccheroni, San Marzano tomatsås, rostad griskind, svartpeppar, pecorino romano.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Halstrad gulfenad tonfisk",
              "desc": "ugnsbakad fänkål, puttanescasås på tomat, kapris, taggiascheoliver, sardell.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Alla Nerano",
              "desc": "Spaghetti, friterad zucchini, provoloneost, Parmigiano.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Cotoletta Bolognese",
              "desc": "Fläskschnitzel med parmaskinka, parmigiano. Serveras med konfiterade Datterinitomater, friterad basilika.",
              "price": "165:-"
            }
          ]
        }
      ],
      "always": [
        {
          "name": "Mums Mums",
          "desc": "Färska Maccheroni med tryffelsalsiccia, svamp, lök, grädde, salvia, Parmigiano.",
          "price": "155:-"
        },
        {
          "name": "Pomodoro e Burrata",
          "desc": "Färska Tagliatelle med krämig tomatsås på datterinitomater, Parmigiano, basilika, burrata (VEG)",
          "price": "155:-"
        },
        {
          "name": "Insalata di Pollo",
          "desc": "Blandsallad med datterinitomater, morot, rädisa, friterad kyckling, chilimajonäs, Parmigiano, krutonger.",
          "price": "155:-"
        }
      ]
    },
    "bastard-burgers": {
      "status": "ok",
      "manual": true,
      "priceInfo": "Dagens lunch 135 kr, dubbel 160 kr · Pommes och dryck ingår",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Texas Bacon & BBQ",
              "desc": "Barbequeburgare med svenskt nötkött, bacon, rödlök, sallad, dubbel ost, BBQ-sås och chipotledressing.",
              "price": ""
            }
          ]
        },
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "London Truffle",
              "desc": "Bistroburgare med svenskt nötkött, tryffelmayo, pepperjackost, ost, picklad rödlök och sallad.",
              "price": ""
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "The Bastard Classic Cheese",
              "desc": "Klassisk cheeseburgare med svenskt nötkött, pickles, dubbel ost, mayo, senap, ketchup och gul lök.",
              "price": ""
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "New York Original",
              "desc": "Vår variant av gatuköksburgaren med svenskt nötkött, tomat, sallad, dubbel ost, Bastard originaldressing och rödlök.",
              "price": ""
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Luleå Cheese",
              "desc": "Norrländsk cheeseburgare med svenskt nötkött, dubbel ost, rödlök och gurk- & jalapeñodressing.",
              "price": ""
            }
          ]
        }
      ]
    }
  }
}
