<style>
*{
    margin: 0;
    padding: 0;
}
body{
    background-image: linear-gradient(to right, #ffffff, #f3f5fc, #e3edf9, #cfe6f4, #b9e0eb);
    background-attachment: fixed;
}
.sighin{
    margin-top: 20px;
    width: 60%;
    height: 100%;
    display: flex;
    margin:  50px auto;
    padding: 30px;
    border-radius: 20px;
    border: solid 3px #000;
    flex-direction: row-reverse;
}
.sighin-title h1{
    font-size: 25px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding:20px 0 0 10px;
}
.sighin-pic{
    width:40%;
    display: flex;
    justify-content: center;
}
.sighin-pic img{
    margin: 20px auto;
    width: 90%;
    height: 76%;
    border-radius: 5px;
}
.sighin-box{
    display: flex;
    width: 60%;
    flex-direction: column;
    
}
.sighin-input-card{
    position: relative;
    display: flex;
    margin-top: 20px;
    padding: 0 30px;
    flex-direction: column;
}
.sighin-label{
    color: #000;
    position: absolute;
    top: 12px;
    left: 44px;
    transition: 0.5s;
    font-size: larger;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.sighin-box .sighin-input{
    height: 40px;
    outline: none;
    width: 95%;
    padding-left: 10px;
    color: rgb(0, 0, 0);
    font-size: 15px;
    font-weight: bolder;
    font-family:monospace;
    background: none;
    border: solid rgb(0, 175, 238) 2px;
    border-radius: 5px;
}
.sighin-input-card p{
    color: rgb(172, 172, 172);
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size: 11px;
}
.sighin-input-btn{
    display: flex;
    justify-content:flex-start;
    position: relative;
    align-items: center;
    padding: 50px 0;
}
.sighin-input-btn button{
    width: 200px;
    position: relative;
    display: inline-block;
    border-radius: 10px;
    background-image: linear-gradient(to right, #00c8ff, #00cfff, #08d6ff, #1cddff, #2ee4ff);
    border: none;
    height: 50px;
    color: #000;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: large;
    font-weight: 30px;
    cursor: pointer;
    overflow: hidden;
}
span{
    position: absolute;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    transform: translate(-50%,-50%);
    pointer-events: none;
    animation: animate 1s linear infinite;
}
.else{
    display: flex;
    padding-top: 10px;
    align-items: center;
}
.else h1{
    font-size: large;
    font-family:'Courier New', Courier, monospace
}
.else a{
    text-decoration: none;
    margin-left: 20px;
    font-size: large;
    color: #000;
    font-weight: bolder;
    font-family:'Courier New', Courier, monospace
}
.else a:hover{
    text-decoration: underline;
}
@keyframes animate
{
    0%{
        width: 0px;
        height: 0px;
        opacity: 0.5s;
    }
    100%{
        width: 400px;
        height: 400px;
        opacity: 0;
    }
}
.sighin-input:focus + .sighin-label{
    top: -20px;
    left: 30px;
}
.sighin-input.active + label{
    top: -20px;
    left: 30px;
}
.sighin-input:focus-visible{
    border: #08d6ff solid 2px;
}
.roleselect{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}
.role-title{
    padding: 30px 0;
}
.role-title h1{
    color: rgb(0, 0, 0);
    padding-left: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 30px;
}
.role-box{
    display: flex;
    justify-content: space-between;
}
.role-card button{
    width: 120px;
    position: relative;
    height: 40px;
    margin-left: 25px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 15px;
    font-family:monospace;
    overflow: hidden;
}
.role-card #admin-role{
    background: red;
}
.role-card #teacher-role{
    background: #00c8ff;
}
.role-card #student-role{
    background-color: green;
}
/* popup */
.pop-overlay{
    position: fixed;
    left: 0;
    top: 0;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: rgba(0,0,0,0.5);
    transition: 0.5s;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -ms-transition: 0.5s;
    -o-transition: 0.5s;
    z-index: -1;
    height: 100vh;
    width: 100vw;
    user-select: none;
    opacity: 0;
}
.pop-up{
    width: 25%;
    background: #fff;
    border-radius: 6px;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%);
    -ms-transform: translate(-50%);
    -o-transform: translate(-50%);
    text-align: center;
    padding: 0 30px 30px;
    color: #333;
}
.pop-up img{
    width: 100px;
    border-radius: 50%;
    margin-top: -50px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}
.pop-up h1{
    font-size: 38px;
    font-weight: 500;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 30px 0 10px;
}
.pop-up p{
    color: #000;
    font-size: large;
    font-family:monospace
}
.pop-up button{
    width: 100%;
    margin-top: 50px;
    padding: 10px 0;
    background-color: #6fd649;
    color: #fff;
    border: 0;
    outline: none;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 5px 5px rgba(0,0,0,0.2);
}
.haiz{
    opacity: 1;
    z-index: 1;
}
</style>