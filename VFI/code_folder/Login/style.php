<style>
*{
    margin: 0;
    padding: 0;
}

body{
    background-image: linear-gradient(to right, #639ef9, #88b0f5, #a9c1f1, #c7d3ec, #e4e5e7);
}
.login{
    width: 40%;
    margin-top: 200px;
    margin: 10% auto;
}
.login-box{
    background: #fff;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    padding: 30px;
}
.login-title{
    font-family:'Courier New', Courier, monospace;
    font-size: larger;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
.login-input{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 30px 30px;
    gap: 10px;
}
.login-input label{
    font-size: large;
    font-family: sans-serif;
}
.login-input input{
    border: none;
    border-bottom: solid rgb(0, 175, 238) 2px;
    font-size: large;
    height: 35px;
    font-family: monospace;
}
 .login-input .input-desc{
    padding-top: 10px;
     font-size: small;
     color: #ff0000;
     letter-spacing: 1px;
     font-family: sans-serif;
 }
.login-input input:focus-visible{
    outline: none;
}
.login-input .login-btn{
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-input .login-btn button{
    width: 220px;
    margin-top: 20px;
    display: inline-block;
    height: 50px;
    position: relative;
    border-radius: 40px;
    background-image: linear-gradient(to right, #19ebea, #00cbfe, #00a6ff, #0079ff, #3a33e9);
    border: none;
    color:#fff;
    font-size: 20px;
    font-weight: bolder;
    font-family: monospace;
    cursor: pointer;
    overflow: hidden;
}
.login-newacc{
    display: flex;
    padding: 20px;
    align-items: center;
}
.login-newacc h3{
    
    font-size: larger;
    font-family:'Courier New', Courier, monospace
}
.login-newacc a{
    text-decoration: none;
    margin-left: 20px;
    font-size: larger;
    color: #000;
    font-weight: bolder;
    font-family:'Courier New', Courier, monospace
}
.login-newacc a:hover{
    text-decoration: underline;
}
span{
    position: absolute;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    transform: translate(-50%,-50%);
    pointer-events: none;
    animation: animate 1s linear infinite;
}
@keyframes animate
{
    0%{
        width: 0px;
        height: 0px;
        opacity: 0.5s;
    }
    100%{
        width: 500px;
        height: 500px;
        opacity: 0;
    }
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