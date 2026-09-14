const fs = require("fs");
const src = fs.readFileSync("app.js", "utf8");

function grab(name) {
  const i = src.indexOf("function " + name + "(");
  if (i < 0) throw new Error("hittade inte " + name);
  let depth = 0;
  for (let k = src.indexOf("{", i); k < src.length; k++) {
    if (src[k] === "{") depth++;
    else if (src[k] === "}") { depth--; if (depth === 0) return src.slice(i, k + 1); }
  }
}

let FAKE;
eval(grab("aktivtErbjudande").replace(/todayISO\(\)/g, "FAKE"));

const kod = { text: "25 % rabatt med koden", code: "BASTARDDEALS25", until: "2026-12-31" };

const fall = [
  ["2026-09-14", kod, true,  "idag, långt innan sista dagen"],
  ["2026-12-30", kod, true,  "dagen fore sista dagen"],
  ["2026-12-31", kod, true,  "SISTA giltighetsdagen - ska fortfarande visas"],
  ["2027-01-01", kod, false, "dagen EFTER - ska vara borta"],
  ["2027-06-01", kod, false, "langt efter"],
  ["2026-09-14", { text: "x", code: "Y" }, false, "saknar until"],
  ["2026-09-14", { text: "x", code: "Y", until: "31/12 2026" }, false, "felskrivet until"],
  ["2026-09-14", undefined, false, "inget erbjudande alls"],
];

let fel = 0;
for (const [datum, e, vantat, vad] of fall) {
  FAKE = datum;
  const syns = aktivtErbjudande({ offer: e }) !== null;
  const ok = syns === vantat;
  if (!ok) fel++;
  console.log(`${ok ? "OK " : "FEL"}  ${datum}  ${syns ? "visas   " : "doljs   "} ${vad}`);
}
console.log(fel ? `\n${fel} FEL` : "\nAlla fall stammer");
process.exit(fel ? 1 : 0);
