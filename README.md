# � Proiecte de Încălzire

O serie de exerciții simple pentru a ne familiariza cu tehnologiile web și containerizarea.

## Descriere

Această serie conține proiecte mici și independente, fiecare având propriul stack tehnologic și propriul scop didactic. Toate proiectele sunt containerizate cu **Docker** și orchestrate prin **Make**.

## Proiecte

| # | Proiect | Tehnologii | Descriere |
|---|---------|------------|-----------|
| 1 | [Semafor](Semafor/) | HTML5, Bootstrap, JS vanilla | Semafor interactiv cu toggle automat/manual |

## Tehnologii (nivel workspace)

- **Docker** — containerizare uniformă pentru toate proiectele
- **Nginx Alpine** — server web pentru fișiere statice
- **Make** — automatizarea comenzilor de build și run

## Cum rulezi un proiect

Fiecare proiect are target-uri proprii în `Makefile`. De exemplu, pentru **Semafor**:

### 1. Build imagine Docker

```bash
make semafor-build
```

### 2. Rulează containerul

```bash
make semafor-run
```

Aplicația va fi disponibilă la: [http://localhost:8080](http://localhost:8080)

> Containerul montează directorul `src/` al proiectului direct în Nginx, deci orice modificare în cod este reflectată instant fără rebuild.

## Scop

Aceste proiecte au rol de **încălzire** — ne reamintim cum să:
- structurăm proiecte web minimaliste
- containerizăm aplicații statice cu Docker
- automatizăm comenzile cu Make
- explorăm diverse tehnologii frontend fără framework-uri complexe

---

*Rămâi pe fază pentru următoarele proiecte din serie! 🚀*
