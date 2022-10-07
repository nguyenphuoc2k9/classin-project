
  function drop(){
    document.getElementById("dropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('#dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
// //login-btn-effect
// const loginbtn = document.getElementById("login-btn")
// loginbtn.addEventListener("click", function(e){
//    let ripple = document.createElement("span")
//     this.appendChild(ripple)
//     let x = e.clientX - e.target.offsetLetf
//     let y = e.clientY - e.target.offsetTop
//     ripple.style.left = `${x}px`
//     ripple.style.Top = `${y}px`
//     setTimeout(() =>{
//         ripple.remove()
//    },1000)
// })
var closepop = document.getElementById("closepop")
var popup = document.getElementById("pop-up")
closepop.addEventListener("click",function(){
  popup.style.display = 'none';
})
var search = new URLSearchParams(window.location.search)
var id = search.get("id");
alert(id);
if(id != null){
  document.getElementById("pop-up").style.display = "block";
} else {
}
