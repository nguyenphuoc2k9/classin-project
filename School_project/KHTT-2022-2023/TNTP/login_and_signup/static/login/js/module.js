import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, set, ref,onValue } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getFirestore, setDoc, doc, collection } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaLmLo0Z6BUd1wYpqTFgEks0liCL6kjlE",
  authDomain: "tntp-s-online-handb.firebaseapp.com",
  projectId: "tntp-s-online-handb",
  storageBucket: "tntp-s-online-handb.appspot.com",
  messagingSenderId: "699284847876",
  appId: "1:699284847876:web:5d340338d3b559f880a451",
  measurementId: "G-531EMCZKBV"
};
//sign_up
const sigh_up_btn = document.getElementById("sign-up-submit");
const sign_up_facebook = document.getElementsByClassName("sign-up-facebook");
const sign_up_google = document.getElementsByClassName("sign-up-google");


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app)
const auth = getAuth()
checkif()
sigh_up_btn.addEventListener("click", function (e) {
  const sign_up_username = document.getElementById("sign-up-username").value
  const sign_up_password = document.getElementById("sign-up-password").value
  const sign_up_email = document.getElementById("sign-up-email").value
  e.preventDefault()
  console.log('XD');
  createUserWithEmailAndPassword(auth, sign_up_email, sign_up_password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Successfully created user")
      
      set(ref(database, 'users/' + user.uid), {
        username: sign_up_username,
        email: user.email,
        avatar: 'none',
        gender: "chưa xác định",
        school: "chưa xác định",
        class: "chưa xác định",
        archive: ''
      }).then(()=>{

        window.location.href+='more-info/'
      })
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  
})
for (let i = 0; i < sign_up_google.length; i++) {
  sign_up_google[i].addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        fetch(`https://people.googleapis.com/v1/people/me?personFields=photos&access_token=${token}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            const pictureUrl = data.photos[0].url;
            console.log(pictureUrl);
            const starCountRef = ref(database, 'users/' +user.uid);
            var check = false
            onValue(starCountRef, (snapshot) => {
            if(snapshot.exists()&&check ==false){
              window.location.href = '/home/'
              check = true;
            }else{
              check = true;
              set(ref(database, 'users/' + user.uid), {
                
                username: user.displayName,
                email: user.email,
                avatar: pictureUrl,
                gender: "chưa xác định",
                school: "chưa xác định",
                class: "chưa xác định",
                archive: ''
              }).then(()=>{
                window.location.href+='more-info/'
              })
            }
            })
            
            
            // Do something with the picture URL, such as display it on the page.
          });
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        alert("A error occured")
      });

  })
}

for (let i = 0; i < sign_up_facebook.length; i++) {
  sign_up_facebook[i].addEventListener("click", function () {
    const provider = new FacebookAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        fetch(`https://graph.facebook.com/me/picture?access_token=${accessToken}&type=large`)
          .then((response) => {
            // The response contains a URL to the user's profile picture.
            const pictureUrl = response.url;
            const starCountRef = ref(database, 'users/' +user.uid);

            var check = false
            onValue(starCountRef, (snapshot) => {
            if(snapshot.exists()&&check ==false){
              window.location.href = '/home/'
              check = true;
            }else{
              set(ref(database, 'users/' + user.uid), {
                username: user.displayName,
                email: user.email,
                avatar: pictureUrl,
                gender: "chưa xác định",
                school: "chưa xác định",
                class: "chưa xác định",
                archive: ''
              }).then(()=>{
                window.location.href += 'more-info/'
              })
            }
            })
            // Do something with the picture URL, such as display it on the page.
          });
        
        // IdP data available using getAdditionalUserInfo(result)
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
        alert("A error occured", errorMessage)
        // ...
      });
      
  })
}
// sign_in
const sign_in_btn = document.getElementById("sign-in-submit");
sign_in_btn.addEventListener("click", function (e) {
  e.preventDefault()
  const sign_in_email = document.getElementById("sign-in-email").value
  const sign_in_password = document.getElementById("sign-in-password").value
  signInWithEmailAndPassword(auth, sign_in_email, sign_in_password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("Logged in successfully")

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("An error occurred while logging in")
    });
  checkif()
})

//check new user
var check_count = 0
function checkif() {
  console.log('yes');
  if(check_count > 0){
    check_count+=1
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const starCountRef = ref(database, 'users/' +user.uid);
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if(snapshot.exists()){
          window.location.href = '/home/'
          console.log(data.username);
        }
        },{
          onlyOnce:true,
        })
      } else {
        // User is signed .
        // ...
      }
    });
  }
}












