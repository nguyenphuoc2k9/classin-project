const API = "https://621a354481d4074e85bc4294.mockapi.io/api/v1/iloveroblox"

fetch(API)
    .then(function(repose){
        return repose.json();
    })
    .then(function(posts){
        
    })
    .catch(function(err){
        console.log(err);
    })

const html = (data) =>{
    let innerHTML = ""
    for(element of data){
        innerHTML += ` <p>Name :</p><p>${element.name}</p> <p>avatar :</p><img src:"${element.avatar}"/>`
    }
    document.getElementById("demo").innerHTML = innerHTML;
}