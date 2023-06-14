import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut, deleteUser } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, set, ref, onValue, remove, onChildRemoved, update } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getStorage, ref as storageref, getDownloadURL, uploadBytes, } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js";

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
const info_box = document.getElementById('info')
const uid = new URLSearchParams(window.location.search).get('uid')
onValue(ref(database, 'users/' + uid), (smap) => {
    const data = smap.val()
    onValue(ref(database, 'session/'), (session) => {
        const session_data = session.val()
        var string = ''
        const session_data_keys = Object.keys(session_data)
        for (let i = 0; i < session_data_keys.length; i++) {
            let current_session = session_data[session_data_keys[i]]
            let session_joined = current_session.session_data
            if (session_joined != undefined) {
                let session_joined_keys = Object.keys(session_joined)
                var done_count = 0
                for (let x = 0; x < session_joined_keys.length; x++) {
                    let current_joined = session_joined[session_joined_keys[x]]
                    if (uid == session_joined_keys[x]) {
                        let activity_keys = Object.keys(current_joined)

                        for (let y = 0; y < activity_keys.length; y++) {
                            if (current_joined[activity_keys[y]].status == 'done') {
                                done_count += 1
                            }
                        }
                        console.log(current_session);
                        if (done_count == activity_keys.length) {
                            string += `${current_session.session_name} hoàn thành xuất xắc, `
                        } else if (done_count >= activity_keys.length / 2) {
                            string += `${current_session.session_name} hoàn thành tốt, `
                        } else {
                            string += `${current_session.session_name} hoàn thành không tốt, `
                        }
                    }
                }
            }

        }
        print_data(string)
    })
    function print_data(string){
        var html = `
    <h1>Thông tin thành viên</h1>
        <div class="info-card">
            <h3>Tên :</h3>
            <p>${data.username}</p>
        </div>
        <div class="info-card">
            <h3>Giới tính :</h3>
            <p>${data.gender}</p>
        </div>
        <div class="info-card">
            <h3>Ngày tháng năm sinh :</h3>
            <p>${data.birthday}</p>
        </div>
        <div class="info-card">
            <h3>Email :</h3>
            <p>${data.email}</p>
        </div>
        <div class='info-card'>
            <h3>Quê quán :</h3>
            <p>${data.home_town}</p>
        </div>
        <div class="info-card">
            <h3>Nơi ở :</h3>
            <p>${data.live_location}</p>
        </div>
        <div class="info-card">
            <h3>Trường :</h3>
            <p>${data.school}</p>
        </div>
        <div class="info-card">
            <h3>Dân tộc :</h3>
            <p>${data.race}</p>
        </div>
        <div class="info-card">
            <h3>Tôn giáo</h3>
            <p>${data.religion}</p>
        </div>
        <div class="info-card">
            <h3>Khối :</h3>
            <p>${data.grade}</p>
        </div>
        <div class="info-card">
            <h3>Điều kiện sức khỏe :</h3>
            <p>${data.health_condition}</p>
        </div>
        <div class="info-card">
            <h3>Mối quan hệ</h3>
            <p>${data.relatives}</p>
        </div>
        <div class="info-card session">
            <h3>Các phiên hoạt động đã tham gia :</h3>
            <p>${string}</p>
        </div>
        <div class="info-card">
            <h3>Các thành tựu:</h3>
            <p>${data.archive}</p>
        </div>`
        info_box.insertAdjacentHTML('beforeend',html)
        Export2Word('info','profile')

    }
})