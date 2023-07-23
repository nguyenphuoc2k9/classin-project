import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, set, ref, onValue, update } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getFirestore, setDoc, doc, collection } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { getStorage, ref as storageref, getDownloadURL, uploadBytes } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js";
//variable
const btn = document.getElementById('search')['submit-btn']
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
const session_name = new URLSearchParams(window.location.search).get('session_name')

//user
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
    onValue(ref(database, 'session/' + session_name), (val) => {
      const data = val.val()
      if (data != null) {
        print_session(data, uid)
      }
    }, {
      onlyOnce: true,
    })
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
btn.addEventListener('click',(e)=>{
  e.preventDefault()
  let search_Value = document.getElementById('search-value').value
  if(search_Value != ''){
    window.location.replace(`/main/search/?search_value=${value_input}`)
  
  }
})
//session

const session_box = document.getElementById('session-box')
const pop_up = document.getElementsByClassName('popup')[0]

console.log(session_name);
function print_session(data, uid) {
  const work_data = data.activity
  const work_keys = Object.keys(work_data)
  for (let i = 0; i < work_keys.length; i++) {
    var current_data = work_data[work_keys[i]]
    var html;
    const time = document.getElementById('time')
    const title = document.getElementById('title')
    title.innerText = data.session_name
    time.innerText = `${get_date(data.session_time_start)} - ${get_date(data.session_time_end)}`
    const status = document.getElementById('status')
    const day_left = calculate_day_left(data.session_time_start,data.session_time_end)
    if (data.session_status == 'active') {
      status.setAttribute('class', 'active')
      document.getElementById('days-left').innerText  = `Còn ${day_left} ngày`
    } else {
      status.setAttribute('class', 'deactive')
      document.getElementById('days-left').innerText = `đã kết thúc`
    }

    
    const val_key = Object.keys(data.session_data)
    document.getElementById('joined').innerHTML = `Số người đã tham gia: ${val_key.length}`
    for (let x = 0; x < val_key.length; x++) {
      if (val_key[x] == uid) {
        var ac_keys = Object.keys(data.session_data[`${val_key[x]}`])
        console.log(data.session_data[`${val_key[x]}`][`${ac_keys[i]}`]);
        if (data.session_data[`${val_key[x]}`][`${ac_keys[i]}`].status == 'not') {
          html = `
                        <div class="work">
                                        <i class="fa-regular fa-star work-btn"  session_name = '${session_name}' work_name='${current_data.name}'></i>
                                        <h1>${current_data.name}</h1>
                
                                    </div>`
                                    session_box.insertAdjacentHTML('beforeend', html)
        } else if (data.session_data[`${val_key[x]}`][`${ac_keys[i]}`].status == 'done') {
          html = `
                        <div class="work">
                                        <i class="fa-solid fa-star done" file_name='${data.session_data[`${val_key[x]}`][`${ac_keys[i]}`].img}'></i>
                                        <h1>${current_data.name}</h1>
                                    </div>
                        `
                        session_box.insertAdjacentHTML('beforeend', html)
        }
      }
    }
    
  }
  start_work(uid,data.session_status)
  start_show_result()
}

//work_btn
function start_work(uid,status) {
  const work_btn = document.getElementsByClassName('work-btn')
  for (let i = 0; i < work_btn.length; i++) {
    console.log(status);
    if(status =='active'){
      work_btn[i].addEventListener('click', () => {
        let session_name = work_btn[i].getAttribute('session_name')
        let work_name = work_btn[i].getAttribute('work_name')
        pop_up.classList.add('active')
        const close = document.getElementById('close')
        close.addEventListener('click', () => {
          pop_up.classList.remove('active')
        })
        const work_submit_btn = document.getElementById('work-submit')
        console.log(work_submit_btn);
        work_submit_btn.addEventListener('click', (e) => {
          console.log('lol');
          e.preventDefault()
          var file = document.getElementById('file').files[0]
          var key = generateRandomKey(10)
          uploadBytes(storageref(storage, 'work_images/' + file.name), file).then(() => {
            set(ref(database, 'pending_work/' + key), {
              img: file.name,
              work_name: work_name,
              session_name: session_name,
              user_uid: uid
            }).then(() => {
              window.location.reload()
            })
          })
        })
      })
    }
    
  }
  achivement_giver(session_name, uid)
}
//show result
const show_result = document.getElementById('show-result')
function start_show_result() {
  const done_btn = document.querySelectorAll('.done')
  console.log(done_btn);
  done_btn.forEach(element => {
    element.addEventListener('click', () => {
      let file_name = element.getAttribute('file_name')
      console.log(file_name);
      show_result.classList.add('active')
      let overlay = document.getElementsByClassName('overlay')[1]
      overlay.addEventListener('click', () => {
        show_result.classList.remove('active')
      })
      console.log();
      getDownloadURL(storageref(storage, 'work_images/' + file_name)).then((url) => {
        show_result.querySelector('img').src = url
      })
    })
  });


}
//give achivement
function achivement_giver(session_name, uid) {
  console.log(session_name);
  onValue(ref(database, 'session/' + session_name + '/session_data/' + uid + '/'), (val) => {
    const data = val.val()
    const data_keys = Object.keys(data)
    var done_count = 0
    for (let i = 0; i < data_keys.length; i++) {
      var current_data = data[data_keys[i]]
      if (current_data.status == 'done') {
        done_count +=1
        if(done_count == data_keys.length){
          onValue(ref(database, 'users/' + uid + '/archive'), (user_val) => {
            const user_data = user_val.val()
            let copy = user_data
            console.log(copy);
            if(copy =='' || copy =="''"){
              copy = [`hoàn thành ${session_name}`]
              update(ref(database,'users/'+uid+'/'),{
                archive:copy
              })
            }else if(copy.includes(`hoàn thành ${session_name}`) == false){
              copy.push(`hoàn thành ${session_name}`)
              update(ref(database,'users/'+uid+'/'),{
                archive:copy
              })
            }
            
            
          }, {
            onlyOnce: true,
          })
        }
        
      }
    }
  })
}

//get date
function calculate_day_left(date_1,date_2){
  var time_1 =new Date(date_1)
  var time_2 = new Date(date_2)
  var day_left =time_2.getDate() - time_1.getDate()
  return day_left
}
function get_date(date) {
  const [month, day, year] = date.split('/')
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