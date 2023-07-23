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
        var string = []
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
                            string.push(`phiên hoạt động ${current_session.session_name} hoàn thành xuất xắc<br>`)
                        } else if (done_count >= activity_keys.length / 2) {
                            string.push(` phiên hoạt động ${current_session.session_name} hoàn thành tốt<br>`)
                        } else {
                            string.push(`phiên hoạt động ${current_session.session_name} hoàn thành không tốt<br>`)
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
            <h3>Tên : ${data.username}</h3>
        </div>
        <div class="info-card">
            <h3>Giới tính :${data.gender}</h3>
        </div>
        <div class="info-card">
            <h3>Ngày tháng năm sinh :${data.birthday}</h3>
        </div>
        <div class="info-card">
            <h3>Email : ${data.email}</h3>
        </div>
        <div class='info-card'>
            <h3>Quê quán :${data.home_town}</h3>
        </div>
        <div class="info-card">
            <h3>Nơi ở :${data.live_location}</h3>
        </div>
        <div class="info-card">
            <h3>Trường :${data.school}</h3>
        </div>
        <div class="info-card">
            <h3>Dân tộc :${data.race}</h3>
        </div>
        <div class="info-card">
            <h3>Tôn giáo${data.religion}</h3>
        </div>
        <div class="info-card">
            <h3>Khối :${data.grade}</h3>
        </div>
        <div class="info-card">
            <h3>Điều kiện sức khỏe :${data.health_condition}</h3>
        </div>
        <div class="info-card">
            <h3>Mối quan hệ:${data.relatives}</h3>
        </div>
        <div class="info-card session">
            <h3>Các phiên hoạt động đã tham gia :</h3>
        </div>
        <div class="info-card">
            <h3>Các thành tựu:${data.archive}</h3
        </div>`
        info_box.insertAdjacentHTML('beforeend',html)
        console.log(string);
        var session_result = document.getElementsByClassName('session')[0]
        for(let i=0;i<string.length;i++){
            session_result.insertAdjacentHTML('beforeend',`<p>${string[i]}</p>`)
        }
        Export2Word('info','profile')

    }
})