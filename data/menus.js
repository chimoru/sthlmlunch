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
  "fetched": "2026-11-09T15:59:17Z",
  "week": 46,
  "restaurants": {
    "man-in-the-moon": {
      "status": "ok",
      "fetched": "2026-11-09T15:59:17Z",
      "week": 46,
      "priceInfo": "Dagens Lunch 165 kr Inkl. salladsbuffé och kaffe · Serveras vardagar kl 11.00-14.00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Kyckling Bourguignon",
              "desc": "med champinjoner och potatispuré",
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
              "name": "Fiskgryta",
              "desc": "med saffran, räkor och krutonger",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Gulaschgryta",
              "desc": "med smetana och ris",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Ärtsoppa",
              "desc": "med pannkakor",
              "price": "165 kr"
            },
            {
              "name": "Teriyaki-lax",
              "desc": "med ponzudressing, kimchi och ris",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Grillad fläskkarré",
              "desc": "med rostad paprika och grönpepparsås",
              "price": "165 kr"
            }
          ]
        }
      ],
      "always": [
        {
          "name": "Gravad lax",
          "desc": "med hovmästarsås och dillstuvad potatis",
          "price": "210 kr"
        },
        {
          "name": "Köttbullar",
          "desc": "med potatispuré, gräddsås och rårörda lingon",
          "price": "210 kr"
        },
        {
          "name": "Raggmunk",
          "desc": "med stekt fläsk och rårörda lingon",
          "price": "210 kr"
        },
        {
          "name": "Tortellini",
          "desc": "fylld med spenat och ricotta med caponata",
          "price": "165 kr"
        }
      ]
    },
    "sue-ellen": {
      "status": "ok",
      "fetched": "2026-11-09T15:59:17Z",
      "week": 46,
      "priceInfo": "Lunchpris Måndag - torsdag 160:- (13:00-14:00 150:- Take Away 145:-) · Fredagar 170:- (13:00-14:00 160:- Take Away 150:-) · 9/11 - 13/11 11:00 - 14:00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Helgrillad fläskfilé",
              "desc": "bbq-sås, ranchdressing, cheesy fries (L,Ä)",
              "price": "160:-"
            },
            {
              "name": "Dillhalstrad hokifilé",
              "desc": "romssås, picklad lök, ruccola, persiljeslungad potatis (Ä)",
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
              "name": "Flundra, fylld med räk- & laxfärs",
              "desc": "krämig bouillabaisse, lök, dill, citronkrossad potatis (Ä,L)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Chili- & vitlöksstekt majskyckling",
              "desc": "khao soicocosås, friterade nudlar, pickles, jasminris (Ä)",
              "price": "160:-"
            },
            {
              "name": "Citronångad sej",
              "desc": "örtagårdsgräddsås, räkor, spenat, potatis (L)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Pancetta- taleggiofylld pannbiff",
              "desc": "soltorkad tomat, basilika, grädde, örtstekt potatis (L,Ä,G)",
              "price": "160:-"
            },
            {
              "name": "Misobakad nilaborre",
              "desc": "teriyakisås, limegräddfil, salladslök, picklad lök, jasminris (L)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "(varje fredag) Helstekt tempererad oxfilé",
              "desc": "bearnaisesås, marinerade bönor, pommes frites (Ä)",
              "price": "170:-"
            },
            {
              "name": "Grillad gös",
              "desc": "vitt vin, grädde, druvor, mangoldskott, citronslungad potatis (L)",
              "price": "170:-"
            }
          ]
        }
      ],
      "always": [
        {
          "name": "FISKSOPPA",
          "desc": "het aioli, vitlöksbröd (G,Ä)",
          "price": ""
        },
        {
          "name": "VEGETARISK",
          "desc": "Dill- & tomatkryddad linssallad rostad blomkål, fetaost yoghurt (L)",
          "price": ""
        },
        {
          "name": "SOULFOOD",
          "desc": "Texas xxx hot chili, gräddfil, isberg, tomat, lök, ost, vetetortilla (L,G)",
          "price": ""
        }
      ]
    },
    "adria": {
      "status": "ok",
      "fetched": "2026-11-09T15:59:17Z",
      "week": 46,
      "priceInfo": "Lunch tisdag - fredag 11:30-14:00 · Hembakad focaccia och olivolja ingår i lunchen · Dagens 165:- · Hela veckan 155:-",
      "days": [
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Ragù Bolognese",
              "desc": "Färska Tagliatelle med nötfärsragu, tomat, morot, lök, selleri, vin, Parmigiano.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Panerad koljafilé",
              "desc": "klyftpotatis, sauterad grönkål, chili, vitlök, tartarsås.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Risotto Pescatora",
              "desc": "Tomatrisotto på Carnaroliris, calamari, vongole, scampi, vitlök, persilja.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Guancia",
              "desc": "Bräserad oxkind, rödvinssky, blomkålspuré, Parmigiano, haricot verts, morot.",
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
