document.getElementById("sinhup-btn").onclick =()=>{
    const Name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const pass = document.getElementById("pass").value
    const re_pass = document.getElementById("repass").value
    let check = false;
    let datauser;
    if(localStorage.getItem("users")){
        datauser = JSON.parse(localStorage.getItem("users"))
    } else {
        datauser = [];
    }
    if(Name === "" || Name === " "){
        alert("Tên không hôp lệ")
        check = true;
    }

    if(!email.includes("@") || !email.includes(".")){
        alert("email không hợp lệ")
        check = true;
    }

    if(pass.length < 6 || pass.length > 15){
        alert("Mật khẩu không hợp lệ")
        check = true;
    }

    if(re_pass != pass){
        alert("mật khẩu không trùng nhau")
        check = true;
    }
    if(!check){
        let checkemail = false;
        for(user of datauser){
            if(user.email === email){
                alert("email đã tồn tại")
                checkemail = true;
            }
        }
        if(checkemail === false){
            const user = {
                name: Name,
                email: email,
                password : pass
            }
            datauser.push(user)
            localStorage.setItem("users",JSON.stringify(datauser))
            alert("bạn đạ đăng kí thành công")
            window.location.href = "../sighIn/index.html"
        }

    }
}