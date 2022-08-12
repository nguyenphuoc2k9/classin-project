
const name = document.getElementById("sighin-name")
const email = document.getElementById("sighin-email")
const password = document.getElementById("sighin-password")
const re_pass = document.getElementById("signin-confirm")
//sighin-btn effect
const sighinbtn = document.getElementById("sighin-btn")
const rolebtn = document.querySelectorAll(".role-btn")
sighinbtn.addEventListener("click",function(e){
    let ripple = document.createElement("span")
    this.appendChild(ripple)
    let x = e.clientX - e.target.offsetLetf
    let y = e.clientY - e.target.offsetTop
    ripple.style.left = `${x}px`
    ripple.style.Top = `${y}px`
    setTimeout(() =>{
        ripple.remove()
   },1000)
})
//sighin-input-check-value
    name.addEventListener("change",function(){
        if(name.value.length > 0){
            name.classList.add("active")
        } else {
            name.classList.remove("active")
        }
    })
    email.addEventListener("change",function(){
        if(email.value.length > 0){
            email.classList.add("active")
        } else {
            email.classList.remove("active")
        }
    })
    password.addEventListener("change",function(){
        if(password.value.length > 0){
            password.classList.add("active")
        } else {
            password.classList.remove("active")
        }
    })
    re_pass.addEventListener("change", function(){
        if(re_pass.value.length > 0){
            re_pass.classList.add("active")
        } else {
            re_pass.classList.remove("active")
        }
    })
    