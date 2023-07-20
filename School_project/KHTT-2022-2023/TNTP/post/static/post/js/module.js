import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, set, ref, onValue, update } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getStorage, ref as storageref, getDownloadURL, uploadBytes } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js";
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
    const starCountRef = ref(database, 'users/' + uid);
    if (uid_ == undefined) {
      window.location.href += `?id=${uid}`
    }
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      print_user(data, uid)
      onValue(ref(database, 'post/'), (value) => {
        const data = value.val()
        print_post(snapshot,data)
      }, {
        onlyOnce: true
      })
    }, {
      onlyOnce: true
    });
    
  } else {
    window.location.replace("../login and sign up/index.html")
    // User is signed out
    // ...
  }
});
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
//post creator
const submit_btn = document.getElementById('submit')
submit_btn.addEventListener("click", () => {
  let title = document.getElementById("title").value
  let desc = document.getElementById("desc").value
  let file = document.getElementById("file").files[0]
  const p = document.getElementsByClassName("error-text")
  // Create a reference to 'mountains.jpg'
  const storageRef = storageref(storage, 'images/' + file.name);
  const starCountRef = ref(database, 'users/');

  let check = false;
  if (title != null && desc != null) {
    if (title.length > 5 && title.length < 30) {
      check = true
    } else {
      check = false
      p[0].innerText = 'Title must has at least more than 5 and less than 30 characters'
    }
    if (file != null) {
      check = true
    } else {
      check = false
    }
    if (desc.length > 10 && desc.length < 100) {
      check = true
    } else {
      check = false
      p[2].innerText = 'Description must have at least more than 10 and less than 100 characters'
    }
  }

  if(file != null){
    check = true
  }else{
    check = false
  }
  if(desc.length > 10 && desc.length <300){
    check = true
  }else {
    check = false
    p[2].innerText = 'Description must have at least more than 10 and less than 100 characters'
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
  }).then(()=>{
    window.location.reload()
  })
  
})
  if (check == true) {
    uploadBytes(storageRef, file).then((snapshot) => {
      set(ref(database, 'pending-post/' + generateRandomKey(10)), {
        title: title,
        desc: desc,
        archive: 'none',
        author_uid: uid_,
        img: file.name
      }).then(()=>{
        window.location.reload();
      })

    })

  }


}})

//print_post
const post_box = document.getElementsByClassName("post-box")[0]
function print_post(value,data_2) {
  var data_keys = Object.keys(data_2)
  
  async function processLoop() {
    var i = 0;
    while (i < data_keys.length) {
      var data = data_2[data_keys[i]];
      var len = data_keys.length;
      var count = i + 1;
      const val = await get_user(data)
      console.log(val);
      try {
        const url = await getDownloadURL(storageref(storage, 'images/' + data.img));
        let photo;
        var str = new String(val.avatar);
  
        if (str.includes(',')) {
          const url_2 = await getDownloadURL(storageref(storage, 'avatar/' + str.split(",")[0]));
          if (url_2 != null || url_2 == undefined) {
            print_post_element(data, val, url, url_2, data_keys[i], len, count);
          }
        } else {
          if (val.avatar == "none" || val.avatar == null) {
            photo = '../user.png';
          } else {
            photo = val.avatar;
          }
          
          print_post_element(data, val, url, photo, data_keys[i], len, count);
        }
      } catch (error) {
        // Handle any errors
      }
  
    i += 1;
    }
  }
  function get_user(data) {
    return new Promise((resolve, reject) => {
      onValue(ref(database, 'users/' + data.author_uid), (user) => {
        const user_val = user.val();
        resolve(user_val);
      }, {
        onlyOnce: true
      });
    });
  }
  // Usage
  processLoop();
  function print_post_element(data, val, url, url_2, keys,len,i) {
    var post_key = generateRandomKey(15)
    var html = `<div class="post-element ${post_key}">
    <div class="header">
        <div class="owner" id='owner'>
            <a href="../profile/index.html?id=${data.author_uid}&&profile=false"><img id='img' src="${url_2}" alt="avatar"></a>
            <h3>${val.username}</h3>
        </div>
        <div class="archive">
            <h3>Thành tựu</h3>
            <h2>${data.archive}</h2>
        </div>
    </div>
    
    <div class="info">
        <h1>${data.title}</h1>
        <p>${data.desc}</p>
        <img src="${url}" alt="">
    </div>
    <div class="comment-section">
                    <div class="comment-form">
                        <input type="text" placeholder="Bình luận" class="comment">
                        <button id="comment-btn" class='comment-btn' post_id= ${keys}><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div class="comment-box">
                        
                    </div>
                </div>
  </div>`
    post_box.insertAdjacentHTML("beforeend", html)
    const comment_box = document.getElementsByClassName(post_key)[0].getElementsByClassName('comment-box')[0]
    onValue(ref(database,'post/'+keys+'/comments/'),(value)=>{
      const com = value.val()
      console.log(com);
      if(com != null){
        const com_keys = Object.keys(com)
      for(let i=0;i<com_keys.length;i++){
        const current = com[com_keys[i]]
        onValue(ref(database,'users/'+current.author_uid),(user_val)=>{
          const user_value = user_val.val()
          var str = new String(user_value.avatar)
          if(str.includes(',')){
            getDownloadURL(storageref(storage,'avatar/'+str.split(',')[0])).then((url)=>{
              print_comment(user_value,url,current)
            })
          }else{
            let photo;
            if(user_value.avatar == 'none' || user_value.avatar == null){
              photo = '../user.png'
            }else{
              photo = user_value.avatar
            }
            print_comment(user_value,photo,current)
          }
          function print_comment(user_val,photo,comment){

            var html = `
              <div class="comment-card">
                            <div class="comment-info">
                                <a href="../profile/index.html?id=${user_val.author_uid}&&profile=false"><img src="${photo}" alt="" srcset=""></a>
                                <h3>${user_val.username}</h3>
                            </div>
                            <p>${comment.comment}</p>
                        </div>
                `
              comment_box.insertAdjacentHTML('beforeend',html)
            
          }
        })
      }
      }
    })
    if(i == len){
      start_create(uid_,len)
    }
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
function start_create(uid,len) {
  const comment_btns = document.querySelectorAll('.comment-btn')
  comment_btns.forEach(element => {
    element.addEventListener('click',()=>{
      if(comment_btns.length == len){
        var post_id = element.getAttribute('post_id')
        var comment_value = element.parentElement.getElementsByClassName('comment')[0].value
        set(ref(database,'post/'+post_id+'/comments/'+generateRandomKey(15)),{
          comment:comment_value,
          author_uid:uid
        }).then(()=>{
          alert('upload completed')
          window.location.reload()
        })
      }
    })
  });
}
const btn = document.getElementById('submit-btn')
btn.addEventListener('click', (e) => {
  e.preventDefault()
  var value_input = document.getElementById('search-value').value.toLowerCase()
  if (value_input == '' || value_input == 0) {
    alert('search input cannot be empty')
  } else {
    window.location.replace(`../search_result/index.html?search_value=${value_input}`)

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
