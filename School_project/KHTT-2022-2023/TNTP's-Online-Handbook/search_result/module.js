import{ initializeApp }  from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth,onAuthStateChanged,signOut   } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase,set,ref,onValue } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getFirestore,setDoc,doc,collection } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { getStorage,  ref as storageref,getDownloadURL,uploadBytes } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js";
//variable
const sidenav_user = document.getElementsByClassName("user")[0];
const btn = document.getElementById('search-btn')
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
const storage = getStorage(app)
const auth = getAuth()


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
},{
onlyOnce : true
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
    document.getElementById('img').src = photo
    document.getElementById('href').href += `?uid=${uid}`
    start_searching()
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
const user_box = document.getElementsByClassName('user-container')[0]
const post_box = document.getElementsByClassName('post-container')[0]
function start_searching(){
    btn.addEventListener('click',()=>{
        var value_input = document.getElementById('search').value.toLowerCase()
        if(value_input != ''){
          window.location.replace(`../search_result/index.html?search_value=${value_input}`)
        }else{
          alert('Search input cannot be empty')
        }
    })  
  var value_input = new URLSearchParams(window.location.search).get('search_value')
        if(value_input != ''){
          console.log('XD');
          document.getElementById('search').value = value_input
          onValue(ref(database),(snapshot)=>{
            var data = snapshot.val()
            var keys = Object.keys(data)
            var user_result = []
            var post_result = []
            for(let i= 0; i<keys.length; i++){
              console.log('section_data',i);
              var current_section = data[keys[i]]
              var current_keys = Object.keys(current_section)
              var search_target;
              
              if(i ==0){
                search_target =['title','desc','archive']
              }else{
                search_target = ['username','email','school','gender','class']
              }
              for(let x = 0;x<current_keys.length;x++){
                var current_data = current_section[current_keys[x]]
                // console.log('current_data',x);
                for(let y = 0;y < search_target.length;y++){
                  // console.log('in_search',y);
                  
                  if(current_data[search_target[y]].toLowerCase().includes(value_input)){
                    if(i==0){
                      post_result.push([current_data,current_keys[x]])
                    }else{
                      user_result.push([current_data,current_keys[x]])
                    }
                    
                  }
                }
                
              }
            }
            console.log(user_result);
            console.log(post_result);
            result_print(user_result,post_result)
            function result_print(user,post){
              
              //print user
              
              if((user.length == 0 || user == null) &&(post.length == 0||post==null)){
                user_box.parentElement.remove()
                post_box.parentElement.remove()
                document.getElementsByClassName('no-result-img')[0].style ='block'
              }
              if(user != []){
                for(let i =0;i<user.length;i++){
                  let current_data = user[i]
                  var str = new String(current_data[0].avatar)
                  if(str.includes(',')){
                    getDownloadURL(storageref(storage,'avatar/'+str.split(',')[0])).then((url)=>{
                      print_user(url,current_data[0],current_data[1])
                    })
                  }else{
                    let photo;
                    if(current_data[0].avatar == 'none' || current_data[0].avatar ==null){
                      photo = '../user.png'
                    }else{
                      photo = current_data[0].avatar
                    }
                    print_user(photo,current_data[0],current_data[1]) 
                  }
                  
                }
                function print_user(img,data,uid){
                  var html = `
                <div class="user-card">
                    <a href="../profile/index.html?id=${uid}&&profile=false"><img src="${img}" alt=""></a>
                    <div class="user-info">
                        <h1>${data.username}</h1>
                        <p>${data.email}</p>
                    </div>
                </div>
                `
                user_box.insertAdjacentHTML('beforeend',html)
                document.getElementById('u-title').innerText = `Found ${user.length} in users`
                }
              }
              
              if(post != []){
                async function processLoop() {
                  var i = 0;
                  while (i < post.length) {
                    var data = post[i][0];
                    var len = post.length;
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
                          print_post_element(data, val, url, url_2, post[i][1], len, count);
                        }
                      } else {
                        if (val.avatar == "none" || val.avatar == null) {
                          photo = '../user.png';
                        } else {
                          photo = val.avatar;
                        }
                        
                        print_post_element(data, val, url, photo, post[i][1], len, count);
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
                  document.getElementById('u-post').innerText = `Found ${post.length} in posts`
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
                          if(user_val.avatar == 'none' || user_val.avatar == null){
                            photo = '../user.png'
                          }else{
                            photo = user_val.avatar
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
              
            }
          },{
            onlyOnce:true
          })
        }else{
          user_box.parentElement.remove()
          post_box.parentElement.remove()
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
