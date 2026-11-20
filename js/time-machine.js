/**
 * Time Machine Module
 * Manages the Temporal Dimension (Time Slider), Historical Eras, Time Capsule Spots,
 * User Authentication / Profiles, Right-Click Map Spot Creation, and Community Stories.
 */

import { loadTimeCapsules } from './data-service.js?v=20261117_video_iframe_fix';
import { 
  submitSpotForModeration, 
  getPendingSubmissions, 
  getPendingSubmissionsAsync, 
  approveSpotSubmission, 
  rejectSpotSubmission,
  loadCloudApprovedSpots,
  getCloudDbConfig,
  saveCloudDbConfig,
  loginWithGoogle,
  logoutUser,
  initAuthListener
} from './db-service.js?v=20261119_moderation_v1';

let timeCapsules = [];
let selectedYear = 2026; // Default to contemporary year (2026) so map starts clean and focused
let isPlaying = false;
let playInterval = null;
let activeSpotId = null;

// User Identity & Profile State (Default to Guest / Visitor until signed in)
let currentUser = {
  uid: null,
  email: null,
  name: 'Επισκέπτης',
  role: 'guest',
  title: 'Επισκέπτης',
  photoURL: null
};

function escapeStr(str) {
  return String(str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

export function extractYouTubeId(urlOrId) {
  if (!urlOrId || typeof urlOrId !== 'string') return null;
  const str = urlOrId.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(str)) return str;

  const match = str.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  if (match && match[1]) return match[1];

  return null;
}

export function getYouTubeThumbnail(youtubeId) {
  if (!youtubeId) return '';
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

export function normalizeChronicleMedia(chronicle) {
  if (!chronicle) return;

  // 1. Check if chronicle already has youtubeId or videoUrl
  let ytId = extractYouTubeId(chronicle.youtubeId || chronicle.videoUrl);

  // 2. Scan photos array for YouTube links
  if (Array.isArray(chronicle.photos)) {
    chronicle.photos.forEach(photo => {
      if (!photo || !photo.url) return;
      const detected = extractYouTubeId(photo.url);
      if (detected) {
        if (!ytId) ytId = detected;
        photo.isYouTube = true;
        photo.youtubeId = detected;
        photo.originalVideoUrl = photo.url;
        photo.url = getYouTubeThumbnail(detected);
      }
    });
  }

  // 3. Scan story for YouTube links if not found yet
  if (!ytId && chronicle.story) {
    const match = chronicle.story.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
    if (match && match[1]) {
      ytId = match[1];
    }
  }

  if (ytId) {
    chronicle.youtubeId = ytId;
    if (!chronicle.videoUrl) {
      chronicle.videoUrl = `https://www.youtube.com/watch?v=${ytId}`;
    }
    // If no photos or only unsplash placeholder photo, ensure high-res video thumbnail is available
    if (!chronicle.photos || chronicle.photos.length === 0 || 
        (chronicle.photos.length === 1 && chronicle.photos[0].url && chronicle.photos[0].url.includes('unsplash.com'))) {
      chronicle.photos = [
        {
          url: getYouTubeThumbnail(ytId),
          caption: chronicle.title || "Ιστορικό Βίντεο Εποχής",
          year: chronicle.fromYear,
          credit: chronicle.authorName || "YouTube",
          isYouTube: true,
          youtubeId: ytId
        }
      ];
    }
  }
}

export async function initTimeMachine() {
  timeCapsules = await loadTimeCapsules();

  // Load user profile from localStorage if exists
  try {
    const savedUser = localStorage.getItem('earthtimes_user');
    if (savedUser) {
      currentUser = JSON.parse(savedUser);
    }
  } catch (e) {
    console.warn('Error reading user profile', e);
  }

  // Merge any user-created custom spots from localStorage and normalize media/videos
  try {
    const customSpots = localStorage.getItem('earthtimes_custom_spots');
    if (customSpots) {
      const parsed = JSON.parse(customSpots);
      if (Array.isArray(parsed)) {
        parsed.forEach(p => {
          if (p.chronicles && Array.isArray(p.chronicles)) {
            p.chronicles.forEach(c => normalizeChronicleMedia(c));
          }
          const existingIdx = timeCapsules.findIndex(s => s.id === p.id);
          if (existingIdx !== -1) {
            timeCapsules[existingIdx] = p;
          } else {
            timeCapsules.push(p);
          }
        });
        // Save back normalized spots so YouTube thumbnails and video attributes persist
        localStorage.setItem('earthtimes_custom_spots', JSON.stringify(parsed));
      }
    }
  } catch (e) {
    console.warn('Error reading custom spots', e);
  }

  // Merge any approved spots from Firebase Cloud Firestore
  try {
    const cloudApproved = await loadCloudApprovedSpots();
    if (Array.isArray(cloudApproved) && cloudApproved.length > 0) {
      cloudApproved.forEach(p => {
        if (p.chronicles && Array.isArray(p.chronicles)) {
          p.chronicles.forEach(c => normalizeChronicleMedia(c));
        }
        const existingIdx = timeCapsules.findIndex(s => s.id === p.id);
        if (existingIdx !== -1) {
          timeCapsules[existingIdx] = p;
        } else {
          timeCapsules.push(p);
        }
      });
    }
  } catch (e) {
    console.warn('Error reading cloud approved spots', e);
  }

  // Normalize all loaded timeCapsules chronicles
  timeCapsules.forEach(s => {
    if (s.chronicles && Array.isArray(s.chronicles)) {
      s.chronicles.forEach(c => normalizeChronicleMedia(c));
    }
  });

  // Initialize Google Auth Listener
  try {
    initAuthListener((googleUser) => {
      if (googleUser) {
        currentUser = { ...currentUser, ...googleUser };
      } else {
        currentUser = {
          uid: null,
          email: null,
          name: 'Επισκέπτης',
          role: 'guest',
          title: 'Επισκέπτης',
          photoURL: null
        };
      }
      updateUserBadgeUI();
    });
  } catch (e) {
    console.warn('Auth listener init error:', e);
  }

  updateUserBadgeUI();
  updateTimeSliderUI();
  updateTimelineRuler();
  return timeCapsules;
}

export function getCurrentUser() {
  return currentUser;
}

export function setCurrentUser(userData) {
  currentUser = { ...currentUser, ...userData };
  try {
    localStorage.setItem('earthtimes_user', JSON.stringify(currentUser));
  } catch (e) {}
  updateUserBadgeUI();
}

export function isUserLoggedIn() {
  return Boolean(currentUser && currentUser.uid && currentUser.email);
}

export function updateUserBadgeUI() {
  const nameEl = document.getElementById('userDisplayName');
  const roleEl = document.getElementById('userRoleBadge');
  const avatarEl = document.getElementById('userAvatarImg');
  const onlineDot = document.getElementById('userOnlineDot');
  const loginBtn = document.getElementById('googleLoginBtn');
  const profileBadge = document.getElementById('userProfileBadge');

  // Landing page elements
  const landingLoginBtn = document.getElementById('landingGoogleLoginBtn');
  const landingProfileBadge = document.getElementById('landingUserProfileBadge');
  const landingNameEl = document.getElementById('landingUserDisplayName');
  const landingAvatarEl = document.getElementById('landingUserAvatarImg');
  const landingOnlineDot = document.getElementById('landingUserOnlineDot');
  const landingAuthBanner = document.getElementById('landingAuthBanner');

  const isGoogleLoggedIn = isUserLoggedIn();

  // Floating + Spot button
  const addSpotBtn = document.getElementById('toggleAddSpotBtn');
  if (addSpotBtn) {
    if (isGoogleLoggedIn) {
      addSpotBtn.innerHTML = '<i class="fa-solid fa-location-dot"></i><span>+ Σημείο</span>';
      addSpotBtn.title = 'Προσθήκη Νέου Σημείου (Κάντε κλικ ή δεξί κλικ στο χάρτη)';
      addSpotBtn.className = 'h-9 px-3.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 rounded-xl font-bold text-xs flex items-center gap-2 shadow-xl hover:scale-105 transition border border-amber-300/60 cursor-pointer';
    } else {
      addSpotBtn.innerHTML = '<i class="fa-solid fa-lock text-amber-400"></i><span>+ Σημείο</span>';
      addSpotBtn.title = 'Απαιτείται σύνδεση με λογαριασμό Google για προσθήκη σημείου';
      addSpotBtn.className = 'h-9 px-3.5 bg-slate-900/90 hover:bg-slate-800 text-amber-300 border border-amber-500/30 rounded-xl font-medium text-xs flex items-center gap-2 shadow-xl hover:scale-105 transition cursor-pointer';
    }
  }

  if (isGoogleLoggedIn) {
    const displayName = currentUser.name || currentUser.email.split('@')[0];
    if (nameEl) nameEl.innerText = displayName;
    if (landingNameEl) landingNameEl.innerText = displayName;
    if (roleEl) roleEl.classList.add('hidden');

    if (avatarEl) {
      if (currentUser.photoURL) {
        avatarEl.src = currentUser.photoURL;
        avatarEl.classList.remove('hidden');
        if (onlineDot) onlineDot.classList.add('hidden');
      } else {
        avatarEl.classList.add('hidden');
        if (onlineDot) onlineDot.classList.remove('hidden');
      }
    }

    if (landingAvatarEl) {
      if (currentUser.photoURL) {
        landingAvatarEl.src = currentUser.photoURL;
        landingAvatarEl.classList.remove('hidden');
        if (landingOnlineDot) landingOnlineDot.classList.add('hidden');
      } else {
        landingAvatarEl.classList.add('hidden');
        if (landingOnlineDot) landingOnlineDot.classList.remove('hidden');
      }
    }

    // Toggle header badges
    if (loginBtn) loginBtn.classList.add('hidden');
    if (profileBadge) profileBadge.classList.remove('hidden');

    // Toggle landing page badges
    if (landingLoginBtn) landingLoginBtn.classList.add('hidden');
    if (landingProfileBadge) landingProfileBadge.classList.remove('hidden');
    if (landingAuthBanner) landingAuthBanner.classList.add('hidden');
  } else {
    // Guest mode
    if (nameEl) nameEl.innerText = 'Επισκέπτης';
    if (landingNameEl) landingNameEl.innerText = 'Επισκέπτης';

    // Show login buttons, hide user profile badges
    if (loginBtn) loginBtn.classList.remove('hidden');
    if (profileBadge) profileBadge.classList.add('hidden');

    if (landingLoginBtn) landingLoginBtn.classList.remove('hidden');
    if (landingProfileBadge) landingProfileBadge.classList.add('hidden');
    if (landingAuthBanner) landingAuthBanner.classList.remove('hidden');
  }
}

export async function handleGoogleLogin() {
  const user = await loginWithGoogle();
  if (user) {
    currentUser = {
      uid: user.uid,
      name: user.displayName || user.email.split('@')[0],
      email: user.email,
      photoURL: user.photoURL,
      role: (user.email && (user.email.includes('alexandris') || user.email.includes('vas') || user.email.includes('admin'))) ? 'admin' : 'member'
    };
    updateUserBadgeUI();
    alert(`🎉 Καλώς ήρθατε, ${currentUser.name}!\nΣυνδεθήκατε επιτυχώς με το Google account σας (${currentUser.email}).`);
  }
}

export async function handleGoogleLogout() {
  await logoutUser();
  currentUser = {
    uid: null,
    email: null,
    name: 'Επισκέπτης',
    role: 'guest',
    title: 'Επισκέπτης',
    photoURL: null
  };
  updateUserBadgeUI();
  alert('Αποσυνδεθήκατε επιτυχώς.');
}

export function getTimeCapsules() {
  return timeCapsules;
}

export function getSelectedYear() {
  return selectedYear;
}

export function setSelectedYear(year) {
  if (year === 'unknown') {
    selectedYear = 'unknown';
  } else if (year === 'all') {
    selectedYear = 'all';
  } else {
    selectedYear = parseInt(year, 10);
  }
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

  if (selectedYear === 'unknown') {
    return spots.filter(spot => {
      return spot.isUnknownDate === true || (spot.chronicles && spot.chronicles.some(c => c.fromYear === null || c.isUnknownDate || c.date === 'unknown'));
    });
  }

  const y = (typeof selectedYear === 'number') ? selectedYear : parseInt(selectedYear, 10);
  if (isNaN(y)) return spots;

  return spots.filter(spot => {
    return spot.chronicles && spot.chronicles.some(c => c.fromYear !== null && c.fromYear <= y && (c.toYear === null || c.toYear >= y));
  });
}

export function getActiveChronicleForYear(spot, year) {
  if (!spot || !spot.chronicles || !spot.chronicles.length) return null;
  if (year === 'all') return spot.chronicles[spot.chronicles.length - 1]; // latest by default
  const y = parseInt(year, 10);
  const found = spot.chronicles.find(c => c.fromYear <= y && (c.toYear === null || c.toYear >= y));
  return found || spot.chronicles[spot.chronicles.length - 1];
}

export function isPlaybackRunning() {
  return isPlaying;
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

export function getDistinctRecordedYears(cityId = null) {
  let spots = timeCapsules;
  if (cityId) {
    spots = spots.filter(s => s.cityId === cityId);
  }

  const yearCounts = new Map();

  spots.forEach(spot => {
    if (!spot.chronicles || !Array.isArray(spot.chronicles)) return;
    spot.chronicles.forEach(c => {
      // Explicit fromYear
      if (typeof c.fromYear === 'number' && !isNaN(c.fromYear)) {
        yearCounts.set(c.fromYear, (yearCounts.get(c.fromYear) || 0) + 1);
      }
      // If chronicle has date "YYYY-MM-DD"
      if (c.date && typeof c.date === 'string' && c.date.length >= 4) {
        const parsedY = parseInt(c.date.slice(0, 4), 10);
        if (!isNaN(parsedY)) {
          yearCounts.set(parsedY, (yearCounts.get(parsedY) || 0) + 1);
        }
      }
      // Photos years
      if (c.photos && Array.isArray(c.photos)) {
        c.photos.forEach(p => {
          if (typeof p.year === 'number' && !isNaN(p.year)) {
            yearCounts.set(p.year, (yearCounts.get(p.year) || 0) + 1);
          }
        });
      }
      // Memories years
      if (c.memories && Array.isArray(c.memories)) {
        c.memories.forEach(m => {
          if (typeof m.year === 'number' && !isNaN(m.year)) {
            yearCounts.set(m.year, (yearCounts.get(m.year) || 0) + 1);
          }
        });
      }
    });
  });

  return yearCounts;
}

export function updateTimelineRuler(cityId = null) {
  const ticksContainer = document.getElementById('timelineRulerTicks');
  const labelsContainer = document.getElementById('timelineRulerLabels');
  const needle = document.getElementById('timelineSliderNeedle');
  const slider = document.getElementById('timeYearRange');

  if (!ticksContainer || !labelsContainer) return;

  const minYear = 1900;
  const maxYear = 2026;
  const totalSpan = maxYear - minYear;

  const currentVal = (typeof selectedYear === 'number') ? selectedYear : 2026;
  const currentPct = Math.max(0, Math.min(100, ((currentVal - minYear) / totalSpan) * 100));

  if (needle) {
    needle.style.left = `${currentPct}%`;
  }
  if (slider) {
    slider.value = currentVal;
  }

  // Clear previous ticks and labels
  ticksContainer.innerHTML = '';
  labelsContainer.innerHTML = '';

  const yearCounts = getDistinctRecordedYears(cityId);

  // Milestone years reference (every 50 years / bookends)
  const milestones = [1900, 1950, 2000, 2026];
  milestones.forEach(m => {
    const mPct = ((m - minYear) / totalSpan) * 100;
    
    // Subtle milestone tick
    const tick = document.createElement('div');
    tick.className = 'absolute top-0 bottom-0 w-[1px] bg-slate-600/70 pointer-events-none';
    tick.style.left = `${mPct}%`;
    ticksContainer.appendChild(tick);

    // Milestone label
    const lbl = document.createElement('span');
    lbl.className = 'absolute text-[9px] font-mono font-bold text-slate-500 -translate-x-1/2 select-none';
    lbl.style.left = `${mPct}%`;
    lbl.innerText = m;
    labelsContainer.appendChild(lbl);
  });

  // Recorded year vertical tick marks (Ruler / Χάρακας)
  // If year has records, a crisp amber line appears. If no records exist, NO line appears!
  const sortedYears = Array.from(yearCounts.keys()).sort((a, b) => a - b);
  sortedYears.forEach(yr => {
    if (yr < minYear || yr > maxYear) return;
    const pct = ((yr - minYear) / totalSpan) * 100;
    const count = yearCounts.get(yr) || 1;

    const tick = document.createElement('div');
    tick.className = 'absolute top-0 bottom-0 w-[2px] bg-amber-400 rounded-full shadow-sm shadow-amber-500/50 hover:bg-amber-300 hover:w-[3px] transition cursor-pointer pointer-events-auto';
    tick.style.left = `${pct}%`;
    tick.title = `Έτος ${yr}: ${count} ${count === 1 ? 'καταγεγραμμένο σημείο / εγγραφή' : 'καταγεγραμμένα σημεία / εγγραφές'}`;
    tick.onclick = (e) => {
      e.stopPropagation();
      if (window.onTimeSliderChange) {
        window.onTimeSliderChange(yr);
      }
    };
    ticksContainer.appendChild(tick);
  });

  // If up to 3 user recorded years exist, show their year numbers on the top label row
  if (sortedYears.length > 0 && sortedYears.length <= 3) {
    sortedYears.forEach(yr => {
      if (yr < minYear || yr > maxYear) return;
      const pct = ((yr - minYear) / totalSpan) * 100;

      const userLbl = document.createElement('span');
      userLbl.className = 'absolute text-[9px] font-mono font-black text-amber-300 -translate-x-1/2 drop-shadow select-none';
      userLbl.style.left = `${pct}%`;
      userLbl.innerText = yr;
      labelsContainer.appendChild(userLbl);
    });
  }
}

export function updateTimeSliderUI() {
  const display = document.getElementById('currentYearDisplay');
  const slider = document.getElementById('timeYearRange');
  const badge = document.getElementById('activeEraBadge');
  const needle = document.getElementById('timelineSliderNeedle');
  const unknownBtn = document.getElementById('timeUnknownBtn');

  const minYear = 1900;
  const maxYear = 2026;
  const totalSpan = maxYear - minYear;

  if (selectedYear === 'unknown') {
    if (slider) slider.value = 1900;
    if (needle) {
      needle.style.opacity = '0.35';
      needle.style.left = '0%';
    }
    if (display) {
      if ('value' in display) display.value = 'Άγνωστο';
      else display.innerText = 'Άγνωστο';
    }
    if (unknownBtn) {
      unknownBtn.className = 'h-7 px-2 rounded-lg bg-amber-400 text-slate-950 font-black border border-amber-300 text-[11px] flex items-center gap-1 shrink-0 transition cursor-pointer shadow-md';
    }
    if (badge) {
      badge.innerText = 'Άγνωστη Χρονολογία (Προς Ταυτοποίηση)';
      badge.className = 'text-[11px] font-semibold text-amber-300 bg-amber-950/90 px-2 py-0.5 rounded border border-amber-600/70';
    }
    return;
  }

  // Normal year or 'all'
  if (unknownBtn) {
    unknownBtn.className = 'h-7 px-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-amber-300 border border-slate-700 text-[11px] font-bold flex items-center gap-1 shrink-0 transition cursor-pointer';
  }

  const val = (selectedYear === 'all') ? 2026 : selectedYear;

  if (slider) {
    slider.value = val;
  }

  if (needle) {
    needle.style.opacity = '1';
    const pct = Math.max(0, Math.min(100, ((val - minYear) / totalSpan) * 100));
    needle.style.left = `${pct}%`;
  }

  if (display) {
    if ('value' in display) display.value = (selectedYear === 'all') ? '2026' : selectedYear;
    else display.innerText = (selectedYear === 'all') ? '2026' : selectedYear;
  }

  if (badge) {
    if (selectedYear === 'all') {
      badge.innerText = 'Όλα';
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
}

export function onTimeStepYear(delta) {
  const currentCity = window.getCurrentEntity ? window.getCurrentEntity() : null;
  const cityId = (currentCity && currentCity.type === 'city') ? currentCity.id : null;
  const recordedYears = Array.from(getDistinctRecordedYears(cityId).keys()).sort((a, b) => a - b);

  if (!recordedYears.length) {
    const cur = (typeof selectedYear === 'number') ? selectedYear : 2026;
    let next = cur + (delta * 5);
    next = Math.max(1900, Math.min(2026, next));
    if (window.onTimeSliderChange) window.onTimeSliderChange(next);
    return;
  }

  if (selectedYear === 'unknown' || typeof selectedYear !== 'number') {
    const target = (delta > 0) ? recordedYears[0] : recordedYears[recordedYears.length - 1];
    if (window.onTimeSliderChange) window.onTimeSliderChange(target);
    return;
  }

  const curYear = selectedYear;
  if (delta > 0) {
    const nextYears = recordedYears.filter(y => y > curYear);
    const target = nextYears.length ? nextYears[0] : Math.min(2026, curYear + 1);
    if (window.onTimeSliderChange) window.onTimeSliderChange(target);
  } else {
    const prevYears = recordedYears.filter(y => y < curYear);
    const target = prevYears.length ? prevYears[prevYears.length - 1] : Math.max(1900, curYear - 1);
    if (window.onTimeSliderChange) window.onTimeSliderChange(target);
  }
}

export function onTimeDirectYearSubmit(inputVal) {
  if (!inputVal) return;
  const cleaned = String(inputVal).trim().toLowerCase();
  if (cleaned === 'αγνωστο' || cleaned === 'άγνωστο' || cleaned === 'unknown' || cleaned === '?') {
    onTimeUnknownClick();
    return;
  }

  const parsed = parseInt(cleaned, 10);
  if (!isNaN(parsed)) {
    const clamped = Math.max(1900, Math.min(2026, parsed));
    if (window.onTimeSliderChange) window.onTimeSliderChange(clamped);
  } else {
    updateTimeSliderUI();
  }
}

export function onTimeUnknownClick() {
  if (selectedYear === 'unknown') {
    if (window.onTimeSliderChange) window.onTimeSliderChange(2026);
    return;
  }
  setSelectedYear('unknown');
  if (window.onTimeSliderChange) {
    window.onTimeSliderChange('unknown');
  }
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

  normalizeChronicleMedia(activeChronicle);
  const ytId = activeChronicle.youtubeId || extractYouTubeId(activeChronicle.videoUrl);
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
          <p class="text-xs sm:text-sm text-slate-400 mt-0.5 italic font-serif">${spot.englishName || ''}</p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="openEditSpotModal('${spot.id}', '${activeChronicle.id}')" title="Επεξεργασία Σημείου" class="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer">
            <i class="fa-solid fa-pen-to-square"></i>
            <span class="hidden sm:inline">Επεξεργασία</span>
          </button>
          <button onclick="closeSpotTimeCapsule()" class="h-9 w-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-700 cursor-pointer">
            <i class="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>
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
            const hasVideo = Boolean(c.youtubeId || (c.photos && c.photos.some(p => p.isYouTube || p.youtubeId)));
            return `
              <button onclick="selectSpotEra('${c.id}')" class="px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
                isSelected 
                  ? 'bg-amber-500 text-slate-950 ring-2 ring-amber-400/50 shadow-lg' 
                  : 'bg-slate-800/90 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-700'
              }">
                <i class="fa-regular fa-clock text-[10px]"></i>
                <span>${eraLabel}</span>
                ${hasVideo ? '<i class="fa-brands fa-youtube text-red-500 text-[11px] ml-0.5"></i>' : ''}
              </button>
            `;
          }).join('')}
        </div>
      </div>
    </div>

    <!-- Active Chronicle Body -->
    <div class="p-6 space-y-6 overflow-y-auto max-h-[60vh]">
      
      ${spot.status === 'pending' ? `
        <div class="p-3.5 rounded-2xl bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs flex items-center justify-between gap-3 shadow-lg">
          <div class="flex items-center gap-2.5">
            <span class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <i class="fa-solid fa-hourglass-half text-sm"></i>
            </span>
            <div>
              <div class="font-bold text-amber-200">Αίτημα σε Αναμονή Έγκρισης Διαχειριστή</div>
              <div class="text-[11px] text-amber-300/80">
                Το σημείο αυτό υποβλήθηκε και είναι προσωρινά ορατό μόνο σε αυτόν τον υπολογιστή. Μόλις εγκριθεί από τον διαχειριστή, θα δημοσιευτεί δημόσια.
              </div>
            </div>
          </div>
          ${(currentUser.role === 'admin' || (currentUser.name && currentUser.name.includes('Αλεξανδρής'))) ? `
            <button onclick="window.handleApproveSpotDirectly('${spot.id}')" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow transition flex items-center gap-1.5 shrink-0">
              <i class="fa-solid fa-check"></i> Έγκριση Τώρα
            </button>
          ` : ''}
        </div>
      ` : ''}
      
      <!-- Era Details Card -->
      <div class="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 relative overflow-hidden">
        <div class="flex items-start justify-between gap-4 mb-3 flex-wrap">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-black text-amber-400 tracking-wide uppercase">
                ${activeChronicle.fromYear} — ${activeChronicle.toYear || 'Σήμερα'}
              </span>
              <span class="text-slate-500">•</span>
              <span class="text-xs text-sky-300 font-medium capitalize">
                ${activeChronicle.category === 'business' ? 'Εμπορικό / Κατάστημα' : activeChronicle.category === 'culture' ? 'Πολιτιστικός Χώρος' : activeChronicle.category === 'residence' ? 'Κατοικία / Γειτονιά' : 'Ιστορικό Ορόσημο'}
              </span>
            </div>
            <h3 class="text-lg font-bold text-white">${activeChronicle.title}</h3>
          </div>

          <!-- Archive / Story Badge -->
          <div class="shrink-0 flex items-center gap-2">
            ${ytId ? `
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-950/80 text-rose-300 border border-rose-600/50">
                <i class="fa-brands fa-youtube text-red-500 text-[12px]"></i>
                <span>Βίντεο Εποχής</span>
              </span>
            ` : ''}
            ${isOfficial ? `
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-sky-950/80 text-sky-300 border border-sky-600/50">
                <i class="fa-solid fa-landmark text-sky-400 text-[11px]"></i>
                <span>Επίσημο Αρχείο / Φορέας</span>
              </span>
            ` : `
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-950/80 text-amber-300 border border-amber-600/50">
                <i class="fa-solid fa-clock-rotate-left text-amber-400 text-[11px]"></i>
                <span>Ιστορική Αφήγηση</span>
              </span>
            `}
          </div>
        </div>

        <p class="text-slate-200 text-sm leading-relaxed mb-4">${activeChronicle.story}</p>

        <div class="flex items-center justify-between flex-wrap gap-2 text-xs text-slate-400 pt-3 border-t border-slate-700/50">
          <div class="flex items-center gap-1.5">
            <i class="fa-solid fa-feather-pointed text-amber-400"></i>
            <span>Καταγράφηκε από: <strong class="text-slate-200">${activeChronicle.authorName}</strong></span>
          </div>
          <span class="text-sky-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-check text-[10px]"></i> Ιστορικό Αρχείο</span>
        </div>
      </div>

      <!-- Historical Video Player of that Era -->
      ${ytId ? `
        <div class="rounded-2xl overflow-hidden bg-slate-900 border border-amber-500/50 shadow-2xl">
          <div class="px-4 py-2.5 bg-gradient-to-r from-amber-950/80 via-slate-900 to-slate-900 border-b border-amber-500/30 flex items-center justify-between flex-wrap gap-2">
            <div class="flex items-center gap-2 text-xs font-bold text-amber-300">
              <i class="fa-brands fa-youtube text-red-500 text-base"></i>
              <span>🎬 Ιστορικό Βίντεο Εποχής (${activeChronicle.fromYear} - ${activeChronicle.toYear || 'Σήμερα'})</span>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="window.openTimeCapsuleVideo('${ytId}', '${escapeStr(activeChronicle.title)}', '${escapeStr(spot.name)}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] text-amber-300 hover:text-white border border-slate-700 font-bold transition flex items-center gap-1.5 shadow cursor-pointer">
                <i class="fa-solid fa-expand text-[10px]"></i>
                <span>4K Player Χάρτη</span>
              </button>
              <a href="https://www.youtube.com/watch?v=${ytId}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded-lg bg-red-950/80 hover:bg-red-900 text-[11px] text-red-300 hover:text-white border border-red-700/50 font-bold transition flex items-center gap-1.5 shadow">
                <i class="fa-brands fa-youtube text-red-400"></i>
                <span>YouTube</span>
              </a>
            </div>
          </div>
          <div class="relative w-full aspect-video bg-black">
            <iframe 
              src="https://www.youtube.com/embed/${ytId}?rel=0&modestbranding=1&playsinline=1" 
              class="w-full h-full border-0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      ` : ''}

      <!-- Photo Gallery of that Era -->
      ${(activeChronicle.photos && activeChronicle.photos.length) ? `
        <div>
          <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3 flex items-center gap-1.5">
            <i class="fa-solid fa-camera text-sky-400"></i> Φωτογραφικό Αρχείο & Τεκμήρια (${activeChronicle.fromYear} - ${activeChronicle.toYear || 'Σήμερα'})
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${activeChronicle.photos.map(p => {
              const photoYtId = p.youtubeId || extractYouTubeId(p.url) || (p.isYouTube ? ytId : null);
              const isVideo = Boolean(photoYtId);
              const displayUrl = photoYtId ? getYouTubeThumbnail(photoYtId) : p.url;
              return `
              <div class="group relative rounded-xl overflow-hidden bg-slate-900 border ${isVideo ? 'border-amber-500/60 shadow-amber-500/10' : 'border-slate-700/60'} shadow-lg ${isVideo ? 'cursor-pointer' : ''}" ${isVideo ? `onclick="window.openTimeCapsuleVideo('${photoYtId}', '${escapeStr(p.caption || activeChronicle.title)}', '${escapeStr(spot.name)}')"` : ''}>
                <div class="relative w-full h-44 overflow-hidden bg-slate-950">
                  <img src="${displayUrl}" alt="${p.caption}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                  ${isVideo ? `
                    <div class="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition flex items-center justify-center">
                      <div class="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-115 transition">
                        <i class="fa-solid fa-play text-lg ml-0.5"></i>
                      </div>
                    </div>
                    <div class="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-red-950/90 border border-red-600/60 text-red-300 text-[10px] font-black flex items-center gap-1">
                      <i class="fa-brands fa-youtube text-red-500"></i>
                      <span>Βίντεο Εποχής</span>
                    </div>
                  ` : ''}
                </div>
                <div class="p-3 bg-slate-900/95 border-t border-slate-800">
                  <div class="text-xs text-slate-200 font-medium">${p.caption}</div>
                  <div class="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                    <span class="text-amber-400 font-bold">${p.year || ''}</span>
                    <span>${p.credit || ''}</span>
                  </div>
                </div>
              </div>
            `;}).join('')}
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

      <!-- Actions: Add Era + AI Reconstruction button -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <button onclick="openAddEraForm('${spot.id}')" class="p-3.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-bold text-xs border border-slate-700 transition flex items-center justify-center gap-2">
          <i class="fa-solid fa-clock-rotate-left text-amber-400"></i>
          <span>Προσθήκη Νέας Χρονικής Περιόδου</span>
        </button>

        <button onclick="openAiReconstructModal('${spot.id}', '${activeChronicle.id}')" class="p-3.5 rounded-xl bg-gradient-to-r from-indigo-900/60 to-purple-900/60 hover:from-indigo-850 hover:to-purple-850 text-indigo-200 font-bold text-xs border border-indigo-500/40 transition flex items-center justify-center gap-2 shadow-lg">
          <i class="fa-solid fa-wand-magic-sparkles text-amber-300"></i>
          <span>✨ AI Ιστορική Αναπαράσταση Εποχής</span>
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
 * Creating a New Time Capsule Spot directly from the map (Right-Click or Map Click)
 */
export function openCreateSpotModal(lat, lng) {
  if (!isUserLoggedIn()) {
    if (confirm('🔒 Απαιτείται Σύνδεση με Google\n\nΓια να δημιουργήσετε νέο ιστορικό σημείο στο χάρτη, παρακαλούμε συνδεθείτε πρώτα με το λογαριασμό σας Google.\n\nΘέλετε να πραγματοποιήσετε σύνδεση τώρα;')) {
      handleGoogleLogin();
    }
    return;
  }

  const modal = document.getElementById('createSpotModal');
  if (!modal) return;

  document.getElementById('newSpotLat').value = lat.toFixed(6);
  document.getElementById('newSpotLng').value = lng.toFixed(6);
  document.getElementById('newSpotAuthorName').value = currentUser.name || currentUser.email;
  document.getElementById('newSpotAuthorType').value = currentUser.role === 'official' ? 'official' : 'citizen';

  modal.classList.remove('hidden');
}

export function closeCreateSpotModal() {
  const modal = document.getElementById('createSpotModal');
  if (modal) modal.classList.add('hidden');
}

export function submitNewSpot(event) {
  event.preventDefault();

  if (!isUserLoggedIn()) {
    alert('🔒 Απαιτείται Σύνδεση: Πρέπει να είστε συνδεδεμένοι με λογαριασμό Google για να καταχωρίσετε νέο σημείο.');
    return;
  }

  const lat = parseFloat(document.getElementById('newSpotLat').value);
  const lng = parseFloat(document.getElementById('newSpotLng').value);
  const name = document.getElementById('newSpotName').value.trim();
  const address = document.getElementById('newSpotAddress').value.trim();
  const cityId = document.getElementById('newSpotCityId').value;
  const fromYear = parseInt(document.getElementById('newSpotFromYear').value, 10);
  const toYearVal = document.getElementById('newSpotToYear').value.trim();
  const toYear = toYearVal ? parseInt(toYearVal, 10) : null;
  const eraTitle = document.getElementById('newSpotEraTitle').value.trim();
  const category = document.getElementById('newSpotCategory').value;
  const authorType = document.getElementById('newSpotAuthorType').value;
  const authorName = document.getElementById('newSpotAuthorName').value.trim() || currentUser.name;
  const story = document.getElementById('newSpotStory').value.trim();
  const videoUrlInput = document.getElementById('newSpotVideoUrl');
  const videoUrl = videoUrlInput ? videoUrlInput.value.trim() : '';
  const photoUrl = document.getElementById('newSpotPhotoUrl').value.trim();
  const memoryText = document.getElementById('newSpotMemoryText').value.trim();

  if (!name || isNaN(lat) || isNaN(lng) || isNaN(fromYear) || !story) {
    alert('Παρακαλούμε συμπληρώστε όλα τα απαραίτητα πεδία!');
    return;
  }

  // Detect YouTube video from video input, photo input, or story
  const detectedYtId = extractYouTubeId(videoUrl) || extractYouTubeId(photoUrl);
  let finalVideoUrl = videoUrl || (extractYouTubeId(photoUrl) ? photoUrl : '');
  if (!finalVideoUrl && detectedYtId) {
    finalVideoUrl = `https://www.youtube.com/watch?v=${detectedYtId}`;
  }

  let finalPhotoUrl = photoUrl;
  if (extractYouTubeId(photoUrl)) {
    finalPhotoUrl = getYouTubeThumbnail(detectedYtId);
  } else if (!finalPhotoUrl && detectedYtId) {
    finalPhotoUrl = getYouTubeThumbnail(detectedYtId);
  }

  const newSpot = {
    id: `custom-spot-${Date.now()}`,
    cityId: cityId || 'kozani',
    name,
    englishName: name,
    coords: [lat, lng],
    address: address || name,
    chronicles: [
      {
        id: `chronicle-${Date.now()}`,
        fromYear,
        toYear,
        title: eraTitle || name,
        category,
        authorType,
        authorName,
        verified: authorType === 'official',
        story,
        youtubeId: detectedYtId || '',
        videoUrl: finalVideoUrl,
        photos: finalPhotoUrl ? [{
          url: finalPhotoUrl,
          caption: eraTitle || name,
          year: fromYear,
          credit: authorName,
          isYouTube: Boolean(detectedYtId),
          youtubeId: detectedYtId || ''
        }] : [
          {
            url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80",
            caption: "Ιστορικό στιγμιότυπο σημείου",
            year: fromYear,
            credit: authorName
          }
        ],
        memories: memoryText ? [{
          author: authorName,
          year: fromYear,
          text: memoryText
        }] : []
      }
    ]
  };

  // Run normalization
  normalizeChronicleMedia(newSpot.chronicles[0]);

  // Submit via Safety & Moderation Pipeline
  try {
    const submission = submitSpotForModeration(newSpot, currentUser);
    
    // Add to in-memory timeCapsules for local preview
    const memIdx = timeCapsules.findIndex(s => s.id === newSpot.id);
    if (memIdx !== -1) {
      timeCapsules[memIdx] = submission;
    } else {
      timeCapsules.push(submission);
    }

    alert('✅ Το αίτημα δημιουργίας σημείου υποβλήθηκε επιτυχώς!\n\n🛡️ Έλεγχος ασφαλείας: Η πηγή πολυμέσων και το κείμενο ελέγχθηκαν επιτυχώς.\n⏳ Το σημείο είναι προσωρινά ορατό μόνο σε αυτόν τον υπολογιστή (με ένδειξη «Υπό Έγκριση»).\nΜόλις εγκριθεί από τον διαχειριστή, θα δημοσιευτεί δημόσια σε όλους!');
  } catch (err) {
    alert('❌ Σφάλμα υποβολής: ' + err.message);
    return;
  }

  closeCreateSpotModal();
  document.getElementById('createSpotForm').reset();

  // Trigger map refresh callback if available
  if (window.renderCurrentTimeCapsules) {
    window.renderCurrentTimeCapsules();
  }

  // Smoothly fly to the newly created spot coordinates
  if (window.flyToCoordinates) {
    window.flyToCoordinates(lat, lng, 16);
  }

  // Open the newly created spot immediately!
  openSpotTimeCapsule(newSpot.id);
}

/**
 * Edit Existing Spot and Chronicles
 */
export function openEditSpotModal(spotId, chronicleId) {
  const modal = document.getElementById('editSpotModal');
  if (!modal) return;

  const spot = timeCapsules.find(s => s.id === spotId);
  if (!spot) {
    alert('Το σημείο δεν βρέθηκε.');
    return;
  }

  let chronicle = null;
  if (chronicleId && spot.chronicles && spot.chronicles.length) {
    chronicle = spot.chronicles.find(c => c.id === chronicleId);
  }
  if (!chronicle && spot.chronicles && spot.chronicles.length) {
    chronicle = spot.chronicles[0];
  }

  const spotIdEl = document.getElementById('editSpotId');
  const chronicleIdEl = document.getElementById('editChronicleId');
  const spotNameEl = document.getElementById('editSpotName');
  const spotAddressEl = document.getElementById('editSpotAddress');
  const spotCategoryEl = document.getElementById('editSpotCategory');

  const chronicleTitleEl = document.getElementById('editChronicleTitle');
  const fromYearEl = document.getElementById('editFromYear');
  const toYearEl = document.getElementById('editToYear');
  const dateEl = document.getElementById('editDate');
  const timeEl = document.getElementById('editTime');
  const storyEl = document.getElementById('editStory');
  const videoUrlEl = document.getElementById('editVideoUrl');
  const photoUrlEl = document.getElementById('editPhotoUrl');
  const photoCaptionEl = document.getElementById('editPhotoCaption');
  const authorNameEl = document.getElementById('editAuthorName');

  if (spotIdEl) spotIdEl.value = spot.id;
  if (chronicleIdEl) chronicleIdEl.value = chronicle ? chronicle.id : '';
  if (spotNameEl) spotNameEl.value = spot.name || '';
  if (spotAddressEl) spotAddressEl.value = spot.address || '';
  if (spotCategoryEl) spotCategoryEl.value = spot.category || 'culture';

  if (chronicleTitleEl) chronicleTitleEl.value = chronicle ? chronicle.title : '';
  if (fromYearEl) fromYearEl.value = (chronicle && chronicle.fromYear) ? chronicle.fromYear : '';
  if (toYearEl) toYearEl.value = (chronicle && chronicle.toYear) ? chronicle.toYear : '';
  if (dateEl) dateEl.value = (chronicle && chronicle.date && chronicle.date !== 'unknown') ? chronicle.date : '';
  if (timeEl) timeEl.value = (chronicle && chronicle.time) ? chronicle.time : '';
  if (storyEl) storyEl.value = (chronicle && chronicle.story) ? chronicle.story : '';

  let videoUrl = '';
  if (chronicle) {
    if (chronicle.videoUrl) {
      videoUrl = chronicle.videoUrl;
    } else if (chronicle.youtubeId) {
      videoUrl = `https://www.youtube.com/watch?v=${chronicle.youtubeId}`;
    }
  }
  if (videoUrlEl) videoUrlEl.value = videoUrl;

  let photoUrl = '';
  let photoCaption = '';
  if (chronicle && chronicle.photos && chronicle.photos.length) {
    const regularPhoto = chronicle.photos.find(p => !p.isYouTube) || chronicle.photos[0];
    if (regularPhoto) {
      photoUrl = regularPhoto.url || '';
      photoCaption = regularPhoto.caption || '';
    }
  }
  if (photoUrlEl) photoUrlEl.value = photoUrl;
  if (photoCaptionEl) photoCaptionEl.value = photoCaption;

  if (authorNameEl) {
    authorNameEl.value = (chronicle && chronicle.authorName) ? chronicle.authorName : ((chronicle && chronicle.author) ? chronicle.author.name : '');
  }

  modal.classList.remove('hidden');
}

export function closeEditSpotModal() {
  const modal = document.getElementById('editSpotModal');
  if (modal) modal.classList.add('hidden');
}

export function saveEditedSpot(event) {
  event.preventDefault();

  const spotId = document.getElementById('editSpotId').value;
  const chronicleId = document.getElementById('editChronicleId').value;

  const spot = timeCapsules.find(s => s.id === spotId);
  if (!spot) {
    alert('Το σημείο δεν βρέθηκε.');
    return;
  }

  const name = document.getElementById('editSpotName').value.trim();
  const address = document.getElementById('editSpotAddress').value.trim();
  const category = document.getElementById('editSpotCategory').value;

  const title = document.getElementById('editChronicleTitle').value.trim();
  const fromYearInput = document.getElementById('editFromYear').value.trim();
  const toYearInput = document.getElementById('editToYear').value.trim();
  const fromYear = fromYearInput ? parseInt(fromYearInput, 10) : null;
  const toYear = toYearInput ? parseInt(toYearInput, 10) : null;
  const date = document.getElementById('editDate').value.trim();
  const time = document.getElementById('editTime').value.trim();
  const story = document.getElementById('editStory').value.trim();
  const videoUrl = document.getElementById('editVideoUrl').value.trim();
  const photoUrl = document.getElementById('editPhotoUrl').value.trim();
  const photoCaption = document.getElementById('editPhotoCaption').value.trim();
  const authorName = document.getElementById('editAuthorName').value.trim();

  // Update spot info
  spot.name = name;
  spot.address = address;
  spot.category = category;

  // Find or create chronicle
  if (!spot.chronicles) spot.chronicles = [];
  let chronicle = spot.chronicles.find(c => c.id === chronicleId);
  if (!chronicle && spot.chronicles.length > 0) {
    chronicle = spot.chronicles[0];
  } else if (!chronicle) {
    chronicle = { id: `chronicle-${Date.now()}` };
    spot.chronicles.push(chronicle);
  }

  chronicle.title = title;
  chronicle.fromYear = fromYear;
  chronicle.toYear = toYear;
  chronicle.date = date || (fromYear ? String(fromYear) : null);
  chronicle.time = time || null;
  chronicle.story = story;
  chronicle.authorName = authorName || (chronicle.authorName || 'Τοπικό Αρχείο');
  if (!chronicle.author) chronicle.author = {};
  chronicle.author.name = authorName || (chronicle.author.name || 'Τοπικό Αρχείο');

  // Video / YouTube ID
  if (videoUrl) {
    chronicle.videoUrl = videoUrl;
    const ytid = extractYouTubeId(videoUrl);
    chronicle.youtubeId = ytid;
  } else {
    chronicle.videoUrl = '';
    chronicle.youtubeId = null;
  }

  // Photos
  if (!chronicle.photos) chronicle.photos = [];
  if (photoUrl) {
    const existingPhoto = chronicle.photos.find(p => !p.isYouTube);
    if (existingPhoto) {
      existingPhoto.url = photoUrl;
      existingPhoto.caption = photoCaption || title;
      existingPhoto.year = fromYear;
    } else {
      chronicle.photos.push({
        url: photoUrl,
        caption: photoCaption || title,
        year: fromYear
      });
    }
  }

  normalizeChronicleMedia(chronicle);

  // Save to localStorage 'earthtimes_custom_spots' so that edits persist across reloads
  try {
    const existing = JSON.parse(localStorage.getItem('earthtimes_custom_spots') || '[]');
    const idx = existing.findIndex(s => s.id === spotId);
    if (idx !== -1) {
      existing[idx] = spot;
    } else {
      existing.push(spot);
    }
    localStorage.setItem('earthtimes_custom_spots', JSON.stringify(existing));
  } catch (e) {
    console.warn('Error saving edited spot to localStorage', e);
  }

  // Update UI components
  const capsuleModal = document.getElementById('timeCapsuleModal');
  if (capsuleModal && !capsuleModal.classList.contains('hidden')) {
    renderTimeCapsuleModalContent(spot, chronicle);
  }

  if (window.renderCurrentTimeCapsules) {
    window.renderCurrentTimeCapsules();
  }

  updateTimelineRuler();

  if (window.renderTimelineTabInPlace) {
    window.renderTimelineTabInPlace();
  }

  closeEditSpotModal();
  alert('✅ Οι αλλαγές στο σημείο αποθηκεύτηκαν επιτυχώς!');
}

/**
 * Community Story Submission for Existing Spot
 */
export function openAddMemoryForm(spotId, chronicleId) {
  if (!isUserLoggedIn()) {
    if (confirm('🔒 Απαιτείται Σύνδεση με Google\n\nΓια να καταχωρίσετε τη δική σας προσωπική ανάμνηση, παρακαλούμε συνδεθείτε πρώτα με το λογαριασμό σας Google.\n\nΘέλετε να πραγματοποιήσετε σύνδεση τώρα;')) {
      handleGoogleLogin();
    }
    return;
  }

  const modal = document.getElementById('addMemoryModal');
  if (!modal) return;

  document.getElementById('formSpotId').value = spotId;
  document.getElementById('formChronicleId').value = chronicleId;
  document.getElementById('memoryAuthor').value = currentUser.name || currentUser.email;
  modal.classList.remove('hidden');
}

export function closeAddMemoryModal() {
  const modal = document.getElementById('addMemoryModal');
  if (modal) modal.classList.add('hidden');
}

export function openAddEraForm(spotId) {
  if (!isUserLoggedIn()) {
    if (confirm('🔒 Απαιτείται Σύνδεση με Google\n\nΓια να προσθέσετε νέα χρονική περίοδο σε αυτό το σημείο, παρακαλούμε συνδεθείτε πρώτα με το λογαριασμό σας Google.\n\nΘέλετε να πραγματοποιήσετε σύνδεση τώρα;')) {
      handleGoogleLogin();
    }
    return;
  }

  const modal = document.getElementById('addEraModal');
  if (!modal) return;
  document.getElementById('formNewEraSpotId').value = spotId;
  document.getElementById('eraAuthorName').value = currentUser.name || currentUser.email;
  document.getElementById('eraAuthorType').value = currentUser.role === 'official' ? 'official' : 'citizen';
  modal.classList.remove('hidden');
}

export function closeAddEraModal() {
  const modal = document.getElementById('addEraModal');
  if (modal) modal.classList.add('hidden');
}

export function submitMemory(event) {
  event.preventDefault();

  if (!isUserLoggedIn()) {
    alert('🔒 Απαιτείται Σύνδεση: Πρέπει να είστε συνδεδεμένοι με λογαριασμό Google για να προσθέσετε ανάμνηση.');
    return;
  }

  const spotId = document.getElementById('formSpotId').value;
  const chronicleId = document.getElementById('formChronicleId').value;
  const author = document.getElementById('memoryAuthor').value.trim() || currentUser.name || currentUser.email;
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

  if (!isUserLoggedIn()) {
    alert('🔒 Απαιτείται Σύνδεση: Πρέπει να είστε συνδεδεμένοι με λογαριασμό Google για να προσθέσετε περίοδο.');
    return;
  }

  const spotId = document.getElementById('formNewEraSpotId').value;
  const title = document.getElementById('eraTitle').value.trim();
  const fromYear = parseInt(document.getElementById('eraFromYear').value, 10);
  const toYearVal = document.getElementById('eraToYear').value.trim();
  const toYear = toYearVal ? parseInt(toYearVal, 10) : null;
  const authorName = document.getElementById('eraAuthorName').value.trim();
  const authorType = document.getElementById('eraAuthorType').value;
  const category = document.getElementById('eraCategory').value;
  const story = document.getElementById('eraStory').value.trim();
  const videoUrlInput = document.getElementById('eraVideoUrl');
  const videoUrl = videoUrlInput ? videoUrlInput.value.trim() : '';
  const photoUrl = document.getElementById('eraPhotoUrl').value.trim();

  if (!title || isNaN(fromYear) || !story) return;

  const detectedYtId = extractYouTubeId(videoUrl) || extractYouTubeId(photoUrl);
  let finalVideoUrl = videoUrl || (extractYouTubeId(photoUrl) ? photoUrl : '');
  if (!finalVideoUrl && detectedYtId) {
    finalVideoUrl = `https://www.youtube.com/watch?v=${detectedYtId}`;
  }

  let finalPhotoUrl = photoUrl;
  if (extractYouTubeId(photoUrl)) {
    finalPhotoUrl = getYouTubeThumbnail(detectedYtId);
  } else if (!finalPhotoUrl && detectedYtId) {
    finalPhotoUrl = getYouTubeThumbnail(detectedYtId);
  }

  const spot = timeCapsules.find(s => s.id === spotId);
  if (spot) {
    const newChronicle = {
      id: `chronicle-${Date.now()}`,
      fromYear,
      toYear,
      title,
      category,
      authorType,
      authorName: authorName || currentUser.name,
      verified: authorType === 'official',
      story,
      youtubeId: detectedYtId || '',
      videoUrl: finalVideoUrl,
      photos: finalPhotoUrl ? [{
        url: finalPhotoUrl,
        caption: title,
        year: fromYear,
        credit: authorName,
        isYouTube: Boolean(detectedYtId),
        youtubeId: detectedYtId || ''
      }] : [],
      memories: []
    };

    normalizeChronicleMedia(newChronicle);

    spot.chronicles.push(newChronicle);
    spot.chronicles.sort((a, b) => a.fromYear - b.fromYear);

    // Save updated custom spots to localStorage if applicable
    try {
      const existing = JSON.parse(localStorage.getItem('earthtimes_custom_spots') || '[]');
      const spotIdx = existing.findIndex(s => s.id === spotId);
      if (spotIdx !== -1) {
        existing[spotIdx] = spot;
        localStorage.setItem('earthtimes_custom_spots', JSON.stringify(existing));
      }
    } catch (e) {}

    renderTimeCapsuleModalContent(spot, newChronicle);
  }

  closeAddEraModal();
  document.getElementById('eraForm').reset();
}

/**
 * AI Historical Reconstruction Modal Viewer
 */
export function openAiReconstructModal(spotId, chronicleId) {
  const modal = document.getElementById('aiReconstructModal');
  if (!modal) return;

  const spot = timeCapsules.find(s => s.id === spotId);
  if (!spot) return;
  const chronicle = spot.chronicles.find(c => c.id === chronicleId) || spot.chronicles[0];

  const body = document.getElementById('aiReconstructBody');
  if (body) {
    body.innerHTML = `
      <div class="p-6 space-y-4">
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
              <i class="fa-solid fa-wand-magic-sparkles text-sm"></i>
            </span>
            <div>
              <h3 class="text-base font-bold text-white">AI Ιστορική Αναπαράσταση: ${chronicle.title}</h3>
              <p class="text-xs text-indigo-300">Περίοδος: ${chronicle.fromYear} – ${chronicle.toYear || 'Σήμερα'} • ${spot.name}</p>
            </div>
          </div>
          <button onclick="closeAiReconstructModal()" class="text-slate-400 hover:text-white">
            <i class="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>

        <div class="relative rounded-2xl overflow-hidden border border-indigo-500/30 bg-slate-950 shadow-2xl">
          <img src="${(chronicle.photos && chronicle.photos[0]) ? chronicle.photos[0].url : 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&auto=format&fit=crop&q=80'}" class="w-full h-64 object-cover filter contrast-105" />
          <div class="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-500/30 text-indigo-200 border border-indigo-400/40 mb-1">
              <i class="fa-solid fa-microchip"></i> AI Synthesis Model v4.2
            </div>
            <div class="text-xs text-slate-200 font-medium">Αναπαράσταση αρχιτεκτονικής, φωτισμού και ατμόσφαιρας εποχής</div>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs text-slate-300 leading-relaxed space-y-2">
          <div class="font-bold text-amber-300 flex items-center gap-1.5">
            <i class="fa-solid fa-scroll"></i> Σύνθεση Ιστορικής Πραγματικότητας:
          </div>
          <p>
            Βάσει των ιστορικών αρχείων της πόλης και των προφορικών μαρτυριών για το έτος <strong>${chronicle.fromYear}</strong>, το σημείο αυτό χαρακτηριζόταν από έντονη κοινωνική ζωή. Η δόμηση της γειτονιάς διατηρούσε τα παραδοσιακά αρχιτεκτονικά στοιχεία, οι δρόμοι ήταν λιθόστρωτοι και οι άνθρωποι συγκεντρώνονταν καθημερινά για να μοιραστούν τα νέα της ημέρας.
          </p>
        </div>

        <div class="flex items-center justify-between pt-2">
          <span class="text-[11px] text-slate-500">Πηγή δεδομένων: Community Knowledge Graph & Public Historical Archives</span>
          <button onclick="closeAiReconstructModal()" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition">
            Κλείσιμο
          </button>
        </div>
      </div>
    `;
  }

  modal.classList.remove('hidden');
}

export function closeAiReconstructModal() {
  const modal = document.getElementById('aiReconstructModal');
  if (modal) modal.classList.add('hidden');
}

export function openUserProfileModal() {
  const modal = document.getElementById('userProfileModal');
  if (!modal) return;
  document.getElementById('profileNameInput').value = currentUser.name;
  document.getElementById('profileRoleSelect').value = currentUser.role;
  document.getElementById('profileTitleInput').value = currentUser.title;
  modal.classList.remove('hidden');
}

export function closeUserProfileModal() {
  const modal = document.getElementById('userProfileModal');
  if (modal) modal.classList.add('hidden');
}

export function saveUserProfile(event) {
  event.preventDefault();
  const name = document.getElementById('profileNameInput').value.trim();
  const role = document.getElementById('profileRoleSelect').value;
  const title = document.getElementById('profileTitleInput').value.trim();

  if (!name) return;

  setCurrentUser({
    name,
    role,
    title: title || (role === 'official' ? 'Εκπρόσωπος Δήμου / Φορέα' : 'Πιστοποιημένος Δημότης'),
    verified: true
  });

  closeUserProfileModal();
}

/**
 * Backup / Sync Custom Spots (Export & Import)
 * Allows users to transfer their custom spots across PCs (e.g. school lab to home)
 */
export function exportCustomSpots() {
  try {
    const raw = localStorage.getItem('earthtimes_custom_spots');
    let spots = raw ? JSON.parse(raw) : [];

    // Also include any custom spots in memory that may have been created in this session
    timeCapsules.forEach(s => {
      if (s.id && (s.id.startsWith('spot-') || s.id.startsWith('custom-')) && !spots.some(e => e.id === s.id)) {
        spots.push(s);
      }
    });

    if (!spots || spots.length === 0) {
      alert('Δεν βρέθηκαν τοπικά αποθηκευμένα σημεία σε αυτόν τον περιηγητή για εξαγωγή.\n\nΌταν δημιουργείτε σημεία με δεξί κλικ στο χάρτη, αποθηκεύονται στη μνήμη του συγκεκριμένου υπολογιστή και μπορείτε να τα εξάγετε για να τα μεταφέρετε.');
      return;
    }

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(spots, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `earthtimes_custom_spots_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  } catch (e) {
    console.error('Error exporting custom spots:', e);
    alert('Παρουσιάστηκε σφάλμα κατά την εξαγωγή των σημείων: ' + e.message);
  }
}

export function importCustomSpotsData(spotsArray) {
  if (!Array.isArray(spotsArray)) {
    alert('Σφάλμα: Η μορφή των δεδομένων πρέπει να είναι λίστα (array) σημείων.');
    return;
  }

  let importedCount = 0;
  let updatedCount = 0;

  let existing = [];
  try {
    existing = JSON.parse(localStorage.getItem('earthtimes_custom_spots') || '[]');
  } catch (e) {
    existing = [];
  }

  spotsArray.forEach(newSpot => {
    if (!newSpot || !newSpot.id || !newSpot.coords) return;

    // Normalize media and YouTube links
    if (newSpot.chronicles && Array.isArray(newSpot.chronicles)) {
      newSpot.chronicles.forEach(c => normalizeChronicleMedia(c));
    }

    // Check existing in localStorage
    const exIdx = existing.findIndex(s => s.id === newSpot.id);
    if (exIdx >= 0) {
      existing[exIdx] = newSpot;
      updatedCount++;
    } else {
      existing.push(newSpot);
      importedCount++;
    }

    // Check in memory timeCapsules
    const memIdx = timeCapsules.findIndex(s => s.id === newSpot.id);
    if (memIdx >= 0) {
      timeCapsules[memIdx] = newSpot;
    } else {
      timeCapsules.push(newSpot);
    }
  });

  localStorage.setItem('earthtimes_custom_spots', JSON.stringify(existing));

  if (window.renderCurrentTimeCapsules) {
    window.renderCurrentTimeCapsules();
  }

  alert(`Επιτυχής συγχρονισμός!\nΠροστέθηκαν: ${importedCount} νέα σημεία.\nΕνημερώθηκαν: ${updatedCount} υπάρχοντα σημεία.`);
  closeSyncSpotsModal();
}

export function handleImportCustomSpotsFile(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      importCustomSpotsData(data);
    } catch (err) {
      alert('Σφάλμα ανάγνωσης αρχείου JSON: ' + err.message);
    }
  };
  reader.readAsText(file);
}

export function handleImportCustomSpotsText() {
  const textarea = document.getElementById('syncSpotsJsonText');
  if (!textarea) return;
  const text = textarea.value.trim();
  if (!text) {
    alert('Παρακαλώ επικολλήστε το περιεχόμενο JSON στο πεδίο κειμένου.');
    return;
  }

  try {
    const data = JSON.parse(text);
    importCustomSpotsData(data);
    textarea.value = '';
  } catch (err) {
    alert('Σφάλμα: Μη έγκυρη μορφή JSON: ' + err.message);
  }
}

export function openSyncSpotsModal() {
  const modal = document.getElementById('syncSpotsModal');
  if (!modal) return;
  const countEl = document.getElementById('syncCustomSpotsCount');
  if (countEl) {
    try {
      const raw = localStorage.getItem('earthtimes_custom_spots');
      const spots = raw ? JSON.parse(raw) : [];
      countEl.textContent = spots.length;
    } catch (e) {
      countEl.textContent = '0';
    }
  }
  modal.classList.remove('hidden');
}

export function closeSyncSpotsModal() {
  const modal = document.getElementById('syncSpotsModal');
  if (modal) modal.classList.add('hidden');
}

/**
 * Admin Moderation Panel & Content Approval Workflow
 */
export async function openModerationModal() {
  const modal = document.getElementById('moderationModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  await renderModerationList();
}

export function closeModerationModal() {
  const modal = document.getElementById('moderationModal');
  if (modal) modal.classList.add('hidden');
}

export async function renderModerationList() {
  const container = document.getElementById('moderationListContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="text-center py-8 text-sky-400">
      <i class="fa-solid fa-spinner fa-spin text-2xl mb-2"></i>
      <div class="text-xs">Φόρτωση αιτημάτων από το Cloud Firestore...</div>
    </div>
  `;

  let pending = [];
  try {
    pending = await getPendingSubmissionsAsync();
  } catch (e) {
    pending = getPendingSubmissions();
  }

  const countBadge = document.getElementById('moderationPendingCount');
  if (countBadge) {
    countBadge.textContent = pending.length;
  }

  if (!pending || pending.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-slate-400">
        <div class="w-14 h-14 rounded-2xl bg-emerald-950/80 text-emerald-400 border border-emerald-600/40 flex items-center justify-center mx-auto mb-3 shadow-lg">
          <i class="fa-solid fa-circle-check text-2xl"></i>
        </div>
        <div class="font-bold text-white text-base">Κανένα αίτημα σε αναμονή!</div>
        <div class="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
          Όλα τα υποβληθέντα σημεία έχουν ελεγχθεί και εγκριθεί. Τα νέα αιτήματα χρηστών εμφανίζονται αυτόματα εδώ.
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = pending.map(item => {
    const ch = (item.chronicles && item.chronicles[0]) || {};
    const hasYt = Boolean(ch.youtubeId);
    const mod = item.moderation || {};
    return `
      <div class="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/80 space-y-3 shadow-xl">
        <div class="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2 py-0.5 rounded text-[10px] font-black bg-amber-500/20 text-amber-300 border border-amber-500/30">
                ⏳ Υπό Έγκριση
              </span>
              <span class="text-xs text-slate-400 font-mono">${ch.fromYear}${ch.toYear ? ` - ${ch.toYear}` : ''}</span>
              <span class="text-xs text-slate-400">• ${escapeStr(item.name)}</span>
            </div>
            <h4 class="text-base font-bold text-white">${escapeStr(ch.title)}</h4>
            <div class="text-xs text-slate-400 mt-0.5 flex items-center gap-2 flex-wrap">
              <span>Συντάκτης: <strong class="text-slate-200">${escapeStr(mod.submittedBy || ch.authorName)}</strong></span>
              <span>• Συντεταγμένες: <strong class="font-mono text-sky-400">${item.coords ? item.coords.join(', ') : ''}</strong></span>
              <span>• Ημ/νία: <span class="font-mono text-slate-400">${mod.submittedAt ? new Date(mod.submittedAt).toLocaleDateString('el-GR') : 'Σήμερα'}</span></span>
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button onclick="window.handleApproveSubmission('${item.id}')" class="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition flex items-center gap-1.5">
              <i class="fa-solid fa-check"></i> Έγκριση
            </button>
            <button onclick="window.handleRejectSubmission('${item.id}')" class="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-lg transition flex items-center gap-1.5">
              <i class="fa-solid fa-xmark"></i> Απόρριψη
            </button>
          </div>
        </div>

        <p class="text-xs text-slate-300 leading-relaxed bg-slate-900/80 p-3 rounded-xl border border-slate-800">${escapeStr(ch.story)}</p>

        <!-- Media & Safety Verification Results -->
        <div class="flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-700/40 flex-wrap gap-2">
          <div class="flex items-center gap-2 text-slate-400">
            <span class="text-emerald-400 font-semibold flex items-center gap-1">
              <i class="fa-solid fa-shield-halved"></i> Έλεγχος Ασφαλείας:
            </span>
            ${hasYt ? '<span class="text-red-400 flex items-center gap-1 font-bold"><i class="fa-brands fa-youtube"></i> Έγκυρο YouTube</span>' : ''}
            <span>${mod.videoSafety?.message || 'Χωρίς βίντεο'}</span>
          </div>
          <button onclick="window.openSpotTimeCapsule('${item.id}')" class="text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1 text-xs">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Άνοιγμα Κάρτας Σημείου
          </button>
        </div>
      </div>
    `;
  }).join('');
}

export async function handleApproveSubmission(spotId) {
  const approved = await approveSpotSubmission(spotId);
  if (approved) {
    const memIdx = timeCapsules.findIndex(s => s.id === spotId);
    if (memIdx !== -1) {
      timeCapsules[memIdx].status = 'approved';
    } else {
      timeCapsules.push(approved);
    }
    if (window.renderCurrentTimeCapsules) {
      window.renderCurrentTimeCapsules();
    }
    await renderModerationList();
    alert('✅ Το σημείο εγκρίθηκε επιτυχώς και δημοσιεύτηκε στο Cloud!');
  }
}

export async function handleRejectSubmission(spotId) {
  const reason = prompt('Αιτιολογία απόρριψης (προαιρετικό):', 'Δεν πληροί τους όρους της κοινότητας');
  if (reason === null) return;

  await rejectSpotSubmission(spotId, reason);
  const memIdx = timeCapsules.findIndex(s => s.id === spotId);
  if (memIdx !== -1) {
    timeCapsules.splice(memIdx, 1);
  }
  if (window.renderCurrentTimeCapsules) {
    window.renderCurrentTimeCapsules();
  }
  await renderModerationList();
  alert('❌ Το αίτημα απορρίφθηκε.');
}

export async function handleApproveSpotDirectly(spotId) {
  await handleApproveSubmission(spotId);
  closeSpotTimeCapsule();
}

export function exportApprovedForProduction() {
  const custom = JSON.parse(localStorage.getItem('earthtimes_custom_spots') || '[]');
  const approvedOnly = custom.filter(s => s.status === 'approved' || !s.status);

  if (approvedOnly.length === 0) {
    alert('Δεν υπάρχουν εγκεκριμένα νέα σημεία για εξαγωγή.');
    return;
  }

  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(approvedOnly, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `approved_time_capsules_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

/**
 * Cloud DB Settings Modal
 */
export function openCloudDbSettingsModal() {
  const modal = document.getElementById('cloudDbModal');
  if (!modal) return;
  const cfg = getCloudDbConfig();
  const apiKeyEl = document.getElementById('fbApiKeyInput');
  const projEl = document.getElementById('fbProjectIdInput');
  const authEl = document.getElementById('fbAuthDomainInput');
  const appIdEl = document.getElementById('fbAppIdInput');

  if (apiKeyEl) apiKeyEl.value = cfg.apiKey || '';
  if (projEl) projEl.value = cfg.projectId || '';
  if (authEl) authEl.value = cfg.authDomain || '';
  if (appIdEl) appIdEl.value = cfg.appId || '';

  modal.classList.remove('hidden');
}

export function closeCloudDbSettingsModal() {
  const modal = document.getElementById('cloudDbModal');
  if (modal) modal.classList.add('hidden');
}

export function saveCloudDbSettings(event) {
  event.preventDefault();
  const apiKey = document.getElementById('fbApiKeyInput').value.trim();
  const projectId = document.getElementById('fbProjectIdInput').value.trim();
  const authDomain = document.getElementById('fbAuthDomainInput').value.trim();
  const appId = document.getElementById('fbAppIdInput').value.trim();

  saveCloudDbConfig({
    apiKey,
    projectId,
    authDomain: authDomain || (projectId ? `${projectId}.firebaseapp.com` : ''),
    appId
  });

  alert('✅ Οι ρυθμίσεις Firebase αποθηκεύτηκαν επιτυχώς! Η σύνδεση Cloud είναι ενεργή.');
  closeCloudDbSettingsModal();
}



