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
  "fetched": "2026-09-04T10:51:14Z",
  "week": 36,
  "restaurants": {
    "man-in-the-moon": {
      "status": "ok",
      "fetched": "2026-09-04T10:51:14Z",
      "week": 36,
      "priceInfo": "Dagens Lunch 165 kr Inkl. salladsbuffé och kaffe · Serveras vardagar kl 11.00-14.00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Kycklinggryta Provencale",
              "desc": "med ris",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Pytt Bellman",
              "desc": "med saltgurka, rödbetor och stekt ägg",
              "price": "165 kr"
            },
            {
              "name": "Panerad flundra",
              "desc": "med räkröra, broccoli och färskpotatis",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Wallenbergare",
              "desc": "med potatispuré, brynt smör och rårörda lingon",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Oxfilépasta",
              "desc": "med skogssvamp, chili, grädde och rött vin",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Grillad secreto på svensk gårdsgris",
              "desc": "patatas bravas och salsa verde",
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
          "name": "Tortellini fylld med ricotta och spenat",
          "desc": "med basilikasås",
          "price": "165 kr"
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
      "fetched": "2026-09-04T10:51:14Z",
      "week": 36,
      "priceInfo": "Måndag–torsdag 160:- (13.00–14.00 150:-, Take Away 145:-) · Fredagar 170:- (13.00–14.00 160:-, Take Away 150:-) · 11.00–14.00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Örtgrillad opanerad fläskschnitzel",
              "desc": "marsalavin, salvia, grädde, parmesan pommes (L)",
              "price": "160:-"
            },
            {
              "name": "Dillhalstrad hokiefilé",
              "desc": "örtcrème, bouillabaissesky, spenat, potatis (L,Ä)",
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
              "name": "Flundra fylld med räk- & laxfärs",
              "desc": "hummersky, friterad purjolök, persiljeslungad potatis (L,Ä)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Helstekt tempererad fläskytterfilé",
              "desc": "choronsås, picklad lök, klyftpotatis (Ä)",
              "price": "160:-"
            },
            {
              "name": "Citronbakad kapkummel",
              "desc": "vitvinsås, räkor, dill, mangoldskott, gräslök, rostad potatis (L)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Nattbakad oxfransyska",
              "desc": "lök, champinjoner, rödvin, smetana, råstekt potatis (L)",
              "price": "160:-"
            },
            {
              "name": "Grillad gös",
              "desc": "kapris, lök, rödbeta, smör, dill, vårlök, potatis (L)",
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
              "name": "Kall inkokt lax",
              "desc": "dillkokt potatis, örtcrème, örter (Ä)",
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
          "desc": "Krämig jordärtskockssoppa, tomat, bruschetta, parmesan (L,G)",
          "price": ""
        },
        {
          "name": "Soulfood",
          "desc": "Texas xxx hot chili, tomat, lök, isberg, gräddfil, ost, vetetortilla (L,G)",
          "price": ""
        }
      ]
    },
    "adria": {
      "status": "ok",
      "fetched": "2026-09-04T10:51:14Z",
      "week": 36,
      "priceInfo": "Lunch tisdag - fredag 11:30-14:00 · Hembakad focaccia och olivolja ingår i lunchen · Dagens 165:- · Hela veckan 155:-",
      "days": [
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Färska Tagliatelle",
              "desc": "scampi, zucchini, citron, chili, vitlök",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Lasagne",
              "desc": "med nötfärsragu, tomat, bechamel, Parmigiano",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Fläskschnitzel",
              "desc": "med rostad potatis, slungad haricot verts, sardell-och kaprissmör",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Färska Tagliatelle",
              "desc": "med kräm på gröna ärtor, krispig griskind, ricotta salata",
              "price": "165:-"
            }
          ]
        }
      ],
      "always": [
        {
          "name": "Mums Mums",
          "desc": "färska Maccheroni med tryffelsalsiccia, svamp, lök, grädde, salvia, Parmigiano",
          "price": "155:-"
        },
        {
          "name": "Pomodoro e Burrata",
          "desc": "färska Tagliatelle med krämig tomatsås på datterinitomater, Parmigiano, basilika, burrata (VEG)",
          "price": "155:-"
        },
        {
          "name": "Insalata di Pollo",
          "desc": "blandsallad med datterinitomater, morot, rädisa, friterad kyckling, chilimajonäs, Parmigiano, krutonger",
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
