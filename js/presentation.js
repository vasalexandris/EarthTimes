/**
 * Presentation Module (EarthTimes Slideshow Experience)
 * Generates an interactive, structured multi-slide presentation for cities & territories.
 * Features:
 * - Dynamic data synthesis (Overview, Geography, History, Culture, POIs, Gastronomy, Modern/Economy, Finale)
 * - 2 Premium Templates: 'velvet' (Velvet Gold Luxury) & 'cyber' (Cyber Neon Futuristic)
 * - Autoplay mode with animated progress timer
 * - AI Voice / TTS Narration (Web Speech API) in Greek
 * - Fullscreen, Keyboard navigation (Arrow keys, Space, Esc, F), and Mobile Touch Swipe
 */

import { getEntityLocalTime, getCuratedGuideItems, getCuratedGastroItems } from './ui.js?v=20261118_restore_ui_v4';
import { CITY_VIDEOS, getPoiVideoInfo } from './video-service.js?v=20261117_video_iframe_fix';

let currentEntity = null;
let currentEntityType = 'city';
let currentSlideIndex = 0;
let currentTheme = 'velvet'; // 'velvet' | 'cyber'
let isAutoplay = false;
let autoplayTimer = null;
let autoplayProgressTimer = null;
let autoplayStartTime = 0;
const SLIDE_DURATION = 8000; // 8 seconds per slide when narration is OFF
let isNarrating = false;
let isSpeaking = false;
let currentSpeechUtterance = null;
let speechCompletionTimer = null;
let speechSafetyTimer = null;
let estimatedDurationMs = 8000;

// Touch swipe tracking
let touchStartX = 0;
let touchStartY = 0;

export function isPresentationOpen() {
  const overlay = document.getElementById('mapPresentationOverlay');
  return overlay && !overlay.classList.contains('hidden');
}

export function openCityPresentation(entity = null, entityType = 'city') {
  // If no entity provided, attempt to get currently active entity from window
  if (!entity && window.getCurrentEntity) {
    entity = window.getCurrentEntity();
  }
  if (!entity) return;

  currentEntity = entity;
  currentEntityType = entityType;
  currentSlideIndex = 0;

  // Close any conflicting map overlays (video, wiki, street view, deep dive)
  if (window.closeMapVideoOverlay) window.closeMapVideoOverlay();
  if (window.closeMapWikiOverlay) window.closeMapWikiOverlay();
  if (window.closeMapStreetViewOverlay) window.closeMapStreetViewOverlay();
  if (window.closeDeepDiveOverlay) window.closeDeepDiveOverlay();

  const overlay = document.getElementById('mapPresentationOverlay');
  if (!overlay) return;

  overlay.classList.remove('hidden');

  // Update Header Title
  const titleEl = document.getElementById('presentationTitle');
  const subtitleEl = document.getElementById('presentationSubtitle');
  if (titleEl) {
    const flag = currentEntity.flag || '';
    const name = currentEntity.name || 'Πόλη';
    const enName = currentEntity.englishName ? `(${currentEntity.englishName})` : '';
    titleEl.innerHTML = `${flag} <span>${name}</span> <span class="text-xs sm:text-sm font-medium text-slate-400">${enName}</span>`;
  }
  if (subtitleEl) {
    subtitleEl.innerText = currentEntity.nickname 
      ? `«${currentEntity.nickname.replace(/^[«"]+|[»"]+$/g, '')}» • Διαδραστική Παρουσίαση`
      : 'Διαδραστικό Πανόραμα Πόλης & Πολιτισμού';
  }

  // Setup Keyboard and Touch Listeners once
  setupPresentationListeners();

  // Reset speech indicator
  updateSpeechIndicator(false, '');

  // Render first slide
  renderSlide(currentSlideIndex);

  // Update theme button
  updateThemeButtonUI();

  // Start playback (narration or autoplay)
  startSlidePlayback();
}

export function closeCityPresentation() {
  stopAutoplay();
  stopNarration();
  clearAllTimers();
  updateSpeechIndicator(false, '');

  const overlay = document.getElementById('mapPresentationOverlay');
  if (overlay) overlay.classList.add('hidden');

  // Exit fullscreen if active
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }
}

export function nextPresentationSlide() {
  const slides = getSlideDefinitions();
  if (currentSlideIndex < slides.length - 1) {
    goToPresentationSlide(currentSlideIndex + 1);
  } else {
    // Reached the end of the presentation!
    // Stop autoplay so it NEVER loops forever.
    stopAutoplay();
    const nextBtn = document.getElementById('presNextBtn');
    if (nextBtn) {
      nextBtn.innerHTML = `<span>Ολοκληρώθηκε</span> <i class="fa-solid fa-check text-xs text-emerald-400"></i>`;
    }
  }
}

export function prevPresentationSlide() {
  if (currentSlideIndex > 0) {
    goToPresentationSlide(currentSlideIndex - 1);
  }
}

