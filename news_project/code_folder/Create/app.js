
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
        title_re.classList.remove("active")
    }
})
desc_re.addEventListener("change",function(){
    if(desc_re.value.length > 0){
        desc_re.classList.add("active")
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
const class_image = "https://6285efd696bccbf32d6b52a3.mockapi.io/image_class"
const student_image = "https://6285efd696bccbf32d6b52a3.mockapi.io/image_student"
const outsider_image = "https://6285efd696bccbf32d6b52a3.mockapi.io/image_outsider"
//image dom
const image_class = document.getElementById("image-class")
const image_re = document.getElementById("image-re")
const image_outsider = document.getElementById("image-out")
//class_add

document.getElementById("class-add").onclick =()=>{
    //title_desc_add
    const title =document.getElementById("input-class").value
    const desc = document.getElementById("area-class").value
    let check = false;
    if(title.length == 0 || desc.length == 0){
        alert("class input cannot be plank")
        check = true;
    }
    if(6 >title.length > 30){
        document.getElementById("input-desc-class").innerHTML = "Invalid title"
        document.getElementById("input-desc-class").style.color = "red"
        check = true;
    }
    if( 20 >desc.length > 200){
        document.getElementById("area-desc-class").innerHTML = "Invalid descirtpion"
        document.getElementById("area-desc-class").style.color = "red"
        check = true;
    }
    if(!check){
        document.getElementById("pop-up-class").classList.add("haiz") 
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
            return repose.json();
        })
        .then(function(post){
            console.log(post);
        })
        .catch(function(err){
            console.log(err);
        })
    }
}
function classpop(){
    document.getElementById("pop-up-class").classList.remove("haiz")
}

//student_report_news
document.getElementById("student-report-add").onclick =()=>{
    const title =document.getElementById("input-re").value
    const desc = document.getElementById("area-re").value

    let check = false;
    if(title.length == 0 || desc.length == 0){
        alert("class input cannot be plank")
        check = true;
    }
    if(title.length > 15){
        document.getElementById("input-desc-re").innerHTML = "Invalid title"
        document.getElementById("input-desc-re").style.color = "red"
        check = true;
    }
    if(desc.length > 100){
        document.getElementById("area-desc-re").innerHTML = "Invalid descirtpion"
        document.getElementById("area-desc-re").style.color = "red"
        check = true;
    }
    if(!check){
        document.getElementById("pop-up-student").classList.add("haiz") 
        const class_news = {
            title,
            desc
        };
        fetch(student_report_data, {
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
function studentpop(){
    document.getElementById("pop-up-student").classList.remove("haiz")
}
//outsider-news-adad
document.getElementById("outsider-add").onclick =()=>{
    const title =document.getElementById("input-out").value
    const desc = document.getElementById("area-out").value

    let check = false;
    if(title.length == 0 || desc.length == 0){
        alert("class input cannot be plank")
        check = true;
    }
    if(title.length > 15){
        document.getElementById("input-desc-out").innerHTML = "Invalid title"
        document.getElementById("input-desc-out").style.color = "red"
        check = true;
    }
    if(desc.length > 100){
        document.getElementById("area-desc-out").innerHTML = "Invalid descirtpion"
        document.getElementById("area-desc-out").style.color = "red"
        check = true;
    }
    if(!check){
        document.getElementById("pop-up-out").classList.add("haiz") 
        const class_news = {
            title,
            desc
        };
        fetch(outsider_news_data, {
            method:"post",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(class_news)
        })
        .then(function(repose){
            return repose.json();
        })
        .then(function(post){
            console.log(post);
        })
        .catch(function(err){
            console.log(err);
        })
    }
}
function outpop(){
    document.getElementById("pop-up-out").classList.remove("haiz")
}
//cloudinary
const CLOUNDINARY_URL = "https://api.cloudinary.com/v1_1/dgum7tw8v/image/upload"
const CLOUDINARY_UPLOAD_PRESET = "ml_default"
//upload class image
image_class.addEventListener("change", function(event){
    var file = event.target.files[0]
    var formdata = new FormData();
    formdata.append("file", file)
    formdata.append("upload_preset", CLOUDINARY_UPLOAD_PRESET)
        if(image_class.value != null){
            fetch(CLOUNDINARY_URL,{
                method:"POST",
                body: formdata
            }).then((response) => {
                return response.text();
            }).then((data) => {
                 let body = JSON.parse(data)
                link(body.secure_url)
              })
            .catch(function(err){
                console.log(err);
            })
            const link =(data)=>{
                console.log(data);
                const image = {
                    image:data
                }
                fetch(class_image,{
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(image)
                }).then((repose)=>{
                    return repose.json();
                }).then((data)=>{
                    console.log(data);
                }).catch((err)=>{
                    console.log(err);
                })
                
            }

    }
})
//upload student image
image_re.addEventListener("change", function(event){
    var file = event.target.files[0]
    var formdata = new FormData();
    formdata.append("file", file)
    formdata.append("upload_preset", CLOUDINARY_UPLOAD_PRESET)
        if(image_re.value != null){
        fetch(CLOUNDINARY_URL,{
                method:"POST",
                body: formdata
            }).then((response) => {
                return response.text();
            }).then((data) => {
                let body = JSON.parse(data)
                link(body.secure_url)
            })
            .catch(function(err){
                console.log(err);
            })
            const link =(data)=>{
                console.log(data);
                const image = {
                    image:data
                }
                fetch(student_image,{
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(image)
                }).then((repose)=>{
                    return repose.json();
                }).then((data)=>{
                    console.log(data);
                }).catch((err)=>{
                    console.log(err);
                })
                
            }

    }
})
//upload outsider image
image_outsider.addEventListener("change", function(event){
    var file = event.target.files[0]
    var formdata = new FormData();
    formdata.append("file", file)
    formdata.append("upload_preset", CLOUDINARY_UPLOAD_PRESET)
        if(image_outsider.value != null){
            fetch(CLOUNDINARY_URL,{
                method:"POST",
                body: formdata
            }).then((response) => {
                return response.text();
            }).then((data) => {
                 let body = JSON.parse(data)
                link(body.secure_url)
              })
            .catch(function(err){
                console.log(err);
            })
            const link =(data)=>{
                console.log(data);
                const image = {
                    image:data
                }
                fetch(outsider_image,{
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(image)
                }).then((repose)=>{
                    return repose.json();
                }).then((data)=>{
                    console.log(data);
                }).catch((err)=>{
                    console.log(err);
                })
                
            }

    }
})