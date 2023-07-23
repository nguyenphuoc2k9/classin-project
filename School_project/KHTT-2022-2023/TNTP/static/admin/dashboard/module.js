import{ initializeApp }  from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth,onAuthStateChanged,signOut   } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase,set,ref,onValue } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getStorage,  ref as storageref,getDownloadURL,uploadBytes } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js";
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
//login
const username = document.getElementById('username')
const status = localStorage.getItem('status').split('"')[1]
if(status =='active'){
    const name = localStorage.getItem('name').split('"')[1]
    console.log(name);
    onValue(ref(database,'admin/'),(value)=>{
        const val = value.val()
        const keys = Object.keys(val)
        for(let i =0;i<keys.length;i++){
            if(keys[i] == name){
                username.innerText = name
            }
        }
    },{
        onlyOnce:true,
    })
}else{
    window.location.replace('../admin-login/')
}
//sign out
const sign_out = document.getElementById('sign-out-button')
sign_out.addEventListener('click',()=>{
    localStorage.removeItem('status')
    localStorage.removeItem('name')
    window.location.replace('../admin-login/')
})
//dashboard
const dashboard = document.getElementsByClassName("dash-box")[0]
const star_Ref = ref(database,'users')
const post_ref = ref(database,'post')
onValue(star_Ref,(value)=>{
    const data = value.val()
    const data_keys = Object.keys(data)
    const data_length = Object.keys(data).length
    onValue(post_ref,(snap)=>{
        var html = `
    <div class="dash-card">
                <h1>Thành viên:</h1>
                <h1>${data_length}</h1>
            </div>
            <div class="dash-card">
                <h1>Bài đăng:</h1>
                <h1>${Object.keys(snap.val()).length}</h1>
            </div>
            
            `
            
    dashboard.insertAdjacentHTML("beforeend",html)
    },{
        onlyOnce:true
    })
},{
    onlyOnce:true
})
