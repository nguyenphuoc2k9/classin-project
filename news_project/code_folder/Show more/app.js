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
//show-more system
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
const topic = urlParams.get("topic")
console.log(topic);
console.log(id);
//api link
const class_news_data = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/class-news-data";
const student_report_data = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/student-report-data";
const outsider_news_data = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/outsider-news-data";
//show-more-class-topic
if(topic == "class_news"){
    fetch(class_news_data +"/"+ id)
.then(function(repose){
    return repose.json();
})
.then(function(data){
    show_class(data)
    console.log(data);
})
.catch(function(err){
    console.log(err);
})
const show_class = (data)=>{
    let html = ""
    html +=`<div class="show-news">
    <div class="show-more-title">
        <h1>${data.title}</h1>
    </div>
    <div class="show-more-info">
        <img src="${data.image}" alt="">
        <p>${data.desc}</p>
    </div>
</div>`
    document.getElementById("show-more-box").innerHTML = html
}
}else if(topic == "student_report"){

}else if(topic == "outsider_news"){

}