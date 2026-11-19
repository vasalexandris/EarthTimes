/**
 * Firebase Configuration for EarthTimes
 * Project: earthtimes-koz
 */

export const firebaseConfig = {
  apiKey: "AIzaSyBpS8645rMP0IFjtb-9oLXfwaUnvAeaW0g",
  authDomain: "earthtimes-koz.firebaseapp.com",
  projectId: "earthtimes-koz",
  storageBucket: "earthtimes-koz.firebasestorage.app",
  messagingSenderId: "93027950815",
  appId: "1:93027950815:web:1a7050ef024c655037896a"
};

/**
 * Ελέγχει αν το Firebase έχει ρυθμιστεί με έγκυρα κλειδιά
 */
export function isFirebaseConfigured() {
  return Boolean(
    firebaseConfig.apiKey && 
    firebaseConfig.projectId && 
    firebaseConfig.apiKey !== "" && 
    !firebaseConfig.apiKey.includes("PASTE_")
  );
}
