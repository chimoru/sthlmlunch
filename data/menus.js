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
  "fetched": "2026-09-25T11:24:37Z",
  "week": 39,
  "restaurants": {
    "man-in-the-moon": {
      "status": "ok",
      "fetched": "2026-09-25T11:24:37Z",
      "week": 39,
      "priceInfo": "Dagens Lunch 165 kr Inkl. salladsbuffé och kaffe · Serveras vardagar kl 11.00-14.00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Boeuf Bourguignon",
              "desc": "med potatispuré",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Stekt fläsk",
              "desc": "med löksås och kokt potatis",
              "price": "165 kr"
            },
            {
              "name": "Teriyaki-lax",
              "desc": "med sesam-sojadressing, pak choi och jasminris",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Persiljejärpar",
              "desc": "med champinjonsås, rårörda lingon och kokt potatis",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Tagliatelle",
              "desc": "med högrevsragu, soltorkade tomater och parmesan",
              "price": "165 kr"
            },
            {
              "name": "Fiskwallenbergare",
              "desc": "med skagenröra, brynt smör och potatismos",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Schnitzel Cordon Bleu",
              "desc": "med rödvinssås och klyftpotatis",
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
          "name": "Rotfruktsraggmunk",
          "desc": "med champinjonstuvning",
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
      "fetched": "2026-09-25T11:24:37Z",
      "week": 39,
      "priceInfo": "Lunchpris Måndag - torsdag 160:- (13:00-14:00 150:- Take Away 145:-) · Fredagar 170:- (13:00-14:00 160:- Take Away 150:-) · 21/9 - 25/9 11:00 - 14:00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Helstekt fläskfilé",
              "desc": "kantarellsås, picklad lök, parmesanpommes (L)",
              "price": "160:-"
            },
            {
              "name": "Dillångad hokifilé",
              "desc": "vitvinsås, ägg, räkor, vårlökspotatis (L,Ä)",
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
              "desc": "hummersås, friterad purjolök, dill, citronkokt potatis (Ä,L)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "BBQ-stekt majskyckling",
              "desc": "soltorkad tomat, rödvin, gräddfil, country fries (L)",
              "price": "160:-"
            },
            {
              "name": "Gremolatahalstrad kapkummel",
              "desc": "vitt vin, grädde, zucchini, tomatkokt potatis (L)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Sue Ellens kalv i dillsås",
              "desc": "rostade rotfrukter, pressgurka (L)",
              "price": "160:-"
            },
            {
              "name": "Citronpocherad sejrygg",
              "desc": "vitt vin, tomat, basilika, parmesanslungad potatis (L)",
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
              "name": "Lättrimmad bakad hälleflundra",
              "desc": "hollandaisesås, grön sparris, spenat, potatis (Ä)",
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
          "desc": "Medelhavskryddad tomat- & linssallad, raita, rostad blomkål (L)",
          "price": ""
        },
        {
          "name": "Soulfood",
          "desc": "Texas hot chili, majssalsa, gräddfil, ost, isberg, vetetortilla (L,G)",
          "price": ""
        }
      ]
    },
    "adria": {
      "status": "ok",
      "fetched": "2026-09-25T11:24:37Z",
      "week": 39,
      "priceInfo": "Lunch tisdag - fredag 11:30-14:00 · Hembakad focaccia och olivolja ingår i lunchen · Dagens 165:- · Hela veckan 155:-",
      "days": [
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Ragù",
              "desc": "Färska Tagliatelle med nöt- och kalvkött, morot, lök, selleri, tomat, örter, Parmigiano.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Tomatbaserad fisk- och skaldjurgryta",
              "desc": "med potatis, zucchini, krutonger, vild fänkål.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Saltimbocca",
              "desc": "Bankat kalvkött med parmaskinka, stekt i smör och salvia. Serveras med rostad potatis, kokt morot.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Färska Tagliatelle",
              "desc": "blandad svamp, smör, salvia, vitlök, Parmigiano.",
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
