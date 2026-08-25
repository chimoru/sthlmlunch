#!/bin/sh
# Räknar ut gångavståndet från kontoret till en adress, för walk-fältet i
# data/restaurants.js.
#
#   ./tools/avstand.sh "Odengatan 45"
#   → Odengatan 45: 414 m gång (5.5 min)  →  walk: "~410 m"
#
# Två öppna tjänster används, båda utan nyckel:
#   Nominatim  slår upp adressens koordinater (högst ett anrop per sekund)
#   OSRM       räknar den faktiska gångvägen längs gatorna
#
# Fågelvägen skulle underskatta systematiskt, eftersom man måste följa gatorna.
# Därför en riktig ruttberäkning och inte en formel.

KONTOR_ADRESS="Döbelnsgatan 24"
KONTOR="18.06099,59.34173"        # lon,lat — slaget upp en gång, ändras aldrig
UA="sthlmlunch-avstand/1.0 (privat lunchsida)"

if [ -z "$1" ]; then
  echo "Användning: $0 \"Gatunamn 12\"" >&2
  exit 1
fi

Q=$(python3 -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1]+', Stockholm, Sverige'))" "$1")
KOORD=$(curl -s --max-time 20 -A "$UA" \
  "https://nominatim.openstreetmap.org/search?q=$Q&format=json&limit=1" \
  | python3 -c "
import json,sys
t=json.load(sys.stdin)
print(f\"{float(t[0]['lon'])},{float(t[0]['lat'])}\" if t else '', end='')
")

if [ -z "$KOORD" ]; then
  echo "Hittade ingen adress som matchar \"$1\"." >&2
  exit 1
fi

curl -s --max-time 25 \
  "https://routing.openstreetmap.de/routed-foot/route/v1/foot/$KONTOR;$KOORD?overview=false" \
  | ADRESS="$1" FRAN="$KONTOR_ADRESS" python3 -c "
import json, os, sys
d = json.load(sys.stdin)
if d.get('code') != 'Ok':
    print('Ruttberäkningen misslyckades:', d.get('code')); sys.exit(1)
r = d['routes'][0]
m = r['distance']
print(f\"{os.environ['ADRESS']} från {os.environ['FRAN']}: {m:.0f} m gång ({r['duration']/60:.1f} min)\")
print(f'  walk: \"~{round(m/10)*10:.0f} m\"')
"