export function goToPresentationSlide(index) {
  const slides = getSlideDefinitions();
  if (index < 0 || index >= slides.length) return;

  // 1. Clear all timers and detach previous utterance listeners
  clearAllTimers();
  if (currentSpeechUtterance) {
    currentSpeechUtterance.onstart = null;
    currentSpeechUtterance.onend = null;
    currentSpeechUtterance.onerror = null;
    currentSpeechUtterance = null;
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  isSpeaking = false;
  updateSpeechIndicator(false, '');

  // 2. Render new slide DOM & counter
  currentSlideIndex = index;
  renderSlide(currentSlideIndex);

  // 3. Initiate playback for the new slide
  startSlidePlayback();
}

function startSlidePlayback() {
  clearAllTimers();

  if (isNarrating && ('speechSynthesis' in window)) {
    // Narration is ON: speak the slide after a tiny 60ms pause for audio buffer clearance
    setTimeout(() => {
      speakCurrentSlide();
    }, 60);
  } else if (isAutoplay) {
    // Narration is OFF, Autoplay is ON: start standard fixed 8-second timer
    startStandardAutoplayTimer();
  } else {
    // Both OFF: manual mode
    updateProgressBar(currentSlideIndex, 0);
  }
}

export function togglePresentationAutoplay() {
  if (isAutoplay) {
    stopAutoplay();
  } else {
    startAutoplay();
  }
}

function startAutoplay() {
  isAutoplay = true;
  updateAutoplayButtonUI();

  // If user was on the final slide, restart from slide 0
  const slides = getSlideDefinitions();
  if (currentSlideIndex >= slides.length - 1) {
    goToPresentationSlide(0);
    return;
  }

  startSlidePlayback();
}

function stopAutoplay() {
  isAutoplay = false;
  clearAutoplayTimers();
  clearSpeechTimers();
  updateAutoplayButtonUI();
  updateProgressBar(currentSlideIndex, 0);
}

function clearAutoplayTimers() {
  if (autoplayTimer) {
    clearTimeout(autoplayTimer);
    autoplayTimer = null;
  }
  if (autoplayProgressTimer) {
    clearInterval(autoplayProgressTimer);
    autoplayProgressTimer = null;
  }
}

function clearSpeechTimers() {
  if (speechCompletionTimer) {
    clearTimeout(speechCompletionTimer);
    speechCompletionTimer = null;
  }
  if (speechSafetyTimer) {
    clearTimeout(speechSafetyTimer);
    speechSafetyTimer = null;
  }
}

function clearAllTimers() {
  clearAutoplayTimers();
  clearSpeechTimers();
}

function updateSpeechIndicator(active, text = '') {
  const statusEl = document.getElementById('presSpeechStatus');
  const textEl = document.getElementById('presSpeechStatusText');
  const iconEl = document.getElementById('presSpeechStatusIcon');
  if (!statusEl) return;

  if (active) {
    statusEl.classList.remove('hidden');
    statusEl.classList.add('flex');
    if (textEl) textEl.innerText = text || 'Αφήγηση σε εξέλιξη...';
    if (iconEl) iconEl.className = 'fa-solid fa-volume-high text-emerald-400 animate-pulse text-xs';
  } else if (text) {
    statusEl.classList.remove('hidden');
    statusEl.classList.add('flex');
    if (textEl) textEl.innerText = text;
    if (iconEl) iconEl.className = 'fa-solid fa-circle-check text-emerald-400 text-xs';
  } else {
    statusEl.classList.add('hidden');
    statusEl.classList.remove('flex');
  }
}

function startSpeechProgressTracking(durationMs) {
  if (autoplayProgressTimer) clearInterval(autoplayProgressTimer);
  autoplayStartTime = Date.now();

  autoplayProgressTimer = setInterval(() => {
    if (!isSpeaking) {
      clearInterval(autoplayProgressTimer);
      autoplayProgressTimer = null;
      return;
    }
    const elapsed = Date.now() - autoplayStartTime;
    // Cap at 0.95 until onend fires
    const progress = Math.min(0.95, elapsed / durationMs);
    updateProgressBar(currentSlideIndex, progress);
  }, 60);
}

function onSlideSpeechCompleted() {
  updateSpeechIndicator(false, 'Ολοκληρώθηκε');
  updateProgressBar(currentSlideIndex, 1.0);

  if (isAutoplay) {
    clearSpeechTimers();
    // Pause for 1.4s so user comfortably absorbs the conclusion before transition
    speechCompletionTimer = setTimeout(() => {
      if (isAutoplay) {
        nextPresentationSlide();
      }
    }, 1400);
  } else {
    // Fade out status badge after 2.5s in manual mode
    setTimeout(() => {
      if (!isSpeaking) updateSpeechIndicator(false, '');
    }, 2500);
  }
}

function startStandardAutoplayTimer() {
  clearAutoplayTimers();
  autoplayStartTime = Date.now();

  autoplayProgressTimer = setInterval(() => {
    const elapsed = Date.now() - autoplayStartTime;
    const progress = Math.min(1, elapsed / SLIDE_DURATION);
    updateProgressBar(currentSlideIndex, progress);
  }, 50);

  autoplayTimer = setTimeout(() => {
    nextPresentationSlide();
  }, SLIDE_DURATION);
}

function updateAutoplayButtonUI() {
  const icon = document.getElementById('presAutoplayIcon');
  const label = document.getElementById('presAutoplayLabel');
  const btn = document.getElementById('presAutoplayBtn');
  if (!btn) return;

  if (isAutoplay) {
    if (icon) icon.className = 'fa-solid fa-pause text-amber-400';
    if (label) label.innerText = 'Pause';
    btn.className = 'px-2.5 py-1.5 rounded-lg bg-amber-600/25 hover:bg-amber-600/35 text-amber-300 hover:text-white border border-amber-500/40 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow';
  } else {
    if (icon) icon.className = 'fa-solid fa-play text-emerald-400';
    if (label) label.innerText = 'Play';
    btn.className = 'px-2.5 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 hover:text-white border border-emerald-500/40 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow';
  }
}

export function togglePresentationTheme() {
  currentTheme = currentTheme === 'velvet' ? 'cyber' : 'velvet';
  updateThemeButtonUI();
  renderSlide(currentSlideIndex);
}

function updateThemeButtonUI() {
  const icon = document.getElementById('presThemeIcon');
  const label = document.getElementById('presThemeLabel');
  if (!icon || !label) return;

  if (currentTheme === 'velvet') {
    icon.className = 'fa-solid fa-wand-magic-sparkles text-amber-400';
    label.innerText = 'Velvet Gold';
  } else {
    icon.className = 'fa-solid fa-microchip text-cyan-400';
    label.innerText = 'Cyber Neon';
  }
}

export function togglePresentationNarration() {
  if (isNarrating) {
    stopNarration();
  } else {
    startNarration();
  }
}

function startNarration() {
  if (!('speechSynthesis' in window)) {
    alert('Η λειτουργία εκφώνησης δεν υποστηρίζεται από το πρόγραμμα περιήγησής σας.');
    return;
  }
  isNarrating = true;
  updateNarrateButtonUI();
  startSlidePlayback();
}

function stopNarration() {
  isNarrating = false;
  isSpeaking = false;
  clearSpeechTimers();
  if (currentSpeechUtterance) {
    currentSpeechUtterance.onstart = null;
    currentSpeechUtterance.onend = null;
    currentSpeechUtterance.onerror = null;
    currentSpeechUtterance = null;
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  updateSpeechIndicator(false, '');
  updateNarrateButtonUI();

  // If autoplay is active, smoothly switch to standard 8s timer
  if (isAutoplay) {
    startSlidePlayback();
  }
}

function updateNarrateButtonUI() {
  const icon = document.getElementById('presNarrateIcon');
  const btn = document.getElementById('presNarrateBtn');
  if (!icon || !btn) return;

  if (isNarrating) {
    icon.className = 'fa-solid fa-volume-high text-emerald-400 animate-pulse';
    btn.className = 'px-2.5 py-1.5 rounded-lg bg-emerald-600/25 hover:bg-emerald-600/35 text-emerald-300 hover:text-white border border-emerald-500/40 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow';
  } else {
    icon.className = 'fa-solid fa-volume-xmark text-slate-400';
    btn.className = 'px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow';
  }
}

function speakCurrentSlide() {
  if (!isNarrating || !('speechSynthesis' in window)) return;

  clearSpeechTimers();

  const slides = getSlideDefinitions();
  const slide = slides[currentSlideIndex];
  if (!slide || !slide.speechText) {
    isSpeaking = false;
    updateSpeechIndicator(false, '');
    if (isAutoplay) {
      speechCompletionTimer = setTimeout(() => {
        if (isAutoplay) nextPresentationSlide();
      }, 3500);
    }
    return;
  }

  const cleanText = slide.speechText
    .replace(/<[^>]*>/g, '')
    .replace(/\[\d+\]/g, '')
    .replace(/[«»]/g, '')
    .trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  currentSpeechUtterance = utterance;
  utterance.lang = 'el-GR';
  utterance.rate = 0.95;

  const voices = window.speechSynthesis.getVoices();
  const elVoice = voices.find(v => v.lang.startsWith('el'));
  if (elVoice) utterance.voice = elVoice;

  // Greek speaking speed: ~2.3 words/sec + 2s padding
  const words = cleanText.split(/\s+/).filter(Boolean).length;
  estimatedDurationMs = Math.max(5000, Math.round((words / 2.3) * 1000) + 2000);

  utterance.onstart = () => {
    // Only proceed if this utterance is still the active one
    if (currentSpeechUtterance !== utterance) return;
    isSpeaking = true;
    updateSpeechIndicator(true, 'Αφήγηση σε εξέλιξη...');
    if (isAutoplay) {
      startSpeechProgressTracking(estimatedDurationMs);
    }
  };

  utterance.onend = () => {
    // Only proceed if this utterance is still the active one
    if (currentSpeechUtterance !== utterance) return;
    isSpeaking = false;
    clearSpeechTimers();
    onSlideSpeechCompleted();
  };

  utterance.onerror = (e) => {
    // CRITICAL: Ignore cancellation/interruption events completely!
    if (e.error === 'canceled' || e.error === 'interrupted') {
      return;
    }
    if (currentSpeechUtterance !== utterance) return;
    console.warn('SpeechSynthesis error:', e.error);
    isSpeaking = false;
    clearSpeechTimers();
    updateSpeechIndicator(false, '');
    if (isAutoplay) {
      speechCompletionTimer = setTimeout(() => {
        if (isAutoplay) nextPresentationSlide();
      }, SLIDE_DURATION);
    }
  };

  window.speechSynthesis.speak(utterance);
}

export function togglePresentationFullscreen() {
  const overlay = document.getElementById('mapPresentationOverlay');
  if (!overlay) return;

  if (!document.fullscreenElement) {
    overlay.requestFullscreen?.().catch(() => {});
  } else {
    document.exitFullscreen?.().catch(() => {});
  }
}

let listenersAttached = false;
function setupPresentationListeners() {
  if (listenersAttached) return;
  listenersAttached = true;

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!isPresentationOpen()) return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      e.preventDefault();
      nextPresentationSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prevPresentationSlide();
    } else if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      togglePresentationAutoplay();
    } else if (e.key === 'Escape') {
      closeCityPresentation();
    } else if (e.key === 'f' || e.key === 'F') {
      togglePresentationFullscreen();
    }
  });

  // Mobile Touch Swipe Navigation
  const viewport = document.getElementById('presentationViewport');
  if (viewport) {
    viewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      // Horizontal swipe threshold 45px, ensure horizontal movement dominates
      if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
        if (deltaX < 0) {
          nextPresentationSlide();
        } else {
          prevPresentationSlide();
        }
      }
    }, { passive: true });
  }

  // Fullscreen change icon toggle
  document.addEventListener('fullscreenchange', () => {
    const icon = document.getElementById('presFullscreenIcon');
    if (icon) {
      if (document.fullscreenElement) {
        icon.className = 'fa-solid fa-compress text-xs text-amber-400';
      } else {
        icon.className = 'fa-solid fa-expand text-xs';
      }
    }
  });
}

