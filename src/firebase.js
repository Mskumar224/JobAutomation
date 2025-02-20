// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBfxP5HeFyVtz4g3A0_nETeWGKD5FAhmKk",
    authDomain: "jobautoapply-30166.firebaseapp.com",
    projectId: "jobautoapply-30166",
    storageBucket: "jobautoapply-30166.firebasestorage.app",
    messagingSenderId: "66388658269",
    appId: "1:66388658269:web:69449c96ba6af52af865b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref, uploadBytes, getDownloadURL };
