//varibles
var sighin_name = document.getElementById("sighin-name")
var sighin_pass = document.getElementById("sighin-pass")
var sighin_email = document.getElementById("sighin-email")
//login-input-effect
sighin_name.addEventListener("change", function(){
    if(sighin_name.value.length > 0){
        sighin_name.classList.add("active")
    }
    else{
        sighin_name.classList.remove("active")
    }
})
sighin_pass.addEventListener("change",function(){
    if(sighin_pass.value.length > 0){
        sighin_pass.classList.add("active")
    }else{
        sighin_pass.classList.remove("active")
    }
})
sighin_email.addEventListener("change", function(){
    if(sighin_email.value.length > 0){
        sighin_email.classList.add("active")
    } else {
        sighin_email.classList.remove("active")
    }
})