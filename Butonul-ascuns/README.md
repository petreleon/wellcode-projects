# Butonul Ascuns

Un proiect React simplu ce implementează un buton interactiv cu o funcționalitate sau surpriză ascunsă.

## Descriere
Scopul acestui proiect este să ne familiarizăm cu React, gestionarea stării și manipularea evenimentelor de bază din ecosistemul React. Proiectul rulează folosind un server de dezvoltare containerizat.

![Captură de ecran a aplicației](<Captură de ecran din 2026-04-24 la 14.59.12.png>)

## Tehnologii
- React
- Vite
- Docker (imagine bazată pe Node)

## Cum se rulează
Din rădăcina proiectului principal (directorul părinte), poți folosi `Make` pentru a construi și rula containerul.

1. **Build imagine Docker**
```bash
make butonul-ascuns-build
```

2. **Rulează containerul**
```bash
make butonul-ascuns-run
```

Aplicația va fi disponibilă la un port dinamic (de obicei începând cu 3000), care va fi afișat în consolă după pornire.

> Fișierele din `src/` sunt montate direct în container, permițând actualizări instantanee ale aplicației în timpul dezvoltării.
