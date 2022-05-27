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
const class_image = "https://6285efd696bccbf32d6b52a3.mockapi.io/image_class"
const student_image = "https://6285efd696bccbf32d6b52a3.mockapi.io/image_student"
const outsider_image = "https://6285efd696bccbf32d6b52a3.mockapi.io/image_outsider"
//class print
let news_class = document.getElementsByClassName("news class")
let news_student = document.getElementsByClassName("news student")
let news_outsider = document.getElementsByClassName("news outsider")
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
    
    for(let i = 0;i<data.length;i++){
        let element = data[i]
            html += `
        <div class="news class">
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
fetch(class_image)
.then((repose)=>{
    return repose.json();
}).then((data)=>{
    class_print_image(data)
}).catch((err)=>{
    console.log(err);
})
function class_print_image(data){
    for(let i = 0;i<data.length;i++){
        console.log(data);
        let html = `<img src="${data[i].image}" alt="img">`
        console.log(news_class[i]);
        console.log(html);
        news_class[i].insertAdjacentHTML("afterbegin",html)
    }
    
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
const student_print = (data)=>{
    let html = ""
    
    for(let i = 0;i<data.length;i++){
        let element = data[i]
            html += `
        <div class="news student">
            <div class="info">
                <h1>${element.title}</h1>
                <p class="class_desc"> ${element.desc}</p>
                    <div class="news-btn">
                        <button><span></span><p class="text-read-more" onclick="editnewstr(${element.id})">Edit news</p></button>
                        <button><span></span><p class="text-read-more" onclick="deletenewstr(${element.id})">Delete news</p></button>
                        <button><span></span><a href="../Show more/show-more.html?id=${element.id}&topic=class_news" class="text-read-more">Read more</a></button>
                    </div>
            </div>
        </div>
            `
    
    }
    document.getElementById("student-report").innerHTML = html;
}
fetch(student_image)
.then((repose)=>{
    return repose.json();
}).then((data)=>{
    student_print_image(data)
}).catch((err)=>{
    console.log(err);
})
    
    
    const student_print_image=(data)=>{
        for(let i = 0;i<data.length;i++){
            let html = `<img src="${data[i].image}" alt="img">`
            console.log(news_student[i]);
            console.log(html);
            news_student[i].insertAdjacentHTML("afterbegin",html)
        }
        
    }
//outider print
fetch(outsider_news_data)
.then(function(repose){
    return repose.json();
})
.then(function(data){
    outsider_print(data)   
})
.catch(function(err){
    console.log(err);
})
fetch(outsider_image)
.then((repose)=>{
    return repose.json();
}).then((data)=>{
    outsider_print_image(data)
}).catch((err)=>{
    console.log(err);
})
    
    function outsider_print(data){
        let html = ""
        
        for(let i = 0;i<data.length;i++){
            let element = data[i]
                html += `
            <div class="news outsider">
                <div class="info">
                    <h1>${element.title}</h1>
                    <p class="class_desc"> ${element.desc}</p>
                        <div class="news-btn">
                            <button><span></span><p class="text-read-more" onclick="editnewsot(${element.id})">Edit news</p></button>
                            <button><span></span><p class="text-read-more" onclick="deletenewsot(${element.id})">Delete news</p></button>
                            <button><span></span><a href="../Show more/show-more.html?id=${element.id}&topic=class_news" class="text-read-more">Read more</a></button>
                        </div>
                </div>
            </div>
                `
        
        }
        document.getElementById("outsider-news").innerHTML = html;
    }
    function outsider_print_image(data){
        for(let i = 0;i<data.length;i++){
            let html = `<img src="${data[i].image}" alt="img">`
            news_outsider[i].insertAdjacentHTML("afterbegin",html)
        }
        
    }
//delete class

const deletenewscl =(id)=>{
    fetch(class_news_data + '/' + id,{
        method: "DELETE"
    })
    .then(()=>{
        alert("removed news that has id" + id)
    })
    .catch((err)=>{
        console.log(err);
    })
    fetch(class_image + "/" + id,{
        method:"delete"
    }).catch((err)=>{
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
    fetch(student_image + "/" + id,{
        method:"delete"
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
    fetch(outsider_image + "/" + id,{
        method:"delete"
    })
}