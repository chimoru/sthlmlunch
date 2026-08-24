#!/usr/bin/env python3
"""
Svarar på frågan: behöver menyerna hämtas nu?

Bakgrund: GitHub startar schemalagda körningar när det finns kapacitet, inte på
utsatt minut. Förseningar på en timme är normala. En grind som kräver "klockan
ska vara 08 i Stockholm" hoppar därför över hela dagen när körningen kommer
09:01 — och eftersom överhoppade jobb räknas som lyckade blir det inget larm.
Det inträffade 2026-08-24: två schemalagda körningar, båda gröna, ingen
uppdatering.

Därför frågar vi efter DATAN i stället för efter klockan: har menyerna redan
hämtats idag, svensk tid? Då spelar det ingen roll när körningen råkar starta,
hur många cron-tider som pekar på samma dag, eller om en tidigare körning
misslyckades — nästa försök tar över.

Skriver "ja" eller "nej" till stdout.
Kör själv:  python3 tools/behovs-hamtning.py
"""

import datetime
import json
import sys
import zoneinfo
from pathlib import Path

MENUS = Path(__file__).resolve().parent.parent / "data" / "menus.js"
STHLM = zoneinfo.ZoneInfo("Europe/Stockholm")


def svara(behovs, varfor):
    print(varfor, file=sys.stderr)
    print("ja" if behovs else "nej")
    return 0


def main():
    idag = datetime.datetime.now(STHLM).date()

    if not MENUS.exists():
        return svara(True, f"{MENUS.name} finns inte — hämta.")

    text = MENUS.read_text(encoding="utf-8")
    if "window.MENUS" not in text:
        return svara(True, f"{MENUS.name} saknar window.MENUS — hämta.")

    try:
        payload = text.split("window.MENUS", 1)[1].lstrip().lstrip("=").strip().rstrip(";")
        hamtad = json.loads(payload).get("fetched")
    except (json.JSONDecodeError, IndexError):
        return svara(True, "Kunde inte läsa datan — hämta.")

    if not hamtad:
        return svara(True, "Ingen tidigare hämtning angiven — hämta.")

    try:
        stampel = datetime.datetime.fromisoformat(str(hamtad).replace("Z", "+00:00"))
    except ValueError:
        return svara(True, f"Kunde inte tolka tidsstämpeln {hamtad!r} — hämta.")

    senast = stampel.astimezone(STHLM)

    if senast.date() >= idag:
        return svara(False, f"Redan hämtat idag ({senast:%Y-%m-%d %H:%M} svensk tid) — hoppa över.")

    return svara(True, f"Senaste hämtning {senast:%Y-%m-%d %H:%M} svensk tid, alltså inte idag — hämta.")


if __name__ == "__main__":
    sys.exit(main())
