//login-btn-effect
const loginbtn = document.getElementById("login-btn")
loginbtn.addEventListener("click", function(e){
   let ripple = document.createElement("span")
   this.appendChild(ripple)
   let x = e.clientX - e.target.offsetLeft
   let y = e.clientY - e.target.offsetTop
   ripple.style.left = `${x}px`
   ripple.style.top = `${y}px`
   setTimeout(() =>{
        ripple.remove()
   },1000)
})