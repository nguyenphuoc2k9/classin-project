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
//account
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
//print_user
const user_print = document.getElementById("user-manage")
const post_ref = ref(database, 'post/')
onValue(post_ref, (value) => {
    const data = value.val()
    const data_keys = Object.keys(data)
    for(let i=0; i<data_keys.length; i++) {
        let current = data[data_keys[i]]
        getDownloadURL(storageref(storage,'images/'+current.img)).then((url)=>{
            var html = `
        <tr>
        <td>${current.title}</td>
        <td>${current.desc}</td>
        <td><img src="${url}" alt=""></td>
        <td>${current.archive}</td>
        <td>
        <div class='btn'>
        <button class="delete" post-id='${data_keys[i]}'>Delete</button> <button class="edit" post-id='${data_keys[i]}'>Set archivement</button></div></td>
    
        </tr>`
            user_print.insertAdjacentHTML("beforeend",html)
            start_delete()  
            start_edit(current.author_uid)
        })
    }
},{
    onlyOnce:true
})
function start_delete(){
    console.log('ready');
    var del_btn = document.getElementsByClassName("delete")

    for(let i=0;i<del_btn.length;i++){
        del_btn[i].addEventListener("click",()=>{
            let uid = del_btn[i].getAttribute("post-id")
            remove(ref(database,'post/'+uid)).then(()=>{
                console.log('done');
                window.location.reload()
            })
        })
    }
}
function start_edit(author_uid){
    var edit_btn = document.getElementsByClassName("edit")
    console.log(edit_btn);
    for(let i = 0;i< edit_btn.length;i++){
        console.log(i);
        edit_btn[i].addEventListener("click",()=>{
            var editvalue = prompt("Change Archivement :")
            let uid = edit_btn[i].getAttribute("post-id")
            let userref = ref(database,'post/'+uid)
            update(userref,{
                archive:editvalue
            }).then(()=>{
                onValue(ref(database,'users/'+ author_uid),(value)=>{
                    let data_val = value.val()
                    let data;
                    if(data_val.archive == ''||data_val.archive == "''"){
                        data = []
                    }else{
                        data = data_val.archive
                    }
                    let adddata = [editvalue]
                    let combine = adddata.concat(data)
                    let addresult;
                    if(data.includes(editvalue)){
                        addresult = data
                    }else{
                        addresult = combine
                    }
                    console.log(combine);
                    update(ref(database,'users/'+author_uid),{
                        archive:addresult
                    }).then(()=>{
                        window.location.reload()

                    })
                },{
                    onlyOnce:true
                })
            })
            
        })
    }
}
//print pending
const pending_print = document.getElementById("pending-post")
const pending_ref = ref(database, 'pending-post/')
onValue(pending_ref, (value) => {
    const data = value.val()
    const data_keys = Object.keys(data)
    for(let i=0; i<data_keys.length; i++) {
        let current = data[data_keys[i]]
        getDownloadURL(storageref(storage,'images/'+current.img)).then((url)=>{
            var html = `
        <tr>
        <td>${current.title}</td>
        <td>${current.desc}</td>
        <td><img src="${url}" alt=""></td>
        <td><button class="deny" post-id='${data_keys[i]}'>Deny</button><button class="accept" post-id='${data_keys[i]}'>Accept</button></td>
    </tr>`
            pending_print.insertAdjacentHTML("beforeend",html)
            start_deny()
            start_app(current)
        })
    }
},{
    onlyOnce:true
})
function start_deny(){
    const deny_btn = document.getElementsByClassName("deny")
    for (let i = 0; i < deny_btn.length; i++){

        deny_btn[i].addEventListener("click",function(){
            let uid = deny_btn[i].getAttribute("post-id")
            remove(ref(database,'pending-post/'+uid)).then(()=>{
                window.location.reload()
            })
        })
    }
}
function start_app(current){
    const app_btn = document.getElementsByClassName("accept")
    for(let i=0;i<app_btn.length;i++){
        app_btn[i].addEventListener("click",()=>{
            let uid = app_btn[i].getAttribute("post-id")
            remove(ref(database,'pending-post/'+uid)).then(()=>{
                set(ref(database,'post/'+uid),{
                    author_uid:current.author_uid,
                    title:current.title,
                    desc:current.desc,
                    img:current.img,
                    archive:'none'
                }).then(()=>{
                    window.location.reload()
                })
            })
        })
    }
}