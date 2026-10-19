#!/usr/bin/env python3
"""
Write the real fetch time into data/menus.js.

The timestamp used to be written by Claude inside the workflow, from a prompt
that just said "now". A language model has no clock, so it guessed — usually the
scheduled hour. On 2026-10-16 the page claimed 08:00 while the run actually
started 12:57, and three of the previous four days were wrong the same way.

A clock is not something to ask a model for. This runs right after Claude writes
the file and replaces the timestamps with the machine's own UTC time.

Which timestamps are touched:
  - the top-level "fetched": always, it describes this run
  - a restaurant with status "ok": it was read just now
  - status "stale" or "error": left alone on purpose, so the page can still say
    when that restaurant was last read successfully
  - a manual entry: left alone, it is never fetched at all

Run it yourself:  python3 tools/stamp_fetch_time.py
"""

import datetime
import json
import sys
from pathlib import Path

MENUS = Path(__file__).resolve().parent.parent / "data" / "menus.js"
MARKER = "window.MENUS"


def fail(message):
    print(f"ERROR: {message}")
    return 1


def main():
    if not MENUS.exists():
        return fail(f"{MENUS.name} does not exist.")

    text = MENUS.read_text(encoding="utf-8")
    if MARKER not in text:
        return fail(f"{MENUS.name} has no '{MARKER}'.")

    head, rest = text.split(MARKER, 1)
    payload = rest.lstrip().lstrip("=").strip().rstrip(";")

    try:
        data = json.loads(payload)
    except json.JSONDecodeError as e:
        return fail(f"the data is not valid JSON: {e.msg} (line {e.lineno}).")

    now = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

    before = data.get("fetched")
    data["fetched"] = now
    stamped, kept = [], []

    for rid, r in data.get("restaurants", {}).items():
        if not isinstance(r, dict):
            continue
        if r.get("manual") or "fetched" not in r:
            continue
        if r.get("status") == "ok":
            r["fetched"] = now
            stamped.append(rid)
        else:
            kept.append(f"{rid} ({r.get('status')})")

    MENUS.write_text(
        head + MARKER + " = " + json.dumps(data, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    print(f"Stamped {now} (the model had written {before}).")
    if stamped:
        print("  updated: " + ", ".join(stamped))
    if kept:
        print("  kept earlier timestamp: " + ", ".join(kept))
    return 0


if __name__ == "__main__":
    sys.exit(main())
