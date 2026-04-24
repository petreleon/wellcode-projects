# � Proiecte de Încălzire

O serie de exerciții simple pentru a ne familiariza cu tehnologiile web și containerizarea.

## Descriere

Această serie conține proiecte mici și independente, fiecare având propriul stack tehnologic și propriul scop didactic. Toate proiectele sunt containerizate cu **Docker** și orchestrate prin **Make**.

## Proiecte

| # | Proiect | Tehnologii | Descriere |
|---|---------|------------|-----------|
| 1 | [Semafor](Semafor/) | HTML5, Bootstrap, JS vanilla | Semafor interactiv cu toggle automat/manual |
| 2 | [Butonul Ascuns](Butonul-ascuns/) | React | Proiect interactiv cu un buton ascuns |

## Tehnologii (nivel workspace)

- **Docker** — containerizare uniformă pentru toate proiectele
- **Nginx Alpine** — server web pentru fișiere statice
- **Make** — automatizarea comenzilor de build și run

## Cum rulezi un proiect

Fiecare proiect are target-uri proprii în `Makefile`.

### Semafor

**1. Build imagine Docker**
```bash
make semafor-build
```

**2. Rulează containerul**
```bash
make semafor-run
```
Aplicația va fi disponibilă la: [http://localhost:8080](http://localhost:8080)

### Butonul Ascuns

**1. Build imagine Docker**
```bash
make butonul-ascuns-build
```

**2. Rulează containerul**
```bash
make butonul-ascuns-run
```
Aplicația va fi disponibilă la un port alocat automat (de obicei [http://localhost:3000](http://localhost:3000)), care va fi afișat în consolă la pornire.

> Containerele montează de regulă directorul `src/` al proiectelor, deci orice modificare în cod este reflectată instant fără rebuild.

## Scop

Aceste proiecte au rol de **încălzire** — ne reamintim și exersăm cum să:
- structurăm diverse proiecte web (de la aplicații minimaliste la framework-uri moderne precum React)
- containerizăm aplicații cu Docker (inclusiv Node/Vite)
- automatizăm fluxul de dezvoltare cu Make
- explorăm ecosistemul frontend în practică

---

*Rămâi pe fază pentru următoarele proiecte din serie! 🚀*
