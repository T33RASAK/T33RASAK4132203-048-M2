// firebase.config.js
const firebaseConfig = {
    apiKey: "AIzaSyDqf7bdKzfqYH6aybRCRfqfKZ6IfR0arXI",
  authDomain: "alice2802-8fbac.firebaseapp.com",
  projectId: "alice2802-8fbac",
  storageBucket: "alice2802-8fbac.firebasestorage.app",
  messagingSenderId: "1016994385407",
  appId: "1:1016994385407:web:3a2af6872c79cfc8106bca",
  measurementId: "G-NKLS2F043M" 
};

// For service worker (firebase-messaging-sw.js)
// This ensures the config is available in both module and non-module contexts
if (typeof self !== 'undefined') {
    self.firebaseConfig = firebaseConfig;
}