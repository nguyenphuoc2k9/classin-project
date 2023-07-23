import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, set, ref, onValue,remove,update } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
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
//check
const status = localStorage.getItem('status')
console.log(status == '"active"');
if(status === '"active"'){
    window.location.replace('../dashboard/')
}
//login
const login_btn = document.getElementById('submit')
const login_form = document.getElementById('login-form')
onValue(ref(database,'admin/'),(value)=>{
    const val = value.val()
    start_login(val)
},{
    onlyOnce:true
})
function start_login(data){
    console.log(data);
    login_btn.addEventListener('click',(e)=>{
        e.preventDefault()
        const admin_name = login_form['name'].value
        const admin_password = login_form['password'].value
        var data_keys = Object.keys(data)
        var check = true;
        for(let i  =0;i<data_keys.length;i++){
            var current_check = data[data_keys[i]]
            if(current_check.admin_name != admin_name && current_check.admin_password !=admin_password){
                check = false;
                alert('Invalid admin name or password')
            }
        }
        if(check){
            localStorage.setItem('status',JSON.stringify('active'))
            localStorage.setItem('name',JSON.stringify(admin_name))
            alert('done')
            window.location.replace('../dashboard/')
        }
    })
}