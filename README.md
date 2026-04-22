# Tay Son Vigevano — Sito web statico

Sito ufficiale del centro **Qwan Ki Do – Tay Son Vigevano**, costruito come sito statico puro
(HTML + CSS + JS vanilla, zero dipendenze di build) e pronto per il deploy su GitHub Pages.

---

## Struttura

```
tayson/
├── index.html              Home
├── disciplina.html         Cos'è il Qwan Ki Do
├── corsi.html              Corsi, orari, iscrizione
├── istruttore.html         Profilo di Daniele Parmeggiani
├── dojo.html               Storia del dojo, risultati, sede
├── contatti.html           Contatti, prova gratuita, FAQ, mappa
├── 404.html                Pagina di errore coerente con il design
├── assets/
│   ├── css/styles.css      Stylesheet unico (tutti i token, tutti i componenti)
│   ├── js/main.js          Interazioni minime (nav mobile, reveal on scroll)
│   └── img/
│       ├── logo-tayson.png Sigillo Tay Son Vigevano
│       └── logo-unione.png Logo Unione Italiana Qwan Ki Do
├── robots.txt
├── sitemap.xml
├── .nojekyll               Disabilita processamento Jekyll su GitHub Pages
└── README.md               Questo file
```

---

## Deploy su GitHub Pages

1. **Crea un repository** su GitHub (es. `tayson-vigevano` oppure, per un dominio utente, `<username>.github.io`).
2. **Carica tutti i file** della cartella `tayson/` nella **root** del repository (non dentro a una sottocartella).
3. Nel repository, apri **Settings → Pages**.
4. Sotto **Build and deployment**, imposta:
   - Source: **Deploy from a branch**
   - Branch: **main** (o `master`), folder: **/ (root)**
5. Salva. Dopo 1–2 minuti il sito è online all'indirizzo mostrato in quella stessa pagina.

Se usi un **dominio personalizzato** (es. `taysonvigevano.it`):
- Aggiungi un file `CNAME` nella root con una sola riga: `taysonvigevano.it`
- Configura i DNS del dominio seguendo la guida ufficiale GitHub Pages.

Il file `.nojekyll` impedisce a GitHub di processare il sito con Jekyll (non serve ma evita possibili sorprese).

---

## Come modificare i contenuti

### Dati da aggiornare (cercali nel codice con `// DATI AGGIORNABILI` o `<!-- DATI AGGIORNABILI -->`)

Sono presenti commenti espliciti nei punti in cui il dato può cambiare. I principali:

1. **Indirizzo del dojo** — attualmente `Via Rovereto 3/A, 27029 Vigevano (PV)` (dal poster A3 ufficiale). Se va corretto in `Via Alfieri 42` o altro, sostituiscilo nei footer di ogni pagina e nella pagina `contatti.html` e `dojo.html`.
2. **Telefono** — attualmente `+39 331 6917268`. Presente nei footer di ogni pagina e in `contatti.html`.
3. **Email** — attualmente placeholder `info@taysonvigevano.it` in `contatti.html`. Se non esiste un'email dedicata, rimuovi la riga corrispondente.
4. **Social** — link a `facebook.com/qwankidotayson` e `instagram.com/qwankidotayson`. Verifica che gli username siano corretti.
5. **Orari** — nella pagina `corsi.html`, tabella "colpo d'occhio" e schede corso. Da verificare ad ogni inizio stagione.
6. **Palmares** — in `dojo.html`, blocco `timeline`. I dati attuali sono generici (edizione europei non specificata). Aggiungi anno, città, nomi atleti quando hai conferma.

### Dove cambiare i testi

Ogni pagina è un HTML standalone: il testo visibile si trova direttamente nel corpo della pagina.
Nessun sistema di template, nessuna compilazione — apri il file, modifica, salva, commit.

### Come aggiungere/rimuovere una pagina

1. Duplica una pagina esistente (es. `disciplina.html` → `nuova-pagina.html`).
2. Modifica titolo, meta description, contenuti.
3. Aggiungi la voce al menu in **tutte** le pagine (navbar e drawer mobile).
4. Aggiungi l'URL al `sitemap.xml`.

### Come cambiare palette o tipografia

Apri `assets/css/styles.css`. In cima al file, nel blocco `:root`, trovi tutti i token:
- Palette (`--ember`, `--brass`, `--paper`, ecc.)
- Font family (`--ff-display`, `--ff-body`, `--ff-mono`)
- Scala tipografica e spazi

Modificare lì propaga ovunque. Non modificare i singoli componenti.

---

## Scelte di design (nota tecnica)

- **Tipografia**: Fraunces (display, serif variabile con asse `SOFT` e `WONK` per modulare il carattere editoriale/wonky); Manrope (body, grottesca geometrica); JetBrains Mono (dati, orari, kicker). Nessun font "pseudo-orientale".
- **Palette**: derivata dal sigillo Tay Son (rosso vinaccia `--ember`, ottone `--brass`) e dal logo Unione (rosso acceso). Fondo avorio `--paper` invece che bianco per evitare l'estetica "default tech".
- **Motivo grafico**: il meandro (grecatura) che appare sul bordo del sigillo Tay Son è riprodotto come divisore CSS (`.meander`) e ricorre come firma grafica.
- **Layout**: griglia asimmetrica `grid-2-asym` (5/7 o 7/5) usata più volte per evitare la simmetria anonima tipica dei template generici.
- **Motion**: minima. Una lenta rotazione del sigillo in hero (disattivata se `prefers-reduced-motion`), reveal al scroll, micro-interazioni hover. Nessun parallax, nessuna animazione gratuita.

---

## Accessibilità e performance

- Semantica HTML corretta (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Focus visibile (outline custom).
- `prefers-reduced-motion` rispettato.
- Font caricati via `preconnect` su Google Fonts.
- Nessun framework: tempo di caricamento minimo, zero JavaScript bloccante (tutto `defer`).
- Immagini con `alt` dove utile; loghi decorativi con `alt=""`.

---

## Licenze contenuti

I testi sono originali e riutilizzabili dal centro. I loghi (sigillo Tay Son, logo Unione Italiana Qwan Ki Do) sono proprietà dei rispettivi titolari e vanno mantenuti in accordo con le loro policy.
