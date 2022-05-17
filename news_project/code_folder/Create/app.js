
//sighin-check
let usercurrent;
if(localStorage.getItem("usercurrent") == null){
    window.location.href = "../Login/Login.html"
} else {
    usercurrent = JSON.parse(localStorage.getItem("usercurrent"))
    console.log(usercurrent);
}
//input check value
const title_class = document.getElementById("input-class")
const desc_class = document.getElementById("area-class")
title_class.addEventListener("change", function(){
    if(title_class.value.length > 0){
        title_class.classList.add("active")
    } else {
        title_class.classList.remove("active")
    }
})
desc_class.addEventListener("change", function(){
    if(desc_class.value.length > 0){
        desc_class.classList.add("active")
    } else {
        desc_class.classList.remove("active")
    }
})
const title_re = document.getElementById("input-re")
const desc_re = document.getElementById("area-re")
title_re.addEventListener("change", function(){
    if(title_re.value.length > 0){
        title_re.classList.add("active")
    } else {
        desc_re.classList.remove("active")
    }
})
desc_re.addEventListener("change",function(){
    if(desc_re.value.length > 0){
        title_re.classList.add("active")
    } else {
        desc_re.classList.remove("active")
    }
})
const title_out = document.getElementById("input-out")
const desc_out = document.getElementById("area-out")
title_out.addEventListener("change", function(){
    if(title_out.value.length > 0){
        title_out.classList.add("active")
    } else {
        title_out.classList.remove("active")
    }
})
desc_out.addEventListener("change", function(){
    if(desc_out.value.length > 0){
        desc_out.classList.add("active")
    } else {
        desc_out.classList.remove("active")
    }
})
//api link
const class_news_data = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/class-news-data";
const student_report_data = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/student-report-data";
const outsider_news_data = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/outsider-news-data";
//class_add
document.getElementById("class-add").onclick =()=>{
    //class_image_add

    //title_desc_add
    const title =document.getElementById("input-class").value
    const desc = document.getElementById("area-class").value
    let check = false;
    if(title.length == 0 || desc.length == 0){
        alert("class input cannot be plank")
        check = true;
    }
    if(title.length > 15){
        document.getElementById("input-desc-class").innerHTML = "Invalid title"
        document.getElementById("input-desc-class").style.color = "red"
        check = true;
    }
    if(desc.length > 100){
        document.getElementById("area-desc-class").innerHTML = "Invalid descirtpion"
        document.getElementById("area-desc-class").style.color = "red"
        check = true;
    }
    if(!check){
        alert("susceed") 
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