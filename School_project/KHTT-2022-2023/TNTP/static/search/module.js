import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, set, ref, onValue } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getFirestore, setDoc, doc, collection } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { getStorage, ref as storageref, getDownloadURL, uploadBytes } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js";
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
    const starCountRef = ref(database, 'users/' + uid);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      print_user(data, uid)
    }, {
      onlyOnce: true
    });
  } else {
    window.location.replace("/login_and_sigup/login/")
    // User is signed out
    // ...
  }
});
function print_user(data, uid) {
  console.log(uid);
  console.log(data);
  let photo;
  var str = new String(data.avatar)
  console.log(str.split(",")[0]);
  if (data.avatar.includes(',')) {
    getDownloadURL(storageref(storage, 'avatar/' + str.split(",")[0]))
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
  } else {
    if (data.avatar == "none" || data.avatar == null) {
      photo = '../user.png'

    } else {
      photo = data.avatar
    }
    sidenav(photo)
  }
  function sidenav(photo) {
    console.log(photo);
    document.getElementById('img').src = photo
    document.getElementById('href').href += `?id=${uid}&&profile=true`
    start_searching()
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
const user_box = document.getElementsByClassName('user-container')[0]
const session_box = document.getElementsByClassName('session-container')[0]
const post_box = document.getElementsByClassName('post-container')[0]
function start_searching() {
  btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let search_Value = document.getElementById('search-value').value
    if(search_Value != ''){
      window.location.replace(`/main/search/?search_value=${value_input}`)
    
    }
  })
  var value_input = new URLSearchParams(window.location.search).get('search_value')
  if (value_input != '') {
    console.log('XD');
    document.getElementById('search').value = value_input
    onValue(ref(database), (snapshot) => {
      var data = snapshot.val()
      var keys = Object.keys(data)
      var user_result = []
      var post_result = []
      var session_result = []
      for (let i = 0; i < keys.length; i++) {

        if (keys[i] == 'users' || keys[i] == 'post' || keys[i] == 'session') {
          console.log('section_data', data[keys[i]]);
          var current_section = data[keys[i]]
          var current_keys = Object.keys(current_section)
          var search_target;

          if (keys[i] == 'post') {
            search_target = ['title', 'desc', 'archive']
          } else if (keys[i] == 'users') {
            search_target = ['username', 'email', 'school', 'gender', 'class']
          } else if (keys[i] == 'session') {
            search_target = ['session_name', 'session_desc']
          }
          for (let x = 0; x < current_keys.length; x++) {
            var current_data = current_section[current_keys[x]]
            // console.log('current_data',x);
            for (let y = 0; y < search_target.length; y++) {
              // console.log('in_search',y);

              if (current_data[search_target[y]].toLowerCase().includes(value_input)) {
                let companation = [current_data, current_keys[x]]
                let compare_user = JSON.stringify(user_result).includes(JSON.stringify(companation))
                let compare_post = JSON.stringify(post_result).includes(JSON.stringify(companation))
                let compare_session = JSON.stringify(session_result).includes(JSON.stringify(companation))
                console.log(compare_post);
                if (keys[i] == 'post' && compare_post == false) {
                  post_result.push(companation)
                } else if (keys[i] == 'users' && compare_user == false) {
                  user_result.push(companation)
                } else if (keys[i] == 'session' && compare_session == false) {
                  session_result.push(companation)
                }
              }
            }

          }
        }
      }
      console.log(user_result);
      console.log(post_result);
      result_print(user_result, post_result, session_result)
      function result_print(user, post, session) {
        //print user
        if (post.length + session.length < 3 && user.length <= 0) {
          document.getElementsByTagName('footer')[0].classList.add('active')
        }
        if ((user.length == 0 || user == null) && (post.length == 0 || post == null) && (session.length == 0 || session == null)) {
          user_box.parentElement.remove()
          post_box.parentElement.remove()
          session_box.parentElement.remove()
          document.getElementsByTagName('footer')[0].classList.remove('active')
          document.getElementsByClassName('no-result-img')[0].style = 'block'
        }
        if (user.length != 0) {
          console.log(user);
          for (let i = 0; i < user.length; i++) {
            let current_data = user[i]
            var str = new String(current_data[0].avatar)
            if (str.includes(',')) {
              getDownloadURL(storageref(storage, 'avatar/' + str.split(',')[0])).then((url) => {
                print_user(url, current_data[0], current_data[1])
              })
            } else {
              let photo;
              if (current_data[0].avatar == 'none' || current_data[0].avatar == null) {
                photo = '../user.png'
              } else {
                photo = current_data[0].avatar
              }
              print_user(photo, current_data[0], current_data[1])
            }

          }
          function print_user(img, data, uid) {
            var html = `
                <div class="user-card">
                    <a href="../profile/index.html?id=${uid}&&profile=false"><img src="${img}" alt=""></a>
                    <div class="user-info">
                        <h1>${data.username}</h1>
                        <p>${data.email}</p>
                    </div>
                </div>
                `
            user_box.insertAdjacentHTML('beforeend', html)
            footer_check()
            document.getElementById('u-title').innerText = `Found ${user.length} in users`
          }
        } else {
          document.getElementsByClassName('user-result')[0].remove()
        }

        if (post.length != 0) {
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
                  if (url_2 != null || url_2 != undefined) {
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
          function print_post_element(data, val, url, url_2, keys, len, i) {
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
            footer_check()
            document.getElementById('p-title').innerText = `Found ${post.length} in posts`
            const comment_box = document.getElementsByClassName(post_key)[0].getElementsByClassName('comment-box')[0]
            onValue(ref(database, 'post/' + keys + '/comments/'), (value) => {
              const com = value.val()
              console.log(com);
              if (com != null) {
                const com_keys = Object.keys(com)
                for (let i = 0; i < com_keys.length; i++) {
                  const current = com[com_keys[i]]
                  onValue(ref(database, 'users/' + current.author_uid), (user_val) => {
                    const user_value = user_val.val()
                    var str = new String(user_value.avatar)
                    if (str.includes(',')) {
                      getDownloadURL(storageref(storage, 'avatar/' + str.split(',')[0])).then((url) => {
                        print_comment(user_value, url, current)
                      })
                    } else {
                      let photo;
                      if (user_val.avatar == 'none' || user_val.avatar == null) {
                        photo = '../user.png'
                      } else {
                        photo = user_val.avatar
                      }
                      print_comment(user_value, photo, current)
                    }
                    function print_comment(user_val, photo, comment) {

                      var html = `
                            <div class="comment-card">
                                          <div class="comment-info">
                                              <a href="../profile/index.html?id=${user_val.author_uid}&&profile=false"><img src="${photo}" alt="" srcset=""></a>
                                              <h3>${user_val.username}</h3>
                                          </div>
                                          <p>${comment.comment}</p>
                                      </div>
                              `
                      comment_box.insertAdjacentHTML('beforeend', html)
                      

                    }
                  })
                }
              }
            })
            if (i == len) {
              start_create(uid_, len)
            }
          }
        } else {
          document.getElementsByClassName('post-result')[0].remove()
        }
        if (session.length != 0) {
          for (let i = 0; i < session.length; i++) {
            var current_session = session[i][0]
            var time = `${get_date(current_session.session_time_start)} - ${get_date(current_session.session_time_end)}`
            getDownloadURL(storageref(storage, 'images/' + current_session.session_img)).then((url) => {
              var html = `
              <div class="training-card">
                        <img src="${url}" alt="">
                        <div class="card-info">
                            <h1>${current_session.session_name}</h1>
                            <p>${current_session.session_desc}</p>
                            <div class="more-info">
                                <div class="time">
                                    <img src="../icons8-timer-64.png" alt="">
                                    <p>${time}</p>
                                </div>
                                <div class="status">
                                    <p>Trạng thái :</p>
                                    <div class="${current_session.session_status}"></div>
                                </div>
                            </div>
                        </div>
                        <button onclick='window.location.replace("../session/index.html?session_name=${session[i][1]}")'>Tham gia</button>
                    </div>`
              console.log(session);
              session_box.insertAdjacentHTML('beforeend', html)
              footer_check()
            })
          }
        } else {
          session_box.parentElement.remove()
        }

        function footer_check(){
          if(document.getElementsByClassName('search')[0].clientHeight <= window.innerHeight*(50/100) ){
            console.log(document.getElementsByClassName('search')[0].clientHeight,window.innerHeight*(1/2));
            document.getElementsByTagName('footer')[0].classList.add('active')
          }else{
            console.log(document.getElementsByClassName('search')[0].clientHeight,window.innerHeight);
          }
        }

      }
    }, {
      onlyOnce: true
    })
  } else {
    user_box.parentElement.remove()
    post_box.parentElement.remove()
  }


}
//get_date
function get_date(time) {
  var [month, day, year] = time.split('/')
  return `${day}/${month}/${year}`
}
//random_key

function generateRandomKey(length) {
  var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var key = '';
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    key += characters.charAt(randomIndex);
  }
  return key;
}
function start_create(uid, len) {
  const comment_btns = document.querySelectorAll('.comment-btn')
  comment_btns.forEach(element => {
    element.addEventListener('click', () => {
      if (comment_btns.length == len) {
        var post_id = element.getAttribute('post_id')
        var comment_value = element.parentElement.getElementsByClassName('comment')[0].value
        set(ref(database, 'post/' + post_id + '/comments/' + generateRandomKey(15)), {
          comment: comment_value,
          author_uid: uid
        }).then(() => {
          alert('upload completed')
          window.location.reload()
        })
      }
    })
  });
}
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