//varibles
var login_name = document.getElementById("login-name")
var login_pass = document.getElementById("login-password")
//login-input-effect
login_name.addEventListener("change", function(){
    if(login_name.value.length > 0){
        login_name.classList.add("active")
    }
    else{
        login_name.classList.remove("active")
    }
})
login_pass.addEventListener("change",function(){
    if(login_pass.value.length > 0){
        login_pass.classList.add("active")
    }else{
        login_pass.classList.remove("active")
    }
})