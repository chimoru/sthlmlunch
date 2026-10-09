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
  "fetched": "2026-10-09T06:00:00Z",
  "week": 41,
  "restaurants": {
    "man-in-the-moon": {
      "status": "ok",
      "fetched": "2026-10-09T06:00:00Z",
      "week": 41,
      "priceInfo": "Dagens Lunch 165 kr Inkl. salladsbuffé och kaffe · Serveras vardagar kl 11.00-14.00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Krispig kyckling",
              "desc": "med parmesancréme, ugnsbakad potatis och ruccola",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Baconlindad köttfärslimpa",
              "desc": "med gräddsås, lingon och kokt potatis",
              "price": "165 kr"
            },
            {
              "name": "Stekt strömming",
              "desc": "med potatismos, rårörda lingon och brynt smör",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Helstekt högrev",
              "desc": "med Café de Parissmör och potatisgratäng",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Scampipasta",
              "desc": "med pancetta, tomat, vitt vin, persilja och chili",
              "price": "165 kr"
            },
            {
              "name": "Dillbakad sejfilé",
              "desc": "med ägg- och persiljesås och kokt potatis",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Fläsknoisette",
              "desc": "med chilibearnaise, rödvinssås, haricots verts och friterad smashpotatis",
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
          "name": "Tortellini",
          "desc": "fylld med quinoa och spenat med het tomatsås",
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
        }
      ]
    },
    "sue-ellen": {
      "status": "ok",
      "fetched": "2026-10-09T06:00:00Z",
      "week": 41,
      "priceInfo": "Lunchpris Måndag - torsdag 160:- (13:00-14:00 150:- Take Away 145:-) · Fredagar 170:- (13:00-14:00 160:- Take Away 150:-) · 5/10 - 9/10 11:00 - 14:00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Helstekt tempererad fläskytterfilé",
              "desc": "café de parisås, rödlökstekt potatis (L)",
              "price": "160:-"
            },
            {
              "name": "Citronångad hokifilé",
              "desc": "brynt smör, pepparrot, picklade kantareller, spenat, potatis (L)",
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
              "name": "Fisk- & räkfylld flundra",
              "desc": "hummersås, crudité, vitlöksstompad potatis (Ä,L)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Timjan- & rosmarinstekt majskyckling",
              "desc": "citron- & dragonsås, örter, salladsskalsrostad potatis (L)",
              "price": "160:-"
            },
            {
              "name": "Basilika- & parmesanstekt sejloin",
              "desc": "ört- & romcrème, picklad lök, dillslungad potatis (L,Ä,G)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Ört- & fetaostfylld pannbiff",
              "desc": "löksky, citrongräddfil, råstekt potatis (L,Ä,G)",
              "price": "160:-"
            },
            {
              "name": "Chili- & vitlökshalstrad kapkummel",
              "desc": "vitvinsås, vannameiräkor, rucola, dill, potatis (L)",
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
              "name": "Grillad gös",
              "desc": "tomat, kapris, lök, citron, smör, mangoldskott, potatis (L)",
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
          "desc": "Krämig kastanjerisotto, vårlök, parmesan, rucola (L)",
          "price": ""
        },
        {
          "name": "Soulfood",
          "desc": "Nattbakat nötkött, pasta, marsalavin, grädde, spenat, parmesan (L,G)",
          "price": ""
        }
      ]
    },
    "adria": {
      "status": "ok",
      "fetched": "2026-10-09T06:00:00Z",
      "week": 41,
      "priceInfo": "Lunch tisdag - fredag 11:30-14:00 · Hembakad focaccia och olivolja ingår i lunchen · Dagens 165:- · Hela veckan 155:-",
      "days": [
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Färska tagliatelle med färsk tonfisk",
              "desc": "datterinitomater, kapris, taggiascheoliver, chili, vitlök.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Bräserad oxkind",
              "desc": "med potatismos, smörslungade morrötter, inlagd rödlök, skysås.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Risotto ai funghi",
              "desc": "Risotto på carnaroliris, blandad svamp, jordärtskockschips, Parmigiano.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Ragù d’agnello",
              "desc": "Färska tagliatelle med lammragu med morot, lök, selleri, tomat, rödvin, örter, Parmigiano.",
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
