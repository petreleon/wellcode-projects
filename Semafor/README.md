# 🚦 Semafor

Primul proiect din seria de **proiecte de încălzire**.

## Descriere

Acest proiect implementează un semafor interactiv. Semaforul pornește pe roșu și se schimbă automat la fiecare 10 secunde (roșu → galben → verde). Utilizatorul poate face click pe buton pentru a schimba manual culoarea.

## Structură

```
Semafor/
├── dockerfile          # Imagine Nginx Alpine pentru servirea fișierelor statice
├── src/
│   ├── index.html      # Pagina principală cu butonul semafor
│   └── app.js          # Logica de toggle automată și manuală a culorilor
└── README.md           # Acest fișier
```

## Tehnologii

- **HTML5**
- **CSS (Bootstrap 4.4.1)**
- **JavaScript (vanilla)**

## Funcționalități

- 🔴 **Roșu** → 🟡 **Galben** → 🟢 **Verde** la fiecare 10 secunde (automat)
- Click pe buton pentru schimbare manuală
- Design responsive centrat pe ecran

## Cum funcționează

Fișierul `app.js` conține un obiect `semafor` care gestionează starea și logica semaforului:

- `actual_color` — stochează culoarea curentă (`red`, `yellow` sau `green`).
- `nextColor` — harta de tranziție: `red → yellow → green → red`.
- `classMap` — asociază fiecare culoare cu clasa Bootstrap corespunzătoare (`btn-danger`, `btn-warning`, `btn-success`).
- `classToggler(element)` — metodă care elimină clasa curentă, avansează la următoarea culoare și adaugă noua clasă.
- `classTogglerRepeated()` — apelează recursiv `semafor.classToggler` la fiecare 10 secunde pentru a crea efectul de semafor automat.

## Scop

Acest proiect are rol de **încălzire** — ne reamintim cum să:
- structurăm un proiect web minimal
- folosim Bootstrap pentru stilizare rapidă
- scriem JavaScript simplu fără framework-uri

---

*Pentru instrucțiuni de build și rulare cu Docker / Make, vezi [README-ul din rădăcină](../README.md).*
