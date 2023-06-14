const drop_btn = document.getElementById("dropdown")
const dropdown = document.getElementById("dropdown-box")
dropdown.style.display = 'none'
drop_btn.addEventListener("click", function(){
    var top = dropdown.style.display
    if(top == 'flex'){
        dropdown.style.display = 'none'
    }else{
        dropdown.style.display = 'flex'
    }
})
