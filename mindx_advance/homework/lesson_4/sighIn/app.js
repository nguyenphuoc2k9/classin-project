
document.getElementById("sighin-btn").onclick =()=>{
    const email = document.getElementById("email").value
    const pass = document.getElementById("pass").value
    let check = false;
    let datauser;
    if (localStorage.getItem('users')) {
        datauser = JSON.parse(localStorage.getItem('users'));
      } else {
        datauser = [];
      }
    if(!email.includes("@") || !email.includes(".")){
        alert("email không hợp lệ")
        check = true;
    }

    if(pass.length < 6 || pass.length > 15){
        alert("Mật khẩu không hợp lệ")
        check = true;
    }
    if(!check){
        let checkemail = false;
        for(let user of datauser){
            if(user.email === email){
                checkemail = true;

                if(user.password === pass){
                    let usercurrent = user;
                    localStorage.setItem("usercurrent", JSON.stringify(usercurrent))
                    alert("đăng nhập thành công")
                    window.location.href = "../index2.html"
                } else {
                    alert("mật khẩu sai")
                }
            }
        }
        if(checkemail === false){
            alert("email chưa được đăng ký")
        }
    }
}