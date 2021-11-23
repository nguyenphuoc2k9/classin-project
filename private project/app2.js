
const searchBox = document.querySelector(".search-box");
      const searchBtn = document.querySelector(".search-icon");
      const cancelBtn = document.querySelector(".cancel-icon");
      const searchInput = document.querySelector("input");
    //   const searchData = document.querySelector(".search-data");
      searchBtn.onclick =()=>{
        searchBox.classList.add("active");
        searchBtn.classList.add("active");
        searchInput.classList.add("active");
        cancelBtn.classList.add("active");
    var topgames = document.getElementsByClassName('gamebox')[0]




    var keyword = searchInput.value
    if(keyword != "") {
        var searchResult = []

        for(var i = 0; i < searchdata.length; i++){
            if(searchdata[i].name.toLocaleLowerCase().includes(keyword)){
                searchResult.push(searchdata[i])
            }
        }
        if(searchResult.length == 0) {
            alert("No name game match: " + keyword)
        } else {
            generateContent(searchResult)
        }
        }
    // read more
let more = document.querySelectorAll(".more")
for(let i = 0;i< more.length;i++){
    more[i].addEventListener("click" , function(){
        more[i].parentNode.classList.toggle("active")
    })
}   
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
    }
    cancelBtn.onclick =()=>{
        searchBox.classList.remove("active");
        searchBtn.classList.remove("active");
        searchInput.classList.remove("active");
        cancelBtn.classList.remove("active");
    }
//sidenav
const page = location.href
const menuItem = document.querySelectorAll("#nav")
for(let i = 0;i<menuItem.length;i++){
    if(menuItem[i].href === page){
        menuItem[i].className = "active"
    }
}