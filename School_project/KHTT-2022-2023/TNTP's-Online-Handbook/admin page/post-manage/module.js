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

//sign out
const sign_out = document.getElementById('sign-out-button')
sign_out.addEventListener('click',()=>{
    localStorage.removeItem('status')
    localStorage.removeItem('name')
    window.location.replace('../admin-login/index.html')
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
        <tr data-key='${data_keys[i]}'>
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
    
    if(data !=null){
        const data_keys = Object.keys(data)
        for(let i=0; i<data_keys.length; i++) {
            let current = data[data_keys[i]]
            getDownloadURL(storageref(storage,'images/'+current.img)).then((url)=>{
                var html = `
            <tr data-key='${data_keys[i]}'>
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
    }else{
        pending_print.parentElement.parentElement.parentElement.remove()
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
//select post
const select = document.getElementsByClassName('select')
for(let i =0;i<select.length;i++){
    select[i].addEventListener('click',()=>{
        var parent = select[i].parentElement
        
        var table = select[i].getAttribute('table')
        select[i].remove()
        var html;
        if(table =='post'){
            html = `
        <button class="select-all" table='post'>Chọn tất cả</button> <button class="delete-select">Xóa đã chọn</button>
        `
        }else{
            html =`<button class="select-all" table="pending">Chọn tất cả</button> <button class="delete-select">Xóa đã chọn</button> <button class="add-select">Thêm đã chọn</button>`
        }
        parent.insertAdjacentHTML('beforeend',html)
        
        start_select(table)
        if(table =='post'){
            start_action(user_print)
            create_select(user_print,table)
        }else{
            create_select(pending_print,table)
            start_action(pending_print)
        }
        
    })
}
function create_select(table,section){
    for(let i =0;i<table.childElementCount;i++){
        if(section =='post'){
            table.children[i].insertAdjacentHTML('beforeend',`<td class='last'><input type='checkbox' class='post'></td>`)
        }else{
            table.children[i].insertAdjacentHTML('beforeend',`<td class='last'><input type='checkbox' class='pending'></td>`)
        }
    }
}
function start_select(table){
    const select_all = document.getElementsByClassName('select-all')
    for(let i =0;i<select_all.length;i++){
        select_all[i].addEventListener('click',()=>{
            for(let x = 0;x<user_print.childElementCount;x++){
                if(table == 'post'){

                    user_print.children[x].getElementsByClassName('last')[0].getElementsByTagName('input')[0].checked = true;
                }else{
                    pending_print.children[x].getElementsByClassName('last')[0].getElementsByTagName('input')[0].checked = true;
                }
            }
        })
    }
}
function start_action(table){
    const delete_all = document.getElementsByClassName('delete-select')
    for(let i =0;i<delete_all.length;i++){
        delete_all[i].addEventListener('click',()=>{
            
            for(let x=0;x<table.childElementCount;x++){
                console.log(table.children);
                var direct;
                var data_key =table.children[x].getAttribute('data-key')
                var child = table.children[x].getElementsByClassName('last')[0].getElementsByTagName('input')[0]
                if(child.getAttribute('class').includes('post') == true){
                    direct = ref(database,`post/${data_key}/`)
                }else{
                    direct =ref(database,'pending-post/'+data_key+'/')
                }
                var element = table.children[x].getElementsByClassName('last')[0].getElementsByTagName('input')[0]
                if(element.checked == true){
                    remove(direct).then(()=>{
                        window.location.reload()
                    })
                }
            }
        })
    }
    const add_select = document.getElementsByClassName('add-select')
    for(let i =0;i<add_select.length;i++){
        add_select[i].addEventListener('click',()=>{
            for(let x=0;x<table.childElementCount;x++){
                var direct;
                var data_key =table.children[x].getAttribute('data-key')
                var child = table.children[x].getElementsByClassName('last')[0].getElementsByTagName('input')[0]
                if(child.getAttribute('class').includes('post') == true){
                    direct = ref(database,`post/${data_key}/`)
                }else{
                    direct = ref(database,`pending-post/${data_key}/`)
                }
                var element = table.children[x].getElementsByClassName('last')[0].getElementsByTagName('input')[0]

                if(element.checked == true){
                    
                    onValue(direct,(snap)=>{
                        const value = snap.val()
                        set(ref(database,`post/${data_key}/`),value).then(()=>{
                            remove(direct).then(()=>{
                                window.location.reload()
                            })
                        })
                        
                    })
                }
            }
        })
    }
}