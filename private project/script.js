//search
var topgames = document.getElementsByClassName('gamebox')[0]
var inputSearch = document.getElementById('inputSea')
var btnSearch = document.getElementById('btnSearch')

generateContent(data2)
function generateContent(data) {
    topgames.innerHTML = ''
    for(var i = 0; i < data.length; i++){
        var game = data[i]
        var html = `
        <div class="games" >
            <img src="${game.img}" >
            <div class="info">
                <h1><a href="${game.src}">${game.name}</a></h1>
                <hr/>
                <p>${game.desc}</p>
                <p>${game.visits}</p>
                <p>${game.update}</p>
            </div>
            <a class="more"><span></span></a>
        </div>`
        topgames.insertAdjacentHTML("beforeend", html)
    }
}
// read more
let more = document.querySelectorAll(".more")
var info = document.querySelectorAll(".info")
for(let i = 0;i< more.length;i++){
    more[i].addEventListener("click" , function(){
        info[i].classList.toggle("show-more")
        more[i].parentNode.classList.toggle("active")
    })
}
//sidenav
const page = location.href
const menuItem = document.querySelectorAll("#nav")
for(let i = 0;i<menuItem.length;i++){
    if(menuItem[i].href === page){
        menuItem[i].className = "active"
    }
}