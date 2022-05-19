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
//api link
const class_news_data = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/class-news-data";
const student_report_data = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/student-report-data";
const outsider_news_data = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/outsider-news-data";
//search stystem
document.getElementById("search-btn").onclick=()=>{
    var result_box = document.getElementsByClassName("result-box")[0]
    var class_data = [];
    var re_data = [];
    var out_data = [];
    fetch(class_news_data)
    .then((repose)=>{
        return repose.json();
    }).then((data)=>{
        class_data.push(data)
    }).catch((err)=>{
        console.log(err);
    })
    fetch(student_report_data)
    .then((repose)=>{
        return repose.json()
    }).then((data)=>{
        re_data.push(data)
    }).then((err)=>{
        console.log(err);
    })
    fetch(outsider_news_data)
    .then((repose)=>{
        return repose.json()
    }).then((data)=>{
        out_data.push(data)
    }).catch((err)=>{
        console.log(err);
    })
    var searchdata= []
    // searchdata.push(class_data, re_data, out_data)
    // console.log(class_data[0]);
    // searchdata.push(class_data);
    // console.log(searchdata[0]);

    var keyword = document.getElementById("search-input").value
    // console.log(searchdata[0]);
    if(keyword != "") {
        var searchResult = []

        for(var i = 0; i < searchdata.length; i++){
            if(searchdata[i][i].title.toLocaleLowerCase().includes(keyword)){
                searchResult.push(searchdata[i][i])
            }
        }
        if(searchResult.length == 0) {
            alert("No name game match: " + keyword)
        } else {
            generateContent(searchResult)
        }
        }
function generateContent(data){
    result_box.innerHTML = ""
    for(let element of data){
        var html = `<div class="news">
            <img src="${element.image}" alt="img">
            <div class="info">
                <h1>${element.title}</h1>
                <p class="class_desc> ${element.desc}</p>
                <div class="news-btn">
                    <button><span></span><p class="text-read-more" onclick="editnewscl(${element.id})">Edit news</p></button>
                    <button><span></span><p class="text-read-more" onclick="deletenewscl(${element.id})">Delete news</p></button>
                    <button><span></span><p class="text-read-more">Read more</p></button>
                </div>
            </div>
        </div>`
        result_box.insertAdjacentHTML("beforeend", html)
    }
}
}