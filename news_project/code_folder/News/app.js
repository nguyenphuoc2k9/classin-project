//sidenav
const sidenav = document.getElementById("sidenav")
const menu = document.getElementById("menu")

sidenav.style.right = "-300px";

menu.addEventListener("click", function(){
    if(sidenav.style.right == "-300px"){
        sidenav.style.right ="0";
        menu.src = "../close.png"
    }
    else{
        sidenav.style.right = "-300px";
        menu.src = "../menu.png"
    }
})