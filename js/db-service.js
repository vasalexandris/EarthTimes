/**
 * Database & Moderation Service Module (EarthTimes)
 * Handles User Submissions, Safe-Platform Content Verification,
 * Pending Moderation Workflow, and Google Firebase Firestore integration.
 */

import { firebaseConfig, isFirebaseConfigured } from './firebase-config.js?v=20261119_fb_v1';

// Trusted platforms with existing automated and community content moderation
const TRUSTED_VIDEO_DOMAINS = [
  'youtube.com',
  'youtu.be',
  'm.youtube.com',
  'vimeo.com'
];

const TRUSTED_IMAGE_DOMAINS = [
  'unsplash.com',
  'images.unsplash.com',
  'wikimedia.org',
  'upload.wikimedia.org',
  'wikipedia.org',
  'img.youtube.com',
  'i.ytimg.com'
];

let firebaseApp = null;
let firestoreDb = null;
let firebaseAuth = null;

/**
 * Initializes Firebase Authentication dynamically
 */
export async function getAuthInstance() {
  if (firebaseAuth) return firebaseAuth;
  await getFirestoreInstance();
  if (!firebaseApp) return null;

  try {
    const { getAuth } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js');
    firebaseAuth = getAuth(firebaseApp);
    return firebaseAuth;
  } catch (err) {
    console.warn('[Firebase Auth] Initialization error:', err);
    return null;
  }
}

export async function loginWithGoogle() {
  const auth = await getAuthInstance();
  if (!auth) {
    alert('Το Firebase δεν έχει ενεργοποιηθεί.');
    return null;
  }

  try {
    const { signInWithPopup, GoogleAuthProvider } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js');
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log('[Firebase Auth] Logged in successfully:', user.displayName, user.email);
    return user;
  } catch (err) {
    console.error('[Firebase Auth] Login error:', err);
    if (err.code === 'auth/configuration-not-found' || err.code === 'auth/operation-not-allowed') {
      alert('⚠️ Απαιτείται ενεργοποίηση του Google Provider στο Firebase Console:\n\n1. Στο αριστερό μενού πατήστε "Authentication"\n2. Πατήστε "Get started" και επιλέξτε "Google"\n3. Ενεργοποιήστε το διακόπτη (Enable), επιλέξτε το email υποστήριξης και πατήστε "Save"!');
    } else if (err.code !== 'auth/popup-closed-by-user') {
      alert('Σφάλμα σύνδεσης Google: ' + err.message);
    }
    return null;
  }
}

export async function logoutUser() {
  const auth = await getAuthInstance();
  if (auth) {
    const { signOut } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js');
    await signOut(auth);
  }
  localStorage.removeItem('earthtimes_firebase_user');
}

export async function initAuthListener(onUserChanged) {
  const auth = await getAuthInstance();
  if (!auth) return;

  try {
    const { onAuthStateChanged } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js');
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          uid: user.uid,
          name: user.displayName || user.email.split('@')[0],
          email: user.email,
          photoURL: user.photoURL,
          role: (user.email && (user.email.includes('alexandris') || user.email.includes('vas') || user.email.includes('admin'))) ? 'admin' : 'member'
        };
        localStorage.setItem('earthtimes_firebase_user', JSON.stringify(userData));
        if (onUserChanged) onUserChanged(userData);
      } else {
        localStorage.removeItem('earthtimes_firebase_user');
        if (onUserChanged) onUserChanged(null);
      }
    });
  } catch (e) {
    console.warn('[Firebase Auth] Listener error:', e);
  }
}

/**
 * Initializes Firebase Firestore dynamically if configured
 */
