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
//api link
const class_news_data = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/class-news-data";
const student_report_data = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/student-report-data";
const outsider_news_data = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/outsider-news-data";
//class print
fetch(class_news_data)
.then(function(repose){
    return repose.json();
})
.then(function(data){
    class_print(data)   
})
.catch(function(err){
    console.log(err);
})
    function class_print(data){
        let html = ""
        for(element of data){
            html += `
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
        }
        document.getElementById("class-news").innerHTML = html;
    }

//student print
fetch(student_report_data)
.then(function(repose){
    return repose.json();
})
.then(function(data){
    student_print(data)
})
.catch(function(err){
    console.log(err);
})

const student_print = (data) =>{
    let html = ""
    for(element of data){
        html +=`
        <div class="news">
            <img src="${element.image}" alt="img">
            <div class="info">
                <h1>${element.title}</h1>
                <p class="class_desc"> ${element.desc}</p>
                    <div class="news-btn">
                        <button><span></span><p class="text-read-more" onclick="editnewstr(${element.id})">Edit news</p></button>
                        <button><span></span><p class="text-read-more" onclick="deletenewstr(${element.id})">Delete news</p></button>
                        <button><span></span><a href="../Show more/show-more.html?id=${element.id}&topic=student_report" class="text-read-more">Read more</a></button>
                    </div>
            </div>
        </div>
            `
    }
    document.getElementById("student-report").innerHTML = html;
}
//outider print
fetch(outsider_news_data)
.then(function(repose){
    return repose.json();
})
.then(function(data){
    out_print(data)
})
.catch(function(err){
    console.log(err);
})

const out_print = (data) =>{
    let html = ""
    for(element of data){
        html += `
        <div class="news">
            <img src="${element.image}" alt="img">
            <div class="info">
                <h1>${element.title}</h1>
                <p class="class_desc"> ${element.desc}</p>
                    <div class="news-btn">
                        <button><span></span><p class="text-read-more" onclick="editnewsot(${element.id})">Edit news</p></button>
                        <button><span></span><p class="text-read-more" onclick="deletenewsot(${element.id})">Delete news</p></button>
                        <button><span></span><a href="../Show more/show-more.html?id=${element.id}&topic=outsider_news" class="text-read-more">Read more</a></button>
                    </div>
            </div>
        </div>
            `
    }
    document.getElementById("outsider-news").innerHTML = html;
}
//delete class

const deletenewscl =(id)=>{
    fetch(cla + '/' + id,{
        method: "DELETE"
    })
    .then(()=>{
        alert("removed news that has id" + id)
    })
    .catch((err)=>{
        console.log(err);
    })
}
//delete student report
const deletenewstr =(id)=>{
    fetch(student_report_data + '/' + id,{
        method: "DELETE"
    })
    .then(()=>{
        alert("removed news that has id" + id)
    })
    .catch((err)=>{
        console.log(err);
    })
}
//delete outsider news

const deletenewsot =(id)=>{
    fetch(outsider_news_data + "/" + id ,{
        method:"delete"
    })
    .then(()=>{
        alert("removed news that has id" + id)
    })
    .catch((err)=>{
        console.log(err);
    })
}