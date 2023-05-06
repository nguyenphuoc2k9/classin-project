import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, set, ref, onValue,update } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
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
let uid_ = new URLSearchParams(window.location.search).get('id')
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
      if(uid_ == undefined){
        window.location.replace(`./index.html?id=${uid}`)
      }
      onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      print_user(data,uid)
},{
  onlyOnce : true
});
onValue(ref(database,'post/'),(value)=>{
  const data = value.val()
    print_post(data)
},{
  onlyOnce:true
})
    } else {
      window.location.replace("../login and sign up/index.html")
      // User is signed out
      // ...
    }
  });
function print_user(data,uid){
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
    })
  }else if(data.avatar == "none" || data.avatar == null){
      photo = '../user.png'
      
    }else{
      photo = data.avatar
    }
    function sidenav(photo){
      console.log(photo);
      var html = `<a href="../profile/index.html?id=${uid}&&profile=true"><img src="${photo}" alt=""></a>
      <h2>${data.username}</h2>`
    
      sidenav_user.insertAdjacentHTML("afterbegin", html)
    }
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
    const p = document.getElementsByClassName("error-text")
// Create a reference to 'mountains.jpg'
const storageRef = storageref(storage, 'images/'+file.name);
const starCountRef = ref(database, 'users/');

let check = false;
if(title!= null && desc != null){
  if(title.length >5 && title.length <30){
    check = true
  }else{
    check = false
    p[0].innerText = 'Title must has at least more than 5 and less than 30 characters'
  }
  if(file != null){
    check = true
  }else{
    check = false
  }
  if(desc.length > 10 && desc.length <100){
    check = true
  }else {
    check = false
    p[2].innerText = 'Description must have at least more than 10 and less than 100 characters'
  }
}
if(check == true){
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log(snapshot);
  console.log('Uploaded a blob or file!');
  set(ref(database,'pending-post/'+generateRandomKey(10)),{
    title:title,
    desc:desc,
    archive:'none',
    author_uid:uid_,
    img:file.name
  })
  
})

}


})
//print_post
const post_box = document.getElementsByClassName("post-box")[0]
function print_post(data_2){
  var data_keys = Object.keys(data_2)
  console.log(data_keys);
  for(let i=0;i<data_keys.length;i++){
    var data = data_2[data_keys[i]]
    console.log(data);
    onValue(ref(database,'users/'+data.author_uid),(value)=>{
      const val = value.val()
      getDownloadURL(storageref(storage, 'images/'+data.img))
    .then((url) => {
  let photo;
  var str = new String(val.avatar)
    console.log(str.split(",")[0]);
    if(val.avatar.includes('/')){
    getDownloadURL(storageref(storage, 'avatar/'+ str.split(",")[0]))
    .then((url_2) => {
      print_post_element(data,val,url,url_2)
      })
    }else{
      
      if (data.avatar == "none" || data.avatar == null) {
        photo = '../user.png'
        
      } else {
        photo = data.avatar
        
      }
      print_post_element(data,val,url,photo)
    }
    
    })
    .catch((error) => {
      // Handle any errors
    });
    },{
      onlyOnce:true
    })
    
  }
  function print_post_element(data,val,url,url_2){
    var html = `<div class="post-element">
    <div class="header">
        <div class="owner" id='owner'>
            <a href="../profile/index.html?id=${data.author_uid}&&profile=false"><img id='img' src="${url_2}" alt="avatar"></a>
            <h3>${val.username}</h3>
        </div>
        <div class="archive">
            <h3>Thành tựu</h3>
            <h2>thành viên</h2>
        </div>
    </div>
    
    <div class="info">
        <h1>${data.title}</h1>
        <p>${data.desc}</p>
        <img src="${url}" alt="">
    </div>
  </div>`
  post_box.insertAdjacentHTML("beforeend",html)
  }
}
function generateRandomKey(length) {
  var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var key = '';

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    key += characters.charAt(randomIndex);
  }

  return key;
}

// Example usage: generate a random key of length 10