//sidenav
const page = location.href
const menuItem = document.querySelectorAll("#nav")
for(let i = 0;i<menuItem.length;i++){
    if(menuItem[i].href === page){
        menuItem[i].className = "active"
    }
}

//read more
let more = document.querySelectorAll(".more")
for(let i = 0;i< more.length;i++){
    more[i].addEventListener('click' ,function(){
        more[i].parentNode.classList.toggle("active")
    })
}
