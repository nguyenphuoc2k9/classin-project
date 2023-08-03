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
const status = localStorage.getItem('status')
console.log(status);
if (status != null || status != undefined) {
    if (status.split('"')[1] == 'active') {
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
}
} else {
    window.location.replace('../admin-login/index.html')
}
const button_submit = document.getElementById('session-submit')
button_submit.addEventListener('click', () => {
    let title = document.getElementById('anouce-title').value
    let desc = document.getElementById('anouce-desc').value
    let file = document.getElementById('file').files[0]
    if(document.getElementById('file').getAttribute('file_name') == file.name){
        
    }
    var check = false

    if (title == null && desc == null && file == null) {
        check = true;
    }
    if (check == false) {
        uploadBytes(storageref(storage, 'images/' + file.name), file).then(() => {
            set(ref(database, 'anouce/' + title), {
                title:title,
                desc:desc,
                file:file.name
            }).then(() => {
                window.location.reload()
            })
        })
    }
})


const pop_up = document.getElementsByClassName('session-create')[0]
const close_pop_up = document.getElementById('close-session-form')

close_pop_up.addEventListener('click', () => {
    pop_up.classList.remove('active')
})
const session_create_btn = document.getElementById('session-create')
session_create_btn.addEventListener('click', () => {
    pop_up.classList.add('active')
})

//show anouce
const anouce_ref =ref(database,'anouce/')
const anouce_box = document.getElementById('anouce')
onValue(anouce_ref,(snap)=>{
    const value = snap.val()
    if(value != undefined && value != null){
        const value_key = Object.keys(value)

        for(let i = 0;i<value_key.length;i++){
            const current_value = value[value_key[i]]
            getDownloadURL(storageref(storage,'images/'+current_value.file)).then((url)=>{
                var key_log = generateRandomKey(5)
                var html = `
                <tr class='${key_log}'>
                    <td>${current_value.title}</td>
                    <td>${current_value.desc}</td>
                    <td><img src='${url}' alt='img'></td>
                    <td class='btn'><button class="delete" key='${value_key[i]}'>delete</button><button class="edit"  key='${value_key[i]}'>edit</button></td>
                </tr>
                `
                anouce_box.insertAdjacentHTML('beforeend',html)
                start_action()
            })
        }
    }
},{
    onlyOnce:true,
})
function start_action(){
    var tr_elment = anouce_box.getElementsByTagName('tr')
    const input = document.getElementsByClassName('input')
    for(let i =0;i<tr_elment.length;i++){
        let delete_btn = tr_elment[i].getElementsByClassName('delete')[0]
        delete_btn.addEventListener('click',()=>{
           var key = delete_btn.getAttribute('key')
            remove((ref(database,'anouce/'+key))).then(()=>{
                window.location.reload()
            })
        })
        let edit_btn = tr_elment[i].getElementsByClassName('edit')[0]
        edit_btn.addEventListener('click',()=>{
            var key = edit_btn.getAttribute('key')
            pop_up.classList.add('active')
            onValue(ref(database,'anouce/'+key),(snap)=>{
                var data = snap.val()
                input[1].value = data.desc
                input[0].value = data.title
                input[2].setAttribute('file_name',data.file)
                
            })
            
        })
    }
}
//randome key
function generateRandomKey(length) {
    var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var key = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        key += characters.charAt(randomIndex);
    }
    return key;
}

