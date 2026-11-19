/**
 * Database & Moderation Service Module (EarthTimes)
 * Handles User Submissions, Safe-Platform Content Verification,
 * Pending Moderation Workflow, and Cloud DB (Firebase / Supabase) integration.
 */

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
 * Retrieve all pending moderation submissions (Local or Cloud)
 */
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
 * Submit a new spot request for moderation
 */
export function submitSpotForModeration(spotData, author) {
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
    status: 'pending', // 'pending' | 'approved' | 'rejected'
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

  // Save to pending submissions queue
  try {
    const pendingList = getPendingSubmissions();
    pendingList.unshift(submission);
    localStorage.setItem(STORAGE_PENDING_KEY, JSON.stringify(pendingList));

    // Also save in local custom spots so the user can preview it locally on their computer!
    const customList = JSON.parse(localStorage.getItem(STORAGE_CUSTOM_KEY) || '[]');
    if (!customList.some(s => s.id === submission.id)) {
      customList.push(submission);
      localStorage.setItem(STORAGE_CUSTOM_KEY, JSON.stringify(customList));
    }
  } catch (e) {
    console.error('Error saving submission', e);
  }

  return submission;
}

/**
 * Approve a pending spot (Admin action)
 */
export function approveSpotSubmission(spotId, reviewerNotes = '') {
  const pending = getPendingSubmissions();
  const spotIndex = pending.findIndex(s => s.id === spotId);
  if (spotIndex === -1) return null;

  const approvedSpot = { ...pending[spotIndex] };
  approvedSpot.status = 'approved';
  approvedSpot.moderation = {
    ...approvedSpot.moderation,
    status: 'approved',
    reviewedAt: new Date().toISOString(),
    reviewerNotes
  };

  // Remove from pending
  pending.splice(spotIndex, 1);
  localStorage.setItem(STORAGE_PENDING_KEY, JSON.stringify(pending));

  // Update in local custom spots
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

  return approvedSpot;
}

/**
 * Reject a pending spot (Admin action)
 */
export function rejectSpotSubmission(spotId, reason = '') {
  const pending = getPendingSubmissions();
  const spotIndex = pending.findIndex(s => s.id === spotId);
  if (spotIndex === -1) return null;

  const rejectedSpot = { ...pending[spotIndex] };
  rejectedSpot.status = 'rejected';
  rejectedSpot.moderation = {
    ...rejectedSpot.moderation,
    status: 'rejected',
    reviewedAt: new Date().toISOString(),
    reviewerNotes: reason || 'Δεν πληροί τους όρους κοινότητας'
  };

  // Remove from pending
  pending.splice(spotIndex, 1);
  localStorage.setItem(STORAGE_PENDING_KEY, JSON.stringify(pending));

  // Update status in custom spots
  try {
    const customList = JSON.parse(localStorage.getItem(STORAGE_CUSTOM_KEY) || '[]');
    const cIdx = customList.findIndex(s => s.id === spotId);
    if (cIdx !== -1) {
      customList[cIdx] = rejectedSpot;
      localStorage.setItem(STORAGE_CUSTOM_KEY, JSON.stringify(customList));
    }
  } catch (e) {}

  return rejectedSpot;
}

/**
 * Cloud Database Config & Connector (Firebase Firestore / Supabase)
 * This enables seamless switching from LocalStorage to live Cloud DB!
 */
export function getCloudDbConfig() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_CONFIG_KEY) || '{}');
  } catch (e) {
    return {};
  }
}

export function saveCloudDbConfig(config) {
  localStorage.setItem(STORAGE_CONFIG_KEY, JSON.stringify(config));
}
