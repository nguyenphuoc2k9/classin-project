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
//pop-up
const pop_up = document.getElementsByClassName('session-create')[0]
const close_pop_up = document.getElementById('close-session-form')

close_pop_up.addEventListener('click', () => {
    pop_up.classList.remove('active')
})
const session_create_btn = document.getElementById('session-create')
session_create_btn.addEventListener('click', () => {
    pop_up.classList.add('active')
})
const button_submit = document.getElementById('session-submit')
button_submit.addEventListener('click', () => {
    let title = document.getElementById('session-title').value
    let desc = document.getElementById('session-desc').value
    let file = document.getElementById('file').files[0]
    let date_start = document.getElementById('date-start').value
    let date_end = document.getElementById('date-end').value

    var check = false

    let date_ob_start = new Date(return_date(date_start))
    let date_ob_end = new Date(return_date(date_end))
    if (title == null && desc == null && file == null && date_start == null && date_end == null) {
        check = true;
    }
    if (date_ob_start.getTime() > date_ob_end.getTime()) {
        check = true;
    }
    if (check == false) {
        uploadBytes(storageref(storage, 'images/' + file.name), file).then(() => {
            set(ref(database, 'session/' + title), {
                session_name: title,
                session_desc: desc,
                session_time_start: return_date(date_start),
                session_time_end: return_date(date_end),
                session_status: 'active',
                session_img: file.name
            }).then(() => {
            })
        })
    }
})
function return_date(date) {
    var [year, month, day] = date.split('-')
    var new_date = `${month}/${day}/${year}`
    return new_date
}
//session-manage
const sesion_box = document.getElementsByClassName('session-container')[0]
onValue(ref(database, 'session/'), (snapshot) => {
    const value = snapshot.val()
    if (value != null) {
        print_session(value)

    }
})
var current_user_name = ''
function print_session(data) {
    const keys = Object.keys(data)
    for (let i = 0; i < keys.length; i++) {
        let current_data = data[keys[i]]
        getDownloadURL(storageref(storage, 'images/' + current_data.session_img)).then((url) => {
            var activity_key = generateRandomKey(10)
            var html = `
        <div class="session-card ${keys[i]}">
        <h1 onclick="dropdown_2(this,0)"> <i class="fa-solid fa-caret-down"></i>${current_data.session_name}<i class="fa-solid fa-trash del delete-session" session_key='${keys[i]}'></i></h1>
        <div class="card-dropdown">
            <div class="card">
                <h1 onclick="dropdown_2(this,0)">Cài đặt</h1>
                <div class="card-dropdown second">
                    <h1>Thông tin</h1>
                    <div class='info'>
                        <div class="info-box">
                            <p>Tên phiên : ${current_data.session_name} <button class='edit-btn' session_name = '${keys[i]}' session_id = 'session_name'>Chỉnh sửa</button></p>
                            <p>Mô tả về phiên: ${current_data.session_desc} <button class='edit-btn' session_id = 'session_desc' session_name = '${keys[i]}'>Chỉnh sửa</button></p>
                            <p>Ngày bắt đầu : ${get_date(current_data.session_time_start)} <button class='edit-btn' session_id = 'session_time_start' session_name = '${keys[i]}'>Chỉnh sửa</button></p>
                            <p>Ngày kết thúc : ${get_date(current_data.session_time_end)} <button class='edit-btn' session_id = 'session_time_end' session_name = '${keys[i]}'>Chỉnh sửa</button></p>
                        </div>
                        <div class="session-image">
                            <img src="" class='session-img' alt="">
                            <label for="image">Chỉnh sửa</label>
                            <input type="file" class="image-edit" id='image' accept = 'images/*' session_name = '${keys[i]}'>
                        </div>
                    </div>

                    <div class="activity">
                        <div class="activity-top">
                            <h1>Các hoạt động</h1>
                            <button class='activity-btn' session_name='${keys[i]}'> <i class="fa-solid fa-plus"></i> Tạo hoạt động</button>
                        </div>
                        <div class="activity-box">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="card second">
                <h1 onclick="dropdown_2(this,0)">Dữ Liệu</h1>
                <div class="card-dropdown">
                    <div class="user-box ${activity_key}">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
            sesion_box.insertAdjacentHTML('beforeend', html)
            let element = document.getElementsByClassName(`${keys[i]}`)[0]
            element.getElementsByClassName('session-img')[0].src = url
            let user_card = document.getElementsByClassName(activity_key)[0]

            if (current_data.session_data != undefined && current_data.session_data != null) {
                var session_data_keys = Object.keys(current_data.session_data)
                var count_index = 0
                for (let x = 0; x < session_data_keys.length; x++) {
                    onValue(ref(database, 'users/' + session_data_keys[x]), (s) => {
                        
                        var username = s.val().username
                        let key_2 = generateRandomKey(15)
                        var html_2 = `
                    <h1 onclick="dropdown_2(this,${count_index})">${username}</h1>
                            <div class="card-dropdown second ${key_2}">
                                <h1>Thông tin về phiên hoạt động</h1>
                                <div class="work-done">
                                    <h3 class='done-text'>Hoạt động đã hoàn thành :</h3>
    
                                </div>
                                <div class="work">
                                    <h3 class='not-done-text'>Hoạt động chưa hoàn thành :</h3>
    
                                </div>
                            </div>`
                        user_card.insertAdjacentHTML('beforeend', html_2)
                        let current_user = current_data.session_data[session_data_keys[x]]
                        let current_box = document.getElementsByClassName(key_2)[0]
                        let current_user_keys = Object.keys(current_user)
                        if (current_user != undefined) {

                            var done_count = 0
                            var not_done_count = 0
                            for (let y = 0; y < current_user_keys.length; y++) {
                                if (current_user[current_user_keys[y]].status == 'done') {
                                    var act_html = `
                            <h4><i class="fa-solid fa-star"></i>${current_user[current_user_keys[y]].name}</h4>`
                                    current_box.getElementsByClassName('work-done')[0].insertAdjacentHTML('beforeend', act_html)
                                    done_count += 1
                                } else {
                                    var act_html = `
                            <h4><i class="fa-regular fa-star"></i>${current_user[current_user_keys[y]].name}</h4>
                            `
                                    not_done_count += 1
                                    current_box.getElementsByClassName('work')[0].insertAdjacentHTML('beforeend', act_html)
                                }
                            }
                        }
                        
                        if(current_box.getElementsByClassName('work-done')[0].childElementCount <= 1){
                            current_box.getElementsByClassName('done-text')[0].remove()
                        }
                        if(current_box.getElementsByClassName('work')[0].childElementCount <= 1){
                            current_box.getElementsByClassName('not-done-text')[0].remove()
                        }
                        count_index+=1
                    })
                }
            }

            start_edit()
            print_activity(keys[i], keys[i])
            start_create_activity()
        })

    }
}
function start_edit() {
    const edit_btn = document.getElementsByClassName('edit-btn')
    for (let i = 0; i < edit_btn.length; i++) {
        edit_btn[i].addEventListener('click', function () {
            var edit_session = edit_btn[i].getAttribute('session_id')
            var edit_session_name = edit_btn[i].getAttribute('session_name')
            var edit_value = prompt(`Chỉnh sửa ${edit_session}:`)
            let change_data = {}
            change_data[`${edit_session}`] = edit_value

            update(ref(database, 'session/' + edit_session_name), change_data).then(() => {
                window.location.reload()
            })
        })
    }
    const img_edit = document.getElementsByClassName('image-edit')

    for (let i = 0; i < img_edit.length; i++) {
        img_edit[i].addEventListener('change', () => {
            var file = img_edit[i].files[0]
            var session_name = img_edit[i].getAttribute('session_name')
            uploadBytes(storageref(storage, 'images/' + file.name), file).then(() => {
                update(ref(database, 'session/' + session_name), {
                    session_img: file.name
                }).then(() => {
                    window.location.reload()
                })
            })
        })
    }
}
function start_create_activity() {
    const activity_btn = document.getElementsByClassName('activity-btn');
    for (let i = 0; i < activity_btn.length; i++) {
        activity_btn[i].addEventListener('click', () => {
            var activity = prompt('Tạo hoạt động :')
            var session_name = activity_btn[i].getAttribute('session_name')
            onValue(ref(database, 'session/' + session_name + '/activity'), (snap) => {
                const snapshot = snap.val()
                var key = generateRandomKey(5)

                set(ref(database, 'session/' + session_name + '/activity/' + key), {
                    name: activity
                }).then(() => {
                    chang_Data(session_name,'add',activity)
                })
            }, {
                onlyOnce: true,
            })

        })
    }
}
function print_activity(key, name) {
    const box = document.getElementsByClassName(key)[0].getElementsByClassName('activity-box')[0]
    onValue(ref(database, 'session/' + name + '/activity/'), (snap) => {
        const value = snap.val()

        if (value != null && value != []) {
            const value_key = Object.keys(value)
            for (let i = 0; i < value_key.length; i++) {

                var html = `
                <div class="activity-element">
                <i class="fa-solid fa-briefcase"></i>
                <h1>${value[value_key[i]].name}<i class="fa-solid fa-trash activity-delete" session_name = '${key}' ac_key='${value_key[i]}' work_name='${value[value_key[i]].name}'></i></h1>
            </div>
                `
                box.insertAdjacentHTML('beforeend', html)
            }
        }
    }, {
        onlyOnce: true,
    })
    start_delete()
}
function start_delete() {
    const ac_del = document.getElementsByClassName('activity-delete')
    for (let i = 0; i < ac_del.length; i++) {
        ac_del[i].addEventListener('click', () => {
            var session_name = ac_del[i].getAttribute('session_name');
            var work_name = ac_del[i].getAttribute('work_name')
            var ac_key = ac_del[i].getAttribute('ac_key')
            remove(ref(database, 'session/' + session_name + '/activity/' + ac_key)).then(() => {
                chang_Data(session_name,'delete',work_name)
            })
        })
    }
    const session_del = document.getElementsByClassName('delete-session')

    for (let i = 0; i < session_del.length; i++) {
        session_del[i].addEventListener('click', () => {
            var session_key = session_del[i].getAttribute('session_key')
            remove(ref(database, 'session/' + session_key)).then(() => {
                window.location.reload()
            })
        })
    }
}
//print session pending
const session_pending_box = document.getElementById('session-pending')
onValue(ref(database, 'pending_work/'), (snap) => {
    const data = snap.val()
    if (data != null) {
        print_pending_session(data)
    }else if(data == null){
        document.getElementsByClassName('session-pending')[0].remove()
    }
})
function print_pending_session(data) {
    const data_keys = Object.keys(data)
    for (let i = 0; i < data_keys.length; i++) {
        let current_data = data[data_keys[i]]
        getDownloadURL(storageref(storage, 'work_images/' + current_data.img)).then((url) => {
            var html = `
        <td>${current_data.session_name}</td>
                              <td>${current_data.work_name}</td>
                              <td><img src="${url}" alt="" srcset=""></td>
                              <td><Button pending_key ='${data_keys[i]}' class='remove-btn'>Xóa</Button> <button class='add-btn' img='${current_data.img}'session_name='${current_data.session_name}' pending_key = '${data_keys[i]}'work_name='${current_data.work_name}'user_uid='${current_data.user_uid}'>Duyệt</button></td>`
            session_pending_box.insertAdjacentHTML('beforeend', html)
            start_del_add()
        })


    }
}
function start_del_add() {
    const remove_btn = document.getElementsByClassName('remove-btn')
    for (let i = 0; i < remove_btn.length; i++) {
        remove_btn[i].addEventListener('click', () => {
            var pending_key = remove_btn[i].getAttribute('pending_key')
            remove(ref(database, 'pending_work/' + pending_key)).then(() => {
                window.location.reload()
            })
        })
    }
    const add_btn = document.getElementsByClassName('add-btn')
    for (let i = 0; i < add_btn.length; i++) {
        add_btn[i].addEventListener('click', () => {
            var session_name = add_btn[i].getAttribute('session_name')
            var user_uid = add_btn[i].getAttribute('user_uid')
            var work_name = add_btn[i].getAttribute('work_name')
            var pending_key = add_btn[i].getAttribute('pending_key')
            var img = add_btn[i].getAttribute('img')
            onValue(ref(database, `session/${session_name}/session_data/${user_uid}`), (snap) => {
                const value = snap.val()
                const value_key = Object.keys(value)
                for (let x = 0; x < value_key.length; x++) {

                    if (value[value_key[x]].name == work_name) {
                        update(ref(database, `session/${session_name}/session_data/${user_uid}/${value_key[x]}/`), {
                            status: 'done',
                            img: img
                        }).then(() => {
                            remove(ref(database, 'pending_work/' + pending_key)).then(()=>{
                                window.location.reload()
                            })
                        })
                    }
                }
            })
        })
    }
}
//change data
function chang_Data(session_name,method,work_name){
    if(method =='delete'){
        onValue(ref(database,`session/${session_name}/session_data/`),(snap)=>{
            const data = snap.val()
            console.log(data);
            const data_keys = Object.keys(data)
            for(let  i =0;i<data_keys.length;i++){
                const data_2 = data[data_keys[i]]
                const data_2_keys = Object.keys(data_2)
                for(let x = 0;x<data_2_keys.length;x++){
                    var current_data = data_2[data_2_keys[x]]
                    console.log(work_name);

                    if(current_data.name == work_name){
                        remove(ref(database,`session/${session_name}/session_data/${data_keys[i]}/${data_2_keys[x]}`)).then(()=>{
                            window.location.reload()
                        })
                    }else{
                        console.log(false);
                    }
                }
            }
        },{
            onlyOnce:true,
        })
    }else if(method =='add'){
        console.log(method);
        onValue(ref(database,`session/${session_name}/session_data`),(snap)=>{
            const data=snap.val()
            console.log(data);
            const data_keys = Object.keys(data)
            for(let i =0;i<data_keys.length;i++){
                var pk_key = generateRandomKey(10)
                set(ref(database,`session/${session_name}/session_data/${data_keys[i]}/${pk_key}`),{
                    name: work_name,
                    img:'none',
                    status:'not'
                }).then(()=>{
                    window.location.reload()
                })

            }
        },{
            onlyOnce:true,
        })
    }
}
//get date
function get_date(date) {
    const [month, day, year] = date.split('/')
    return `${day}/${month}/${year}`
}
//random key
function generateRandomKey(length) {
    var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var key = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        key += characters.charAt(randomIndex);
    }
    return key;
}
