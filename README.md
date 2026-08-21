# Sthlm Lunch

Samlar dagens lunch från kontorets lunchställen på en sida.
Ligger publikt på **https://chimoru.dev/sthlmlunch/**

Startsidan visar ett kort per restaurang med dagens rätter och pris.
Klick på ett kort ger hela veckomenyn.

## Hur uppdateringen fungerar

En webbsida får av säkerhetsskäl inte hämta innehåll från andra hemsidor (CORS).
Därför sker hämtningen någon annanstans: **GitHub Actions** kör
`.github/workflows/lunch.yml` varje vardag 06:00 UTC (08:00 svensk sommartid).
Där läser Claude Code varje restaurangs sida, tolkar veckomenyn och skriver om
`data/menus.js`. Sedan kontrolleras filen, committas om något ändrats, och sidan
publiceras — allt i samma körning.

Ingen dator behöver vara påslagen. Autentiseringen sker med ett abonnemangs-token
i repo-secreten `CLAUDE_CODE_OAUTH_TOKEN`, så det kostar inget extra.

## Filerna

| Fil | Vad |
|---|---|
| `index.html` | Startsidan |
| `restaurang.html` | Veckomenyn. Samma sida för alla, väljer restaurang via `?id=` |
| `style.css` | All design, ljust och mörkt läge |
| `app.js` | Ritar korten och veckomenyn |
| `data/restaurants.js` | **Din lista.** Redigeras för hand |
| `data/menus.js` | Menyerna. **Skrivs automatiskt — redigera inte** |
| `tools/validate.py` | Kontrollerar `menus.js` innan publicering |
| `.github/workflows/lunch.yml` | Morgonhämtningen och publiceringen |

## Lägga till en restaurang

Öppna `data/restaurants.js` och lägg till en post:

```js
{
  id: "kortnamn",                    // unikt, inga mellanslag eller å ä ö
  name: "Restaurangens namn",
  url: "https://.../veckomeny",      // sidan med VECKOMENYN
  area: "Gatan 1",                   // valfritt
  walk: "5 min",                     // valfritt
  note: ""                           // valfritt
}
```

Commit och push. Nästa morgon hämtas menyn automatiskt — eller starta körningen
direkt via fliken **Actions → Hämta lunchmenyer → Run workflow**.

## Titta på sidan lokalt

```bash
python3 -m http.server 8765
```

Öppna sedan http://localhost:8765 i webbläsaren.

## Kontrollera datan för hand

```bash
python3 tools/validate.py
```

## När något ser fel ut

| Symptom | Orsak | Åtgärd |
|---|---|---|
| "Kunde inte läsas idag" på ett kort | Menyn ligger i en PDF, på Facebook, eller sidan är ombyggd | Peka `url` på en annan sida, eller skriv en `note` |
| Hela sidan visar gammal data | Actions-körningen är röd | Titta i fliken Actions. Oftast har tokenet gått ut — kör `claude setup-token` igen och uppdatera secreten |
| Ingen ny commit på flera dagar | Menyerna är oförändrade | Normalt. Commit sker bara när något faktiskt ändrats |
