//sighin-check
let usercurrent;
if(localStorage.getItem("usercurrent") == null){
    window.location.href = "../Login/Login.html"
} else {
    usercurrent = JSON.parse(localStorage.getItem("usercurrent"))
    console.log(usercurrent);
}
//username
let html = ""
html+=`<p class="head-text"><i class="fa-solid fa-user"></i>Welcome ${usercurrent.name}</p>`
document.getElementsByClassName("header-box")[0].insertAdjacentHTML("beforeend", html)
//search-value-check
var searchinputclass = document.getElementById("search-input-class")
searchinputclass.addEventListener("change",function(){
    if(searchinputclass.value.length > 0){
        searchinputclass.classList.add("active")
    } else {
        searchinputclass.classList.remove("active")
    }
})
var searchinputstudent = document.getElementById("search-input-student")
searchinputstudent.addEventListener("change",function(){
    if(searchinputstudent.value.length > 0){
        searchinputstudent.classList.add("active")
    } else {
        searchinputstudent.classList.remove("active")
    }
})
var searchinputout = document.getElementById("search-input-out")
searchinputout.addEventListener("change",function(){
    if(searchinputout.value.length > 0){
        searchinputout.classList.add("active")
    } else {
        searchinputout.classList.remove("active")
    }
})
//api link
const class_news_data = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/class-news-data";
const student_report_data = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/student-report-data";
const outsider_news_data = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/outsider-news-data";
//search stystem class
document.getElementById("search-btn-class").onclick=()=>{
    var result_box = document.getElementById("class-news")
    fetch(class_news_data)
    .then((repose)=>{
        return repose.json();
    }).then((data)=>{
        search_class(data)
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
    
    // searchdata.push(class_data, re_data, out_data)
    // console.log(class_data[0]);
    // searchdata.push(class_data);
    // console.log(searchdata[0]);

    var keyword = document.getElementById("search-input-class").value
    // console.log(searchdata[0]);
    function search_class(searchdata){
        if(keyword != "") {
            var searchResult = []

            for(var i = 0; i < searchdata.length; i++){
                if(searchdata[i].title.toLocaleLowerCase().includes(keyword)){
                    searchResult.push(searchdata[i])
                }
            }
            if(searchResult.length == 0) {
                alert("No name game match: " + keyword)
            } else {
                generateContent(searchResult)
            }
    }
    }
    
function generateContent(data){
    result_box.innerHTML = ""
    for(let element of data){
        var html =  `
        <div class="news">
            <img src="${element.image}" alt="img">
            <div class="info">
                <h1>${element.title}</h1>
                <p class="class_desc"> ${element.desc}</p>
                    <div class="news-btn">
                        <button><span></span><p class="text-read-more" onclick="editnewscl(${element.id})">Edit news</p></button>
                        <button><span></span><p class="text-read-more" onclick="deletenewscl(${element.id})">Delete news</p></button>
                        <button><span></span><a href="../Show more/show-more.html?id=${element.id}&topic=class_news" class="text-read-more">Read more</a></button>
                    </div>
            </div>
        </div>
            `
        result_box.insertAdjacentHTML("beforeend", html)
    }
}
}
//student search system
document.getElementById("search-btn-student").onclick=()=>{
    var result_box = document.getElementById("student-report")
    fetch(student_report_data)
    .then((repose)=>{
        return repose.json();
    }).then((data)=>{
        search_class(data)
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
    var keyword = document.getElementById("search-input-student").value
    function search_class(searchdata){
        if(keyword != "") {
            var searchResult = []

            for(var i = 0; i < searchdata.length; i++){
                if(searchdata[i].title.toLocaleLowerCase().includes(keyword)){
                    searchResult.push(searchdata[i])
                }
            }
            if(searchResult.length == 0) {
                alert("No name game match: " + keyword)
            } else {
                generateContent(searchResult)
            }
    }
    }
    
function generateContent(data){
    result_box.innerHTML = ""
    for(let element of data){
        var html =  `
        <div class="news">
            <img src="${element.image}" alt="img">
            <div class="info">
                <h1>${element.title}</h1>
                <p class="class_desc"> ${element.desc}</p>
                    <div class="news-btn">
                        <button><span></span><p class="text-read-more" onclick="editnewscl(${element.id})">Edit news</p></button>
                        <button><span></span><p class="text-read-more" onclick="deletenewscl(${element.id})">Delete news</p></button>
                        <button><span></span><a href="../Show more/show-more.html?id=${element.id}&topic=class_news" class="text-read-more">Read more</a></button>
                    </div>
            </div>
        </div>
            `
        result_box.insertAdjacentHTML("beforeend", html)
    }
}
}
//outsider_news search system
document.getElementById("search-btn-out").onclick=()=>{
    var result_box = document.getElementById("outsider-news")
    fetch(student_report_data)
    .then((repose)=>{
        return repose.json();
    }).then((data)=>{
        search_class(data)
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
    var keyword = document.getElementById("search-input-out").value
    function search_class(searchdata){
        if(keyword != "") {
            var searchResult = []

            for(var i = 0; i < searchdata.length; i++){
                if(searchdata[i].title.toLocaleLowerCase().includes(keyword)){
                    searchResult.push(searchdata[i])
                }
            }
            if(searchResult.length == 0) {
                alert("No name game match: " + keyword)
            } else {
                generateContent(searchResult)
            }
    }
    }
    
function generateContent(data){
    result_box.innerHTML = ""
    for(let element of data){
        var html =  `
        <div class="news">
            <img src="${element.image}" alt="img">
            <div class="info">
                <h1>${element.title}</h1>
                <p class="class_desc"> ${element.desc}</p>
                    <div class="news-btn">
                        <button><span></span><p class="text-read-more" onclick="editnewscl(${element.id})">Edit news</p></button>
                        <button><span></span><p class="text-read-more" onclick="deletenewscl(${element.id})">Delete news</p></button>
                        <button><span></span><a href="../Show more/show-more.html?id=${element.id}&topic=class_news" class="text-read-more">Read more</a></button>
                    </div>
            </div>
        </div>
            `
        result_box.insertAdjacentHTML("beforeend", html)
    }
}
}