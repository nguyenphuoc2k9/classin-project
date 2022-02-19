
var btn = document.getElementById("btn")

btn.addEventListener("click" , function(){
    var name1 = document.getElementById("name").value
    var age = document.getElementById("age").value
    var email = document.getElementById("email").value


    localStorage.setItem("name", JSON.stringify(name1))
    localStorage.setItem("age", age)
    localStorage.setItem("email", email)
})
