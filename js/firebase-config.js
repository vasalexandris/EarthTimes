/**
 * Firebase Configuration for EarthTimes
 * 
 * Εδώ τοποθετείτε τα στοιχεία σύνδεσης από το Firebase Console:
 * (Project Settings -> Γενικά -> Οι εφαρμογές σας -> Web App)
 */

export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
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
