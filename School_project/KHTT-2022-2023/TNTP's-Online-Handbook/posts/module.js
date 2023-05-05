import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, set, ref, onValue } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getStorage,  ref as storageref,getDownloadURL,uploadBytes } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js";
//variable
const sidenav_user = document.getElementsByClassName("sidenav-user-info")[0];
const profile = document.getElementsByClassName("profile-box")[0]
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
const auth = getAuth(app)
const storage = getStorage(app)
onAuthStateChanged(auth, (user) => {
    if (user) {
      
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid);
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
//post creator
const submit_btn = document.getElementById('submit')
submit_btn.addEventListener("click",()=>{
    let title = document.getElementById("title").value
    let desc = document.getElementById("desc").value
    let file = document.getElementById("file").files[0]
    console.log(file);
    const img = document.getElementById("test-img")
// Create a reference to 'mountains.jpg'
const storageRef = storageref(storage, 'images/'+file.name);

// 'file' comes from the Blob or File API
uploadBytes(storageRef, file).then((snapshot) => {
    console.log(snapshot);
  console.log('Uploaded a blob or file!');
}).then(()=>{
    getDownloadURL(storageref(storage, 'images/'+file.name))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    const img = document.getElementById('test-img');
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });

})

})