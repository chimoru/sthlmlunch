#!/usr/bin/env python3
"""
Larmar när en restaurangs meny inte kunde läsas.

Utan den här kontrollen blir morgonkörningen grön även när en restaurangs sida
gått sönder: status sätts till "stale", gammal data behålls, sidan ser hel ut och
ingen får veta något. Ett tyst fel är värre än ett rött kryss.

Kör den EFTER publiceringen. Faller den innan, hindras de restauranger som
faktiskt fungerade från att uppdateras — en trasig sida ska inte kunna hålla de
andra som gisslan.

Kör själv:  python3 tools/kontrollera-status.py
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MENUS = ROOT / "data" / "menus.js"
RESTAURANTS = ROOT / "data" / "restaurants.js"

FORKLARING = {
    "stale": "kunde inte läsas — sidan visar senast hämtade meny",
    "error": "kunde inte läsas, och det finns ingen tidigare meny att visa",
}


def namn_per_id():
    if not RESTAURANTS.exists():
        return {}
    text = RESTAURANTS.read_text(encoding="utf-8")
    par = re.findall(r'\bid\s*:\s*["\']([^"\']+)["\'][\s\S]{0,200}?\bname\s*:\s*["\']([^"\']+)["\']', text)
    return dict(par)


def main():
    if not MENUS.exists():
        print("FEL: data/menus.js finns inte.")
        return 1

    text = MENUS.read_text(encoding="utf-8")
    if "window.MENUS" not in text:
        print("FEL: data/menus.js saknar window.MENUS.")
        return 1

    payload = text.split("window.MENUS", 1)[1].lstrip().lstrip("=").strip().rstrip(";")
    try:
        data = json.loads(payload)
    except json.JSONDecodeError as e:
        print(f"FEL: kunde inte läsa datan: {e.msg}")
        return 1

    namn = namn_per_id()
    restauranger = data.get("restaurants", {})
    trasiga = []

    for rid, r in restauranger.items():
        status = r.get("status")
        if status in FORKLARING:
            trasiga.append((namn.get(rid, rid), status, r.get("fetched", "okänt")))

    if not trasiga:
        print(f"OK — alla {len(restauranger)} veckomenyer kunde läsas.")
        return 0

    print(f"LARM — {len(trasiga)} av {len(restauranger)} veckomenyer kunde inte läsas:\n")
    for namn_str, status, hamtad in trasiga:
        print(f"  · {namn_str}: {FORKLARING[status]}")
        print(f"    senaste lyckade hämtning: {hamtad}")

    print("\nSidan är publicerad med den data som fanns — de restauranger som")
    print("fungerade är uppdaterade. Men något behöver ses över:")
    print("  1. Öppna restaurangens sida och se om den är ombyggd eller nere.")
    print("  2. Ändras länken eller menyns plats: uppdatera url eller hint")
    print("     i data/restaurants.js.")
    print("  3. Kvarstår felet flera dagar: flytta restaurangen till sektionen")
    print("     'lunch', så länkar kortet direkt till deras sida i stället.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
