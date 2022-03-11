const API = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/iloveroblox"
const post = document.getElementById("post")
post.addEventListener("submit", function(e){
    e.preventDefault()
    var postname = document.getElementById("name").value
    var postdesc = document.getElementById("desc").value
    var formdata = {postname, postdesc}

    fetch(API, {
        method: "POST",
        body: JSON.stringify(formdata)
    })
    .then(function(repose){
        return repose.json()
    })
    .then(function(text){
        console.log(text);
    })
    .catch(function(err){
        console.log(err);
    })
})