/**
 * Time Machine Module
 * Manages the Temporal Dimension (Time Slider), Historical Eras, Time Capsule Spots,
 * and Community / Official Story Submissions.
 */

import { loadTimeCapsules } from './data-service.js';

let timeCapsules = [];
let selectedYear = 'all'; // 'all' or number like 1965
let isPlaying = false;
let playInterval = null;
let activeSpotId = null;

export async function initTimeMachine() {
  timeCapsules = await loadTimeCapsules();
  return timeCapsules;
}

export function getTimeCapsules() {
  return timeCapsules;
}

export function getSelectedYear() {
  return selectedYear;
}

export function setSelectedYear(year) {
  selectedYear = (year === 'all') ? 'all' : parseInt(year, 10);
  updateTimeSliderUI();
  return selectedYear;
}

export function getFilteredSpots(cityId = null) {
  let spots = timeCapsules;
  if (cityId) {
    spots = spots.filter(s => s.cityId === cityId);
  }

  if (selectedYear === 'all') {
    return spots;
  }

  const y = selectedYear;
  return spots.filter(spot => {
    return spot.chronicles && spot.chronicles.some(c => c.fromYear <= y && (c.toYear === null || c.toYear >= y));
  });
}

export function getActiveChronicleForYear(spot, year) {
  if (!spot || !spot.chronicles || !spot.chronicles.length) return null;
  if (year === 'all') return spot.chronicles[spot.chronicles.length - 1]; // latest by default
  const y = parseInt(year, 10);
  const found = spot.chronicles.find(c => c.fromYear <= y && (c.toYear === null || c.toYear >= y));
  return found || spot.chronicles[spot.chronicles.length - 1];
}

export function togglePlayback(onYearChange) {
  isPlaying = !isPlaying;
  const playBtn = document.getElementById('timePlayBtn');

  if (isPlaying) {
    if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause text-xs"></i>';
    if (selectedYear === 'all') selectedYear = 1910;

    playInterval = setInterval(() => {
      let nextYear = (typeof selectedYear === 'number') ? selectedYear + 5 : 1910;
      if (nextYear > 2026) {
        nextYear = 1910;
      }
      setSelectedYear(nextYear);
      if (onYearChange) onYearChange(nextYear);
    }, 1200);
  } else {
    stopPlayback();
  }
}

export function stopPlayback() {
  isPlaying = false;
  if (playInterval) clearInterval(playInterval);
  const playBtn = document.getElementById('timePlayBtn');
  if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-play text-xs"></i>';
}

export function updateTimeSliderUI() {
  const display = document.getElementById('currentYearDisplay');
  const slider = document.getElementById('timeYearRange');
  const badge = document.getElementById('activeEraBadge');

  if (slider) {
    slider.value = (selectedYear === 'all') ? 2026 : selectedYear;
  }

  if (display) {
    display.innerText = (selectedYear === 'all') ? 'Όλες οι Εποχές' : selectedYear;
  }

  if (badge) {
    if (selectedYear === 'all') {
      badge.innerText = 'Συνολική Ιστορική Κάλυψη';
      badge.className = 'text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-700/50';
    } else {
      let eraText = '21ος Αιώνας (Σύγχρονη Εποχή)';
      if (selectedYear < 1920) eraText = 'Αρχές 20ού Αιώνα';
      else if (selectedYear < 1945) eraText = 'Μεσοπόλεμος & Β΄ Π.Π.';
      else if (selectedYear < 1970) eraText = 'Μεταπολεμική Ανάπτυξη & 60s';
      else if (selectedYear < 1990) eraText = 'Δεκαετίες 70 & 80';
      else if (selectedYear < 2010) eraText = 'Ψηφιακή Έκρηξη & 90s/00s';

      badge.innerText = `${selectedYear}: ${eraText}`;
      badge.className = 'text-[11px] font-semibold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-700/50';
    }
  }

  // Update decade quick buttons
  const decadeButtons = document.querySelectorAll('.decade-btn');
  decadeButtons.forEach(btn => {
    const val = btn.getAttribute('data-year');
    if ((val === 'all' && selectedYear === 'all') || (val !== 'all' && parseInt(val, 10) === selectedYear)) {
      btn.className = 'decade-btn px-2 py-1 rounded bg-amber-500 text-slate-950 font-bold text-xs shadow transition';
    } else {
      btn.className = 'decade-btn px-2 py-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs transition';
    }
  });
}

