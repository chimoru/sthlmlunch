/*
 * Testar veckonotisen i app.js — den som avgör om besökaren får en varning,
 * en neutral upplysning, eller ingenting alls.
 *
 * Funktionerna klipps ut ur app.js och körs mot påhittade datum, så testet
 * kontrollerar koden som faktiskt skickas till besökaren.
 *
 * Kör:  node tools/test-veckonotis.js
 */

const fs = require("fs");
const path = require("path");
const src = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");

function grab(name) {
  const i = src.indexOf("function " + name + "(");
  if (i < 0) throw new Error("hittade inte " + name);
  let depth = 0;
  for (let k = src.indexOf("{", i); k < src.length; k++) {
    if (src[k] === "{") depth++;
    else if (src[k] === "}") { depth--; if (depth === 0) return src.slice(i, k + 1); }
  }
}

let FAKE_DATE, FAKE_DAY;
const harness = [grab("isoWeek"), grab("shiftISO"), grab("weekNotice")].join("\n")
  .replace(/todayISO\(\)/g, "FAKE_DATE")
  .replace(/isWeekend\(\)/g, '(FAKE_DAY==="Lördag"||FAKE_DAY==="Söndag")');
eval(harness);

const fall = [
  ["2026-08-22", "Lördag", 35, "info"],
  ["2026-08-23", "Söndag", 35, "info"],
  ["2026-08-25", "Tisdag",      35, null],
  ["2026-08-18", "Tisdag",      35, "warn"],
  ["2026-08-18", "Tisdag",      33, "warn"],
  ["2026-08-22", "Lördag", 34, null],
  ["2026-08-22", "Lördag", 40, "warn"],
  ["2026-12-29", "Tisdag",       1, "warn"],
  // 2027-01-02 är en lördag i ISO-vecka 53 (veckans torsdag är 31 dec 2026),
  // inte vecka 1. Nästa vecka är alltså v.1 -> helg -> neutral notis.
  ["2027-01-02", "Lördag",  1, "info"],
  ["2027-01-05", "Tisdag",       1, null],
];

let fel = 0;
for (const [datum, dag, week, vantat] of fall) {
  FAKE_DATE = datum; FAKE_DAY = dag;
  const r = weekNotice({ week });
  const fick = r ? r.level : null;
  const ok = fick === vantat;
  if (!ok) fel++;
  console.log(`${ok ? "OK " : "FEL"}  ${datum} ${dag.padEnd(8)} meny v.${String(week).padEnd(3)} -> ${String(fick).padEnd(5)} (vantat ${vantat})`);
  if (r) console.log(`          "${r.text}"`);
}
console.log(fel ? `\n${fel} FEL` : "\nAlla fall stammer");
process.exit(fel ? 1 : 0);
