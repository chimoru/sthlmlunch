#!/usr/bin/env python3
"""
Kontrollerar att data/menus.js är hel innan sidan publiceras.

Körs automatiskt av GitHub Actions efter hämtningen. Går kontrollen inte igenom
avbryts körningen, ingenting committas, och den gamla sidan ligger kvar.
Hellre en dag gammal meny än en trasig sida.

Kör själv:  python3 tools/validate.py
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MENUS = ROOT / "data" / "menus.js"
RESTAURANTS = ROOT / "data" / "restaurants.js"

VALID_STATUS = {"ok", "stale", "error"}
VALID_WEEKDAYS = {"Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"}

problems = []
warnings = []


def fail(msg):
    problems.append(msg)


def warn(msg):
    warnings.append(msg)


def load_menus():
    """Plockar ut JSON-delen efter 'window.MENUS =' och läser den."""
    if not MENUS.exists():
        fail(f"{MENUS.name} finns inte.")
        return None

    text = MENUS.read_text(encoding="utf-8")
    marker = "window.MENUS"
    if marker not in text:
        fail(f"{MENUS.name} saknar 'window.MENUS ='. Sidan kan inte läsa filen.")
        return None

    payload = text.split(marker, 1)[1].lstrip()
    if not payload.startswith("="):
        fail("Det står inget '=' efter window.MENUS.")
        return None
    payload = payload[1:].strip().rstrip(";").strip()

    try:
        return json.loads(payload)
    except json.JSONDecodeError as e:
        fail(f"Datan är inte giltig JSON: {e.msg} (rad {e.lineno}, tecken {e.colno}).")
        return None


def restaurant_ids():
    """Läser id:n ur restaurants.js. Enkel textsökning — filen är handredigerad."""
    if not RESTAURANTS.exists():
        fail(f"{RESTAURANTS.name} finns inte.")
        return []
    text = RESTAURANTS.read_text(encoding="utf-8")
    return re.findall(r'\bid\s*:\s*["\']([^"\']+)["\']', text)


def check(data, ids):
    if not isinstance(data, dict):
        fail("Datan är inte ett objekt.")
        return

    if not data.get("fetched"):
        fail("Fältet 'fetched' saknas — sidan kan inte visa när menyerna hämtades.")

    restaurants = data.get("restaurants")
    if not isinstance(restaurants, dict) or not restaurants:
        fail("Fältet 'restaurants' saknas eller är tomt. Hämtningen gav ingenting.")
        return

    for rid in ids:
        if rid not in restaurants:
            fail(f"Restaurangen '{rid}' finns i restaurants.js men saknas helt i menus.js.")

    for extra in set(restaurants) - set(ids):
        warn(f"'{extra}' finns i menus.js men inte i restaurants.js — visas inte på sidan.")

    usable = 0

    for rid, r in restaurants.items():
        where = f"'{rid}'"

        if not isinstance(r, dict):
            fail(f"{where} är inte ett objekt.")
            continue

        status = r.get("status")
        if status not in VALID_STATUS:
            fail(f"{where} har status '{status}'. Tillåtet: {', '.join(sorted(VALID_STATUS))}.")

        days = r.get("days")
        if days is None:
            if status != "error":
                fail(f"{where} saknar 'days' men har status '{status}'. Använd status 'error'.")
            continue
        if not isinstance(days, list):
            fail(f"{where}: 'days' är inte en lista.")
            continue

        for i, day in enumerate(days):
            tag = f"{where} dag {i + 1}"
            if not isinstance(day, dict):
                fail(f"{tag} är inte ett objekt.")
                continue

            weekday = day.get("weekday")
            if weekday not in VALID_WEEKDAYS:
                fail(f"{tag}: veckodagen '{weekday}' känns inte igen.")

            date = day.get("date")
            if date and not re.fullmatch(r"\d{4}-\d{2}-\d{2}", str(date)):
                fail(f"{tag}: datumet '{date}' är inte på formen ÅÅÅÅ-MM-DD.")

            dishes = day.get("dishes")
            if not isinstance(dishes, list):
                fail(f"{tag}: 'dishes' är inte en lista.")
                continue

            for dish in dishes:
                if not isinstance(dish, dict) or not dish.get("name"):
                    fail(f"{tag}: en rätt saknar namn.")
                    continue
                usable += 1

    if usable == 0:
        fail("Inte en enda rätt hittades i hela filen. Hämtningen misslyckades helt.")


def main():
    ids = restaurant_ids()
    data = load_menus()
    if data is not None:
        check(data, ids)

    for w in warnings:
        print(f"  Varning: {w}")

    if problems:
        print(f"\nFEL — {len(problems)} problem i data/menus.js:\n")
        for p in problems:
            print(f"  · {p}")
        print("\nSidan publiceras INTE. Den gamla versionen ligger kvar.")
        return 1

    print(f"OK — data/menus.js är hel. {len(ids)} restauranger, alla kontrollerade.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