function updateProgressBar(slideIndex, currentSlideProgress = 0) {
  const bar = document.getElementById('presentationProgressBar');
  if (!bar) return;
  const total = getSlideDefinitions().length;
  if (total <= 1) return;

  const baseFraction = slideIndex / (total - 1);
  const nextFraction = (slideIndex + 1) / (total - 1);
  const currentFraction = baseFraction + (nextFraction - baseFraction) * currentSlideProgress;

  const percent = Math.min(100, Math.max(5, currentFraction * 100));
  bar.style.width = `${percent}%`;
}

// =========================================================================
// SLIDE DEFINITIONS BUILDER (8 Rich Slides per City)
// =========================================================================

function getSlideDefinitions() {
  if (!currentEntity) return [];

  const e = currentEntity;
  const timeInfo = getEntityLocalTime(e, currentEntityType);
  const guideItems = getCuratedGuideItems ? getCuratedGuideItems(e) : (e.pois || []);
  const gastroItems = getCuratedGastroItems ? getCuratedGastroItems(e) : [];
  const videoTour = CITY_VIDEOS && CITY_VIDEOS[e.id];

  const slides = [
    // 1. Hero Overview & Identity
    {
      id: 'overview',
      tag: '01 • Ταυτότητα & Επισκόπηση',
      icon: 'fa-earth-americas',
      title: `${e.name || 'Πόλη'} ${e.englishName ? '· ' + e.englishName : ''}`,
      speechText: `${e.name}. ${e.nickname || ''}. ${e.quote || ''}`,
      render: () => renderSlide1Overview(e, timeInfo)
    },
    // 2. Geography & Landscape
    {
      id: 'geography',
      tag: '02 • Γεωγραφία & Ανάγλυφο',
      icon: 'fa-mountain-sun',
      title: 'Φυσικό Τοπίο & Γεωγραφικό Ανάγλυφο',
      speechText: `Γεωγραφία για την πόλη ${e.name}. ${e.geo?.summary || ''}`,
      render: () => renderSlide2Geography(e)
    },
    // 3. History & Milestones
    {
      id: 'history',
      tag: '03 • Ιστορική Διαδρομή',
      icon: 'fa-landmark',
      title: 'Ιστορικοί Σταθμοί & Χρονολόγιο',
      speechText: `Ιστορική διαδρομή της πόλης ${e.name}. ${e.hist?.summary || ''}`,
      render: () => renderSlide3History(e)
    },
    // 4. Culture & Heritage
    {
      id: 'culture',
      tag: '04 • Πολιτισμός & Τέχνες',
      icon: 'fa-palette',
      title: 'Πολιτιστική Ταυτότητα & Παράδοση',
      speechText: `Πολιτισμός και τέχνες. ${e.cult?.summary || ''}`,
      render: () => renderSlide4Culture(e)
    },
    // 5. Landmarks & Attractions
    {
      id: 'landmarks',
      tag: '05 • Κορυφαία Αξιοθέατα',
      icon: 'fa-compass',
      title: 'Εμβληματικά Μνημεία & Σημεία Ενδιαφέροντος',
      speechText: `Κορυφαία αξιοθέατα στην πόλη ${e.name}. ${guideItems.slice(0, 3).map(g => g.title).join(', ')}.`,
      render: () => renderSlide5Landmarks(e, guideItems)
    },
    // 6. Gastronomy & Flavors
    {
      id: 'gastronomy',
      tag: '06 • Γαστρονομία & Γεύσεις',
      icon: 'fa-utensils',
      title: 'Τοπική Κουζίνα & Γαστρονομική Παράδοση',
      speechText: `Γαστρονομία και τοπικές γεύσεις στην πόλη ${e.name}. ${gastroItems.slice(0, 3).map(g => g.title).join(', ')}.`,
      render: () => renderSlide6Gastronomy(e, gastroItems)
    },
    // 7. Modern Identity & Innovation
    {
      id: 'modern',
      tag: '07 • Σύγχρονη Πόλη & Κοινωνία',
      icon: 'fa-lightbulb',
      title: 'Καινοτομία, Κοινωνία & Σύγχρονος Παλμός',
      speechText: `Σύγχρονη ταυτότητα και ανάπτυξη. ${e.demo?.summary || ''}`,
      render: () => renderSlide7Modern(e)
    },
    // 8. Travel Finale & Exploration
    {
      id: 'finale',
      tag: '08 • Ταξιδιωτική Σύνοψη',
      icon: 'fa-paper-plane',
      title: 'Εξερευνήστε την Πόλη στο EarthTimes',
      speechText: `Εξερευνήστε την πόλη ${e.name} με διαδραστικούς χάρτες, βίντεο και τρισδιάστατη περιήγηση.`,
      render: () => renderSlide8Finale(e, videoTour)
    }
  ];

  return slides;
}

