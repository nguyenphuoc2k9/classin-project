import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, set, ref, onValue, update } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getStorage,  ref as storageref,getDownloadURL,uploadBytes } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js";
//variable
const sidenav_user = document.getElementsByClassName("sidenav-user-info")[0];
const profile_box = document.getElementsByClassName("profile-box")[0]
const btn = document.getElementById('submit-btn')
const firebaseConfig = {
  apiKey: "AIzaSyDaLmLo0Z6BUd1wYpqTFgEks0liCL6kjlE",
  authDomain: "tntp-s-online-handb.firebaseapp.com",
  projectId: "tntp-s-online-handb",
  storageBucket: "tntp-s-online-handb.appspot.com",
  messagingSenderId: "699284847876",
  appId: "1:699284847876:web:5d340338d3b559f880a451",
  measurementId: "G-531EMCZKBV"
};
let uid_ = new URLSearchParams(window.location.search).get('id')
let profile_ = new URLSearchParams(window.location.search).get('profile')
console.log(profile_);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app)
const auth = getAuth()
const storage = getStorage(app)
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid
    const starCountRef = ref(database, 'users/' + uid_);
    onValue(ref(database, 'users/' + uid),(snap)=>{
      const data = snap.val()
      print_user(data,uid)
    })
    console.log('sidenva');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      print_data(data,uid)
    }, {
      onlyOnce: true
    });
  } else {
    window.location.replace("/login_and_sigup/login/")
    // User is signed out
    // ...
  }
});
function print_data(data,uid) {
  let photo;
  var str = new String(data.avatar)
  console.log(str.split(",")[0]);
  if(data.avatar.includes(',')){
  getDownloadURL(storageref(storage, 'avatar/'+ str.split(",")[0]))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    // const xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = (event) => {
    //   const blob = xhr.response;
    // };
    // xhr.open('GET', url);
    // xhr.send();
    photo = url
    profile(photo)
    
    })
  }else{
    if (data.avatar == "none" || data.avatar == null) {
      photo = '../user.png'
      
    } else {
      photo = data.avatar
      
    }
    profile(photo)
      
  }
  
  function profile(photo){
    var html_2 =
    `
  <div class="profile-img">
  <img src="${photo}" id='img' alt="">
  <input type='file' id='file'>
  </div>
<div class="profile-info">
  <div class="info-card first">
      <div class="info">
          <h1>Tên người dùng:</h1>
          <h2>${data.username}</h2>
      </div>
      <button class ='edit' edit-value='username'><p>Chỉnh sửa</p> <i class="fa-solid fa-pen-to-square"></i></button>
  </div>
  <div class="info-card first">
      <div class="info">
          <h1>Email:</h1>
          <h2>${data.email}</h2>
      </div>
      <button class="edit" edit-value='email'><p>Chỉnh sửa</p> <i class="fa-solid fa-pen-to-square"></i></button>
  </div>
  <div class="info-card">
      <div class="info">
          <h1>Giới tính:</h1>
          <h2>${data.gender}</h2>
      </div>
      <button class="edit" edit-value='gender'><p>Chỉnh sửa</p> <i class="fa-solid fa-pen-to-square"></i></button>
  </div>
  <div class="info-card">
      <div class="info">
          <h1>Trường:</h1>
          <h2>${data.school}</h2>
      </div>
      <button class="edit" edit-value='school'><p>Chỉnh sửa</p> <i class="fa-solid fa-pen-to-square"></i></button>
  </div>
  <div class="info-card">
      <div class="info">
          <h1>Lớp:</h1>
          <h2>${data.grade}</h2>
      </div>
      <button class="edit" edit-value='class'><p>Chỉnh sửa</p> <i class="fa-solid fa-pen-to-square"></i></button>
  </div>
  <div class="info-card">
      <div class="info">
          <h1>Thành tựu:</h1>
          <h2>${data.archive}</h2>
      </div>
      <button class="edit" edit-value='archive'><p>Chỉnh sửa</p> <i class="fa-solid fa-pen-to-square"></i></button>
    </div>
</div>
  `
  var html_3 =
  `
<div class="profile-img">
<img src="${photo}" id='img' alt="">
</div>
<div class="profile-info">
<div class="info-card first">
    <div class="info">
        <h1>Tên người dùng:</h1>
        <h2>${data.username}</h2>
    </div>
</div>
<div class="info-card first">
    <div class="info">
        <h1>Email:</h1>
        <h2>${data.email}</h2>
    </div>
</div>
<div class="info-card">
    <div class="info">
        <h1>Giới tính:</h1>
        <h2>${data.gender}</h2>
    </div>
</div>
<div class="info-card">
    <div class="info">
        <h1>Trường:</h1>
        <h2>${data.school}</h2>
    </div>
</div>
<div class="info-card">
    <div class="info">
        <h1>Lớp:</h1>
        <h2>${data.grade}</h2>
    </div>
</div>
<div class="info-card">
    <div class="info">
        <h1>Thành tựu:</h1>
        <h2>${data.archive}</h2>
    </div>
  </div>
</div>
`
if(profile_!='false'){
  
  profile_box.insertAdjacentHTML("afterbegin", html_2)
  start_edit_file()
start_edit()
}else{
  profile_box.insertAdjacentHTML("afterbegin", html_3)

}

  }
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
        const dataref = ref(database, 'users/' + uid_)
        onValue(ref(database, 'users/' + uid_ + '/' + editvalue), (snapshot) => {
          const keyName = snapshot.key;
          const updatevalue = {}
          updatevalue[`${editvalue}`] = newvalue
          update(dataref, updatevalue).then(() => {
            console.log('dont');
          })
        });
      }
    })
  }
}

