import{ initializeApp }  from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth,onAuthStateChanged,signOut   } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase,set,ref,onValue } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getFirestore,setDoc,doc,collection } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
//variable
const sidenav_user = document.getElementsByClassName("sidenav-user-info")[0];
const firebaseConfig = {
  apiKey: "AIzaSyDaLmLo0Z6BUd1wYpqTFgEks0liCL6kjlE",
  authDomain: "tntp-s-online-handb.firebaseapp.com",
  projectId: "tntp-s-online-handb",
  storageBucket: "tntp-s-online-handb.appspot.com",
  messagingSenderId: "699284847876",
  appId: "1:699284847876:web:5d340338d3b559f880a451",
  measurementId: "G-531EMCZKBV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app)
const db = getFirestore(app)
const auth = getAuth()

onAuthStateChanged(auth, (user) => {
    if (user) {
      
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid);
      // ...
      const starCountRef = ref(database, 'users/' +uid);
      onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      print_user(data,uid)
}); 
    } else {
      window.location.replace("../login and sign up/index.html")
      // User is signed out
      // ...
    }
  });
function print_user(data,uid){
  console.log(data);
  let photo;
  if (data.avatar == "none" || data.avatar == null){
    photo = '../user.png'
    
  }else{
    photo = data.avatar
  }
  var html = `<a href="../profile/index.html?id=${uid}"><img src="${photo}" alt=""></a>
  <h2>${data.username}</h2>`

  sidenav_user.insertAdjacentHTML("afterbegin",html)
}
//sign-out
const sign_out_btn = document.getElementById("sign-out")
sign_out_btn.addEventListener("click",()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    console.log(error);
    // An error happened.
  });
})