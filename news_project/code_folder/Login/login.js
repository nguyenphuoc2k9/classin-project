//login-btn-effect
const loginbtn = document.getElementById("login-btn")
loginbtn.addEventListener("click", function(e){
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
//login
document.getElementById("login-btn").onclick =()=>{
   const name = document.getElementById("login-name").value
   const password = document.getElementById("login-password").value
   let check = false;
   let datauser;
   if(localStorage.getItem("user")){
      datauser = JSON.parse(localStorage.getItem("user"))
   } else {
      datauser = [];
   }
   if(password.length < 6 || password.length > 13){
      document.getElementById("input-desc-pass").innerHTML = "Invalid password"
      document.getElementById("input-desc-pass").style.color = "red"
      check = true;
   }
   if(name.length < 1 || name.length >10 ){
      document.getElementById("input-desc-name").innerHTML = "Invalid name"
      document.getElementById("input-desc-name").style.color = "red"
      check = true;
   }
   if(!check){
      let checkname = false;
      for(let user of datauser){
         if(user.name === name){
            checkname = true;
            console.log(user.name);
            if(user.password === password){
               let usercurrent = user;
               localStorage.setItem("usercurrent", JSON.stringify(usercurrent))
               alert("Login sucesed")
               window.location.href = "../Home_/home.html"
            } else {
               document.getElementById("input-desc-password").innerHTML = "Invalid password"
               document.getElementById("input-desc-password").style.color =  "red"
            }
         }
      }
      if(checkname === false){
         document.getElementById("input-desc-name").innerHTML = "This name doesn't exist"
         document.getElementById("input-desc-name").style.color = "red"
      }
   }
}