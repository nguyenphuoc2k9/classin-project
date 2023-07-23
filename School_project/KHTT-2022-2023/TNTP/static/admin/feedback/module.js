import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, set, ref, onValue, remove, update } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getStorage, ref as storageref, getDownloadURL, uploadBytes, } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js";
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
const storage = getStorage(app)
//account
const username = document.getElementById('username')
const status = localStorage.getItem('status').split('"')[1]
if (status == 'active') {
    const name = localStorage.getItem('name').split('"')[1]
    console.log(name);
    onValue(ref(database, 'admin/'), (value) => {
        const val = value.val()
        const keys = Object.keys(val)
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] == name) {
                username.innerText = name
            }
        }
    }, {
        onlyOnce: true,
    })
} else {
    window.location.replace('../admin-login/')
}
//sign out
const sign_out = document.getElementById('sign-out-button')
sign_out.addEventListener('click', () => {
    localStorage.removeItem('status')
    localStorage.removeItem('name')
    window.location.replace('../admin-login/')
})
//print feedback
var feedback = document.getElementById('feedback')
onValue(ref(database, 'feedback/'), (snap) => {
    const data = snap.val()
    const data_keys = Object.keys(data)
    for (let i = 0; i < data_keys.length; i++) {
        var current_data = data[data_keys[i]]
        let html = `
    <tr>
        <th>${current_data.uid}</th>
        <th>${current_data.feedback}</th>
        <th><button class='delete-btn' feedback_uid='${data_keys[i]}'>Xóa</button></th>
    </tr>
      `
      feedback.insertAdjacentHTML('beforeend',html)
      start_delete()
    }
})
function start_delete(){
    var delete_btn = document.getElementsByClassName('delete-btn')
    for(let i = 0;i<delete_btn.length;i++){
        delete_btn[i].addEventListener('click',()=>{
            var delete_id = delete_btn[i].getAttribute('feedback_uid')
            remove(ref(database,'feedback/'+delete_id)).then(()=>{
                window.location.reload()
            })
        })
    }
}