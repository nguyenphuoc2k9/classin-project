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
    pn.addEventListener("change",function(){
        if(pn.value.length > 0){
            pn.classList.add("active")
        } else {
            pn.classList.remove("active")
        }
    })
    password.addEventListener("change",function(){
        if(password.value.length > 0){
            password.classList.add("active")
        } else {
            password.classList.remove("active")
        }
    })
    re_pass.addEventListener("change",function(){
        if(re_pass.value.length > 0){
            re_pass.classList.add("active")
        } else {
            re_pass.classList.remove("active")
        }
    })
//sighin
document.getElementById("sighin-btn").onclick =()=>{
    let check = false;
    let datauser;
    if(localStorage.getItem("user")){
        datauser = JSON.parse(localStorage.getItem("user"))
    } else {
        datauser = [];
    }
    if(name.value == "" || email.value == "" || pn.value == ""|| password.value == ""||re_pass.value == ""){
        alert("Input cannot be plank !")
        check = true;
    }
    if(name.value.length < 1 || name.value.length >10){
        document.getElementById("sighin-desc-name").innerHTML = "Invalid name"
        check = true;
        document.getElementById("sighin-desc-name").style.color = "red"
    }
    if(!email.value.includes("@") || !email.value.includes(".")){
        check = true;
        document.getElementById("sighin-desc-email").innerHTML = "Invalid email"
        document.getElementById("sighin-desc-email").style.color = "red"
    }
    if(pn.value.length != 10){
        document.getElementById("sighin-desc-pn").innerHTML = "Invalid phone number"
        check = true;
        document.getElementById("sighin-desc-pn").style.color = "red";
    }
    if(password.value.length <6 || password.value.length >13){
        document.getElementById("sighin-desc-password").innerHTML = "Invalid password"
        document.getElementById("sighin-desc-password").style.color = "red"
        check = true;
    }
    if(re_pass.value != password.value){
        document.getElementById("sighin-desc-confirm").innerHTML = "Wrong password"
        document.getElementById("signin-desc-confirm").style.color = "red"
        check = true;
    }
    if(!check){
        let checkemail = false;
        console.log('pn.value: ',pn.value)
        for(user of datauser){
            if(user.email === email){
                document.getElementById("sighin-desc-email").innerHTML = "Invalid email"
                document.getElementById("sighin-desc-email").style.color = "red"
                checkemail = true;
            }
        }
        if(checkemail === false){
            const user = {
                name: name.value,
                email: email.value,
                password: password.value,
                pn: pn.value
            }
            datauser.push(user)
            localStorage.setItem("user",JSON.stringify(datauser))
            alert("Sign in sucesed")
            window.location.href = "../Login/Login.html"
        }
    }
}