/**
 * Open Spot Time Capsule Modal
 */
export function openSpotTimeCapsule(spotId, preferredYear = null) {
  const spot = timeCapsules.find(s => s.id === spotId);
  if (!spot) return;

  activeSpotId = spotId;
  const modal = document.getElementById('timeCapsuleModal');
  if (!modal) return;

  const targetYear = (preferredYear && preferredYear !== 'all') ? preferredYear : selectedYear;
  let activeChronicle = getActiveChronicleForYear(spot, targetYear);
  if (!activeChronicle && spot.chronicles && spot.chronicles.length) {
    activeChronicle = spot.chronicles[0];
  }

  renderTimeCapsuleModalContent(spot, activeChronicle);
  modal.classList.remove('hidden');
}

export function closeSpotTimeCapsule() {
  const modal = document.getElementById('timeCapsuleModal');
  if (modal) modal.classList.add('hidden');
  activeSpotId = null;
}

export function renderTimeCapsuleModalContent(spot, activeChronicle) {
  const container = document.getElementById('timeCapsuleModalBody');
  if (!container || !spot) return;

  const isOfficial = activeChronicle.authorType === 'official';

  container.innerHTML = `
    <!-- Spot Header -->
    <div class="p-6 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900">
      <div class="flex items-start justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 mb-1.5 flex-wrap">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
              <i class="fa-solid fa-hourglass-start text-[10px]"></i> Χρονοκάψουλα Σημείου
            </span>
            <span class="text-xs text-slate-400">
              <i class="fa-solid fa-location-dot text-rose-400"></i> ${spot.address || spot.name}
            </span>
          </div>
          <h2 class="text-2xl font-black text-white tracking-tight">${spot.name}</h2>
          <p class="text-xs sm:text-sm text-slate-400 mt-0.5 italic font-serif">${spot.englishName}</p>
        </div>
        <button onclick="closeSpotTimeCapsule()" class="h-9 w-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-700">
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>
      </div>

      <!-- Chronological Stepper (Eras at this Spot) -->
      <div class="mt-5 pt-4 border-t border-slate-800/80">
        <div class="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-2 flex items-center gap-1.5">
          <i class="fa-solid fa-layer-group text-sky-400"></i> Χρονικές Περίοδοι του Σημείου (Επιλέξτε Εποχή):
        </div>
        <div class="flex items-center gap-2 overflow-x-auto pb-1">
          ${spot.chronicles.map(c => {
            const isSelected = (activeChronicle.id === c.id);
            const eraLabel = c.toYear ? `${c.fromYear} - ${c.toYear}` : `${c.fromYear} - Σήμερα`;
            return `
              <button onclick="selectSpotEra('${c.id}')" class="px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
                isSelected 
                  ? 'bg-amber-500 text-slate-950 ring-2 ring-amber-400/50 shadow-lg' 
                  : 'bg-slate-800/90 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-700'
              }">
                <i class="fa-regular fa-clock text-[10px]"></i>
                <span>${eraLabel}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    </div>

    <!-- Active Chronicle Body -->
    <div class="p-6 space-y-6 overflow-y-auto max-h-[60vh]">
      
      <!-- Era Details Card -->
      <div class="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 relative overflow-hidden">
        <div class="flex items-start justify-between gap-4 mb-3">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-black text-amber-400 tracking-wide uppercase">
                ${activeChronicle.fromYear} — ${activeChronicle.toYear || 'Σήμερα'}
              </span>
              <span class="text-slate-500">•</span>
              <span class="text-xs text-sky-300 font-medium capitalize">
                ${activeChronicle.category === 'business' ? 'Εμπορικό Κατάστημα' : activeChronicle.category === 'culture' ? 'Πολιτιστικός Χώρος' : 'Ιστορικό Ορόσημο'}
              </span>
            </div>
            <h3 class="text-lg font-bold text-white">${activeChronicle.title}</h3>
          </div>

          <!-- Official vs Citizen Badge -->
          <div class="shrink-0">
            ${isOfficial ? `
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-sky-950/80 text-sky-300 border border-sky-600/50">
                <i class="fa-solid fa-shield-halved text-sky-400 text-[11px]"></i>
                <span>Επίσημο Αρχείο / Φορέας</span>
              </span>
            ` : `
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-600/50">
                <i class="fa-solid fa-user-group text-emerald-400 text-[11px]"></i>
                <span>Συλλογική Μνήμη Πολίτη</span>
              </span>
            `}
          </div>
        </div>

        <p class="text-slate-200 text-sm leading-relaxed mb-4">${activeChronicle.story}</p>

        <div class="flex items-center gap-2 text-xs text-slate-400 pt-3 border-t border-slate-700/50">
          <i class="fa-solid fa-feather-pointed text-amber-400"></i>
          <span>Καταγράφηκε από: <strong class="text-slate-200">${activeChronicle.authorName}</strong></span>
          ${activeChronicle.verified ? `<span class="text-emerald-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-circle-check text-[10px]"></i> Επαληθευμένο</span>` : ''}
        </div>
      </div>

      <!-- Photo Gallery of that Era -->
      ${(activeChronicle.photos && activeChronicle.photos.length) ? `
        <div>
          <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3 flex items-center gap-1.5">
            <i class="fa-solid fa-camera text-sky-400"></i> Φωτογραφικό Αρχείο της Εποχής (${activeChronicle.fromYear} - ${activeChronicle.toYear || 'Σήμερα'})
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${activeChronicle.photos.map(p => `
              <div class="group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-700/60 shadow-lg">
                <img src="${p.url}" alt="${p.caption}" class="w-full h-44 object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                <div class="p-3 bg-slate-900/95 border-t border-slate-800">
                  <div class="text-xs text-slate-200 font-medium">${p.caption}</div>
                  <div class="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                    <span class="text-amber-400 font-bold">${p.year || ''}</span>
                    <span>${p.credit || ''}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Memories / Community Comments -->
      <div>
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 flex items-center gap-1.5">
            <i class="fa-solid fa-comments text-emerald-400"></i> Μαρτυρίες & Αναμνήσεις Πολιτών (${(activeChronicle.memories || []).length})
          </h4>
          <button onclick="openAddMemoryForm('${spot.id}', '${activeChronicle.id}')" class="text-xs text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1">
            <i class="fa-solid fa-plus text-[10px]"></i> Προσθήκη Ανάμνησης
          </button>
        </div>

        <div class="space-y-2.5">
          ${(activeChronicle.memories && activeChronicle.memories.length) ? activeChronicle.memories.map(m => `
            <div class="p-3.5 rounded-xl bg-slate-800/30 border border-slate-700/40">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-bold text-slate-200">${m.author}</span>
                <span class="text-[11px] text-amber-400 font-mono">${m.year || ''}</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed italic font-serif">«${m.text}»</p>
            </div>
          `).join('') : `
            <div class="p-4 rounded-xl bg-slate-800/20 border border-slate-800 text-center text-xs text-slate-400">
              Δεν υπάρχουν ακόμη καταγεγραμμένες προσωπικές μαρτυρίες για αυτή την περίοδο. Γίνετε ο πρώτος που θα συνεισφέρει!
            </div>
          `}
        </div>
      </div>

      <!-- Add New Era / Story Button -->
      <div class="p-4 rounded-2xl bg-gradient-to-r from-sky-950/40 to-indigo-950/40 border border-sky-800/40 flex items-center justify-between flex-wrap gap-3">
        <div>
          <div class="text-xs font-bold text-sky-300">Γνωρίζετε άλλη περίοδο για αυτό το σημείο;</div>
          <div class="text-[11px] text-slate-400">Προσθέστε μια νέα χρονική περίοδο ή επίσημο αρχείο.</div>
        </div>
        <button onclick="openAddEraForm('${spot.id}')" class="px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md transition flex items-center gap-1.5">
          <i class="fa-solid fa-clock-rotate-left"></i> Νέα Χρονική Περίοδος
        </button>
      </div>

    </div>
  `;
}

export function selectSpotEra(chronicleId) {
  if (!activeSpotId) return;
  const spot = timeCapsules.find(s => s.id === activeSpotId);
  if (!spot) return;

  const chronicle = spot.chronicles.find(c => c.id === chronicleId);
  if (!chronicle) return;

  renderTimeCapsuleModalContent(spot, chronicle);
}

/**
 * Community Story Submission
 */
export function openAddMemoryForm(spotId, chronicleId) {
  const modal = document.getElementById('addMemoryModal');
  if (!modal) return;

  document.getElementById('formSpotId').value = spotId;
  document.getElementById('formChronicleId').value = chronicleId;
  modal.classList.remove('hidden');
}

export function closeAddMemoryModal() {
  const modal = document.getElementById('addMemoryModal');
  if (modal) modal.classList.add('hidden');
}

export function openAddEraForm(spotId) {
  const modal = document.getElementById('addEraModal');
  if (!modal) return;
  document.getElementById('formNewEraSpotId').value = spotId;
  modal.classList.remove('hidden');
}

export function closeAddEraModal() {
  const modal = document.getElementById('addEraModal');
  if (modal) modal.classList.add('hidden');
}

export function submitMemory(event) {
  event.preventDefault();
  const spotId = document.getElementById('formSpotId').value;
  const chronicleId = document.getElementById('formChronicleId').value;
  const author = document.getElementById('memoryAuthor').value.trim();
  const year = document.getElementById('memoryYear').value.trim();
  const text = document.getElementById('memoryText').value.trim();

  if (!author || !text) return;

  const spot = timeCapsules.find(s => s.id === spotId);
  if (spot) {
    const chronicle = spot.chronicles.find(c => c.id === chronicleId);
    if (chronicle) {
      if (!chronicle.memories) chronicle.memories = [];
      chronicle.memories.push({
        author,
        year: year ? parseInt(year, 10) : new Date().getFullYear(),
        text
      });
      // Refresh active view
      renderTimeCapsuleModalContent(spot, chronicle);
    }
  }

  closeAddMemoryModal();
  document.getElementById('memoryForm').reset();
}

export function submitNewEra(event) {
  event.preventDefault();
  const spotId = document.getElementById('formNewEraSpotId').value;
  const title = document.getElementById('eraTitle').value.trim();
  const fromYear = parseInt(document.getElementById('eraFromYear').value, 10);
  const toYearVal = document.getElementById('eraToYear').value.trim();
  const toYear = toYearVal ? parseInt(toYearVal, 10) : null;
  const authorName = document.getElementById('eraAuthorName').value.trim();
  const authorType = document.getElementById('eraAuthorType').value;
  const category = document.getElementById('eraCategory').value;
  const story = document.getElementById('eraStory').value.trim();
  const photoUrl = document.getElementById('eraPhotoUrl').value.trim();

  if (!title || isNaN(fromYear) || !story) return;

  const spot = timeCapsules.find(s => s.id === spotId);
  if (spot) {
    const newChronicle = {
      id: `chronicle-${Date.now()}`,
      fromYear,
      toYear,
      title,
      category,
      authorType,
      authorName: authorName || 'Ανώνυμος Πολίτης',
      verified: authorType === 'official',
      story,
      photos: photoUrl ? [{
        url: photoUrl,
        caption: title,
        year: fromYear,
        credit: authorName
      }] : [],
      memories: []
    };

    spot.chronicles.push(newChronicle);
    spot.chronicles.sort((a, b) => a.fromYear - b.fromYear);
    renderTimeCapsuleModalContent(spot, newChronicle);
  }

  closeAddEraModal();
  document.getElementById('eraForm').reset();
}
