// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyD7AW4qa3ggkBS9wAxsoISNdPKVqyY9WXw",
authDomain: "demojsi09.firebaseapp.com",
databaseURL: "https://demojsi09-default-rtdb.firebaseio.com",
projectId: "demojsi09",
storageBucket: "demojsi09.appspot.com",
messagingSenderId: "612274915486",
appId: "1:612274915486:web:69815d4c02330b69de938f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
