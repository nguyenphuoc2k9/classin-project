
var rname = "phuoc"
var rpassword = "phuocnguyen2009"
function h1(){
    var Name = document.getElementById("name").value
    var pass = document.getElementById("password").value
    if(Name == rname && pass == rpassword){
        
        localStorage.setItem("Name", Name)
        localStorage.setItem("Password", pass)
    }
    else{
        alert("Wrong password or username")
    }
}
function lo(){
    window.location.href = "https://google.com"
}