# Sthlm Lunch

Samlar dagens lunch från kontorets lunchställen på en sida.
Ligger publikt på **https://chimoru.dev/sthlmlunch/**

Startsidan har två sektioner:

**Veckomeny** — restauranger som publicerar en veckomeny vi hämtar automatiskt.
Kortet visar dagens rätter och pris, och klick leder till vår egen veckomenysida.

**Lunch** — restauranger utan veckomeny att hämta. Kortet leder direkt till deras
egen meny- eller beställningssida, i en ny flik. Ingenting hämtas för dessa, och
de ska inte finnas i `data/menus.js`.

Vilken sektion en restaurang hamnar i styrs av fältet `section` i
`data/restaurants.js` (`"veckomeny"` eller `"lunch"`). Utelämnas fältet gäller
`"veckomeny"`. En tom sektion visas inte alls.

## Hur uppdateringen fungerar

En webbsida får av säkerhetsskäl inte hämta innehåll från andra hemsidor (CORS).
Därför sker hämtningen någon annanstans: **GitHub Actions** kör
`.github/workflows/lunch.yml` varje vardag 06:00 UTC (08:00 svensk sommartid).
Där läser Claude Code varje restaurangs sida, tolkar veckomenyn och skriver om
`data/menus.js`. Sedan kontrolleras filen, committas om något ändrats, och
`deploy.yml` publicerar sidan.

`deploy.yml` körs också vid varje push till `main`, så ändrar du restauranglistan
och pushar syns det på sidan direkt. Automatikens egen commit kan däremot inte
utlösa den — GitHub startar inga workflows från commits gjorda med `GITHUB_TOKEN`
— därför anropar `lunch.yml` publiceringen uttryckligen.

Ingen dator behöver vara påslagen. Autentiseringen sker med ett abonnemangs-token
i repo-secreten `CLAUDE_CODE_OAUTH_TOKEN`, så det kostar inget extra.

## Filerna

| Fil | Vad |
|---|---|
| `index.html` | Startsidan |
| `restaurang.html` | Veckomenyn. Samma sida för alla, väljer restaurang via `?id=` |
| `style.css` | All design, ljust och mörkt läge |
| `app.js` | Ritar korten och veckomenyn |
| `data/restaurants.js` | **Din lista.** Redigeras för hand. `hint` styr automatiken |
| `data/menus.js` | Menyerna. **Skrivs automatiskt — redigera inte** |
| `tools/validate.py` | Kontrollerar `menus.js` innan publicering |
| `tools/test-veckonotis.js` | Tester för veckonotisen |
| `.github/workflows/lunch.yml` | Morgonhämtningen |
| `.github/workflows/deploy.yml` | Publiceringen till GitHub Pages |

## Lägga till en restaurang

Öppna `data/restaurants.js` och lägg till en post:

En restaurang med veckomeny:

```js
{
  id: "kortnamn",                    // unikt, inga mellanslag eller å ä ö
  name: "Restaurangens namn",
  url: "https://.../veckomeny",      // sidan med VECKOMENYN
  section: "veckomeny",
  area: "Gatan 1",                   // valfritt
  walk: "5 min",                     // valfritt
  note: ""                           // valfritt
}
```

En restaurang utan veckomeny, där kortet bara ska leda vidare:

```js
{
  id: "kortnamn",
  name: "Restaurangens namn",
  url: "https://.../bestall",        // menysida eller beställningssida
  section: "lunch",
  area: "Gatan 1",
  linkText: "Beställ och se menyn"   // valfritt, standard "Öppna menyn"
}
```

Commit och push. Nästa morgon hämtas menyn automatiskt — eller starta körningen
direkt via fliken **Actions → Hämta lunchmenyer → Run workflow**.

### När menyn ligger i en PDF

Många restauranger länkar till en PDF vars filnamn byts varje vecka. **Peka aldrig
`url` mot PDF:en** — då slutar sidan fungera nästa vecka. Peka den mot sidan där
länken sitter, och beskriv i `hint` var länken finns:

```js
hint: "Menyn ligger bakom länken \"Lunchmeny v.NN\" längre ner på sidan."
```

Automatiken följer länken varje morgon och hittar därmed alltid aktuell fil. Den
laddar ner PDF:en och läser den som *bild*, inte som text — flera restaurangers
PDF:er har trasigt textlager där små bokstäver blir frågetecken, och då hittar en
textläsning på ord utan att märka det. Därför installerar workflowet
`poppler-utils`.

