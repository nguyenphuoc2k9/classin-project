import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, set, ref, onValue,update } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getFirestore, setDoc, doc, collection } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { getStorage, ref as storageref, getDownloadURL, uploadBytes } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js";
//variable
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
    onValue(ref(database, 'session/'), (val) => {
      const data = val.val()
      print_session(data,uid)
    },{
      onlyOnce:true,
    })
    start_feedback(uid)
  } else {
    window.location.replace("/login_and_sigup/login/")
    // ...
  }
});

function print_user(data, uid) {
  console.log(uid);
  console.log(data);

  onValue(ref(database,'session/'),(session)=>{
    const session_data = session.val()
    const session_data_keys = Object.keys(session_data)
    let session_count = 0
    for(let i = 0 ;i<session_data_keys.length;i++){
      var current_session = session_data[session_data_keys[i]]
      if(current_session.session_data != undefined){
        if(current_session.session_data[`${uid}`] != undefined && current_session.session_data[`${uid}`] != null){
          session_count+=1
        }
      }
    }
    document.getElementById('session-joined').innerText = `${session_count} Phiên hoạt động`
    document.getElementById('achievement').innerText = `${data.archive.length} thành tựu`
  })
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
      photo = '/static/image/user.png'

    } else {
      photo = data.avatar
    }
    sidenav(photo)
  }
  function sidenav(photo) {
    console.log(photo);
    document.getElementById('img').src = photo
    document.getElementById('href').href += `?id=${uid}&&profile=true`
    document.getElementById('welcome-title').innerText = `Chào ${data.username}`
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
//search_key
btn.addEventListener('click', (e) => {
  e.preventDefault()
  var value_input = document.getElementById('search-value').value.toLowerCase()
  if (value_input == '' || value_input == 0) {
    alert('search input cannot be empty')
  } else {
    window.location.replace(`/main/search/?search_value=${value_input}`)
  }
})
//print training session
function print_session(data,uid) {
  var training_session_keys = Object.keys(data)
  const see_more_btn = document.getElementById('see-more')
  const add_point = document.getElementsByClassName('see-more-btn')[0]
  const training_box = document.getElementsByClassName('training-box')[0]
  if (training_session_keys.length > 3) {
    print_training(3)
  } else {
    print_training(training_session_keys.length)
    see_more_btn.remove()
  }
  function print_training(len) {

    for (let i = 0; i < len; i++) {
      let current_data = data[training_session_keys[i]]
      let time_start = get_date(current_data.session_time_start)
      let time_end = get_date(current_data.session_time_end)
      let time_final = `${time_start} - ${time_end}`
      getDownloadURL(storageref(storage, 'images/' + current_data.session_img)).then((url) => {
        let html = `
        <div class="training-card">
                    <img src="${url}" alt="">
                    <div class="card-info">
                        <h1>${current_data.session_name}</h1>
                        <p>${current_data.session_desc}</p>
                        <div class="more-info">
                            <div class="time">
                                <img src="/static/image/icons8-timer-64.png" alt="">
                                <p>${time_final}</p>
                            </div>
                            <div class="status">
                                <p>Trạng thái :</p>
                                <div class='${current_data.session_status}'></div>
                            </div>
                        </div>
                    </div>
                    <button class='session-join' session_name = '${training_session_keys[i]}'>Tham gia</button>
                </div>`
        add_point.insertAdjacentHTML('beforebegin', html)
        start_join(uid)
      })
    }
  }

  see_more_btn.addEventListener('click', () => {
    var children = training_box.querySelectorAll('.training-card')
    for (let i = 0; i < children.length; i++) {
      training_box.removeChild(children[i])

    }
    if (see_more_btn.innerText == 'Rút Ngắn') {
      print_training(3)
      see_more_btn.innerText = 'Thêm'
    } else {
      print_training(training_session_keys.length)
      see_more_btn.innerText = 'Rút Ngắn'
    }
  })

}
//get date
function get_date(date){
  const [month,day,year] = date.split('/')
  return `${day}/${month}/${year}`
}

//join
function start_join(uid) {
  const session_join_btn = document.getElementsByClassName('session-join')
  for (let i = 0; i < session_join_btn.length; i++) {
    console.log(session_join_btn);
    session_join_btn[i].addEventListener('click', () => {
      let session_name = session_join_btn[i].getAttribute('session_name')
      onValue(ref(database, 'session/' + session_name), (val) => {
        const data = val.val()
        if (data.session_data == undefined||data.session_data[`${uid}`] == null || data.session_data[`${uid}`] == undefined) {
          let ac_keys = Object.keys(data.activity)
          for(let x = 0; x < ac_keys.length; x++) {
            let pk_key =generateRandomKey(10)        
            set(ref(database,'session/'+session_name+'/session_data/'+uid+'/'+pk_key),{
              name:data.activity[ac_keys[x]].name,
              status:'not',
              img:'none'
            }).then(()=>{
              window.location.replace(`../session/index.html?session_name=${session_name}`);
            })
          }
        }else{
          window.location.replace(`../session/index.html?session_name=${session_name}`)
        }
      },{
        onlyOnce:true,
      })
    })
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
//check date
onValue(ref(database,'session/'),(snap)=>{
  const data = snap.val()
  const data_keys = Object.keys(data)
  for(let i =0;i<data_keys.length;i++){
    var current_data = data[data_keys[i]]
    var time_end = new Date(current_data.session_time_end)
    var today = Date.now()
    if(time_end.getTime()<today){
      console.log('ok');
      update(ref(database,'session/'+data_keys[i]+'/'),{
        session_status:'deactive'
      })
    }else{
      console.log('we are good');
    }
  }
})
// leader board
const read_more = document.getElementsByClassName('read-more')[0]
const read_nore_btn = document.getElementById('read-more')
const leader_board = document.getElementById('leader-board')
let high_to_low = []
function print_leaders(len_num){
  let len = len_num
  onValue(ref(database,'users/'),(snap)=>{
    const data = snap.val()
    const data_keys = Object.keys(data)
    if(len_num== 5){
      for(let i =0;i<data_keys.length;i++){
        high_to_low.push(data[data_keys[i]])
      }
    }
    
    high_to_low.sort((a,b)=>{
      return b.archive.length - a.archive.length
    })
    console.log(high_to_low);
      if(high_to_low.length < len){
        len=high_to_low.length
      }
      console.log(len);
      for (let i = 0; i < len; i++) {
        var current_data = high_to_low[i]
        console.log(current_data);
        var html = `
        <tr>
        <td>${i + 1}</td>
        <td>${current_data.username}</td>
        <td>${current_data.school}</td>
        <td>${current_data.grade}</td>
        <td class='archive' achievement='${current_data.archive}'>${current_data.archive.length}</td>
    </tr>
        `
        leader_board.insertAdjacentHTML('beforeend', html)
        start_show_achievemnt()
    }
  })
  if (len == 5) {
    read_more.classList.add('active') 
  } else {
    read_more.classList.remove('active')
  }
  if(high_to_low.length < 5){
    read_more.classList.remove('active')
  }
}
read_nore_btn.addEventListener('click', () => {
  var children = leader_board.querySelectorAll('tr')
  for(let i = 0;i<children.length;i++){
      leader_board.removeChild(children[i])
  } 
  print_leaders(high_to_low.length)
  
})
print_leaders(5)
//show achievement
function start_show_achievemnt(){
  const show_archive_btn = document.getElementsByClassName('archive')
  for(let i  =0;i<show_archive_btn.length;i++){
    show_archive_btn[i].addEventListener('mouseover',()=>{
      var archive = show_archive_btn[i].getAttribute('achievement')
      
      if(archive !=''){
        show_archive_btn[i].innerText = archive
        
      }else{
        show_archive_btn[i].innerText = 'không có'
      }
    })
  }
}
//feedback
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


//test node js
window.addEventListener('beforeunload',(event)=>{
  event.preventDefault()
  fetch('/home',{
    method:'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify({charge: true,user: auth.currentUser})
  }).then((res)=>{
    res.json()
  }).then((data)=>{
    console.log(data);
  }).catch((err)=>{
    console.log(err);
  })
})