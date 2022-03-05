var name = document.getElementById("name").value
var password = document.getElementById("password").value
var btn = document.getElementById("btn")
const user = {
    name:name,
    password:password
}
btn.onclick=()=>{
    localStorage.setItem("Name", JSON.stringify(user))
}