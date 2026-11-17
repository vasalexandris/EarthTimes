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

import { getEntityLocalTime, getCuratedGuideItems, getCuratedGastroItems } from './ui.js?v=20261117_pres2';
import { CITY_VIDEOS } from './video-service.js?v=20261117_pres2';

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

  // If autoplay is already active, restart timer
  if (isAutoplay) {
    startAutoplayTimer();
  }
}

export function closeCityPresentation() {
  stopAutoplay();
  stopNarration();
  clearSpeechTimers();
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
    // Loop back to start if in autoplay
    if (isAutoplay) {
      goToPresentationSlide(0);
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

  // Clear timers and speech
  clearSpeechTimers();
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  isSpeaking = false;
  updateSpeechIndicator(false, '');

  currentSlideIndex = index;
  renderSlide(currentSlideIndex);

  // Reset autoplay timer on slide change
  if (isAutoplay) {
    startAutoplayTimer();
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
  startAutoplayTimer();
}

function stopAutoplay() {
  isAutoplay = false;
  if (autoplayTimer) {
    clearTimeout(autoplayTimer);
    autoplayTimer = null;
  }
  if (autoplayProgressTimer) {
    clearInterval(autoplayProgressTimer);
    autoplayProgressTimer = null;
  }
  clearSpeechTimers();
  updateAutoplayButtonUI();
  updateProgressBar(currentSlideIndex, 0);
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
    if (speechCompletionTimer) clearTimeout(speechCompletionTimer);
    // Pause for 1.3 seconds so user registers completion before slide transition
    speechCompletionTimer = setTimeout(() => {
      if (isAutoplay) {
        nextPresentationSlide();
      }
    }, 1300);
  } else {
    // Fade out status badge after 2.5s in manual mode
    setTimeout(() => {
      if (!isSpeaking) updateSpeechIndicator(false, '');
    }, 2500);
  }
}

function startAutoplayTimer() {
  if (autoplayTimer) clearTimeout(autoplayTimer);
  if (autoplayProgressTimer) clearInterval(autoplayProgressTimer);
  clearSpeechTimers();

  // If narration is active, let speech synthesis control the slide transition
  if (isNarrating && ('speechSynthesis' in window)) {
    // If not currently speaking, trigger speech
    if (!isSpeaking) {
      speakCurrentSlide();
    }
    return;
  }

  // Narration is OFF: standard fixed 8-second slide duration
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
  speakCurrentSlide();

  // If autoplay is running, cancel the fixed timer so speech drives the transition
  if (isAutoplay) {
    if (autoplayTimer) {
      clearTimeout(autoplayTimer);
      autoplayTimer = null;
    }
  }
}

function stopNarration() {
  isNarrating = false;
  isSpeaking = false;
  clearSpeechTimers();
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  updateSpeechIndicator(false, '');
  updateNarrateButtonUI();

  // If autoplay is active, resume standard 8s timer seamlessly
  if (isAutoplay) {
    startAutoplayTimer();
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
  window.speechSynthesis.cancel();

  const slides = getSlideDefinitions();
  const slide = slides[currentSlideIndex];
  if (!slide || !slide.speechText) {
    isSpeaking = false;
    updateSpeechIndicator(false, '');
    if (isAutoplay) {
      speechCompletionTimer = setTimeout(() => {
        if (isAutoplay) nextPresentationSlide();
      }, 4000);
    }
    return;
  }

  const cleanText = slide.speechText
    .replace(/<[^>]*>/g, '')
    .replace(/\[\d+\]/g, '')
    .replace(/[«»]/g, '')
    .trim();

  currentSpeechUtterance = new SpeechSynthesisUtterance(cleanText);
  currentSpeechUtterance.lang = 'el-GR';
  currentSpeechUtterance.rate = 0.95;

  const voices = window.speechSynthesis.getVoices();
  const elVoice = voices.find(v => v.lang.startsWith('el'));
  if (elVoice) currentSpeechUtterance.voice = elVoice;

  // Greek speaking speed: ~2.3 words/sec + 2.5s padding
  const words = cleanText.split(/\s+/).filter(Boolean).length;
  estimatedDurationMs = Math.max(5000, Math.round((words / 2.3) * 1000) + 2500);

  currentSpeechUtterance.onstart = () => {
    isSpeaking = true;
    updateSpeechIndicator(true, 'Αφήγηση σε εξέλιξη...');
    if (isAutoplay) {
      startSpeechProgressTracking(estimatedDurationMs);
    }
  };

  currentSpeechUtterance.onend = () => {
    isSpeaking = false;
    clearSpeechTimers();
    onSlideSpeechCompleted();
  };

  currentSpeechUtterance.onerror = (e) => {
    console.warn('SpeechSynthesis event/cancel:', e);
    isSpeaking = false;
    clearSpeechTimers();
    if (isAutoplay) {
      onSlideSpeechCompleted();
    } else {
      updateSpeechIndicator(false, '');
    }
  };

  // Fallback safety timeout if onend is not triggered by browser
  speechSafetyTimer = setTimeout(() => {
    if (isSpeaking) {
      console.warn('Speech safety fallback triggered');
      isSpeaking = false;
      onSlideSpeechCompleted();
    }
  }, estimatedDurationMs + 4000);

  window.speechSynthesis.speak(currentSpeechUtterance);
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

  // If narration is active, read the new slide
  if (isNarrating) {
    speakCurrentSlide();
  }
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
// SLIDE HTML TEMPLATES
// =========================================================================

// Slide 1: Hero Overview
function renderSlide1Overview(e, timeInfo) {
  const isVelvet = currentTheme === 'velvet';
  const cardBorder = isVelvet ? 'border-amber-500/25 bg-slate-900/60' : 'border-cyan-500/30 bg-slate-900/60';
  const accentText = isVelvet ? 'text-amber-400' : 'text-cyan-400';
  const quoteText = isVelvet ? 'text-amber-200/90' : 'text-cyan-200/90';

  const pop = e.stats?.population || e.population || 'Ευρωπαϊκή Μητρόπολη';
  const founded = e.stats?.founded || e.founded || 'Αρχαιότητα';
  const landmark = e.landmark || e.stats?.landmark || e.stats?.famousFor || e.badge || 'Ιστορικό Κέντρο';
  const sunBadge = timeInfo.isDay ? '☀️ Ημέρα' : '🌙 Νύχτα';

  return `
    <div class="space-y-4 sm:space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-800 pb-3 sm:pb-4">
        <div>
          <div class="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">
            <span>${e.flag || '📍'}</span>
            <span>${e.englishName || ''}</span>
            <span>•</span>
            <span class="${accentText}">${e.nickname || 'Παγκόσμιος Προορισμός'}</span>
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            ${e.name || 'Πόλη'}
          </h1>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-mono font-bold text-slate-300">
            ${timeInfo.title}: <strong class="${accentText}">${timeInfo.time}</strong> (${sunBadge})
          </span>
        </div>
      </div>

      <!-- Stylized Quote -->
      ${e.quote ? `
        <div class="p-3 sm:p-4 rounded-2xl ${cardBorder} backdrop-blur-md border shadow-lg flex items-start gap-3">
          <i class="fa-solid fa-quote-left text-xl sm:text-2xl ${accentText} opacity-60 shrink-0 mt-0.5"></i>
          <p class="text-xs sm:text-sm md:text-base font-serif italic ${quoteText} leading-relaxed">
            ${e.quote}
          </p>
        </div>
      ` : ''}

      <!-- 4 Quick Stat Badges -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
        <div class="p-3 rounded-2xl ${cardBorder} backdrop-blur-md border shadow text-center">
          <div class="text-[10px] uppercase font-bold text-slate-400 mb-1">Πληθυσμός</div>
          <div class="text-xs sm:text-sm md:text-base font-black text-white truncate">${pop}</div>
        </div>
        <div class="p-3 rounded-2xl ${cardBorder} backdrop-blur-md border shadow text-center">
          <div class="text-[10px] uppercase font-bold text-slate-400 mb-1">Ίδρυση / Εποχή</div>
          <div class="text-xs sm:text-sm md:text-base font-black ${accentText} truncate">${founded}</div>
        </div>
        <div class="p-3 rounded-2xl ${cardBorder} backdrop-blur-md border shadow text-center">
          <div class="text-[10px] uppercase font-bold text-slate-400 mb-1">Ορόσημο</div>
          <div class="text-xs sm:text-sm md:text-base font-black text-white truncate" title="${landmark}">${landmark}</div>
        </div>
        <div class="p-3 rounded-2xl ${cardBorder} backdrop-blur-md border shadow text-center">
          <div class="text-[10px] uppercase font-bold text-slate-400 mb-1">Συντεταγμένες</div>
          <div class="text-xs sm:text-sm font-mono font-bold text-slate-300 truncate">
            ${e.coords ? `${e.coords[0].toFixed(2)}°, ${e.coords[1].toFixed(2)}°` : 'Γεωγραφικός Κόμβος'}
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

  return `
    <div class="space-y-4">
      <div class="p-4 sm:p-5 rounded-2xl ${cardBorder} backdrop-blur-md border shadow-lg">
        <h4 class="text-xs font-black uppercase tracking-wider ${accentText} mb-2 flex items-center gap-2">
          <i class="fa-solid fa-map-location-dot"></i>
          <span>Φυσικό Περιβάλλον & Τοπογραφία</span>
        </h4>
        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
          ${summary}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${highlights.length > 0 ? highlights.slice(0, 4).map((h, i) => `
          <div class="p-3 sm:p-4 rounded-xl ${cardBorder} backdrop-blur-md border shadow flex items-start gap-3">
            <span class="w-8 h-8 rounded-lg ${isVelvet ? 'bg-amber-500/20 text-amber-300' : 'bg-cyan-500/20 text-cyan-300'} flex items-center justify-center shrink-0 text-sm font-bold">
              ${i + 1}
            </span>
            <div class="min-w-0">
              <h5 class="text-xs sm:text-sm font-bold text-white mb-0.5 truncate">${h.title}</h5>
              <p class="text-[11px] sm:text-xs text-slate-300 leading-relaxed">${h.desc}</p>
            </div>
          </div>
        `).join('') : `
          <div class="p-4 rounded-xl ${cardBorder} backdrop-blur-md border shadow">
            <h5 class="text-xs sm:text-sm font-bold text-white mb-1">🌿 Φυσικό Τοπίο</h5>
            <p class="text-xs text-slate-300 leading-relaxed">Μοναδικό οικοσύστημα και πράσινοι πνεύμονες που πλαισιώνουν την αστική ζώνη.</p>
          </div>
          <div class="p-4 rounded-xl ${cardBorder} backdrop-blur-md border shadow">
            <h5 class="text-xs sm:text-sm font-bold text-white mb-1">🌊 Υδάτινοι Πόροι</h5>
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

  return `
    <div class="space-y-4">
      <div class="p-4 rounded-2xl ${cardBorder} backdrop-blur-md border shadow-lg">
        <h4 class="text-xs font-black uppercase tracking-wider ${accentText} mb-2 flex items-center gap-2">
          <i class="fa-solid fa-hourglass-half"></i>
          <span>Ιστορικό Χρονικό & Κληρονομιά</span>
        </h4>
        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
          ${summary}
        </p>
      </div>

      <!-- Timeline Highlights Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        ${highlights.length > 0 ? highlights.slice(0, 3).map(h => `
          <div class="p-3 sm:p-4 rounded-xl ${cardBorder} backdrop-blur-md border shadow flex flex-col justify-between">
            <div>
              <span class="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-bold ${badgeBg} border mb-2">
                ${h.year || 'Ορόσημο'}
              </span>
              <h5 class="text-xs sm:text-sm font-bold text-white mb-1">${h.event || h.title}</h5>
              <p class="text-[11px] text-slate-300 leading-relaxed">${h.desc || ''}</p>
            </div>
          </div>
        `).join('') : `
          <div class="p-4 rounded-xl ${cardBorder} backdrop-blur-md border shadow col-span-3 text-center">
            <p class="text-xs text-slate-300">Ιστορική πόλη με βαθιές ρίζες και αξιοσημείωτα μνημεία από κάθε περίοδο.</p>
          </div>
        `}
      </div>

      <!-- Past vs Present Snippet -->
      ${pastPresent.length > 0 ? `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          ${pastPresent.slice(0, 2).map(pvp => `
            <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
              <span class="font-bold text-amber-400 block mb-1">⏳ ${pvp.epoch}</span>
              <p class="text-slate-300 leading-relaxed text-[11px]">${pvp.content}</p>
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

  return `
    <div class="space-y-4">
      <div class="p-4 rounded-2xl ${cardBorder} backdrop-blur-md border shadow-lg">
        <h4 class="text-xs font-black uppercase tracking-wider ${accentText} mb-2 flex items-center gap-2">
          <i class="fa-solid fa-masks-theater"></i>
          <span>Πολιτισμός, Τέχνες & Παράδοση</span>
        </h4>
        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
          ${summary}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${items.length > 0 ? items.slice(0, 4).map(it => `
          <div class="p-3 sm:p-4 rounded-xl ${cardBorder} backdrop-blur-md border shadow">
            <h5 class="text-xs sm:text-sm font-bold text-white mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-feather-pointed ${accentText} text-xs"></i>
              <span>${it.title}</span>
            </h5>
            <p class="text-[11px] sm:text-xs text-slate-300 leading-relaxed">${it.desc}</p>
          </div>
        `).join('') : `
          <div class="p-4 rounded-xl ${cardBorder} backdrop-blur-md border shadow col-span-2 text-center text-xs text-slate-300">
            Πλούσια πολιτιστική ζωή με μουσεία, θέατρα και παραδοσιακά δρώμενα.
          </div>
        `}
      </div>
    </div>
  `;
}

// Slide 5: Landmarks & Attractions
function renderSlide5Landmarks(e, guideItems) {
  const isVelvet = currentTheme === 'velvet';
  const cardBorder = isVelvet ? 'border-amber-500/25 bg-slate-900/60' : 'border-cyan-500/30 bg-slate-900/60';
  const accentText = isVelvet ? 'text-amber-400' : 'text-cyan-400';

  const pois = guideItems.slice(0, 4);

  return `
    <div class="space-y-3 sm:space-y-4">
      <div class="flex items-center justify-between">
        <h4 class="text-xs font-black uppercase tracking-wider ${accentText} flex items-center gap-2">
          <i class="fa-solid fa-monument"></i>
          <span>Κορυφαία Σημεία Ενδιαφέροντος</span>
        </h4>
        <span class="text-[11px] text-slate-400">Επιλεγμένα Αξιοθέατα</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${pois.map(p => {
          const categoryIcon = p.cat === 'nature' ? '🌿' : (p.cat === 'culture' ? '🎨' : '🏛️');
          return `
            <div class="p-3 sm:p-4 rounded-xl ${cardBorder} backdrop-blur-md border shadow flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between gap-2 mb-1.5">
                  <span class="text-xs sm:text-sm font-bold text-white truncate flex items-center gap-1.5">
                    <span>${categoryIcon}</span>
                    <span>${p.title}</span>
                  </span>
                  <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                    ${p.catLabel || 'Αξιοθέατο'}
                  </span>
                </div>
                <p class="text-[11px] text-slate-300 leading-relaxed line-clamp-3">${p.desc}</p>
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

  return `
    <div class="space-y-4">
      <div class="p-4 rounded-2xl ${cardBorder} backdrop-blur-md border shadow-lg">
        <h4 class="text-xs font-black uppercase tracking-wider ${accentText} mb-2 flex items-center gap-2">
          <i class="fa-solid fa-kitchen-set"></i>
          <span>Γαστρονομία & Αυθεντικές Τοπικές Γεύσεις</span>
        </h4>
        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
          ${e.gastro?.culture || e.gastro?.summary || 'Παραδοσιακές συνταγές, τοπικά προϊόντα προστατευόμενης ονομασίας και γαστρονομικές εμπειρίες που διατηρούνται αναλλοίωτες στο πέρασμα των αιώνων.'}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${items.length > 0 ? items.map(item => `
          <div class="p-3 sm:p-4 rounded-xl ${cardBorder} backdrop-blur-md border shadow flex items-start gap-3">
            <span class="w-8 h-8 rounded-xl ${isVelvet ? 'bg-amber-500/20 text-amber-300' : 'bg-cyan-500/20 text-cyan-300'} flex items-center justify-center shrink-0 text-base">
              🍽️
            </span>
            <div class="min-w-0">
              <h5 class="text-xs sm:text-sm font-bold text-white mb-0.5 truncate">${item.title}</h5>
              <p class="text-[11px] sm:text-xs text-slate-300 leading-relaxed">${item.desc}</p>
            </div>
          </div>
        `).join('') : `
          <div class="p-4 rounded-xl ${cardBorder} backdrop-blur-md border shadow col-span-2 text-center text-xs text-slate-300">
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

  return `
    <div class="space-y-4">
      <div class="p-4 rounded-2xl ${cardBorder} backdrop-blur-md border shadow-lg">
        <h4 class="text-xs font-black uppercase tracking-wider ${accentText} mb-2 flex items-center gap-2">
          <i class="fa-solid fa-city"></i>
          <span>Σύγχρονη Πόλη, Κοινωνία & Ανάπτυξη</span>
        </h4>
        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
          ${demoSummary}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${details.length > 0 ? details.slice(0, 4).map(d => `
          <div class="p-3 sm:p-4 rounded-xl ${cardBorder} backdrop-blur-md border shadow">
            <h5 class="text-xs sm:text-sm font-bold text-white mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-sparkles ${accentText} text-xs"></i>
              <span>${d.label}</span>
            </h5>
            <p class="text-[11px] sm:text-xs text-slate-300 leading-relaxed">${d.text}</p>
          </div>
        `).join('') : `
          <div class="p-4 rounded-xl ${cardBorder} backdrop-blur-md border shadow">
            <h5 class="text-xs sm:text-sm font-bold text-white mb-1">🚀 Καινοτομία & Τεχνολογία</h5>
            <p class="text-xs text-slate-300 leading-relaxed">Σύγχρονοι ψηφιακοί κόμβοι, ακαδημαϊκά ιδρύματα και νεοφυείς επιχειρήσεις.</p>
          </div>
          <div class="p-4 rounded-xl ${cardBorder} backdrop-blur-md border shadow">
            <h5 class="text-xs sm:text-sm font-bold text-white mb-1">🌱 Βιωσιμότητα & Ποιότητα Ζωής</h5>
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
  const accentText = isVelvet ? 'text-amber-400' : 'text-cyan-400';

  return `
    <div class="space-y-4 text-center">
      <div class="p-5 sm:p-6 rounded-3xl ${cardBorder} backdrop-blur-md border shadow-xl">
        <span class="inline-block p-3 rounded-2xl ${isVelvet ? 'bg-amber-500/20 text-amber-300' : 'bg-cyan-500/20 text-cyan-300'} text-2xl mb-3">
          🌍
        </span>
        <h3 class="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
          Εξερευνήστε περισσότερο την πόλη ${e.name}
        </h3>
        <p class="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed mb-5">
          Η περιήγηση ολοκληρώθηκε! Μπορείτε να συνεχίσετε με ζωντανή βίντεο-ξενάγηση 4K, πανοραμική θέα 360° στους δρόμους, ή ανάγνωση του πλήρους άρθρου της Wikipedia απευθείας στον χάρτη.
        </p>

        <!-- Quick Action Launchpad -->
        <div class="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          ${videoTour ? `
            <button onclick="window.closeCityPresentation(); window.openCityVideo('${e.id}')" class="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2 shadow-lg cursor-pointer">
              <i class="fa-brands fa-youtube text-base"></i>
              <span>Βίντεο Περιήγηση 4K</span>
            </button>
          ` : ''}

          <button onclick="window.closeCityPresentation(); window.openCurrentStreetView()" class="px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 hover:text-white border border-amber-500/40 font-bold text-xs sm:text-sm transition flex items-center gap-2 shadow-lg cursor-pointer">
            <i class="fa-solid fa-street-view text-amber-400 text-base"></i>
            <span>Street View 360°</span>
          </button>

          <button onclick="window.closeCityPresentation(); window.openMapWikiReader('${e.name}', 'el', '${e.englishName || ''}')" class="px-3.5 py-2 rounded-xl bg-sky-600/20 hover:bg-sky-600/30 text-sky-300 hover:text-white border border-sky-500/40 font-bold text-xs sm:text-sm transition flex items-center gap-2 shadow-lg cursor-pointer">
            <i class="fa-brands fa-wikipedia-w text-sky-400 text-base"></i>
            <span>Wikipedia Reader</span>
          </button>

          <button onclick="window.closeCityPresentation()" class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer">
            <i class="fa-solid fa-map-location-dot"></i>
            <span>Επιστροφή στον Χάρτη</span>
          </button>
        </div>
      </div>
    </div>
  `;
}
