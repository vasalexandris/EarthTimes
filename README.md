# EarthTimes 🌍⏳

**Το Παγκόσμιο Ημερολόγιο & Χρονοκάψουλα της Γης**  
*A Journey Across the Earth from the Present to the Past — A 4D Spatial-Temporal Chronicle*

EarthTimes is an interactive web platform and 4D time capsule combining geographical space with historical time. It enables users, municipalities, and institutions to explore Earth, countries, and neighborhoods across different decades, attaching stories, archival photographs, and collective memories to specific locations.

---

## 🚀 Key Features

* **Cinematic Landing Page:** Atmospheric introduction to the EarthTimes mission with direct launch into the Global Explorer.
* **Global Earth Explorer (Level 0):** Comprehensive planetary dossier covering world population, 195 countries, 7 continents, oceans, global languages, religions, and "Then vs. Now" (1926 vs. 2026).
* **Multi-Layer Base Maps:**
  * 🌌 **Dark Voyager** (CartoDB Dark Matter)
  * 🛰️ **Satellite Imagery** (Esri World Imagery)
  * 🏛️ **Political / Streets** (OpenStreetMap Standard)
  * 🏔️ **Topographical / Physical Relief** (OpenTopoMap)
* **Regional & Urban Scale (Level 1 & 2):** In-depth dossiers for states (e.g. Massachusetts) and cities (Boston, Cambridge, Salem, Plymouth, Worcester) with interactive points of interest (POIs).
* **Live Date Display:** Real-time localized calendar display.
* **Audio Narration (TTS):** Integrated speech synthesis for summaries.

---

## 📁 Project Architecture

```
earthtimes/
├── css/
│   └── style.css            # Custom animations, glassmorphism, map badge styling
├── data/
│   ├── world.json           # Planet Earth dataset (stats, geo, history, demographics, culture)
│   └── massachusetts.json   # State & municipal datasets with points of interest
├── js/
│   ├── data-service.js      # Asynchronous data loading & caching
│   ├── map.js               # Leaflet map controller, base layer switcher, pins & camera animations
│   ├── ui.js                # Dossier rendering, breadcrumbs, layer switcher UI, live date & TTS
│   └── app.js               # Main orchestrator & state manager
├── index.html               # Main application entry point (Landing Page + Explorer)
└── README.md
```

---

## 💻 Running Locally

EarthTimes uses standard ES modules and asynchronous data fetching. Serve the directory using any local web server:

```bash
# Using Node.js
npx serve .

# Or using Python
python -m http.server 8000
```

Then open `http://localhost:8000` (or the port specified) in your browser.
