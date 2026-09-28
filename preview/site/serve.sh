#!/bin/bash
# Local testing server for the kWh Electric preview redesign.
# Usage:  ./serve.sh        (starts server at http://localhost:4321)
#         ./serve.sh stop    (stops it)
cd "$(dirname "$0")"
PORT=4321

if [ "$1" = "stop" ]; then
  pkill -f "http.server $PORT" && echo "Stopped." || echo "Not running."
  exit 0
fi

# rebuild pages from _build_site.py, then serve
python3 _build_site.py
pkill -f "http.server $PORT" 2>/dev/null
sleep 1
nohup python3 -m http.server $PORT --bind 127.0.0.1 > /tmp/kwh-preview-server.log 2>&1 &
sleep 1
echo "Serving kWh preview at  http://localhost:$PORT"
echo "Stop with:  ./serve.sh stop"