export async function getFirestoreInstance() {
  if (firestoreDb) return firestoreDb;
  
  // Also check if user stored config in localStorage
  let activeConfig = firebaseConfig;
  try {
    const customCfg = JSON.parse(localStorage.getItem('earthtimes_cloud_db_config') || '{}');
    if (customCfg.apiKey && customCfg.projectId) {
      activeConfig = customCfg;
    }
  } catch (e) {}

  if (!activeConfig.apiKey || !activeConfig.projectId) {
    return null;
  }

  try {
    const { initializeApp, getApps } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const { getFirestore } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');

    firebaseApp = getApps().length ? getApps()[0] : initializeApp(activeConfig);
    firestoreDb = getFirestore(firebaseApp);
    console.log('[Firebase] Connected to Cloud Firestore successfully for project:', activeConfig.projectId);
    return firestoreDb;
  } catch (err) {
    console.warn('[Firebase] Initialization error:', err);
    return null;
  }
}

/**
 * Validates whether a media URL comes from a safe, pre-moderated platform
 */
export function verifyMediaSourceSafety(url) {
  if (!url || typeof url !== 'string') return { safe: true, reason: 'no_media' };
  
  const trimmed = url.trim().toLowerCase();

  // Reject malicious schemes
  if (trimmed.startsWith('javascript:') || trimmed.startsWith('data:text/html') || trimmed.includes('<script')) {
    return {
      safe: false,
      reason: 'malicious_scheme',
      message: 'Μη ασφαλής σύνδεσμος. Απαγορεύεται η χρήση εκτελέσιμου κώδικα.'
    };
  }

  try {
    const parsed = new URL(trimmed.startsWith('http') ? trimmed : `https://${trimmed}`);
    const host = parsed.hostname.toLowerCase();

    // Check trusted video platforms
    const isTrustedVideo = TRUSTED_VIDEO_DOMAINS.some(d => host === d || host.endsWith('.' + d));
    if (isTrustedVideo) {
      return {
        safe: true,
        type: 'video',
        platform: 'YouTube / Verified Video Host',
        message: 'Εγκεκριμένη πλατφόρμα βίντεο με αυτόματο έλεγχο περιεχομένου.'
      };
    }

    // Check trusted image platforms
    const isTrustedImage = TRUSTED_IMAGE_DOMAINS.some(d => host === d || host.endsWith('.' + d));
    if (isTrustedImage) {
      return {
        safe: true,
        type: 'image',
        platform: 'Verified Repository / CDN',
        message: 'Εγκεκριμένη αξιόπιστη πηγή πολυμέσων.'
      };
    }

    // Allow official institutional domains (.edu, .gov, .org, or official archives)
    if (host.endsWith('.edu') || host.endsWith('.gov') || host.endsWith('.org') || host.endsWith('.gr')) {
      return {
        safe: true,
        type: 'institutional',
        platform: host,
        message: 'Θεσμικός ή εκπαιδευτικός ιστότοπος (υπόκειται σε έλεγχο διαχειριστή).'
      };
    }

    // External unverified link - flag for mandatory admin review
    return {
      safe: true,
      flagged: true,
      platform: host,
      message: 'Εξωτερικός σύνδεσμος εκτός προεπιλεγμένων πλατφορμών. Απαιτείται αυστηρός έλεγχος διαχειριστή.'
    };
  } catch (e) {
    return {
      safe: false,
      reason: 'invalid_url',
      message: 'Μη έγκυρη διεύθυνση URL.'
    };
  }
}

/**
 * First-line automated safety check on submitted text & narrative
 */
export function verifyTextContentSafety(text, title) {
  const combined = `${title || ''} ${text || ''}`.toLowerCase();
  
  // Basic XSS check
  if (/<script|javascript:|onerror=|onload=/i.test(combined)) {
    return {
      safe: false,
      message: 'Απαγορεύεται η εισαγωγή κώδικα script στο κείμενο.'
    };
  }

  if (!text || text.trim().length < 10) {
    return {
      safe: false,
      message: 'Η ιστορία / περιγραφή πρέπει να είναι τουλάχιστον 10 χαρακτήρες.'
    };
  }

  return { safe: true };
}

/**
 * Storage Keys
 */
const STORAGE_PENDING_KEY = 'earthtimes_pending_moderation_spots';
const STORAGE_CUSTOM_KEY = 'earthtimes_custom_spots';
const STORAGE_CONFIG_KEY = 'earthtimes_cloud_db_config';

/**
 * Retrieve all pending moderation submissions (Local or Cloud Firestore)
 */
