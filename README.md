# Tay Son Vigevano — Sito web

Sito statico multi-pagina per il club Qwan Ki Do · Tay Son Vigevano.
Pronto per deploy su GitHub Pages senza build step.

## Deploy in 3 passi (GitHub Pages)

1. Crea un repository pubblico su GitHub.
2. Carica il **contenuto** della cartella `tayson/` nella root del repository (i file `.html` devono stare al primo livello, non dentro `tayson/`).
3. Settings → Pages → Source: `main` / `/ (root)` → Save. Dopo ~1 minuto il sito è live su `https://<username>.github.io/<repo>/`.

Il file `.nojekyll` (vuoto) disabilita Jekyll.

## Struttura

```
tayson/
├── index.html              Home con hero, sigillo rotante, valori, preview corsi
├── disciplina.html         Cos'è il Qwan Ki Do · Long Phái: stili, simbolo, saluto, gradi
├── corsi.html              Orari completi, illustrazioni decorative per ogni corso
├── istruttore.html         Profilo Daniele Parmeggiani con foto reale
├── club.html               Storia + sezione "Leggenda della Carpa che diventa Drago"
├── contatti.html           Prova, mappa Google embed, galleria foto, FAQ, WhatsApp
├── 404.html                Pagina errore coerente
├── assets/
│   ├── css/styles.css      ~1350 righe; ultime 200 sono gli arricchimenti v2
│   ├── js/main.js          Toggle nav mobile, reveal on scroll, anno footer
│   └── img/
│       ├── logo-tayson.png · logo-unione.png       Loghi istituzionali
│       ├── sigillo-tayson.jpg                       Sigillo singolo per hero rotante
│       ├── pergamena-logo-tay-son.png               Per la sezione leggenda
│       ├── illus-panda.png · illus-bimbo-guardia.png ·
│       │   illus-calcio-volante.png · illus-acrobata.png ·
│       │   illus-armi.png                           Sketch decorativi sui corsi
│       └── foto-*.webp/jpg                          Foto reali di azione
├── robots.txt · sitemap.xml · .nojekyll
└── README.md
```

## Punti `DATI AGGIORNABILI` da verificare

Cerca questa stringa nei file HTML per trovare tutti i punti modificabili rapidamente.

- **Indirizzo sede**: Via Rovereto 3/A, 27029 Vigevano (PV), c/o Accademia Pugilistica KBK
- **Telefono**: +39 331 6917268 (link `tel:` e `wa.me/39331...`)
- **Email**: qwankido.vigevano@gmail.com
- **Facebook**: facebook.com/qwankido.tayson.vigevano
- **Instagram**: @qwankidotayson
- **Sitemap**: dominio `TUO-DOMINIO` da sostituire post-deploy

## Architettura del design

**Tipografia**
- Fraunces (serif variabile, display)
- Manrope (sans-serif, body)
- JetBrains Mono (mono, dati e kicker)

**Palette derivata dal sigillo Tay Son**
- `--ember #8b1a1a` (rosso brace)
- `--ember-deep #5a0f10` (rosso scuro)
- `--brass #b8933d` (ottone)
- `--paper #f5f0e6` (avorio, non bianco puro)
- `--ink #2a1f17` (testo scuro)

**Firma grafica**: meandro/grecatura come divisore, ripreso dal sigillo Tay Son.

## Componenti speciali (sezione 9 del CSS)

- `.hero-seal` — sigillo rotante 40s, rispetta `prefers-reduced-motion`
- `.illus-corso` — illustrazioni sketch decorative, opacity 0.18, mix-blend-mode luminosity
- `.legend` — sezione leggenda con kanji 鯉魚化龍 in watermark
- `.philosophy-box` — box bordo oro doppio per la chiusura della leggenda
- `.btn--whatsapp` — pulsante verde WhatsApp dedicato
- `.photo-grid` — griglia responsive per foto reali

## Modifica rapida dei contenuti

Tutti i contenuti modificabili sono in HTML semantico, senza framework. Per aggiornare:
- **Orari corsi** → `corsi.html`, articoli `<article class="course">`
- **Profilo istruttore** → `istruttore.html`, sezione `.portrait`
- **Risultati agonistici** → `club.html`, sezione `metric` e palmares
- **Footer affiliazione** → ripetuto in tutti i file, cerca `footer__affiliations`

## Note sull'allineamento istituzionale (aprile 2026)

Tutti i riferimenti istituzionali sono allineati alla narrativa ufficiale WUQKD:
- **Unione Italiana Qwan Ki Do** (presente in Italia dal 1981)
- **WUQKD** — World Union of Qwan Ki Do and Sino-Vietnamese Martial Arts
- **Scuola Long Phái Kung Fu** (denominazione tecnica)
- **Direzione tecnica**: M° Roberto Vismara

Nessun riferimento al fondatore originario del Qwan Ki Do, in coerenza con la separazione del 2020.
