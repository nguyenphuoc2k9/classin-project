function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
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
            html += `<div class="news">
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
        html += `<div class="news">
        <img src="${element.image}" alt="img">
        <div class="info">
            <h1>${element.title}</h1>
            <p class="class_desc> ${element.desc}</p>
            <div class="news-btn">
            <button><span></span><p class="text-read-more" onclick="editnewstr(${element.id})">Edit news</p></button>
            <button><span></span><p class="text-read-more" onclick="deletenewstr(${element.id})">Delete news</p></button>
            <button><span></span><p class="text-read-more">Read more</p></button>
        </div>
        </div>
    </div>`
    }
    document.getElementById("class-news").innerHTML = html;
}
//outider print
fetch(class_news_data)
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
        html += `<div class="news">
        <img src="${element.image}" alt="img">
        <div class="info">
            <h1>${element.title}</h1>
            <p class="class_desc"> ${element.desc}</p>
            <div class="news-btn">
            <button><span></span><p class="text-read-more" onclick="editnewsot(${element.id})">Edit news</p></button>
            <button><span></span><p class="text-read-more" onclick="deletenewsot(${element.id})">Delete news</p></button>
            <button><span></span><p class="text-read-more">Read more</p></button>
        </div>
        </div>
    </div>`
    }
    document.getElementById("class-news").innerHTML = html;
}
//delete class
const deletenewscl =(id)=>{
    fetch(class_news_data + "/" + id,{
        method: " delete"
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