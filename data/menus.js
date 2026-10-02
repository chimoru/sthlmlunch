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
  "fetched": "2026-10-02T06:00:00Z",
  "week": 40,
  "restaurants": {
    "man-in-the-moon": {
      "status": "ok",
      "fetched": "2026-10-02T06:00:00Z",
      "week": 40,
      "priceInfo": "Dagens Lunch 165 kr Inkl. salladsbuffé och kaffe · Serveras vardagar kl 11.00-14.00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Cajunkryddad kycklingfilé",
              "desc": "med risotto och rökt paprikaolja",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Lasagne al forno",
              "desc": "med parmesan och ruccolasallad",
              "price": "165 kr"
            },
            {
              "name": "Rimmad lax",
              "desc": "med dillstuvad potatis och hovmästarsås",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Viltwallenbergare",
              "desc": "med potatispuré, smörstekta kantareller och lingonsky",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Pytt Bellman",
              "desc": "med stekt ägg, rödbetor och saltgurka",
              "price": "165 kr"
            },
            {
              "name": "Fisk- och skaldjursgryta",
              "desc": "med saffran, fänkål och rouille",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Stekt oxfilé",
              "desc": "med bearnaise, rödvinssky, tomatsallad och friterad potatis",
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
          "name": "Pasta arrabbiata",
          "desc": "med burrata och basilika",
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
      "status": "stale",
      "fetched": "2026-10-01T06:00:00Z",
      "week": 40,
      "priceInfo": "Lunchpris Måndag - torsdag 160:- (13:00-14:00 150:- Take Away 145:-) · Fredagar 170:- (13:00-14:00 160:- Take Away 150:-) · 28/9 - 2/10 11:00 - 14:00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Örtgrillad opanerad fläskschnitzel",
              "desc": "cognacgräddsås, gelé, persiljestekt potatis (L)",
              "price": "160:-"
            },
            {
              "name": "Halstrad hokifilé",
              "desc": "romsås, picklad lök, spenadslungad potatis (Ä,L)",
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
              "name": "Musslor- & laxfärserad flundra",
              "desc": "örtgräddsås, dill, lök, parmesankrossad potatis (Ä,L)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Nattbakad oxfransyska",
              "desc": "gräddsky, brysselkål, ärtskott, provençalsk potatis (L)",
              "price": "160:-"
            },
            {
              "name": "Gräddstekt sejrygg",
              "desc": "rostad tomatsky, purjolök, dill, basilika, potatis (L)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Parmesan- & baconfylld pannbiff",
              "desc": "salvia- & marsalagräddsås, örtrostad potatis (Ä,L,G)",
              "price": "160:-"
            },
            {
              "name": "Chili- & vitlöksstekt kapkummel",
              "desc": "vitvinsås, räkor, pepparrot, dillkrossad potatis (L)",
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
              "name": "Halstrad havsöring",
              "desc": "dillhollandaise, sugar snaps, rucola, potatis (L)",
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
          "desc": "Krämig potatis- & purjolökssoppa, bruschetta, parmesan (L,G)",
          "price": ""
        },
        {
          "name": "Soulfood",
          "desc": "Pulled pork, cobbsallad, tomat, picklad lök, isberg, srirashamayo, soft buns (G)",
          "price": ""
        }
      ]
    },
    "adria": {
      "status": "stale",
      "fetched": "2026-10-01T06:00:00Z",
      "week": 40,
      "priceInfo": "Lunch tisdag - fredag 11:30-14:00 · Hembakad focaccia och olivolja ingår i lunchen · Dagens 165:- · Hela veckan 155:-",
      "days": [
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Frutti di mare",
              "desc": "Tagliatelle, calamari, blåmusslor, vongole, scampi, tomatsås, chili, vitlök, persilja.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Bräserad fläskkarré",
              "desc": "grönpepparsås, pommes frites, tomatsallad med rödlök.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Gnocchi al ragù d´anatra",
              "desc": "Potatisgnocchi med ankragu, apelsin, lök, rosmarin, vittvin, Parmigiano.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Frittura",
              "desc": "Friterad fisk och scampi, rosmarinrostad potatis, örtsås, gröna ärtor, citron.",
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
