
const name = document.getElementById("sighin-name")
const email = document.getElementById("sighin-email")
const password = document.getElementById("sighin-password")
const re_pass = document.getElementById("signin-confirm")
const pn = document.getElementById("sighin-pn")
//sighin-btn effect
const rolebtn = document.querySelectorAll(".role-btn")
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
    pn.addEventListener("change",function(){
        if(pn.value.length > 0){
            pn.classList.add("active")
        } else {
            pn.classList.remove("active")
        }
    })
    re_pass.addEventListener("change", function(){
        if(re_pass.value.length > 0){
            re_pass.classList.add("active")
        } else {
            re_pass.classList.remove("active")
        }
    })
    