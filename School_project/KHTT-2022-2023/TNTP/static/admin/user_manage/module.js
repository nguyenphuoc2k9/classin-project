import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut, deleteUser } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, set, ref, onValue, remove, onChildRemoved, update } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
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
const auth = getAuth(app)
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
//print_user
const user_print = document.getElementById("user-manage")
const user_ref = ref(database, 'users/')
onValue(user_ref, (value) => {
    const data = value.val()
    const data_keys = Object.keys(data)

    for (let i = 0; i < data_keys.length; i++) {
        onValue(ref(database, 'users/' + data_keys[i]), (snap) => {
            var current = snap.val()
            var str = new String(current.avatar)
            onValue(ref(database, 'session/'), (sesion_data) => {
                var session_count = new String(session_check(sesion_data.val(), data_keys[i]))
                if (str.includes(",")) {
                    getDownloadURL(storageref(storage, 'avatar/' + str.split(",")[0])).then((url) => {
                        var html = `<tr>
                    <td>${current.username}</td>
                    <td>${current.email}</td>
                    <td><img src="${url}" alt=""></td>
                    <td>${current.gender}</td>
                    <td>${current.school}</td>          
                    <td>${current.grade}</td>
                    <td>${current.race}</td>
                    <td>${current.religion}</td>
                    <td>${current.home_town}</td>
                    <td>${current.birthday}</td>
                    <td>${session_count}</td>
                    <td class='health-edit-btn' user_uid='${data_keys[i]}'>${current.health_condition}</td>
                    <td>${current.archive}</td>
                    <td><Button class="delete"  user-uid='${data_keys[i]}'>Delete</Button> <button class='profile' user_uid='${data_keys[i]}'>Profile dowload</button></td>
                </tr>`
                        user_print.insertAdjacentHTML("beforeend", html)

                        start_delete()
                        start_edit()
                        start_profile()
                    })
                } else {
                    let url;
                    if (current.avatar == 'none' || current.avatar == null) {
                        url = '/static/image/user.png'
                    } else {
                        url = current.avatar
                    }
                    var html = `<tr>
                    <td class='edit-btn' edit_value ='username' user_uid='${data_keys[i]}'>${current.username}</td>
                    <td class='edit-btn' edit_value ='email' user_uid='${data_keys[i]}'>${current.email}</td>
                    <td><img src="${url}" alt=""></td>
                    <td class='edit-btn' edit_value ='gender' user_uid='${data_keys[i]}'>${current.gender}</td>
                    <td class='edit-btn' edit_value ='school' user_uid='${data_keys[i]}'>${current.school}</td>          
                    <td class='edit-btn' edit_value ='grade' user_uid='${data_keys[i]}'>${current.grade}</td>
                    <td class='edit-btn' edit_value ='race' user_uid='${data_keys[i]}'>${current.race}</td>
                    <td class='edit-btn' edit_value ='religion' user_uid='${data_keys[i]}'>${current.religion}</td>
                    <td class='edit-btn' edit_value ='home_town' user_uid='${data_keys[i]}'>${current.home_town}</td>
                    <td class='edit-btn' edit_value ='birthday' user_uid='${data_keys[i]}'>${current.birthday}</td>
                    <td>${session_count}</td>
                    <td class='edit-btn' edit_value ='health_condition' user_uid='${data_keys[i]}'>${current.health_condition}</td>
                    <td>${current.archive}</td>
                    <td><Button class="delete"  user-uid='${data_keys[i]}'>Delete</Button><button class='profile' user_uid='${data_keys[i]}'>Profile dowload</button></td>
                </tr>`
                    user_print.insertAdjacentHTML("beforeend", html)
                    start_delete()
                    start_edit()
                    start_profile()
                }

            })
        })
        if (document.getElementsByClassName("delete") == undefined) {
            start_delete()
        }
    }

}, {
    onlyOnce: true
})
function start_delete() {
    var del_btn = document.getElementsByClassName("delete")
    for (let i = 0; i < del_btn.length; i++) {
        del_btn[i].addEventListener("click", () => {
            let uid = del_btn[i].getAttribute("user-uid")
            remove(ref(database, 'users/' + uid)).then(() => {
                window.location.reload()
            })
        })
    }
}
function session_check(session, uid) {
    var session_joined = 0
    const sesion_data = session
    const session_data_keys = Object.keys(sesion_data)
    for (let i = 0; i < session_data_keys.length; i++) {
        var current_session = sesion_data[session_data_keys[i]]
        if (current_session.session_data != undefined && current_session.session_data[`${uid}`] != null && current_session.session_data[`${uid}`] != undefined) {
            session_joined += 1
        }
    }
    return session_joined
}
document.getElementById("dowload").addEventListener("click", () => {
    onValue(ref(database, 'users/'), (snap) => {
        let data_2 = snap.val()
        let data = data_2
        let data_keys = Object.keys(data)
        for (let i = 0; i < data_keys.length; i++) {
            data[data_keys[i]].archive = data[data_keys[i]].archive.toString()
        }
        const dataArray = Object.entries(data || {}).map(([key, value]) => ({
            key,
            ...value,
        }));

        const worksheet = XLSX.utils.json_to_sheet(dataArray);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

        const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

        const blob = new Blob([wbout], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'Thành viên.xlsx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    })
})
//eidt health condition
function start_edit() {
    const health_btn = document.getElementsByClassName('edit-btn')
    var edited = false
    for (let i = 0; i < health_btn.length; i++) {

        health_btn[i].addEventListener('click', () => {
            var user_uid = health_btn[i].getAttribute('user_uid')
                var edit_value = health_btn[i].getAttribute('edit_value')
            var last_value = health_btn[i].innerText
            popup(user_uid,last_value,edit_value)
        })
    }
}
document.getElementsByClassName('popup')[0].style.display = 'none'
function popup(user_uid,last_value,edit_value){
    document.getElementById('popup-title').innerText = `Edit ${edit_value}`
   document.getElementById('label').innerText = `Edit ${edit_value}`
    document.getElementsByClassName('popup')[0].style.display = 'block'
    document.getElementById('close-btn').addEventListener('click',()=>{
        document.getElementsByClassName('popup')[0].style.display = 'none'
    })
    document.getElementById('popup-submit').addEventListener('click',()=>{
        var popup_input = document.getElementById('popup_value')

        if(popup_input.value !='' || popup_input.value != null){
            var add_data = {}
            add_data[`${edit_value}`] = popup_input.value
            update(ref(database,'users/'+user_uid),add_data).then(()=>{
                window.location.reload()
            })
        }
    })
}
function start_profile(){
    var profile_btn = document.getElementsByClassName('profile')
    for(let i  =0;i<profile_btn.length;i++){
        profile_btn[i].addEventListener('click',()=>{
            var user_uid = profile_btn[i].getAttribute('user_uid')
            window.location.replace(`/admin_manager/user_profile/?uid=${user_uid}`)
        })
    }
}
