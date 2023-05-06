import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut,deleteUser } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, set, ref, onValue,remove,onChildRemoved,update } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
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

//print_user
const user_print = document.getElementById("user-manage")
const user_ref = ref(database, 'users/')
onValue(user_ref, (value) => {
    const data = value.val()
    const data_keys = Object.keys(data)
    for(let i =0;i<data_keys.length;i++) {
        onValue(ref(database,'users/'+ data_keys[i]),(snap)=>{
            var current = snap.val()
            var str = new String(current.avatar)
            if(str.includes(",")){
                getDownloadURL(storageref(storage,'avatar/'+ str.split(",")[0])).then((url)=>{
                    var html = `<tr>
                    <td>${current.username}</td>
                    <td>${current.email}</td>
                    <td><img src="${url}" alt=""></td>
                    <td>${current.gender}</td>
                    <td>${current.school}</td>
                    <td>${current.class}</td>
                    <td>${current.archive}</td>
                    <td><Button class="delete"  user-uid='${data_keys[i]}'>Delete</Button></td>
                </tr>`
                user_print.insertAdjacentHTML("beforeend",html)
                start_delete()       
                })
            }else{
                let url;
                if(current.avatar == 'none' || current.avatar == null){
                    url = '../user.png'
                }else{
                    url = current.avatar
                }
                var html = `<tr>

                    <td>${current.username}</td>
                    <td>${current.email}</td>
                    <td><img src="${url}" alt=""></td>
                    <td>${current.gender}</td>
                    <td>${current.school}</td>
                    <td>${current.class}</td>
                    <td>${current.archive}</td>
                    <td><Button class="delete"  user-uid='${data_keys[i]}'>Delete</Button></td>
                </tr>`
                user_print.insertAdjacentHTML("beforeend",html)
            }
            
        })
        if(document.getElementsByClassName("delete") == undefined){
            start_delete() 
        }
    }
    
},{
    onlyOnce:true
})
function start_delete(){
    console.log('ready');
    var del_btn = document.getElementsByClassName("delete")
    console.log(del_btn);
    console.log(del_btn.length);
    for(let i=0;i<del_btn.length;i++){
        del_btn[i].addEventListener("click",()=>{
            let uid = del_btn[i].getAttribute("user-uid")
            console.log(uid);
            remove(ref(database,'users/'+uid)).then(()=>{
                console.log('done');
                window.location.reload();
            })
        })
    }
}