export async function getPendingSubmissionsAsync() {
  const db = await getFirestoreInstance();
  if (db) {
    try {
      const { collection, getDocs, query, where } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
      const q = query(collection(db, 'submissions'), where('status', '==', 'pending'));
      const snapshot = await getDocs(q);
      const list = [];
      snapshot.forEach(docSnap => {
        list.push({ ...docSnap.data(), _firestoreDocId: docSnap.id });
      });
      return list;
    } catch (err) {
      console.warn('[Firebase] Falling back to local pending submissions:', err);
    }
  }

  return getPendingSubmissions();
}

export function getPendingSubmissions() {
  try {
    const raw = localStorage.getItem(STORAGE_PENDING_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error fetching pending submissions', e);
    return [];
  }
}

/**
 * Submit a new spot request for moderation (writes to Firebase Firestore + LocalStorage)
 */
export async function submitSpotForModeration(spotData, author) {
  const chronicle = (spotData.chronicles && spotData.chronicles[0]) || {};

  // 1. Text safety check
  const textCheck = verifyTextContentSafety(chronicle.story, chronicle.title || spotData.name);
  if (!textCheck.safe) {
    throw new Error(textCheck.message);
  }

  // 2. Media safety checks
  const videoCheck = verifyMediaSourceSafety(chronicle.videoUrl || chronicle.youtubeId);
  if (!videoCheck.safe) {
    throw new Error(`Σφάλμα βίντεο: ${videoCheck.message}`);
  }

  let photoCheck = { safe: true };
  if (chronicle.photos && chronicle.photos[0] && chronicle.photos[0].url) {
    photoCheck = verifyMediaSourceSafety(chronicle.photos[0].url);
    if (!photoCheck.safe) {
      throw new Error(`Σφάλμα φωτογραφίας: ${photoCheck.message}`);
    }
  }

  const submission = {
    ...spotData,
    status: 'pending',
    moderation: {
      submittedAt: new Date().toISOString(),
      submittedBy: author.name || 'Ανώνυμος',
      authorRole: author.role || 'citizen',
      videoSafety: videoCheck,
      photoSafety: photoCheck,
      status: 'pending',
      reviewerNotes: ''
    }
  };

  // 1. Save to local storage for local preview
  try {
    const pendingList = getPendingSubmissions();
    pendingList.unshift(submission);
    localStorage.setItem(STORAGE_PENDING_KEY, JSON.stringify(pendingList));

    const customList = JSON.parse(localStorage.getItem(STORAGE_CUSTOM_KEY) || '[]');
    if (!customList.some(s => s.id === submission.id)) {
      customList.push(submission);
      localStorage.setItem(STORAGE_CUSTOM_KEY, JSON.stringify(customList));
    }
  } catch (e) {
    console.error('Error saving local submission', e);
  }

  // 2. Sync to Firebase Cloud Firestore if configured
  try {
    const db = await getFirestoreInstance();
    if (db) {
      const { collection, doc, setDoc } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
      await setDoc(doc(db, 'submissions', submission.id), submission);
      console.log('[Firebase] Successfully sent spot submission to Firestore cloud!');
    }
  } catch (err) {
    console.warn('[Firebase] Cloud submission warning (saved locally):', err);
  }

  return submission;
}

/**
 * Approve a pending spot (Admin action)
 */
export async function approveSpotSubmission(spotId, reviewerNotes = '') {
  const pending = getPendingSubmissions();
  const spotIndex = pending.findIndex(s => s.id === spotId);
  let approvedSpot = spotIndex !== -1 ? { ...pending[spotIndex] } : null;

  if (approvedSpot) {
    approvedSpot.status = 'approved';
    approvedSpot.moderation = {
      ...approvedSpot.moderation,
      status: 'approved',
      reviewedAt: new Date().toISOString(),
      reviewerNotes
    };

    pending.splice(spotIndex, 1);
    localStorage.setItem(STORAGE_PENDING_KEY, JSON.stringify(pending));

    try {
      const customList = JSON.parse(localStorage.getItem(STORAGE_CUSTOM_KEY) || '[]');
      const cIdx = customList.findIndex(s => s.id === spotId);
      if (cIdx !== -1) {
        customList[cIdx] = approvedSpot;
      } else {
        customList.push(approvedSpot);
      }
      localStorage.setItem(STORAGE_CUSTOM_KEY, JSON.stringify(customList));
    } catch (e) {}
  }

  // Update in Firebase Cloud Firestore
  try {
    const db = await getFirestoreInstance();
    if (db) {
      const { doc, setDoc, updateDoc } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
      // Update status in submissions
      await updateDoc(doc(db, 'submissions', spotId), {
        status: 'approved',
        'moderation.status': 'approved',
        'moderation.reviewedAt': new Date().toISOString(),
        'moderation.reviewerNotes': reviewerNotes
      });
      // Also publish to global approved_spots collection
      if (approvedSpot) {
        await setDoc(doc(db, 'approved_spots', spotId), approvedSpot);
      }
      console.log('[Firebase] Spot approved and published to Firestore!');
    }
  } catch (err) {
    console.warn('[Firebase] Could not update approval in Cloud DB:', err);
  }

  return approvedSpot;
}

/**
 * Reject a pending spot (Admin action)
 */
export async function rejectSpotSubmission(spotId, reason = '') {
  const pending = getPendingSubmissions();
  const spotIndex = pending.findIndex(s => s.id === spotId);
  let rejectedSpot = spotIndex !== -1 ? { ...pending[spotIndex] } : null;

  if (rejectedSpot) {
    rejectedSpot.status = 'rejected';
    rejectedSpot.moderation = {
      ...rejectedSpot.moderation,
      status: 'rejected',
      reviewedAt: new Date().toISOString(),
      reviewerNotes: reason || 'Δεν πληροί τους όρους κοινότητας'
    };

    pending.splice(spotIndex, 1);
    localStorage.setItem(STORAGE_PENDING_KEY, JSON.stringify(pending));

    try {
      const customList = JSON.parse(localStorage.getItem(STORAGE_CUSTOM_KEY) || '[]');
      const cIdx = customList.findIndex(s => s.id === spotId);
      if (cIdx !== -1) {
        customList[cIdx] = rejectedSpot;
        localStorage.setItem(STORAGE_CUSTOM_KEY, JSON.stringify(customList));
      }
    } catch (e) {}
  }

  // Update in Firebase Cloud Firestore
  try {
    const db = await getFirestoreInstance();
    if (db) {
      const { doc, updateDoc } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
      await updateDoc(doc(db, 'submissions', spotId), {
        status: 'rejected',
        'moderation.status': 'rejected',
        'moderation.reviewedAt': new Date().toISOString(),
        'moderation.reviewerNotes': reason
      });
      console.log('[Firebase] Spot rejected in Firestore.');
    }
  } catch (err) {
    console.warn('[Firebase] Could not update rejection in Cloud DB:', err);
  }

  return rejectedSpot;
}

/**
 * Load all approved spots from Firebase Cloud Firestore (accessible to everyone)
 */
export async function loadCloudApprovedSpots() {
  const db = await getFirestoreInstance();
  if (!db) return [];

  try {
    const { collection, getDocs } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
    const snapshot = await getDocs(collection(db, 'approved_spots'));
    const list = [];
    snapshot.forEach(docSnap => {
      list.push(docSnap.data());
    });
    console.log(`[Firebase] Loaded ${list.length} cloud-approved spots from Firestore.`);
    return list;
  } catch (err) {
    console.warn('[Firebase] Could not load cloud-approved spots:', err);
    return [];
  }
}

/**
 * Cloud Database Config & Connector Settings
 */
export function getCloudDbConfig() {
  try {
    const custom = localStorage.getItem(STORAGE_CONFIG_KEY);
    if (custom) return JSON.parse(custom);
  } catch (e) {}
  return firebaseConfig;
}

export function saveCloudDbConfig(config) {
  localStorage.setItem(STORAGE_CONFIG_KEY, JSON.stringify(config));
  firestoreDb = null; // Reset instance to trigger reconnect
}
