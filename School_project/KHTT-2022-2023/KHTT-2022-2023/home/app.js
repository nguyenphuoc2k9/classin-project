var sidenav = document.getElementById("sidenav")
var btn  =document.getElementById("btn")
var btn_div = document.getElementsByClassName("sidenav-btn")[0]
sidenav.style.left = "-100%"
btn_div.style.left = "3%"
btn.addEventListener("click", function(){
    if( sidenav.style.left == "-100%"){
        sidenav.style.left = "0"
        btn_div.style.left = "27%"
        btn.innerHTML = `<i id='btn'class="fa-solid fa-xmark"></i>`
    }else {
        btn_div.style.left = "3%"
        sidenav.style.left = "-100%"
        btn.innerHTML = `<i id = "btn"class="fa-solid fa-bars"></i>`
    }
})
function dropdown(e){
    var parent = e.parentElement
    e.classList.toggle("active")
    var dropdown = parent.getElementsByClassName("dropdown")[0]
    dropdown.classList.toggle("active")
}