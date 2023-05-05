import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, set, ref, onValue, update } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
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
const auth = getAuth()
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    const starCountRef = ref(database, 'users/' + uid);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      print_data(data)
    }, {
      onlyOnce: true
    });
  } else {
    window.location.replace("../login and sign up/index.html")
    // User is signed out
    // ...
  }
});
function print_data(data) {
  let photo;
  if (data.avatar == "none" || data.avatar == null) {
    photo = '../user.png'

  } else {
    photo = data.avatar
  }
  var html = `<a href="#"><img src="${photo}" alt=""></a>
  <h2>${data.username}</h2>`

  sidenav_user.insertAdjacentHTML("afterbegin", html)
  var html_2 =
    `
  <div class="profile-img">
  <img src="${photo}" alt="">
</div>
<div class="profile-info">
  <div class="info-card first">
      <div class="info">
          <h1>Tên người dùng:</h1>
          <h2>${data.username}</h2>
      </div>
      <button class ='edit' edit-value='username'>Chỉnh sửa <i class="fa-solid fa-pen-to-square"></i></button>
  </div>
  <div class="info-card first">
      <div class="info">
          <h1>Email:</h1>
          <h2>${data.email}</h2>
      </div>
      <button class="edit" edit-value='email'>Chỉnh sửa <i class="fa-solid fa-pen-to-square"></i></button>
  </div>
  <div class="info-card">
      <div class="info">
          <h1>Giới tính:</h1>
          <h2>${data.gender}</h2>
      </div>
      <button class="edit" edit-value='gender'>Chỉnh sửa <i class="fa-solid fa-pen-to-square"></i></button>
  </div>
  <div class="info-card">
      <div class="info">
          <h1>Trường:</h1>
          <h2>${data.school}</h2>
      </div>
      <button class="edit" edit-value='school'>Chỉnh sửa <i class="fa-solid fa-pen-to-square"></i></button>
  </div>
  <div class="info-card">
      <div class="info">
          <h1>Lớp:</h1>
          <h2>${data.class}</h2>
      </div>
      <button class="edit" edit-value='class'>Chỉnh sửa <i class="fa-solid fa-pen-to-square"></i></button>
  </div>
  <div class="info-card">
      <div class="info">
          <h1>Thành tựu:</h1>
          <h2>${data.archive}</h2>
      </div>
      <button class="edit" edit-value='archive'>Chỉnh sửa <i class="fa-solid fa-pen-to-square"></i></button>
    </div>
</div>
  `
  profile.insertAdjacentHTML("afterbegin", html_2)
  start_edit()
}
//sign-out
const sign_out_btn = document.getElementById("sign-out")
sign_out_btn.addEventListener("click", () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    console.log(error);
    // An error happened.
  });
})

//edit
function start_edit() {
  const edit = document.getElementsByClassName('edit')
  console.log(edit.length);
  for (let i = 0; i < edit.length; i++) {
    edit[i].addEventListener("click", function () {
      var editvalue = new String(edit[i].getAttribute("edit-value"))
      var newvalue = prompt(`chỉnh sửa ${editvalue}:`)
      if (newvalue != null) {
        let uid = new URLSearchParams(window.location.search).get('id')
        const dataref = ref(database, 'users/' + uid)
        onValue(ref(database, 'users/' + uid + '/' + editvalue), (snapshot) => {
          const keyName = snapshot.key;
          const updatevalue = {}
          updatevalue[`${editvalue}`] = newvalue
          update(dataref, updatevalue).then(() => {
            window.location.reload()
          })

        });
      }
    })
  }
}