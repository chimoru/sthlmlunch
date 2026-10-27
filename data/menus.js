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
  "fetched": "2026-10-27T12:02:36Z",
  "week": 44,
  "restaurants": {
    "man-in-the-moon": {
      "status": "ok",
      "fetched": "2026-10-27T12:02:36Z",
      "week": 44,
      "priceInfo": "Dagens Lunch 165 kr Inkl. salladsbuffé och kaffe · Serveras vardagar kl 11.00-14.00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "BBQ-brisket",
              "desc": "med majssalsa och klyftpotatis",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Stekt fläsk",
              "desc": "med löksås",
              "price": "165 kr"
            },
            {
              "name": "Fiskgryta",
              "desc": "med handskalade räkor",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Persiljejärpar",
              "desc": "med gräddsås, rårörda lingon och potatismos",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Rigatonipasta",
              "desc": "med högrevsragu och soltorkade tomater",
              "price": "165 kr"
            },
            {
              "name": "Rödingfile",
              "desc": "med saffransstuvade rotsaker och smörslungad potatis",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Ostpanerad fläsknoisette",
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
          "price": "210 kr"
        },
        {
          "name": "Höstsvamprisotto",
          "desc": "med hyvlad parmesan och ruccola",
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
      "fetched": "2026-10-27T12:02:36Z",
      "week": 44,
      "priceInfo": "Lunchpris Måndag - torsdag 160:- (13:00-14:00 150:- Take Away 145:-) · Fredagar 170:- (13:00-14:00 160:- Take Away 150:-) · 26/10 - 30/10 11:00 - 14:00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Persiljegrillad fläskfilé",
              "desc": "lök- & kaprissky, örtsmör, parmesan pommes (L)",
              "price": "160:-"
            },
            {
              "name": "Gräddstekt hokifilé",
              "desc": "brynt smör, dill, sparris- & spenatslungad potatis (L)",
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
              "name": "Flundra fylld med räk- & fiskfärs",
              "desc": "skaldjursås, julienne, vårlök, potatis (Ä,G)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Grillad lövbiff",
              "desc": "vitlök- & chilibearnaise, tomatsallad, örtstekt potatis (Ä)",
              "price": "160:-"
            },
            {
              "name": "Halstrad regnbågslax",
              "desc": "citronsmörsås, frästa champinjoner, gräslök, stompad potatis (L)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Ört- & vitlöksfylld pannbiff",
              "desc": "kantarellsås, örter, provençale potatis (L,Ä,G)",
              "price": "160:-"
            },
            {
              "name": "Sue Ellens Fish 'n' chips",
              "desc": "curryremoulad, mashed peas (Ä,G)",
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
              "name": "Grillad gösfilé",
              "desc": "räkhollandaise, sugar sanps, spenat, citronkokt potatis (Ä)",
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
          "desc": "Rödbet- & fetaost risotto, parmesan, ruccola (L)",
          "price": ""
        },
        {
          "name": "Soulfood",
          "desc": "Sue Ellens Pytt i panna, ägg, rödbetor, saltgurka (Ä)",
          "price": ""
        }
      ]
    },
    "adria": {
      "status": "ok",
      "fetched": "2026-10-27T12:02:36Z",
      "week": 44,
      "priceInfo": "Lunch tisdag - fredag 11:30-14:00 · Hembakad focaccia och olivolja ingår i lunchen · Dagens 165:- · Hela veckan 155:-",
      "days": [
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Tagliatelle alle vongole",
              "desc": "Tagliatelle med vongolemusslor från Adriatiska havet, chili, vitlök, perilja.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Cotoletta di maiale",
              "desc": "Panerad fläskschnitzel med parmaskinka, basmatiris, tomatsås, kålsallad.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Tagliatelle al tonno fresco",
              "desc": "Tagliatelle med tonfisk, tomat, chili, vitlök, kapis, taggiascheoliver, citronzest.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Guancia di bue",
              "desc": "Bräserad oxkind, potatispuré med Parmigiano, baby morötter, skysås.",
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
