const name = document.getElementById("sighin-name")
const email = document.getElementById("sighin-email")
const pn = document.getElementById("sighin-pn")
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
            alert("có value")
        } else {
            alert("chx có value")
        }
    })
//sighin
document.getElementById("sighin-btn").onclick =()=>{
    let check = false;
    let datauser;
    if(localStorage.getItem("users")){
        datauser = JSON.parse(localStorage.getItem("users"))
    } else {
        datauser = [];
    }
    if(name.value == "" || email.value == "" || pn.value == ""|| password.value == ""||re_pass.value == ""){
        alert("Input cannot be plank !")
        check = true;
    }
    if(name.value.length < 5 || name.value.length >10){
        document.getElementById("sighin-desc-name").innerHTML = "Invalid name"
        check = true;
        document.getElementById("sighin-desc-name").style.color = "red"
    }
    if(!email.value.includes("@") || !email.value.includes(".")){
        check = true;
        document.getElementById("sighin-desc-email").innerHTML = "Invalid email"
        document.getElementById("sighin-desc-email").style.color = "red"
    }
    if(password.value.length <6 || password.value.length >13){
        document.getElementById("sighin-desc-password").innerHTML = "Invalid password"
        document.getElementById("sighin-desc-password").style.color = "red"
        check = true;
    }
}