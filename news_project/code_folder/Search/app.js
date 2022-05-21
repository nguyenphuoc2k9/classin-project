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
//class print
let news_class = document.getElementsByClassName("news class")
let news_student = document.getElementsByClassName("news student")
let news_outsider = document.getElementsByClassName("news outsider")
//api link
const class_image = "https://6285efd696bccbf32d6b52a3.mockapi.io/image_class"
const student_image = "https://6285efd696bccbf32d6b52a3.mockapi.io/image_student"
const outsider_image = "https://6285efd696bccbf32d6b52a3.mockapi.io/image_outsider"
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
    var image_class_id;
    var keyword = document.getElementById("search-input-class").value
    // console.log(searchdata[0]);
    function search_class(searchdata){
        if(keyword != "") {
            var searchResult = []
            

            for(var i = 0; i < searchdata.length; i++){
                if(searchdata[i].title.toLocaleLowerCase().includes(keyword)){
                    searchResult.push(searchdata[i])
                    image_class_id = searchdata[i].id
                    console.log(image_class_id);
                    fetch(class_image)
                    .then((repose)=>{
                    return repose.json()
                    }).then((data)=>{
                    generateimage(data)
                    }).catch((err)=>{
                        console.log(err);
                    })
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
            result_box.insertAdjacentHTML("beforeend", html)
    }
}
function generateimage(data){
    console.log(data);
    for(let i=0;i<data.length;i++){
        let html = `<img src="${data[i].image}" alt="img">`
        console.log(news_class[i]);
        console.log(html);
        news_class[i].insertAdjacentHTML("afterbegin",html)
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
    // searchdata.push(class_data, re_data, out_data)
    // console.log(class_data[0]);
    // searchdata.push(class_data);
    // console.log(searchdata[0]);
    var image_class_id;
    var keyword = document.getElementById("search-input-student").value
    // console.log(searchdata[0]);
    function search_class(searchdata){
        if(keyword != "") {
            var searchResult = []
            

            for(var i = 0; i < searchdata.length; i++){
                if(searchdata[i].title.toLocaleLowerCase().includes(keyword)){
                    searchResult.push(searchdata[i])
                    image_class_id = searchdata[i].id
                    console.log(image_class_id);
                    fetch(student_image)
                    .then((repose)=>{
                    return repose.json()
                    }).then((data)=>{
                    generateimage(data)
                    }).catch((err)=>{
                        console.log(err);
                    })
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
            result_box.insertAdjacentHTML("beforeend", html)
    }
}
function generateimage(data){
    for(let i=0;i<data.length;i++){
        let html = `<img src="${data[i].image}" alt="img">`
        news_class[i].insertAdjacentHTML("afterbegin",html)
    }
}
}
//outsider_news search system
document.getElementById("search-btn-out").onclick=()=>{
    var result_box = document.getElementById("outsider-news")
    fetch(outsider_news_data)
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
    var image_class_id;
    var keyword = document.getElementById("search-input-out").value
    // console.log(searchdata[0]);
    function search_class(searchdata){
        if(keyword != "") {
            var searchResult = []
            

            for(var i = 0; i < searchdata.length; i++){
                if(searchdata[i].title.toLocaleLowerCase().includes(keyword)){
                    searchResult.push(searchdata[i])
                    image_class_id = searchdata[i].id
                    console.log(image_class_id);
                    fetch(outsider_image)
                    .then((repose)=>{
                    return repose.json()
                    }).then((data)=>{
                    generateimage(data)
                    }).catch((err)=>{
                        console.log(err);
                    })
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
            result_box.insertAdjacentHTML("beforeend", html)
    }
}
function generateimage(data){
    for(let i=0;i<data.length;i++){
        let html = `<img src="${data[i].image}" alt="img">`
        news_class[i].insertAdjacentHTML("afterbegin",html)
    }
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
