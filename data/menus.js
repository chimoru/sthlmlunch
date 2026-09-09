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
  "fetched": "2026-09-09T10:56:53Z",
  "week": 37,
  "restaurants": {
    "man-in-the-moon": {
      "status": "ok",
      "fetched": "2026-09-09T10:56:53Z",
      "week": 37,
      "priceInfo": "Dagens Lunch 165 kr Inkl. salladsbuffé och kaffe · Serveras vardagar kl 11.00-14.00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Citronkryddad kycklinglårfilé",
              "desc": "med svamprisotto och basilikaolja",
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
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Köttfärsbiff",
              "desc": "med stekt lök, rödvinssky och potatisstomp",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Pasta",
              "desc": "med lammragu, kantareller och soltorkade tomater",
              "price": "165 kr"
            },
            {
              "name": "Pepparbakad laxfilé",
              "desc": "med hollandaisesås, sparris och färskpotatis",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Grillad fläskkarré",
              "desc": "med bearnaise, chimichurri och klyftpotatis",
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
          "name": "Svamprisotto",
          "desc": "med sotad mozzarella och basilikaolja",
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
      "fetched": "2026-09-09T10:56:53Z",
      "week": 37,
      "priceInfo": "Måndag–torsdag 160:- (13.00–14.00 150:-, Take Away 145:-) · Fredagar 170:- (13.00–14.00 160:-, Take Away 150:-) · 11.00–14.00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Grillad opanerad fläskschnitzel",
              "desc": "baconsky, tabascosmör, rödlöksstekt potatis (L)",
              "price": "160:-"
            },
            {
              "name": "Vitvinspocherad hokifilé",
              "desc": "ägg, purjolök, grädde, spenat, potatis (L)",
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
              "desc": "chilispetsad hummersås, spetskål, nudelcrisp, gräslök, krossad potatis (L,Ä,G)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Rosmarinstekt majskyckling",
              "desc": "dragon- & citrongräddsås, ärtskott, basilikastekt potatis (L)",
              "price": "160:-"
            },
            {
              "name": "Dillhalstrad sejrygg",
              "desc": "tomatsky, broccoli, gräddfil, citronkokt potatis (L)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Biff á la Lindström",
              "desc": "rödvin, saltgurka, persiljesmör, råstekt potatis (L,Ä,G)",
              "price": "160:-"
            },
            {
              "name": "Pestobakad kapkummel",
              "desc": "vitvinsås, räkor, rucola, potatis (L)",
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
              "name": "Dillångad nilabborre",
              "desc": "cava, grädde, sparris, tomatrisotto (L)",
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
          "desc": "Krämig skogssvampsrisotto, parmesan, rucola (L)",
          "price": ""
        },
        {
          "name": "Soulfood",
          "desc": "Pestomarinerad skaldjurssallad, saffransaioli (Ä,L)",
          "price": ""
        }
      ]
    },
    "adria": {
      "status": "ok",
      "fetched": "2026-09-09T10:56:53Z",
      "week": 37,
      "priceInfo": "Lunch tisdag - fredag 11:30-14:00 · Hembakad focaccia och olivolja ingår i lunchen · Dagens 165:- · Hela veckan 155:-",
      "days": [
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Gricia",
              "desc": "Carbonara utan ägg. Spaghetti, rostad griskind, pecorino romano, svartpeppar",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Hemgjorda köttbullar",
              "desc": "marinarasås, potatismos, gröna ärtor",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Parmigiana di Melanzane",
              "desc": "Gratinerad auberginegratäng, mozzarella, San Marzano-tomatsås, Parmigiano, basilika",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Delizie",
              "desc": "Gratinerad pastastubbar fyllda med kokt skinka, Emmenthaler ost, zucchini. Serveras med tomat- och bechamel sås",
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
