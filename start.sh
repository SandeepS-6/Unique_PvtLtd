#!/usr/bin/env bash
set -euo pipefail

if [ ! -f ".next/BUILD_ID" ]; then
  echo "ERROR: Production build missing. Set Render Build Command to:"
  echo "NPM_CONFIG_PRODUCTION=false npm install && npm run build"
  exit 1
fi

echo "Starting Next.js on ${HOSTNAME:-0.0.0.0}:${PORT:-10000}"
exec npx next start -H "${HOSTNAME:-0.0.0.0}" -p "${PORT:-10000}"
