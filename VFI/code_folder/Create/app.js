var menubtn = document.getElementById("close")
var btn = document.getElementById("close-")
var sidenav = document.getElementById("sidenav-box")
    sidenav.style.left = "-30%"
    btn.style.left = "3%"
menubtn.onclick=()=>{
    if(sidenav.style.left == "0%"){
        sidenav.style.left = "-30%"
        menubtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
        btn.style.left = "3%"
    } else {
        sidenav.style.left = "0%"
        menubtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        btn.style.left = "21%"
    }

}
//input check value
const title_class = document.getElementById("input-class")
const desc_class = document.getElementById("area-class")
title_class.addEventListener("change", function(){
    if(title_class.value.length > 0){
        title_class.classList.add("active")
    } else {
        title_class.classList.remove("active")
    }
})
desc_class.addEventListener("change", function(){
    if(desc_class.value.length > 0){
        desc_class.classList.add("active")
    } else {
        desc_class.classList.remove("active")
    }
})
const title_re = document.getElementById("input-re")
const desc_re = document.getElementById("area-re")
title_re.addEventListener("change", function(){
    if(title_re.value.length > 0){
        title_re.classList.add("active")
    } else {
        title_re.classList.remove("active")
    }
})
desc_re.addEventListener("change",function(){
    if(desc_re.value.length > 0){
        desc_re.classList.add("active")
    } else {
        desc_re.classList.remove("active")
    }
})
const title_out = document.getElementById("input-out")
const desc_out = document.getElementById("area-out")
title_out.addEventListener("change", function(){
    if(title_out.value.length > 0){
        title_out.classList.add("active")
    } else {
        title_out.classList.remove("active")
    }
})
desc_out.addEventListener("change", function(){
    if(desc_out.value.length > 0){
        desc_out.classList.add("active")
    } else {
        desc_out.classList.remove("active")
    }
})
//log out
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