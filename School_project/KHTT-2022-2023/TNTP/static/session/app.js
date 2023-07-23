//google translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: "Vietnamese" },
        "google_translate_element"
    )
    var translate = document.getElementById("google_translate_element")
    translate.querySelector("span").style.display = "none"
    console.log();
    var child = translate.firstChild.removeChild(translate.firstChild.childNodes[1])
    console.log();
}

//dropdown
const open_btn = document.getElementsByClassName('open')[0]
const header = document.getElementsByTagName('header')[0]
open_btn.addEventListener('click',()=>{
    if(header.classList.contains('active')){
        header.classList.remove('active')
        open_btn.setAttribute('class','fa-solid fa-bars open')
    }else{
        header.classList.add('active')
        open_btn.setAttribute('class','fa-solid fa-xmark open active')
    }
})

//dropdown
const doc_drop = document.getElementById('doc-dropdown')
const dropdown_box = document.getElementsByClassName('dropdown-box')[0]
doc_drop.addEventListener('click', function () {
    if (dropdown_box.classList.contains('active')) {
        dropdown_box.classList.remove('active')
        dropdown_box.classList.add('refuse')
    } else {
        dropdown_box.classList.add('active')
        dropdown_box.classList.remove('refuse')
    }
})
const user_drop = document.getElementById('user-drop')
const header_user_box = document.getElementsByClassName('header-user-drop')[0]
header_user_box.style.display = 'none'
user_drop.addEventListener('click', () => {
    if (header_user_box.style.display == 'none') {
        header_user_box.style.display = 'flex'
    } else {
        header_user_box.style.display = 'none'
    }
})
//check if work is done or not
var work_data = {
    0:{
        work:'activity',
        status:'done'
    },
    1:{
        work:'activity',
        status:'not'
    },
    2:{
        work:'activity',
        status:'not'
    },
    3:{
        work:'activity',
        status:'not'
    },
    4:{
        work:'activity',
        status:'not'
    }
}
// const session_box = document.getElementById('session-box')
// const pop_up = document.getElementsByClassName('popup')[0]
// const work_keys = Object.keys(work_data)
// for(let i =0;i<work_keys.length;i++){
//     var current_data = work_data[work_keys[i]]
//     var html;
//     if(current_data.status == 'not'){
//         html = `
//         <div class="work">
//                         <i class="fa-regular fa-star" onclick='popup("${current_data.work}")'></i>
//                         <h1>${current_data.work}</h1>
//                         <button onclick="popup(${current_data.work})">Làm</button>
//                     </div>`
//     }else{
//         html = `
//         <div class="work">
//                         <i class="fa-solid fa-star done" ></i>
//                         <h1>${current_data.work}</h1>
//                     </div>
//         `
//     }
//     session_box.insertAdjacentHTML('beforeend',html)
    
// }
// function popup(work){
//     pop_up.classList.add('active')
//     console.log(work);
//     const close = document.getElementById('close')
//     close.addEventListener('click',()=>{
//         pop_up.classList.remove('active')
//     })
// }