### Veckonummer och ärlighet

Anger menyn ett veckonummer i `week` jämför sidan det med den pågående veckan:

| Läge | Vad besökaren ser | Ton |
|---|---|---|
| Samma vecka | Dagens rätt markeras som vanligt | — |
| Nästa veckas meny, **på en helg** | "Nästa veckas meny (vecka 35), som gäller från måndag" | Neutral |
| Nästa veckas meny, **på en vardag** | "Denna veckas meny finns inte uppe" | Varning |
| Äldre vecka | "Menyn har inte uppdaterats" | Varning |
| Annan vecka | "Menyn gäller vecka X, inte den pågående vecka Y" | Varning |

I alla fall utom det första markeras **ingen** dag som idag. Hellre säga att vi
inte vet vad som serveras, än att peka på en rätt från fel vecka.

Att restaurangen lagt upp nästa veckas meny är ett problem på en tisdag och
fullkomligt normalt på en lördag — samma data, olika innebörd. Därför beror tonen
på veckodagen. Utan den skillnaden hade sidan sett trasig ut varje helg.

Logiken har egna tester, inklusive årsskiftet där vecka 53 följs av vecka 1:

```bash
node tools/test-veckonotis.js
```

## Färgtema

Knappen uppe till höger växlar mellan tre lägen:

| Läge | Innebörd |
|---|---|
| **Auto** | Följer datorns inställning, och byter direkt om du ändrar den |
| **Ljust** | Låst till ljust, oavsett systemet |
| **Mörkt** | Låst till mörkt, oavsett systemet |

Valet sparas per webbläsare i `localStorage` under nyckeln `tema`, och gäller båda
sidorna. Utan ett Auto-läge hade det inte funnits någon väg tillbaka till att följa
systemet igen.

Temat styrs av attributet `data-theme` på `<html>`. Ett litet skript i sidhuvudet
sätter det **innan** sidan målas — läggs det i `app.js` i stället hinner sidan
ritas i fel färger och blinka om. Skriptet är därför medvetet duplicerat i båda
HTML-filerna, och måste hållas i takt med `initTema()` i `app.js`: samma nyckel,
samma värden.

Alla färger ligger i variabler på `:root`. Den mörka paletten är samma variabler
omdefinierade under `:root[data-theme="dark"]`. Ingen annan regel i `style.css`
nämner någon färgkod, vilket är varför nya inslag automatiskt fungerar i båda
lägena.

## Designen

Riktningen heter *Trattoria* och ska likna en tryckt meny snarare än en app.

| Grepp | Var |
|---|---|
| Antikva i all text | `--antikva` på `:root`, satt på `body` |
| Kapitäler i namn och sektionsrubriker | `font-variant: small-caps` |
| Kursiva adresser, tider och stämplar | `.meta`, `.today`, `.stamp`, `.day-date` |
| Nästan skarpa hörn, inga skuggor | `--radius: 3px`, `--shadow: none` |
| Prickade linjer mellan rätterna | `.dishes li` |
| Dubbel linje under sidhuvudet | `.topbar` |
| Idag-brickan i sans-serif | `.badge-today` — enda undantaget från antikvan, så att de små versalerna håller sig läsbara |

Papperstonen och det djupa tegelröda hör ihop; byter du accentfärgen bör du byta
`--accent-soft` samtidigt, annars spricker etiketternas kontrast.

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
| Körningen dör direkt, 0 kostnad, `is_error` | Nästan alltid tokenet | Kör om `npx @anthropic-ai/claude-code setup-token`, städa klippbordet med `pbpaste \| tr -d '[:space:]' \| pbcopy`, och uppdatera secreten. En radbrytning mitt i tokenet räcker för att anropet avvisas |
| Sidan visar äldre data än `data/menus.js` i repot | Publiceringen checkade ut fel commit | Ska vara fixat: `deploy.yml` har `ref: ${{ github.ref }}`. Saknas den ligger sidan permanent en körning efter |
| Sidan är tom, inga restauranger syns | Webbläsaren har ny HTML men gammal cachad `app.js` | Hård omladdning: ⌘+Shift+R. Löser sig annars inom 10 min. Publiceringen versionsmärker nu filnamnen så att blandningen inte kan uppstå |
| Behöver se Claudes utskrift i loggen | Den döljs som standard | Lägg tillfälligt till `show_full_output: true` under `with:` i `lunch.yml`. Ta bort den efteråt — loggen är publik |
