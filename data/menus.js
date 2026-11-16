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
  "fetched": "2026-11-16T15:34:24Z",
  "week": 47,
  "restaurants": {
    "man-in-the-moon": {
      "status": "ok",
      "fetched": "2026-11-16T15:34:24Z",
      "week": 47,
      "priceInfo": "Dagens Lunch 165 kr Inkl. salladsbuffé och kaffe · Serveras vardagar kl 11.00-14.00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Panerad kyckling",
              "desc": "med parmesandressing, ruccola och ugnsbakad potatis",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "Bratwurst",
              "desc": "med surkål, senapssky och potatispuré",
              "price": "165 kr"
            },
            {
              "name": "Panerad torsk",
              "desc": "med curryremoulad, fänkål och kokt potatis",
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
              "name": "Högrevschili",
              "desc": "med avokadosalsa, picklad rödlök och bönris",
              "price": "165 kr"
            },
            {
              "name": "Stekt lax",
              "desc": "med citronsås, sparris och kokt potatis",
              "price": "165 kr"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Fläsknoisette",
              "desc": "med chilibearnaise, padronpaprika och klyftpotatis",
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
          "name": "Linsgryta",
          "desc": "med halloumi och pumpa",
          "price": "165 kr"
        }
      ]
    },
    "sue-ellen": {
      "status": "ok",
      "fetched": "2026-11-16T15:34:24Z",
      "week": 47,
      "priceInfo": "Lunchpris Måndag - torsdag 160:- (13:00-14:00 150:- Take Away 145:-) · Fredagar 170:- (13:00-14:00 160:- Take Away 150:-) · 16/11 - 20/11 11:00 - 14:00",
      "days": [
        {
          "weekday": "Måndag",
          "dishes": [
            {
              "name": "Grillad opanerad fläskschnitzel",
              "desc": "marsalavin, svamp, grädde, haricots verts, rödlöksstekt potatis (L)",
              "price": "160:-"
            },
            {
              "name": "Dillhalstrad hokifilé",
              "desc": "brynt smör, knaprigt bacon, vårlök, spenat, tomatkokt potatis (L)",
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
              "name": "Medelhavsskryddad flundra, fylld med laxfärs",
              "desc": "hummersås, parmesankrossad potatis (L,Ä)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Nattbakad högrev",
              "desc": "rödvin, grädde, timjan, rosmarin, gelé, råstekt potatis (L)",
              "price": "160:-"
            },
            {
              "name": "Gräddstekt nilaborre",
              "desc": "vitt vin, smör, spetskål, dill, potatis (L)",
              "price": "160:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Grillad slaktarbiff",
              "desc": "löksky, persiljesmör, paprikastekt potatis (L)",
              "price": "160:-"
            },
            {
              "name": "Pestobakad kapkummel",
              "desc": "vitvinssås, broccoli, parmesankrossad potatis (L)",
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
              "name": "Sue Ellen toast skagen",
              "desc": "en liten sallad (Ä,G)",
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
          "desc": "Krämig potatis- & purjolökssoppa, ost- & vitlöksbröd (L,G)",
          "price": ""
        },
        {
          "name": "SOULFOOD",
          "desc": "Fläskfiléwok, äggnudlar, grönsaker, purjolök (G,Ä)",
          "price": ""
        }
      ]
    },
    "adria": {
      "status": "ok",
      "fetched": "2026-11-16T15:34:24Z",
      "week": 47,
      "priceInfo": "Lunch tisdag - fredag 11:30-14:00 · Hembakad focaccia och olivolja ingår i lunchen · Dagens 165:- · Hela veckan 155:-",
      "days": [
        {
          "weekday": "Tisdag",
          "dishes": [
            {
              "name": "L´Amatricana",
              "desc": "Färska Maccheroni, San Marzano tomatsås. rostad griskind, pecorino romano, svartpeppar.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Onsdag",
          "dishes": [
            {
              "name": "Stekt laxfilé",
              "desc": "parmesangratinerad fänkål, kokt potatis, citronsås.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Torsdag",
          "dishes": [
            {
              "name": "Spezzatino",
              "desc": "Nötköttsgryta med tomat, ärtor, morot, lök, örter. Serveras med basmatiris.",
              "price": "165:-"
            }
          ]
        },
        {
          "weekday": "Fredag",
          "dishes": [
            {
              "name": "Zuppa di pesce",
              "desc": "Tomatbaserad fisksoppa med tonfisk, calamari, rödtunga, kolja, scampi, potatis, selleri, krutonger.",
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
