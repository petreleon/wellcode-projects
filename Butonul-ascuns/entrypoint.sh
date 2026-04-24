#!/bin/sh
set -e

# Dacă directorul /app este gol, inițializăm proiectul React
if [ -z "$(ls -A /app)" ]; then
    echo "Director gol. Inițializare proiect React..."
    # Creăm într-un director temporar pentru că create-react-app încearcă să șteargă directorul țintă
    # iar /app este un mount point Docker (nu poate fi șters)
    cd /tmp
    npx create-react-app temp-react-app
    mv /tmp/temp-react-app/* /app/
    mv /tmp/temp-react-app/.[^.]* /app/ 2>/dev/null || true
    cd /app
fi

# Pornim serverul de dezvoltare React
npm start
