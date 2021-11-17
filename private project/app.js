//sidenav
const page = location.href
const menuItem = document.querySelectorAll("#nav")
for(let i = 0;i<menuItem.length;i++){
    if(menuItem[i].href === page){
        menuItem[i].className = "active"
    }
}
//Searh
var topgames = document.getElementsByClassName('gamebox')[0]
var inputSearch = document.getElementById('inputSea')
var btnSearch = document.getElementById('btnSearch')

generateContent(games)


btnSearch.addEventListener('click', function(){
    var keyword = inputSearch.value
    if(keyword != "") {
        var searchResult = []

        for(var i = 0; i < games.length; i++){
            if(games[i].name.toLocaleLowerCase().includes(keyword)){
                searchResult.push(games[i])
            }
        }
        if(searchResult.length == 0) {
            alert("No name game match: " + keyword)
        } else {
            generateContent(searchResult)
        }
    }
    else if(keyword == ""){
        alert("cannot empty the sreach")
    }
})

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
for(let i = 0;i< more.length;i++){
    more[i].addEventListener("click" , function(){
        more[i].parentNode.classList.toggle("active")
    })
}

