//sighin-check
let usercurrent;
if(localStorage.getItem("usercurrent") == null){
    window.location.href = "../Login/Login.html"
} else {
    usercurrent = JSON.parse(localStorage.getItem("usercurrent"))
    console.log(usercurrent);
}
//search-value-check
var searchinput = document.getElementById("search-input")
searchinput.addEventListener("change",function(){
    if(searchinput.value.length > 0){
        searchinput.classList.add("active")
    } else {
        searchinput.classList.remove("active")
    }
})