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

//responsive sidenav
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

//announcement
let annouce_data = {
    1: {
        img: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/353112739_1242139226486851_8494773578746609406_n.jpg?stp=dst-jpg_s350x350&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=5iOSpl4dlEMAX_wyWvO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRN2_tf-1iWCfycfkAsedLCD3M2jB1WNSxUkaKgSPIkSA&oe=64B1DBDE',
        title: 'Thực hiện hiệu quả nhóm chính sách đối với thanh niên dân tộc thiểu số',
        desc: 'ĐTN: Tại buổi làm việc với UBND tỉnh Hà Giang, đồng chí Y Thông- Thứ trưởng, Phó Chủ nhiệm Ủy ban Dân tộc, Thành viên UBQG về TNVN đề nghị tỉnh cần tiếp tục thực hiện có hiệu quả các nhóm chính sách đối với thanh niên là người dân tộc thiểu số, góp phần thu hẹp khoảng cách phát triển giữa các nhóm đối tượng thanh niên.'
    },
    2: {
        img: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/354519316_632557312252608_3585826514216401529_n.jpg?stp=dst-jpg_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=9Rq83O8zMI8AX8We1Ib&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTyTBEYHpdH894VeRypDmjung8pCjUQVn2IuE23Sy3Pww&oe=64B205A3',
        title: 'Tặng học bổng cho sinh viên Đắk Lắk có hoàn cảnh khó khăn',
        desc: 'ĐTN: Ngày 13/6, đồng chí Nguyễn Minh Triết - Bí thư Trung ương Đoàn, Chủ tịch Trung ương Hội Sinh viên Việt Nam đã có buổi làm việc với Hội Sinh viên Việt Nam tỉnh Đắk Lắk và trao tặng 20 suất học bổng cho sinh viên có hoàn cảnh khó khăn.'
    }
    ,
    3: {
        img: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/354110000_650562150311084_9041296509811751536_n.jpg?stp=dst-jpg_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=p0aZ0VUyagQAX8YY5sp&_nc_oc=AQlQXitCLC726GOhD2OLDSxTI6lfY0hraX3jNeobWUF-yeMEFsmS2F-Z_JLG_Q10vAju_hjjhgz0Z9_FLrhkuxG1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSflF5vntiTiM1syw72pFewIZDPUAG5ku8zOYpZGtQEyw&oe=64B1FA36',
        title: 'Hơn 297 nghìn lượt ĐVTN tham gia các hoạt động tình nguyện hè',
        desc: 'ĐTN: Tuần đầu tiên của Chiến dịch Thanh niên tình nguyện Hè năm 2023 đã thu hút trên 297.600 lượt đoàn viên thanh niên tham gia hoạt động tình nguyện'
    }
}
const card_title = document.getElementById('announ-title')
const card_desc = document.getElementById('announ-desc')
const card_img = document.getElementById('announ-img')
const right_btn = document.getElementById('right')
const left_btn = document.getElementById('left')
const count = document.getElementsByClassName('count')[0]
const keys = Object.keys(annouce_data)
let current_index = keys.length - 1
for (let i = 0; i < keys.length; i++) {
    count.insertAdjacentHTML('beforeend', `<i class="fa-regular fa-circle" count_index='${i}'></i>`)
}
print_announ()
function print_announ() {
    card_desc.innerText = annouce_data[keys[current_index]].desc
    card_title.innerText = annouce_data[keys[current_index]].title
    card_img.src = annouce_data[keys[current_index]].img
    for (let i = 0; i < keys.length; i++) {
        var current_dot = count.children[i]
        if (current_dot.getAttribute('count_index') == current_index) {
            current_dot.setAttribute('class', 'fa-solid fa-circle')

            console.log('true');
        } else {
            current_dot.setAttribute('class', 'fa-regular fa-circle')
            console.log('false');
        }
    }
}
right_btn.addEventListener('click', () => {
    if (current_index != keys.length - 1) {
        current_index += 1
        print_announ()
    }
})
left_btn.addEventListener('click', () => {
    if (current_index != 0) {
        current_index -= 1
        print_announ()
    }
})
//leader board
let leader_data = {
    0: {
        username: 'phuoc',
        school: 'THCS tan hiep',
        grade: 8,
        archivement: 10
    },
    1: {
        username: 'phuoc',
        school: 'THCS tan hiep',
        grade: 8,
        archivement: 10
    },
    2: {
        username: 'phuoc',
        school: 'THCS tan hiep',
        grade: 8,
        archivement: 10
    },
    3: {
        username: 'phuoc',
        school: 'THCS tan hiep',
        grade: 8,
        archivement: 10
    },
    4: {
        username: 'phuoc',
        school: 'THCS tan hiep',
        grade: 8,
        archivement: 10
    },
    5: {
        username: 'phuoc',
        school: 'THCS tan hiep',
        grade: 8,
        archivement: 10
    },
    6: {
        username: 'phuoc',
        school: 'THCS tan hiep',
        grade: 8,
        archivement: 10
    },
    7: {
        username: 'phuoc',
        school: 'THCS tan hiep',
        grade: 8,
        archivement: 10
    },
    8: {
        username: 'phuoc',
        school: 'THCS tan hiep',
        grade: 8,
        archivement: 10
    },
    9: {
        username: 'phuoc',
        school: 'THCS tan hiep',
        grade: 8,
        archivement: 10
    },
    10: {
        username: 'phuoc',
        school: 'THCS tan hiep',
        grade: 8,
        archivement: 10
    },
    11: {
        username: 'phuoc',
        school: 'THCS tan hiep',
        grade: 8,
        archivement: 10
    }
}
const leader_board = document.getElementById('leader-board')
let leader_keys = Object.keys(leader_data)
print_leaders(5)
function print_leaders(len) {

    
    
}


