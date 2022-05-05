//sighin-check
let usercurrent;
if(localStorage.getItem("usercurrent") == null){
    window.location.href = "../Login/Login.html"
} else {
    usercurrent = JSON.parse(localStorage.getItem("usercurrent"))
    console.log(usercurrent);
}
//api link
const class_news_data = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/class-news-data";
const student_report_data = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/student-report-data";
const outsider_news_data = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/outsider-news-data";
//class_add
document.getElementById("class-add").onclick =()=>{
    const title =document.getElementById("input-class").value
    const desc = document.getElementById("area-class").value

    const class_news = {
        title,
        desc
    };
    fetch(class_news_data, {
        method:"post",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(class_news)
    })
    .then(function(repose){
        return repose.json;
    })
    .then(function(post){
        console.log(post);
    })
    .catch(function(err){
        console.log(err);
    })
}
//student_report_news
document.getElementById("student-report-add").onclick =()=>{
    const title =document.getElementById("input-re").value
    const desc = document.getElementById("area-re").value

    const student_report_news = {
        title,
        desc
    };
    fetch(class_news_data, {
        method:"post",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student_report_news)
    })
    .then(function(repose){
        return repose.json;
    })
    .then(function(post){
        console.log(post);
    })
    .catch(function(err){
        console.log(err);
    })
}
//outsider_news
document.getElementById("outsider-add").onclick =()=>{
    const title =document.getElementById("input-out").value
    const desc = document.getElementById("area-out").value

    const outsider_news = {
        title,
        desc
    };
    fetch(class_news_data, {
        method:"post",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(outsider_news)
    })
    .then(function(repose){
        return repose.json;
    })
    .then(function(post){
        console.log(post);
    })
    .catch(function(err){
        console.log(err);
    })
}
