// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAuth, GoogleAuthProvider,createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";// TODO: Add SDKs for Firebase products that you want to use
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
const GoogleProvider = new GoogleAuthProvider(app)
const GithubProvider = new GithubAuthProvider(app)
const FacebookProvider = new FacebookAuthProvider(app)
document.getElementById("sighin-btn").addEventListener("click",function(){
    let name = document.getElementById("sighin-name").value
    let gmail = document.getElementById("sighin-email").value
    let pass = document.getElementById("sighin-pass").value
    let check = false;
    if(name.length == 0|| gmail.length == 0 || pass.length ==0){
        alert("input cannot be blank")
        check = true
    }
    if(check == false){
        createUserWithEmailAndPassword(auth, gmail, pass)
    .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        alert("sigh in susceed")
    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    // ..
    });

    }

})
document.getElementById("gmail").addEventListener("click",(e)=>{
signInWithPopup(auth, GoogleProvider)
.then((result) => {
// This gives you a Google Access Token. You can use it to access the Google API.
const credential = GoogleAuthProvider.credentialFromResult(result);
const token = credential.accessToken;
// The signed-in user info.
const user = result.user;
// ...
}).catch((error) => {
// Handle Errors here.
const errorCode = error.code;
const errorMessage = error.message;
// The email of the user's account used.
const email = error.customData.email;
// The AuthCredential type that was used.
const credential = GoogleAuthProvider.credentialFromError(error);
// ...
});
})
document.getElementById("facebook").addEventListener("click",(e)=>{
    signInWithPopup(auth, FacebookProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
  
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
  
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
  
      // ...
    });
})
document.getElementById("Github").addEventListener("click",function(){
    signInWithPopup(auth, GithubProvider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
  
})