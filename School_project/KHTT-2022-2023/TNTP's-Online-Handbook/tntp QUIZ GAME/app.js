const start_btn  = document.querySelector(".start-btn button")
const info_box = document.querySelector(".info-box")
const quit_btn  = info_box.querySelector(".buttons .quit")
const con_btn  = info_box.querySelector(".buttons .restart")
const quiz_box = document.querySelector(".quiz-box")
const que_text = document.querySelector(".que-text")
    const option_list = document.querySelector(".option-list")
const timecount = quiz_box.querySelector(".timer .timer-sec")
const time_line = quiz_box.querySelector(".time-line")
const cheersound  = new Audio("/static/image/cheering-sound-effect-free-copyright.mp3")
const wrongsound = new Audio("/static/image/buzzer2-6109.mp3")
const start_question  = new Audio("/static/image/mixkit-arcade-game-complete-or-approved-mission-205.wav")
const result_box = document.querySelector(".result-box")
const restart_quiz = result_box.querySelector(".buttons .restart")
const quit_quiz = result_box.querySelector(".buttons .quiz")
cheersound.currentTime= 0
wrongsound.currentTime= 0
start_question.currentTime= 0
var point = 0 
console.log(time_line);
quit_quiz.onclick =()=>{
    window.location.reload()
}
restart_quiz.onclick = ()=>{
     que_num = 1
     que_count = 0
    counter;
     timevalue = 15
     widthvalue = 0;
     counterline;
    point = 0
    
    getcouter(que_num)
        showquestions(que_count)
        clearInterval(counter)
        starttimer(timevalue)
        clearInterval(counterline)
        starttimerline(widthvalue) 
    cheersound.currentTime= 0
    wrongsound.currentTime= 0
    start_question.currentTime= 0
    result_box.classList.remove("activeresult")
    quiz_box.classList.add("activequiz")
}
//start
console.log(start_btn);
start_btn.addEventListener("click", ()=>{
    info_box.classList.add("activeinfo")
})

//exit
quit_btn.addEventListener("click", ()=>{
    info_box.classList.remove("activeinfo")
})
con_btn.addEventListener("click", ()=>{
    info_box.classList.remove("activeinfo")
    quiz_box.classList.add("activequiz")
    showquestions(0)
    getcouter(1)
    starttimer(15)
    starttimerline(0)
})
//next btn
let que_num = 1
let que_count = 0
let counter;
let timevalue = 15
let widthvalue = 0;
let counterline;
const next_btn = document.querySelector(".next-btn")

next_btn.addEventListener("click",()=>{
    console.log(que_num);
    if(que_count < questions.length -1){
        cheersound.pause()
        wrongsound.pause()
        cheersound.currentTime= 0
        console.log(que_num);
        wrongsound.currentTime= 0
        start_question.currentTime= 0
        que_count++
        que_num++
        time_line.style.width = "0%"
        getcouter(que_num)
        showquestions(que_count)
        clearInterval(counter)
        starttimer(timevalue)
        clearInterval(counterline)
        starttimerline(widthvalue)
    }else {
        console.log('Questions completed');
        cheersound.pause()
        wrongsound.pause()
        start_question.pause()
        showresultbox()
    }
})
//show ques
function showquestions(index){
    start_question.play()
    next_btn.style.display = "none"
    let option_tag = `<div class='option' data-value = "${questions[index].options[0]}"> ${questions[index].options[0]}</div>
    <div class='option' data-value = "${questions[index].options[1]}"> ${questions[index].options[1]}</div>
    <div class='option'data-value = "${questions[index].options[2]}"> ${questions[index].options[2]}</div>
    <div class='option'data-value = "${questions[index].options[3]}"> ${questions[index].options[3]}</div>`
    let que_tag = `<span>${questions[index].id}. ${questions[index].question}</span>` 
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option")
    for(let i=0;i < option.length;i++){
        option[i].setAttribute("onclick", " optionselect(this)")
    }

}
function getcouter(index){
    const bottom_que_counter = quiz_box.querySelector(".total-quiz")
    let totalquecounttag = `<span><p>${index}</p>of <p>${questions.length} </p>question</span>`
    bottom_que_counter.innerHTML = totalquecounttag
}
//tick or cross
let tick = `<div class="icon tick"><i class="fa-solid fa-check"></i></div>`
let cross = `<div class="icon cross"><i class="fa-solid fa-times"></i></div>`
function optionselect(answer){
    console.log(answer);
    next_btn.style.display = "block"
    clearInterval(counter)
    clearInterval(counterline)
    let userans = answer.getAttribute('data-value');
    let correct = questions[que_count].answer
    let alloption = option_list.children.length
    console.log(correct);
    console.log(userans);
    if(userans == correct){
        answer.classList.add("correct")
        cheersound.play()
        point += 1
        answer.insertAdjacentHTML("beforeend", tick)
    }else {
        wrongsound.play()
        answer.classList.add("incorrect")
        answer.insertAdjacentHTML("beforeend", cross)
        for(let i = 0;i < alloption;i++){
            if(option_list.children[i].textContent.trim() == correct){
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tick)
            }
        }
    }
    for(let i = 0;i < alloption;i++){
        option_list.children[i].classList.add("dis")
    }
}
function starttimer(time){
    counter = setInterval(timer,1000)
    function timer(){
        timecount.textContent = time
        time--;
        if(time < 9){
            let addzero = timecount.textContent;
            timecount.textContent = "0" + addzero
        }
        if(time < 0){
            clearInterval(counter);
            timecount.textContent =  "00"
            let correct = questions[que_count].answer
            let alloption = option_list.children.length
            for(let i = 0;i < alloption;i++){
                if(option_list.children[i].textContent.trim() == correct){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tick)
                }
                wrongsound.play()
            }
            for(let i = 0;i < alloption;i++){
                option_list.children[i].classList.add("dis")
            }
            next_btn.style.display = "block"
        }
        
    }
}

function starttimerline(time){
    counterline = setInterval(timer,1000)
    timeplus = -(100/timevalue)
    function timer(){
            timeplus+= 100/timevalue;
        time_line.style.width = timeplus + "%"
        if(time > 100){
            clearInterval(counterline);
        }
    }
}
function showresultbox(){
    info_box.classList.remove("activeinfo")
    quiz_box.classList.remove("activequiz")
    result_box.classList.add("activeresult")
    tag = "";
    if(point <= 5){
        tag = `<span>Bạn chỉ trả lời đúng <p>${point}</p>trong số <p>${que_num} câu hỏi</p>😥</span>`
    }else {
        tag = `<span>Chúc mừng, Bạn đã trả lời đúng<p>${point}</p>câu, trong số <p>${que_num} câu hỏi</p>😎</span>`
    }
    document.getElementById("insert").innerHTML = tag
}
// sidenav

function googleTranslateElementInit(){
    new google.translate.TranslateElement(
        {pageLanguage:"Vietnamese"},
        "google_translate_element"
    )
    var translate = document.getElementById("google_translate_element")
    translate.querySelector("span").style.display = "none"
    console.log();
    var child = translate.firstChild.removeChild(translate.firstChild.childNodes[1])
    console.log();
}
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