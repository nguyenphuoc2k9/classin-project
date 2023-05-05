const drop_btn = document.getElementById("dropdown")
const dropdown = document.getElementById("dropdown-box")
dropdown.style.marginTop ='-50px'
drop_btn.addEventListener("click", function(){
    var top = dropdown.style.marginTop
    if(top == '-50px'){
        dropdown.style.marginTop = '0px'
    }else{
        dropdown.style.marginTop = '-50px'
    }
})