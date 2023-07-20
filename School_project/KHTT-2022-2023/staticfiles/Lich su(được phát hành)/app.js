var sidenav = document.getElementById("sidenav")
var btn  =document.getElementById("btn")
var btn_div = document.getElementsByClassName("sidenav-btn")[0]
sidenav.style.left = "0%"
btn_div.style.left = "31%"
btn.addEventListener("click", function(){
    if( sidenav.style.left == "-100%"){
        sidenav.style.left = "0"
        btn_div.style.left = "31%"
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
    e.querySelector("i").classList.toggle("active")
}
function googleTranslateElementInit(){
    new google.translate.TranslateElement(
        {pageLanguage:"Vietnamese"},
        "google_translate_element"
    )
    var translate = document.getElementById("google_translate_element")
    translate.querySelector("span").style.display = "none"
    console.log();
    var child = translate.firstChild.removeChild(translate.firstChild.childNodes[1])
    console.log();
}