//training session
var training_session_data = {
    0: {
        session_name: 'rèn luyện',
        session_desc: 'desc',
        session_img: '../tải xuống (1).jpg',
        session_time_start: new Date('12/4/2020'),
        session_time_end : new Date('12/5/2020'),
        session_status: 'dis'
    },
    1: {
        session_name: 'rèn luyện',
        session_desc: 'desc',
        session_img: '../tải xuống (1).jpg',
        session_time_start: new Date('12/4/2020'),
        session_time_end : new Date('12/5/2020'),
        session_status: 'active'
    },
    2: {
        session_name: 'rèn luyện',
        session_desc: 'desc',
        session_img: '../tải xuống (1).jpg',
        session_time_start: new Date('12/4/2020'),
        session_time_end : new Date('12/5/2020'),
        session_status: 'active'
    },
    3: {
        session_name: 'rèn luyện',
        session_desc: 'desc',
        session_img: '../tải xuống (1).jpg',
        session_time_start: new Date('12/4/2020'),
        session_time_end : new Date('12/5/2020'),
        session_status: 'active'
    },
    4: {
        session_name: 'rèn luyện',
        session_desc: 'desc',
        session_img: '../tải xuống (1).jpg',
        session_time_start: new Date('12/4/2020'),
        session_time_end : new Date('12/5/2020'),
        session_status: 'active'
    },
    5: {
        session_name: 'rèn luyện',
        session_desc: 'desc',
        session_img: '../tải xuống (1).jpg',
        session_time_start: new Date('12/4/2020'),
        session_time_end : new Date('12/5/2020'),
        session_status: 'active'
    },
}
// var training_session_keys = Object.keys(training_session_data)
// const see_more_btn = document.getElementById('see-more')
// const add_point = document.getElementsByClassName('see-more-btn')[0]
// const training_box = document.getElementsByClassName('training-box')[0]
// print_session(3)
// function print_session(len){
    
//     for (let i = 0; i < len; i++) {
//         let current_data = training_session_data[training_session_keys[i]]
//         let time_start = `${current_data.session_time_start.getDate()}/${current_data.session_time_start.getMonth()+1}/${current_data.session_time_start.getFullYear()}`
//         let time_end = `${current_data.session_time_end.getDate()}/${current_data.session_time_end.getMonth()+1}/${current_data.session_time_end.getFullYear()}`
//         let time_final = `${time_start} - ${time_end}`
//         let html = `
//         <div class="training-card">
//                     <img src="${current_data.session_img}" alt="">
//                     <div class="card-info">
//                         <h1>${current_data.session_name}</h1>
//                         <p>${current_data.session_desc}</p>
//                         <div class="more-info">
//                             <div class="time">
//                                 <img src="../icons8-timer-64.png" alt="">
//                                 <p>${time_final}</p>
//                             </div>
//                             <div class="status">
//                                 <p>Trạng thái :</p>
//                                 <div class='${current_data.session_status}'></div>
//                             </div>
//                         </div>
//                     </div>
//                     <button>Tham gia</button>
//                 </div>`
//         add_point.insertAdjacentHTML('beforebegin',html)
//     }
// }

// see_more_btn.addEventListener('click',()=>{
//     var children = training_box.querySelectorAll('.training-card')
//     for(let i =0;i<children.length;i++){
//         training_box.removeChild(children[i])
        
//     }
//     if(see_more_btn.innerText =='Rút Ngắn'){
//         print_session(3)
//         see_more_btn.innerText = 'Thêm'
//     }else{
//         print_session(training_session_keys.length)
//         see_more_btn.innerText = 'Rút Ngắn'
//     }
// })
