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
  "fetched": "2026-10-13T13:47:10Z",
  "week": 42,
  "restaurants": {
    "man-in-the-moon": {
      "status": "ok",
      "fetched": "2026-10-13T13:47:10Z",
      "week": 42,
      "priceInfo": "Dagens Lunch 165 kr Inkl. salladsbuffé och kaffe · Serveras vardagar kl 11.00-14.00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Kycklinggryta",
              "desc": "med höstsvamp och grönsaksris",
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
              "name": "Mjukbakad lax",
              "desc": "med limehollandaise, sparris och gaffelmosad potatis",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Wallenbergare",
              "desc": "med gräddsås, lingon, ärtor och potatispuré",
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
              "name": "Panerad torsk",
              "desc": "med curryremoulad, broccoli och kokt potatis",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Nattbakad högrev",
              "desc": "med choronsås, rödvinssky, löksalsa och potatisstomp",
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
          "name": "Koljafilé",
          "desc": "med handskalade räkor, brynt smör, pepparrot och dillpotatis",
          "price": "210 kr"
        }
      ]
    },
    "sue-ellen": {
      "status": "ok",
      "fetched": "2026-10-13T13:47:10Z",
      "week": 42,
      "priceInfo": "Lunchpris Måndag - torsdag 160:- (13:00-14:00 150:- Take Away 145:-) · Fredagar 170:- (13:00-14:00 160:- Take Away 150:-) · 12/10 - 16/10 11:00 - 14:00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Örtgrillad fläskschnitzel (opanerad)",
              "desc": "ratatouille, grana padano, dillrostad potatis (L)",
              "price": "160:-"
            },
            {
              "name": "Vitvinspocherad hokifilé",
              "desc": "körvel, vitt vin, grädde, picklad lök, spenatslungad potatis (L)",
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
              "name": "Skaldjursfärserad flundra",
              "desc": "krämig bouillabaisse, mangoldskott, persilja, potatis (Ä,L)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Helstekt fläskytterfilé",
              "desc": "rött vin, vitlöksbearnaise, parmesanpommes (Ä,L)",
              "price": "160:-"
            },
            {
              "name": "Chimichurristekt sej",
              "desc": "vitvinsås, purjolök, kräftstjärtar, ruccola, potatis (L)",
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
              "name": "Örthalstrad kapkummel",
              "desc": "saffran, tomat, grädde, lök, dill, vårlök, potatis (L)",
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
              "name": "Chili- & vitlöksfrästa vannameiräkor",
              "desc": "potatiscaesarsallad, paprikaaioli (Ä,L)",
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
          "desc": "Pasta, medelhavsgrönt, tomat, grädde, parmesan, ruccola (L,G)",
          "price": ""
        },
        {
          "name": "Soulfood",
          "desc": "Sue Ellens Gulasch, potatis, smetana, gurka",
          "price": ""
        }
      ]
    },
    "adria": {
      "status": "ok",
      "fetched": "2026-10-13T13:47:10Z",
      "week": 42,
      "priceInfo": "Lunch tisdag - fredag 11:30-14:00 · Hembakad focaccia och olivolja ingår i lunchen · Dagens 165:- · Hela veckan 155:-",
      "days": [
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Parmigiana di melanzane",
              "desc": "Gratinerad aubergine med San Marzano tomatsås, fior di latte, basilika, Parmigiano.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Polpette",
              "desc": "Köttbullar på nöt och fläsk i tomatsås, örter, krämig polenta, gröna ärtor.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Lasagna di mare",
              "desc": "Fisk- och skaldjurslasagne, skaldjursbechamel, citron zest.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Porchetta",
              "desc": "Rullad grillad fläsksida med örter, potatismos, haricot verts, skysås.",
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