// =========================================================================
// RENDER INDIVIDUAL SLIDES
// =========================================================================

function renderSlide(index) {
  const slides = getSlideDefinitions();
  if (index < 0 || index >= slides.length) return;

  const slide = slides[index];
  const viewport = document.getElementById('presentationViewport');
  if (!viewport) return;

  // Apply theme classes to viewport
  const themeClass = currentTheme === 'velvet'
    ? 'bg-gradient-to-br from-slate-950 via-[#0e1726] to-[#1c1424] text-slate-100'
    : 'bg-gradient-to-br from-slate-950 via-[#031d33] to-[#0a1128] text-slate-100';

  viewport.className = `flex-1 relative overflow-hidden flex flex-col justify-center items-center p-3 sm:p-6 md:p-8 transition-colors duration-500 ${themeClass}`;

  // Render Slide Content Card
  viewport.innerHTML = `
    <div class="w-full max-w-5xl h-full flex flex-col justify-between animate-[presSlideIn_0.35s_cubic-bezier(0.16,1,0.3,1)] overflow-y-auto pr-1">
      <!-- Slide Tag & Category -->
      <div class="flex items-center justify-between gap-2 mb-2 sm:mb-4 shrink-0">
        <span class="${currentTheme === 'velvet' ? 'bg-amber-500/15 text-amber-300 border-amber-500/30' : 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'} px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-black tracking-wider uppercase border flex items-center gap-1.5 shadow-sm">
          <i class="fa-solid ${slide.icon}"></i>
          <span>${slide.tag}</span>
        </span>
        <span class="text-[11px] font-mono text-slate-400">EarthTimes Presentation Deck</span>
      </div>

      <!-- Slide Main Content Container -->
      <div class="flex-1 flex flex-col justify-center my-auto min-h-0">
        ${slide.render()}
      </div>
    </div>
  `;

  // Update Dots & Counter
  renderDotsAndCounter(index, slides.length);
}

function renderDotsAndCounter(activeIndex, total) {
  const counter = document.getElementById('presentationCounter');
  if (counter) counter.innerText = `${activeIndex + 1} / ${total}`;

  const dotsContainer = document.getElementById('presentationDots');
  if (!dotsContainer) return;

  dotsContainer.innerHTML = Array.from({ length: total }).map((_, i) => {
    const isActive = i === activeIndex;
    const activeColor = currentTheme === 'velvet' ? 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)] w-5' : 'bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)] w-5';
    const inactiveColor = 'bg-slate-700 hover:bg-slate-500 w-2';
    return `
      <button onclick="window.goToPresentationSlide(${i})" title="Διαφάνεια ${i + 1}" class="h-2 rounded-full transition-all duration-300 cursor-pointer ${isActive ? activeColor : inactiveColor}"></button>
    `;
  }).join('');

  // Update Prev/Next button states
  const prevBtn = document.getElementById('presPrevBtn');
  const nextBtn = document.getElementById('presNextBtn');
  if (prevBtn) {
    prevBtn.disabled = activeIndex === 0;
    prevBtn.style.opacity = activeIndex === 0 ? '0.4' : '1';
  }
  if (nextBtn) {
    if (activeIndex === total - 1) {
      nextBtn.innerHTML = `<span>Ολοκλήρωση</span> <i class="fa-solid fa-check text-xs"></i>`;
    } else {
      nextBtn.innerHTML = `<span class="hidden sm:inline">Επόμενη</span> <i class="fa-solid fa-arrow-right text-xs"></i>`;
    }
  }
}

// =========================================================================
// SLIDE HTML TEMPLATES & VISUAL PHOTOGRAPHY ENHANCEMENT
// =========================================================================

function escapeStr(str) {
  if (!str) return '';
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '&quot;')
    .replace(/\n/g, ' ');
}

function getSlidePhoto(slideType, entity) {
  if (!entity) return null;
  const vidEntry = CITY_VIDEOS ? CITY_VIDEOS[entity.id] : null;
  const droneId = vidEntry?.drone?.youtubeId;
  const walkingId = vidEntry?.walking?.youtubeId;
  const guideId = vidEntry?.guide?.youtubeId;

  let chosenId = null;
  if (slideType === 'overview') {
    chosenId = droneId || walkingId || guideId;
  } else if (slideType === 'geography') {
    chosenId = droneId || walkingId;
  } else if (slideType === 'history') {
    chosenId = guideId || walkingId || droneId;
  } else if (slideType === 'culture') {
    chosenId = walkingId || guideId || droneId;
  } else if (slideType === 'gastronomy') {
    chosenId = walkingId || guideId || droneId;
  } else if (slideType === 'modern') {
    chosenId = droneId || walkingId;
  } else if (slideType === 'finale') {
    chosenId = droneId || walkingId || guideId;
  }

  if (chosenId) {
    return `https://img.youtube.com/vi/${chosenId}/hqdefault.jpg`;
  }
  return null;
}