function start_edit_file(){
  const file_input = document.getElementById("file")
  file_input.addEventListener('change',(e)=>{
    var file= e.target.files[0]
    if(file!=null){
      var storageRef = storageref(storage,'avatar/' + file.name)
    uploadBytes(storageRef,file).then(()=>{
      console.log('Successfully');
      update(ref(database,'users/'+uid_),{
        avatar:file.name+',storage'
      }).then(()=>{
        console.log('done');
      })
      //window.location.reload();
    })
    }
  })
}
function print_user(data,uid){
  console.log(uid);
  console.log(data);
  let photo;
  var str = new String(data.avatar)
console.log(str.split(",")[0]);
if(data.avatar.includes(',')){
getDownloadURL(storageref(storage, 'avatar/'+ str.split(",")[0]))
.then((url) => {
  // `url` is the download URL for 'images/stars.jpg'

  // This can be downloaded directly:
  // const xhr = new XMLHttpRequest();
  // xhr.responseType = 'blob';
  // xhr.onload = (event) => {
  //   const blob = xhr.response;
  // };
  // xhr.open('GET', url);
  // xhr.send();
  photo = url
  sidenav(photo)
  console.log(photo);
  })
}else{
  if(data.avatar == "none" || data.avatar == null){
    photo = '../user.png'
    
  }else{
    photo = data.avatar
  }
  sidenav(photo)
}
function sidenav(photo){
  console.log(photo);
  document.getElementById('img').src = photo
  document.getElementById('href').href += `?id=${uid}&&profile=true`
}
  
}
btn.addEventListener('click',(e)=>{
  e.preventDefault()
  let search_Value = document.getElementById('search-value').value
  if(search_Value != ''){
    window.location.replace(`/main/search/?search_value=${value_input}`)
  
  }
})
var feedback_btn  = document.getElementById('feedback-btn')
function start_feedback(uid){
  feedback_btn.addEventListener('click',()=>{
    var feed_back_value = document.getElementById('feedback').value
    if(feed_back_value != '' || feed_back_value!=null){
      set(ref(database,'feedback/'+ generateRandomKey(5)),{
        feedback: feed_back_value,
        uid:uid
      }).then(()=>{
        window.location.reload()
      })
    }
  })
}
