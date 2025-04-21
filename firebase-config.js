// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtO7yMF8yhTkTv3faN0u1oNyJ0KpaBnsA",
  authDomain: "vu-tru-nghe-nghiep.firebaseapp.com",
  databaseURL: "https://vu-tru-nghe-nghiep-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vu-tru-nghe-nghiep",
  storageBucket: "vu-tru-nghe-nghiep.firebasestorage.app",
  messagingSenderId: "248626863436",
  appId: "1:248626863436:web:00362f550042ef8dd743e9",
  measurementId: "G-3QDN201BBD"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Lấy instance của Firestore
const db = getFirestore(app);

export { db };