// Slide 1: Hero Overview & Identity
function renderSlide1Overview(e, timeInfo) {
  const isVelvet = currentTheme === 'velvet';
  const cardBorder = isVelvet ? 'border-amber-500/25 bg-slate-900/60' : 'border-cyan-500/30 bg-slate-900/60';
  const accentText = isVelvet ? 'text-amber-400' : 'text-cyan-400';
  const quoteText = isVelvet ? 'text-amber-200/90' : 'text-cyan-200/90';

  const pop = e.stats?.population || e.population || 'Ευρωπαϊκή Μητρόπολη';
  const founded = e.stats?.founded || e.founded || 'Αρχαιότητα';
  const landmark = e.landmark || e.stats?.landmark || e.stats?.famousFor || e.badge || 'Ιστορικό Κέντρο';
  const sunBadge = timeInfo.isDay ? '☀️ Ημέρα' : '🌙 Νύχτα';
  const photoUrl = getSlidePhoto('overview', e);

  return `
    <div class="space-y-3 sm:space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800 pb-2 sm:pb-3">
        <div>
          <div class="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">
            <span>${e.flag || '📍'}</span>
            <span>${e.englishName || ''}</span>
            <span>•</span>
            <span class="${accentText}">${e.nickname || 'Παγκόσμιος Προορισμός'}</span>
          </div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            ${e.name || 'Πόλη'}
          </h1>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-mono font-bold text-slate-300">
            ${timeInfo.title}: <strong class="${accentText}">${timeInfo.time}</strong> (${sunBadge})
          </span>
        </div>
      </div>

      <!-- Main Visual Grid: Photo & Content -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
        ${photoUrl ? `
          <div class="md:col-span-5 relative rounded-2xl overflow-hidden border ${cardBorder} shadow-2xl h-44 sm:h-52 md:h-auto min-h-[170px] group bg-slate-900">
            <img src="${photoUrl}" alt="${e.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700" onerror="this.style.display='none'">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-slate-950/70 px-2 py-0.5 rounded backdrop-blur border border-amber-500/30 w-fit">
                <i class="fa-solid fa-camera mr-1"></i> Πανοραμική Θέα 4K
              </span>
              <span class="text-xs font-semibold text-white mt-1 drop-shadow">${e.name} ${e.englishName ? '• ' + e.englishName : ''}</span>
            </div>
          </div>
        ` : ''}

        <div class="${photoUrl ? 'md:col-span-7' : 'md:col-span-12'} flex flex-col justify-between gap-3">
          <!-- Stylized Quote -->
          ${e.quote ? `
            <div class="p-3 sm:p-4 rounded-2xl ${cardBorder} backdrop-blur-md border shadow-lg flex items-start gap-3 flex-1">
              <i class="fa-solid fa-quote-left text-lg sm:text-xl ${accentText} opacity-60 shrink-0 mt-0.5"></i>
              <p class="text-xs sm:text-sm font-serif italic ${quoteText} leading-relaxed">
                ${e.quote}
              </p>
            </div>
          ` : ''}

          <!-- 4 Quick Stat Badges -->
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2.5 rounded-xl ${cardBorder} backdrop-blur-md border shadow text-center">
              <div class="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Πληθυσμός</div>
              <div class="text-xs sm:text-sm font-black text-white truncate">${pop}</div>
            </div>
            <div class="p-2.5 rounded-xl ${cardBorder} backdrop-blur-md border shadow text-center">
              <div class="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Ίδρυση / Εποχή</div>
              <div class="text-xs sm:text-sm font-black ${accentText} truncate">${founded}</div>
            </div>
            <div class="p-2.5 rounded-xl ${cardBorder} backdrop-blur-md border shadow text-center">
              <div class="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Ορόσημο</div>
              <div class="text-xs sm:text-sm font-black text-white truncate" title="${landmark}">${landmark}</div>
            </div>
            <div class="p-2.5 rounded-xl ${cardBorder} backdrop-blur-md border shadow text-center">
              <div class="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Συντεταγμένες</div>
              <div class="text-xs font-mono font-bold text-slate-300 truncate">
                ${e.coords ? `${e.coords[0].toFixed(2)}°, ${e.coords[1].toFixed(2)}°` : 'Γεωγραφικός Κόμβος'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Slide 2: Geography & Nature
function renderSlide2Geography(e) {
  const isVelvet = currentTheme === 'velvet';
  const cardBorder = isVelvet ? 'border-amber-500/25 bg-slate-900/60' : 'border-cyan-500/30 bg-slate-900/60';
  const accentText = isVelvet ? 'text-amber-400' : 'text-cyan-400';

  const summary = e.geo?.summary || 'Πόλη χτισμένη σε στρατηγική γεωγραφική τοποθεσία, συνδυάζοντας φυσικό ανάγλυφο, πλούσια οικοσυστήματα και μοναδικό τοπικό μικροκλίμα.';
  const highlights = e.geo?.highlights || [];
  const photoUrl = getSlidePhoto('geography', e);

  return `
    <div class="space-y-3">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
        <div class="${photoUrl ? 'md:col-span-8' : 'md:col-span-12'} p-3.5 sm:p-4 rounded-2xl ${cardBorder} backdrop-blur-md border shadow-lg flex flex-col justify-center">
          <h4 class="text-xs font-black uppercase tracking-wider ${accentText} mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-map-location-dot"></i>
            <span>Φυσικό Περιβάλλον & Τοπογραφία</span>
          </h4>
          <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
            ${summary}
          </p>
        </div>

        ${photoUrl ? `
          <div class="md:col-span-4 relative rounded-2xl overflow-hidden border ${cardBorder} shadow-lg h-32 sm:h-36 md:h-auto min-h-[120px] bg-slate-900">
            <img src="${photoUrl}" alt="Γεωγραφικό Ανάγλυφο" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-2.5">
              <span class="text-[10px] font-bold text-emerald-300 flex items-center gap-1">
                <i class="fa-solid fa-mountain-sun"></i> Φυσικό Ανάγλυφο
              </span>
            </div>
          </div>
        ` : ''}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${highlights.length > 0 ? highlights.slice(0, 4).map((h, i) => `
          <div class="p-3 rounded-xl ${cardBorder} backdrop-blur-md border shadow flex items-start gap-2.5">
            <span class="w-7 h-7 rounded-lg ${isVelvet ? 'bg-amber-500/20 text-amber-300' : 'bg-cyan-500/20 text-cyan-300'} flex items-center justify-center shrink-0 text-xs font-bold">
              ${i + 1}
            </span>
            <div class="min-w-0">
              <h5 class="text-xs font-bold text-white mb-0.5 truncate">${h.title}</h5>
              <p class="text-[11px] text-slate-300 leading-relaxed">${h.desc}</p>
            </div>
          </div>
        `).join('') : `
          <div class="p-3 rounded-xl ${cardBorder} backdrop-blur-md border shadow">
            <h5 class="text-xs font-bold text-white mb-1">🌿 Φυσικό Τοπίο</h5>
            <p class="text-xs text-slate-300 leading-relaxed">Μοναδικό οικοσύστημα και πράσινοι πνεύμονες που πλαισιώνουν την αστική ζώνη.</p>
          </div>
          <div class="p-3 rounded-xl ${cardBorder} backdrop-blur-md border shadow">
            <h5 class="text-xs font-bold text-white mb-1">🌊 Υδάτινοι Πόροι</h5>
            <p class="text-xs text-slate-300 leading-relaxed">Ποταμοί, ακτογραμμές ή φυσικές πηγές που καθόρισαν την ανάπτυξη της πόλης.</p>
          </div>
        `}
      </div>
    </div>
  `;
}

// Slide 3: History & Milestones
function renderSlide3History(e) {
  const isVelvet = currentTheme === 'velvet';
  const cardBorder = isVelvet ? 'border-amber-500/25 bg-slate-900/60' : 'border-cyan-500/30 bg-slate-900/60';
  const accentText = isVelvet ? 'text-amber-400' : 'text-cyan-400';
  const badgeBg = isVelvet ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';

  const summary = e.hist?.summary || 'Μια μακραίωνη ιστορική διαδρομή γεμάτη κομβικά γεγονότα, αναγεννησιακές περιόδους και πολιτιστικές κατακτήσεις.';
  const highlights = e.hist?.highlights || [];
  const pastPresent = e.pastVsPresent || [];
  const photoUrl = getSlidePhoto('history', e);

  return `
    <div class="space-y-3">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
        <div class="${photoUrl ? 'md:col-span-8' : 'md:col-span-12'} p-3.5 sm:p-4 rounded-2xl ${cardBorder} backdrop-blur-md border shadow-lg flex flex-col justify-center">
          <h4 class="text-xs font-black uppercase tracking-wider ${accentText} mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-hourglass-half"></i>
            <span>Ιστορικό Χρονικό & Κληρονομιά</span>
          </h4>
          <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
            ${summary}
          </p>
        </div>

        ${photoUrl ? `
          <div class="md:col-span-4 relative rounded-2xl overflow-hidden border ${cardBorder} shadow-lg h-32 sm:h-36 md:h-auto min-h-[120px] bg-slate-900">
            <img src="${photoUrl}" alt="Ιστορικό Ορόσημο" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-2.5">
              <span class="text-[10px] font-bold text-amber-300 flex items-center gap-1">
                <i class="fa-solid fa-landmark"></i> Ιστορικό Ορόσημο
              </span>
            </div>
          </div>
        ` : ''}
      </div>

      <!-- Timeline Highlights Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        ${highlights.length > 0 ? highlights.slice(0, 3).map(h => `
          <div class="p-3 rounded-xl ${cardBorder} backdrop-blur-md border shadow flex flex-col justify-between">
            <div>
              <span class="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold ${badgeBg} border mb-1.5">
                ${h.year || 'Ορόσημο'}
              </span>
              <h5 class="text-xs font-bold text-white mb-1">${h.event || h.title}</h5>
              <p class="text-[11px] text-slate-300 leading-relaxed line-clamp-3">${h.desc || ''}</p>
            </div>
          </div>
        `).join('') : `
          <div class="p-3 rounded-xl ${cardBorder} backdrop-blur-md border shadow col-span-3 text-center">
            <p class="text-xs text-slate-300">Ιστορική πόλη με βαθιές ρίζες και αξιοσημείωτα μνημεία από κάθε περίοδο.</p>
          </div>
        `}
      </div>

      <!-- Past vs Present Snippet -->
      ${pastPresent.length > 0 ? `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
          ${pastPresent.slice(0, 2).map(pvp => `
            <div class="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
              <span class="font-bold text-amber-400 block mb-0.5">⏳ ${pvp.epoch}</span>
              <p class="text-slate-300 leading-relaxed text-[11px] line-clamp-2">${pvp.content}</p>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

// Slide 4: Culture & Heritage
function renderSlide4Culture(e) {
  const isVelvet = currentTheme === 'velvet';
  const cardBorder = isVelvet ? 'border-amber-500/25 bg-slate-900/60' : 'border-cyan-500/30 bg-slate-900/60';
  const accentText = isVelvet ? 'text-amber-400' : 'text-cyan-400';

  const summary = e.cult?.summary || 'Ζωντανή καλλιτεχνική δημιουργία, παραδόσεις, φεστιβάλ και αρχιτεκτονικά αριστουργήματα.';
  const items = e.cult?.items || [];
  const photoUrl = getSlidePhoto('culture', e);

  return `
    <div class="space-y-3">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
        <div class="${photoUrl ? 'md:col-span-8' : 'md:col-span-12'} p-3.5 sm:p-4 rounded-2xl ${cardBorder} backdrop-blur-md border shadow-lg flex flex-col justify-center">
          <h4 class="text-xs font-black uppercase tracking-wider ${accentText} mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-masks-theater"></i>
            <span>Πολιτισμός, Τέχνες & Παράδοση</span>
          </h4>
          <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
            ${summary}
          </p>
        </div>

        ${photoUrl ? `
          <div class="md:col-span-4 relative rounded-2xl overflow-hidden border ${cardBorder} shadow-lg h-32 sm:h-36 md:h-auto min-h-[120px] bg-slate-900">
            <img src="${photoUrl}" alt="Πολιτισμός" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-2.5">
              <span class="text-[10px] font-bold text-violet-300 flex items-center gap-1">
                <i class="fa-solid fa-palette"></i> Τέχνες & Κληρονομιά
              </span>
            </div>
          </div>
        ` : ''}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${items.length > 0 ? items.slice(0, 4).map(it => `
          <div class="p-3 rounded-xl ${cardBorder} backdrop-blur-md border shadow">
            <h5 class="text-xs font-bold text-white mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-feather-pointed ${accentText} text-xs"></i>
              <span>${it.title}</span>
            </h5>
            <p class="text-[11px] text-slate-300 leading-relaxed line-clamp-3">${it.desc}</p>
          </div>
        `).join('') : `
          <div class="p-3 rounded-xl ${cardBorder} backdrop-blur-md border shadow col-span-2 text-center text-xs text-slate-300">
            Πλούσια πολιτιστική ζωή με μουσεία, θέατρα και παραδοσιακά δρώμενα.
          </div>
        `}
      </div>
    </div>
  `;
}

// Slide 5: Landmarks & Attractions (with Deep Link Video Button & Photo Thumbnail!)
function renderSlide5Landmarks(e, guideItems) {
  const isVelvet = currentTheme === 'velvet';
  const cardBorder = isVelvet ? 'border-amber-500/25 bg-slate-900/60' : 'border-cyan-500/30 bg-slate-900/60';
  const accentText = isVelvet ? 'text-amber-400' : 'text-cyan-400';

  const pois = guideItems.slice(0, 4);

  return `
    <div class="space-y-3">
      <div class="flex items-center justify-between">
        <h4 class="text-xs font-black uppercase tracking-wider ${accentText} flex items-center gap-2">
          <i class="fa-solid fa-monument"></i>
          <span>Κορυφαία Σημεία Ενδιαφέροντος</span>
        </h4>
        <span class="text-[11px] text-slate-400">Επιλεγμένα Αξιοθέατα με Βίντεο 4K</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${pois.map(p => {
          const categoryIcon = p.cat === 'nature' ? '🌿' : (p.cat === 'culture' ? '🎨' : '🏛️');
          const poiVid = getPoiVideoInfo(p.title, e.id);
          const thumb = poiVid?.youtubeId ? `https://img.youtube.com/vi/${poiVid.youtubeId}/hqdefault.jpg` : null;

          return `
            <div class="p-3 rounded-xl ${cardBorder} backdrop-blur-md border shadow flex flex-col justify-between group">
              <div>
                <div class="flex items-start gap-2.5 mb-2">
                  ${thumb ? `
                    <div class="w-16 h-12 rounded-lg overflow-hidden border border-slate-700 shrink-0 relative bg-slate-950">
                      <img src="${thumb}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                      <div class="absolute bottom-0 right-0 px-1 py-0.2 bg-black/80 text-[8px] font-mono text-amber-300 font-bold rounded-tl">
                        4K
                      </div>
                    </div>
                  ` : ''}
                  <div class="min-w-0 flex-1">
                    <div class="flex items-center justify-between gap-1 mb-0.5">
                      <span class="text-xs font-bold text-white truncate flex items-center gap-1">
                        <span>${categoryIcon}</span>
                        <span class="truncate">${p.title}</span>
                      </span>
                      <span class="text-[9px] font-mono px-1 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                        ${p.catLabel || 'Αξιοθέατο'}
                      </span>
                    </div>
                    <p class="text-[11px] text-slate-300 leading-snug line-clamp-2">${p.desc}</p>
                  </div>
                </div>
              </div>

              <!-- Action Deep-Links -->
              <div class="flex items-center gap-2 pt-2 border-t border-slate-800/80 mt-1">
                <button onclick="window.closeCityPresentation(); window.openPoiVideo('${escapeStr(p.title)}', '${escapeStr(e.id)}')" class="px-2.5 py-1 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-[11px] flex items-center gap-1.5 transition shadow cursor-pointer" title="Άμεση προβολή στο σημείο του 4K Βίντεο">
                  <i class="fa-solid fa-play text-[10px]"></i>
                  <span>Βίντεο (4K)</span>
                </button>
                <button onclick="window.closeCityPresentation(); window.openDeepDive('${escapeStr(p.title)}', '${escapeStr(p.desc)}', '${escapeStr(e.name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white border border-slate-700 font-bold text-[11px] flex items-center gap-1.5 transition shadow cursor-pointer">
                  <i class="fa-solid fa-wand-magic-sparkles text-[10px] text-amber-400"></i>
                  <span>Ανάλυση AI</span>
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// Slide 6: Gastronomy & Flavors
function renderSlide6Gastronomy(e, gastroItems) {
  const isVelvet = currentTheme === 'velvet';
  const cardBorder = isVelvet ? 'border-amber-500/25 bg-slate-900/60' : 'border-cyan-500/30 bg-slate-900/60';
  const accentText = isVelvet ? 'text-amber-400' : 'text-cyan-400';

  const items = gastroItems.slice(0, 4);
  const photoUrl = getSlidePhoto('gastronomy', e);

  return `
    <div class="space-y-3">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
        <div class="${photoUrl ? 'md:col-span-8' : 'md:col-span-12'} p-3.5 sm:p-4 rounded-2xl ${cardBorder} backdrop-blur-md border shadow-lg flex flex-col justify-center">
          <h4 class="text-xs font-black uppercase tracking-wider ${accentText} mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-kitchen-set"></i>
            <span>Γαστρονομία & Αυθεντικές Τοπικές Γεύσεις</span>
          </h4>
          <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
            ${e.gastro?.culture || e.gastro?.summary || 'Παραδοσιακές συνταγές, τοπικά προϊόντα προστατευόμενης ονομασίας και γαστρονομικές εμπειρίες που διατηρούνται αναλλοίωτες στο πέρασμα των αιώνων.'}
          </p>
        </div>

        ${photoUrl ? `
          <div class="md:col-span-4 relative rounded-2xl overflow-hidden border ${cardBorder} shadow-lg h-32 sm:h-36 md:h-auto min-h-[120px] bg-slate-900">
            <img src="${photoUrl}" alt="Γαστρονομία" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-2.5">
              <span class="text-[10px] font-bold text-amber-300 flex items-center gap-1">
                <i class="fa-solid fa-utensils"></i> Τοπικές Γεύσεις
              </span>
            </div>
          </div>
        ` : ''}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${items.length > 0 ? items.map(item => `
          <div class="p-3 rounded-xl ${cardBorder} backdrop-blur-md border shadow flex items-start gap-2.5">
            <span class="w-8 h-8 rounded-xl ${isVelvet ? 'bg-amber-500/20 text-amber-300' : 'bg-cyan-500/20 text-cyan-300'} flex items-center justify-center shrink-0 text-base">
              🍽️
            </span>
            <div class="min-w-0">
              <h5 class="text-xs font-bold text-white mb-0.5 truncate">${item.title}</h5>
              <p class="text-[11px] text-slate-300 leading-relaxed line-clamp-3">${item.desc}</p>
            </div>
          </div>
        `).join('') : `
          <div class="p-3 rounded-xl ${cardBorder} backdrop-blur-md border shadow col-span-2 text-center text-xs text-slate-300">
            Γαστρονομική παράδοση με τοπικά εδέσματα και παραδοσιακή φιλοξενία.
          </div>
        `}
      </div>
    </div>
  `;
}

// Slide 7: Modern Identity & Innovation
function renderSlide7Modern(e) {
  const isVelvet = currentTheme === 'velvet';
  const cardBorder = isVelvet ? 'border-amber-500/25 bg-slate-900/60' : 'border-cyan-500/30 bg-slate-900/60';
  const accentText = isVelvet ? 'text-amber-400' : 'text-cyan-400';

  const demoSummary = e.demo?.summary || 'Μια σύγχρονη, δυναμική πόλη που συνδυάζει την ιστορική της ταυτότητα με την καινοτομία, τη βιώσιμη ανάπτυξη και την υψηλή ποιότητα ζωής.';
  const details = e.demo?.details || [];
  const photoUrl = getSlidePhoto('modern', e);

  return `
    <div class="space-y-3">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
        <div class="${photoUrl ? 'md:col-span-8' : 'md:col-span-12'} p-3.5 sm:p-4 rounded-2xl ${cardBorder} backdrop-blur-md border shadow-lg flex flex-col justify-center">
          <h4 class="text-xs font-black uppercase tracking-wider ${accentText} mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-city"></i>
            <span>Σύγχρονη Πόλη, Κοινωνία & Ανάπτυξη</span>
          </h4>
          <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
            ${demoSummary}
          </p>
        </div>

        ${photoUrl ? `
          <div class="md:col-span-4 relative rounded-2xl overflow-hidden border ${cardBorder} shadow-lg h-32 sm:h-36 md:h-auto min-h-[120px] bg-slate-900">
            <img src="${photoUrl}" alt="Σύγχρονη Πόλη" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-2.5">
              <span class="text-[10px] font-bold text-cyan-300 flex items-center gap-1">
                <i class="fa-solid fa-bolt"></i> Σύγχρονος Παλμός
              </span>
            </div>
          </div>
        ` : ''}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${details.length > 0 ? details.slice(0, 4).map(d => `
          <div class="p-3 rounded-xl ${cardBorder} backdrop-blur-md border shadow">
            <h5 class="text-xs font-bold text-white mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-sparkles ${accentText} text-xs"></i>
              <span>${d.label}</span>
            </h5>
            <p class="text-[11px] text-slate-300 leading-relaxed line-clamp-3">${d.text}</p>
          </div>
        `).join('') : `
          <div class="p-3 rounded-xl ${cardBorder} backdrop-blur-md border shadow">
            <h5 class="text-xs font-bold text-white mb-1">🚀 Καινοτομία & Τεχνολογία</h5>
            <p class="text-xs text-slate-300 leading-relaxed">Σύγχρονοι ψηφιακοί κόμβοι, ακαδημαϊκά ιδρύματα και νεοφυείς επιχειρήσεις.</p>
          </div>
          <div class="p-3 rounded-xl ${cardBorder} backdrop-blur-md border shadow">
            <h5 class="text-xs font-bold text-white mb-1">🌱 Βιωσιμότητα & Ποιότητα Ζωής</h5>
            <p class="text-xs text-slate-300 leading-relaxed">Επενδύσεις σε πράσινη κινητικότητα και ανανεώσιμες πηγές ενέργειας.</p>
          </div>
        `}
      </div>
    </div>
  `;
}

// Slide 8: Travel Finale & Exploration
function renderSlide8Finale(e, videoTour) {
  const isVelvet = currentTheme === 'velvet';
  const cardBorder = isVelvet ? 'border-amber-500/25 bg-slate-900/60' : 'border-cyan-500/30 bg-slate-900/60';
  const photoUrl = getSlidePhoto('finale', e);

  return `
    <div class="space-y-3 text-center">
      <div class="p-4 sm:p-5 rounded-3xl ${cardBorder} backdrop-blur-md border shadow-xl">
        <h3 class="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight mb-1">
          Εξερευνήστε περισσότερο την πόλη ${e.name}
        </h3>
        <p class="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-3">
          Η περιήγηση ολοκληρώθηκε! Συνεχίστε με ζωντανή βίντεο-ξενάγηση 4K, πανοραμική θέα 360° στους δρόμους, ή άνοιγμα της Wikipedia απευθείας στον χάρτη.
        </p>

        <!-- Big Cinematic Video Card -->
        ${photoUrl ? `
          <div onclick="window.closeCityPresentation(); window.openCityVideo('${e.id}')" class="relative rounded-2xl overflow-hidden border border-red-500/40 shadow-2xl h-40 sm:h-52 max-w-xl mx-auto cursor-pointer group bg-slate-900 mb-4">
            <img src="${photoUrl}" alt="${e.name} 4K Video" class="w-full h-full object-cover group-hover:scale-105 transition duration-700">
            <div class="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition flex items-center justify-center">
              <div class="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center text-xl shadow-2xl group-hover:scale-115 transition">
                <i class="fa-solid fa-play ml-0.5"></i>
              </div>
            </div>
            <div class="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] text-white bg-slate-950/80 px-3 py-1.5 rounded-xl backdrop-blur border border-slate-700">
              <span class="font-bold flex items-center gap-1.5"><i class="fa-brands fa-youtube text-red-500"></i> Έναρξη 4K Video Tour (${e.name})</span>
              <span class="text-amber-400 font-mono">Ultra HD</span>
            </div>
          </div>
        ` : ''}

        <!-- Quick Action Launchpad -->
        <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          ${videoTour ? `
            <button onclick="window.closeCityPresentation(); window.openCityVideo('${e.id}')" class="px-3.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition flex items-center gap-1.5 shadow-lg cursor-pointer">
              <i class="fa-brands fa-youtube text-sm"></i>
              <span>Βίντεο Περιήγηση 4K</span>
            </button>
          ` : ''}

          <button onclick="window.closeCityPresentation(); window.openCurrentStreetView()" class="px-3.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 hover:text-white border border-amber-500/40 font-bold text-xs transition flex items-center gap-1.5 shadow-lg cursor-pointer">
            <i class="fa-solid fa-street-view text-amber-400 text-sm"></i>
            <span>Street View 360°</span>
          </button>

          <button onclick="window.closeCityPresentation(); window.openMapWikiReader('${e.name}', 'el', '${e.englishName || ''}')" class="px-3.5 py-1.5 rounded-xl bg-sky-600/20 hover:bg-sky-600/30 text-sky-300 hover:text-white border border-sky-500/40 font-bold text-xs transition flex items-center gap-1.5 shadow-lg cursor-pointer">
            <i class="fa-brands fa-wikipedia-w text-sky-400 text-sm"></i>
            <span>Wikipedia Reader</span>
          </button>

          <button onclick="window.closeCityPresentation()" class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer">
            <i class="fa-solid fa-map-location-dot"></i>
            <span>Επιστροφή στον Χάρτη</span>
          </button>
        </div>
      </div>
    </div>
  `;
}
