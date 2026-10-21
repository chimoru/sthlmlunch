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
  "fetched": "2026-10-21T11:40:09Z",
  "week": 43,
  "restaurants": {
    "man-in-the-moon": {
      "status": "ok",
      "fetched": "2026-10-21T11:40:09Z",
      "week": 43,
      "priceInfo": "Dagens Lunch 165 kr Inkl. salladsbuffé och kaffe · Serveras vardagar kl 11.00-14.00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Grillad kycklinglårfilé",
              "desc": "med svamprisotto och gremolata",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Pannbiff",
              "desc": "med stekt lök, gräddsås och rosmarinpotatis",
              "price": "165 kr"
            },
            {
              "name": "Fiskgryta",
              "desc": "med handskalade räkor, aioli och krutonger",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Schnitzel",
              "desc": "med rödvinssås, chilismör och råstekt potatis",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Pytt i panna",
              "desc": "med stekt ägg, rödbetssallad och saltgurka",
              "price": "165 kr"
            },
            {
              "name": "Sprödbakad torsk",
              "desc": "med skagenröra, fänkålssallad och kokt potatis",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Rödvinsbrässerad shortribs",
              "desc": "med potatispuré och ljummen paprikasallad",
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
          "name": "Ribollitagryta",
          "desc": "med krutonger och parmesan",
          "price": "165 kr"
        },
        {
          "name": "Raggmunk",
          "desc": "med stekt fläsk och rårörda lingon",
          "price": "210 kr"
        },
        {
          "name": "Gravad lax",
          "desc": "med hovmästarsås och dillstuvad potatis",
          "price": "210 kr"
        }
      ]
    },
    "sue-ellen": {
      "status": "ok",
      "fetched": "2026-10-21T11:40:09Z",
      "week": 43,
      "priceInfo": "Lunchpris Måndag - torsdag 160:- (13:00-14:00 150:- Take Away 145:-) · Fredagar 170:- (13:00-14:00 160:- Take Away 150:-) · 19/10 - 23/10 11:00 - 14:00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Persiljegrillad helfläskfilé",
              "desc": "grönpepparsås, bakad tomat, purjolöksrostad potatis (L)",
              "price": "160:-"
            },
            {
              "name": "Citronbakad Hokifilé",
              "desc": "Nouillyprat-sås, räkor, dill, pepparrot, dill och potatis (L)",
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
              "name": "Kräft och laxfylld flundra",
              "desc": "hummersky, friterad lök och citronstompad potatis (Ä,L)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Chili och vitlöksstekt majskyckling",
              "desc": "mild röd currysås, koriander/vårlök och jasminris",
              "price": "160:-"
            },
            {
              "name": "Dillhalstrad kapkummel",
              "desc": "vitt vin, smör, spetskål, örtaioli, tomatkokt potatis (Ä,L)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Bacon och cheddarfylld pannbiff",
              "desc": "dragon och sherryvinägersås, cheezy fries (Ä, G, L)",
              "price": "160:-"
            },
            {
              "name": "Örtbakad sejrygg",
              "desc": "saffransgräddsås, broccoli, spenat, potatis (L)",
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
              "name": "Thai fishcakes",
              "desc": "glasnudelsallad, isaanmajo, koriander (Ä, G)",
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
          "desc": "Krämig jordärtskocksoppa, svampbruschetta, parmesan (G, L)",
          "price": ""
        },
        {
          "name": "Soulfood",
          "desc": "Pad krapao kryddad kyckling, krispig sallad, glasnudlar, srirachamajo (Ä, G)",
          "price": ""
        }
      ]
    },
    "adria": {
      "status": "ok",
      "fetched": "2026-10-21T11:40:09Z",
      "week": 43,
      "priceInfo": "Lunch tisdag - fredag 11:30-14:00 · Hembakad focaccia och olivolja ingår i lunchen · Dagens 165:- · Hela veckan 155:-",
      "days": [
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Delizie",
              "desc": "Gratinerade pastastubbar med mortadella, rökt scamorza, zucchini, tomatbechamel, Parmigiano.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Bräserad lammgryta",
              "desc": "med potatis, morot, lök, selleri, tomat, örter, rödvin.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Rostad butternutrisotto",
              "desc": "på Carnaroli ris, ricotta, amaretti.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Cacio, pepe e cozze",
              "desc": "Färska Tagliatelle med pcorino romano, blåmusslor, svartpeppar, vitt vin.",
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
