<style>
*{
    margin: 0;
    padding: 0;
}
body{
    background-image: linear-gradient(to left, #e4e7eb, #dfe6ed, #dae5ef, #d4e4f1, #cde4f2);
}
/* header */
.header{
    width: 100%;
}
.header-box{
    height: 80px;
    display: flex;
    flex-direction: column;
}
.head-logo{
    width: 100%;
    display: flex;
    background-color: rgb(68, 68, 68);
    justify-content: space-around;
    align-items: center;
}
.head-logo form{
    width: 55%;
    margin-left: 10px;
    overflow: hidden;
    border-radius: 10px;
    background-color: #fff;
}
.head-logo input{
    width: 80%;
    padding: 1%;
    border: none;
}
.head-logo form button{
    width: 5%;
    padding: 1%;
    margin-left: 14.54%;
    cursor: pointer;
    background-color: #000;
    color: #fff;
    font-size: larger;
}
.head-logo input:focus-visible{
    outline: none;
}
.head-btn{
    width: 15%;
    display: flex;
    justify-content: center;
}
.head-logo .head-btn button{
    border: #fff solid 1px;
    border-radius: 5px;
    color: #fff;
    background-color:rgb(68, 68, 68);
    font-size: larger;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding: 4%;
    width: 50%;
    cursor: pointer;
}
.head-btn button a{
    color: #fff;
    text-decoration: none;
}
.head-logo .head-btn button:nth-child(2){
    background-color: rgb(78, 125, 255);
    border: none;
    margin-left: 10px;
}
.head-con{
    padding: 20px;
    background-color: rgb(31, 31, 31);
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 99;
}
.logo-image{
    width: 10%;
}
.header-box img{
    width: 100%;
}
.header-box .head-text{
    font-size: 20px;
    position: relative;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #fff;
    text-decoration: none;
    letter-spacing: 2px;
    transition: all .5s cubic-bezier(0.86, 0, 0.07, 1);
}
.header-box p{
    font-size: 20px;
    position: relative;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #fff;
    text-decoration: none;
    letter-spacing: 2px;
    transition: all .5s cubic-bezier(0.86, 0, 0.07, 1);
}
.header-box p:hover{
    color: cyan;
}
.header-box .head-text i{
    margin-right: 10px;
}
.header-box .head-text::after{
    top: 30px;
    bottom: 0;
    content: "";
    display: block;
    justify-content: center;
    align-items: center;
    transition: all .4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: absolute;
    width: 0;
    height: 3px;
    background: #fff;
}
.header-con .head-text:hover:after{
    width: 100%;
}
/* footer */

.footer{
    overflow: hidden;
    position: relative;
    bottom: 0;
    width: 100%;
    background-color: rgb(39, 39, 39);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.footer-title{
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer-title h1{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: larger;
}
.footer-icon{
    width: 100%;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer-icon i{
    padding-left: 20px;
    font-size: 30px;
    transition: 0.5s
}
.footer-info{
    padding: 30px;
    width: 50%;
    display: flex;
    justify-content: space-around;
}
.info-card{
    padding: 30px;
    font-size: large;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
.footer-icon i:hover{
    color: aqua;
}
/* sidenav */
.sidenav{
    position: fixed;
    z-index: 99;
}
.sidenav-box{
    z-index: 99;   
    background-color: rgba(119, 133, 255);
    position: fixed;
    display: flex;
    width: 20%;
    left: 0%;
    height: 100%;
    margin-top: -5.1%;
    flex-direction: column;
    transition: 0.5s ease ;
}
.sidenav-box .option{
    display: flex;
    height: 40%;
    margin: 10% 0;
    flex-direction: column;
    justify-content: space-around;
}
.sidenav-box .option a{
    text-decoration: none;
    padding: 10%;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: larger;
    transition: .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    color: #fff;
}
.sidenav-box .option a:hover{
    border-left: rgb(0, 202, 169) solid 15px;
    background-color: #b3d6ffe3;
}
.sidenav-box hr{
    border-radius: 10px;
    width: 80%;
    margin: 0 9%;
    border: rgb(255, 255, 255) solid 3px;
}
.sidenav-box .userinfo{
    display: flex;
    margin: 10%;
    flex-direction: column;
}
.userinfo h1{
    font-size: larger;
    margin-bottom: 10%;
    color: #fff;
    gap: 10px;
    display: flex;
    align-items: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.sidenav-box .userinfo button{
    border: none;
    border-radius: 10px;
    background-color:rgb(0, 114, 129);
    color: #fff;
    width: 50%;
    cursor: pointer;
    padding: 5%;
}
.userinfo button a{
    text-decoration:none;
    color:#fff;
}
.userinfo img{
    width: 50px;
    border-radius: 50%;
    height: 50px;
}
.sidenav-close-btn{
    left: 21%;
    margin-top: 1%;
    display: flex;
    transition: ease 0.5s;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 99;
}
.sidenav-close-btn button{
    border-radius: 10px;
    border: none;
    background-color: rgba(119, 133, 255);
    width: 50px;
    cursor: pointer;
    height: 50px;
    z-index: 99;
}
.sidenav-close-btn i{
    color: #fff;
    font-size: larger;
}
/* home-content */
.home{
    display: flex;
    overflow: hidden;
    margin-top: 5%;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
}
.home-title{
    color: #000;
    font-size: larger;
    padding-left: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.home-box{
    margin-left: 10%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
.home-container{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
.home-box .main{
    width: 82%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgb(49, 49, 49);
    color: #fff;
    border-radius: 10px;
}
.home-box .main .main-img{
    height: 100%;
    width: 40%;
    border-right: 1px solid rgb(216, 213, 213);
}
.home-box .main .main-img img{
    height: 100%;
    width: 100%;
}
.home-box .main-info{
    display: flex;
    padding-right: 10%;
    flex-direction: column;
    gap: 10px;
    margin-left: 3%;
}
.main-info a{
    text-decoration: none;
    color: rgb(0, 194, 253);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: large;
}
.main-info a:hover{
    text-decoration: underline;
}
.main-info p{
    padding-right: 10px;
    font-size : large;
    color: #fff;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.main-info h1{
    color: #fff;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.home-box .extra{
    width: 40%;
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgb(255, 255, 255);
    color: #fff;
    border-radius: 10px;
}
.home-box .extra .main-img{
    height: 100%;
    width: 50%;
    border-right: 1px solid rgb(0, 0, 0);
}
.home-box .extra .main-img img{
    height: 100%;
    width: 100%;
}
.home-box .extra .main-info{
    display: flex;
    padding-right: 5%;
    flex-direction: column;
    gap: 10px;
    margin-left: 3%;
}
.main-info a{
    text-decoration: none;
    color: rgb(0, 194, 253);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: medium;
}
.main-info a:hover{
    text-decoration: underline;
}
.extra .main-info p{
    padding-right: 10px;
    font-size : medium;
    color: rgb(0, 0, 0);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.extra .main-info h1{
    color: rgb(0, 0, 0);
    font-size: large;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.extra:nth-child(3){
    margin-left: 2%;
}
/* update-news */
.update-news{
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
}
.update-news .update-title{
    width: 100%;
    padding: 50px;
    font-size: larger;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.update-news .update-box{
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}
.update-box .update{
    border-radius: 4px;
    position: relative;
    background-color: #c7d3ec;
    padding: 30px;
    width: 70%;
}
.update-box .update h1{
    color: #fff;
    font-size: larger;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.update-box .update p{
    color: #fff;
    font-size: large;
    
    letter-spacing: 1px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 20px 0 20px 10px;
}

</style>