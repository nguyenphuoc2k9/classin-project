const start_btn  = document.querySelector(".start-btn button")
const info_box = document.querySelector(".info-box")
const quit_btn  = info_box.querySelector(".buttons .quit")
const con_btn  = info_box.querySelector(".buttons .restart")
const quiz_box = document.querySelector(".quiz-box")
const que_text = document.querySelector(".que-text")
    const option_list = document.querySelector(".option-list")
const timecount = quiz_box.querySelector(".timer .timer-sec")
const time_line = quiz_box.querySelector("header .time-line")
const cheersound  = new Audio("../School_project/cheering-sound-effect-free-copyright.mp3")
const wrongsound = new Audio("../School_project/buzzer2-6109.mp3")
const start_question  = new Audio("../School_project/mixkit-arcade-game-complete-or-approved-mission-205.wav")
cheersound.currentTime= 0
wrongsound.currentTime= 0
start_question.currentTime= 0
console.log(time_line);

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
    if(que_count < questions.length -1){
        cheersound.pause()
        wrongsound.pause()
        cheersound.currentTime= 0
        wrongsound.currentTime= 0
        start_question.currentTime= 0
        que_count++
        que_num++
        getcouter(que_num)
        showquestions(que_count)
        clearInterval(counter)
        starttimer(timevalue)
        clearInterval(counterline)
        starttimerline(widthvalue)
    }else {
        console.log('Questions completed');
    }
})
//show ques
function showquestions(index){
    start_question.play()
    next_btn.style.display = "none"
    let option_tag = `<div class='option'> ${questions[index].options[0]}</div>
    <div class='option'> ${questions[index].options[1]}</div>
    <div class='option'> ${questions[index].options[2]}</div>
    <div class='option'> ${questions[index].options[3]}</div>`
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
    next_btn.style.display = "block"
    clearInterval(counter)
    clearInterval(counterline)
    let userans = answer.textContent.trim()
    let correct = questions[que_count].answer
    let alloption = option_list.children.length
    console.log(correct);
    console.log(userans);
    if(userans == correct){
        answer.classList.add("correct")
        cheersound.play()
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
        }
    }
}

function starttimerline(time){
    counterline = setInterval(timer,1000)
    limitwidth = document.body.clientWidth*(50/100)
    console.log(limitwidth);
    function timer(){
        time+= 10;
        time_line.style.width = time + "%"
        if(time > 100){
            clearInterval(counterline);
        }
    }
}