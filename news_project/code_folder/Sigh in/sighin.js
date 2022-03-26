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
rolebtn.