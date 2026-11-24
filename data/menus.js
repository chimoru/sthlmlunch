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
  "fetched": "2026-11-24T17:29:12Z",
  "week": 48,
  "restaurants": {
    "man-in-the-moon": {
      "status": "ok",
      "fetched": "2026-11-24T17:29:12Z",
      "week": 48,
      "priceInfo": "Dagens Lunch 165 kr Inkl. salladsbuffé och kaffe · Serveras vardagar kl 11.00-14.00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Kycklinggryta",
              "desc": "med höstsvamp och ris",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Pytt Bellman",
              "desc": "med rödbetor, saltgurka och stekt ägg",
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
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Lasagne al forno",
              "desc": "med ruccolasallad",
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
              "name": "Dillbakad torsk",
              "desc": "med äggsås, pepparrot och kokt potatis",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Schnitzel",
              "desc": "med rödvinssås, persiljesmör och stekt potatis",
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
          "name": "Ribollitagryta",
          "desc": "med krutonger och hyvlad parmesan",
          "price": "165 kr"
        }
      ]
    },
    "sue-ellen": {
      "status": "ok",
      "fetched": "2026-11-24T17:29:12Z",
      "week": 48,
      "priceInfo": "Lunchpris Måndag - torsdag 160:- (13:00-14:00 150:- Take Away 145:-) · Fredagar 170:- (13:00-14:00 160:- Take Away 150:-) · 23/11 - 27/11 11:00 - 14:00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Peppargrillad opanerad fläskschnitzel",
              "desc": "gräddkokt majs, tabascostekt potatis (L)",
              "price": "160:-"
            },
            {
              "name": "Dillbakad hokifilé",
              "desc": "vitvinsås, ägg, pepparrot, vårlöksslungad potatis (L)",
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
              "name": "Flundra, fylld med lax- & parmesan",
              "desc": "krämig kräftsås, rödlök, dill, citronkrossad potatis (Ä,L)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Chili- & vitlöksstekt majskyckling",
              "desc": "rödvin, chilibearnaise, persiljerostad potatis, ärtskott (Ä)",
              "price": "160:-"
            },
            {
              "name": "Fänkålssotad kapkummel",
              "desc": "vitt vin, grädde, räkor, dillkokt potatis (L)",
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
              "name": "Mie de pain-stekt sej",
              "desc": "skagencrème, ruccola, buljongkokt potatis (Ä)",
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
              "name": "Örtstekt lax",
              "desc": "hummerhollandaise, sparris, spenat, potatis (Ä)",
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
          "desc": "Pasta, grönsaker, tomat, vitlök, grädde, parmesan (L,G)",
          "price": ""
        },
        {
          "name": "SOULFOOD",
          "desc": "Teriyakimarinerad kyckling, crispsallad, edamame, sushiris, yuzumajonnäs (Ä)",
          "price": ""
        }
      ]
    },
    "adria": {
      "status": "ok",
      "fetched": "2026-11-24T17:29:12Z",
      "week": 48,
      "priceInfo": "Lunch tisdag - fredag 11:30-14:00 · Hembakad focaccia och olivolja ingår i lunchen · Dagens 165:- · Hela veckan 155:-",
      "days": [
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Risotto",
              "desc": "på Carnaroliris, kräm på gröna ärtor, ricotta salata, knippmorötter, piemontesiska hasselnötter.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Scaloppine",
              "desc": "Bankat kalvkött stekt med mjöl, vin, citron. Serveras med chili- och vitlöksslungad savojkål, potatispuré.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Parmigiana di melanzane",
              "desc": "Auberginegratäng med fior di latte, San Marzano tomatsås, basilika, Parmigiano.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Panerad sejfilé",
              "desc": "konfiterad potatis, Datterinitomater, taggiascheoliver, kapris, örter.",
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
        },
        {
          "name": "Fettuccine al Tartufo Bianco",
          "desc": "Hemgjorda fettuccine, smör, Parmigiano, vit tryffel.",
          "price": "365:-"
        }
      ]
    },
    "bastard-burgers": {
      "status": "ok",
      "manual": true,
      "priceInfo": "Dagens lunch 141 kr, dubbel 171 kr · Pommes och dryck ingår",
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
