<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
    html{
    scroll-behavior: smooth;
}
*{
    margin: 0;
    padding: 0;
}
* h1{
    color:#fff;
}
body{
    background-image: linear-gradient(to right, #bc9cef, #c1a4ef, #c6abf0, #cab3f0, #cfbaf0)
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
    background-color: #7984d3;
    justify-content: space-around;
    align-items: center;
}
.head-logo form{
    width: 55%;
    margin-left: 10px;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 10px;
    background-color: #fff;
}
.dropdown{
    float: right;
    position: relative;
    display: inline;
}
.dropdown i{
    color: #fff;
}
.dropdown-content{
    display: none;
    position: absolute;
    background-color: #579cf1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    right: 0;
    z-index: 1;
    transition: all .5s cubic-bezier(0.755, 0.05, 0.855, 0.06);
}
.userinfo {
    width: 11%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.dropdown-content a{
    color: #fff;
    padding: 20px 0;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-decoration: none;
    display: block;
    transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.dropdown-content a:hover {
    background-color: #2687fd;
}
.dropdown-content.show{
    display: block;
}
.head-logo input{
    width: 100%;
    padding-left: 1%;
    border: none;
}
.head-logo form button{
    width: 5%;
    padding: 2% 0 ;
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
    background-color: rgb(68, 68, 68);
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
.head-text:hover:after{
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
.footer a{
    color: #fff;
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
    border-left: rgb(0, 118, 202) solid 15px;
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
.pop-up{
    position:absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(119, 133, 255);
    width: 410px;
    padding: 30px;
    box-shadow: 0 0 8px rgb(0, 0, 0,0.1);
}
.pop-box{
    position: relative;
}
.pop-box .closepop{
    position: absolute;
    right: -2%;
    background: none;
    border: none;
    top: -5%;
    cursor: pointer;
    color: #fff;
    font-size: large;
}
.pop-box h1{
    text-align: center;
    color: #fff;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.pop-box form{
    position: relative;
    margin-top: 21px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.pop-box form .pop-card {
    height: 50px;
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;

}
.pop-box form .pop-card label {
    font-size: large;
    color: #fff;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.pop-box form .pop-card input {
    height: 100%;
    width: 100%;
    padding-left: 10px;
    font-size:17px;
    border: 1px solid lightgray;
}
.pop-box form .pop-btn{
    width: 100%;
    position: relative;
}
.pop-btn button{
    width: 103%;
    padding: 10px;
    background-color: rgb(0, 17, 112);
    border: none;
    border-radius: 5px;
    font-size: larger;
    color: #fff;
    cursor: pointer;
}
.profile{
    width: 100%;
    margin-bottom: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.profile-box{
    border-radius: 10px;
    width: 70%;
    overflow: hidden;
    margin-top: 10%;
    border: none;
    background-color: #fff;
}
.profile-img{
    background-color: #000;
    width: 100%;
    height: 20%;
    display: flex;
    align-items: flex-end;
    padding: 5% 0 0 5%;
}
.profile-img img{
    width: 100px;
    height: 100px;
    margin-top: 1%;
    position: absolute;
    border-radius: 50%;
    border: none;
}
.profile-img h1{
    color: #fff;
    margin: 0 0 1% 10%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.profile-class{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
}
.profile-class button{
    width: 100px;
    height: 30px;
    cursor: pointer;
    background: none;
    border-radius: 5px;
    color: #000;
    font-family: 'Roboto', sans-serif;
    border:#233be7 solid 3px;
}
.profile-class-btn{
    margin-left: 5%;
    display: flex;
    align-items: center;
}
.profile-num{
    width: 10%;
    font-weight: lighter;
    padding: 5px 10px;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.profile-info{
    display: flex;
    margin-left: 5%;
    font-family: 'Montserrat', sans-serif;

    flex-direction: column;
}
.profile-info .info-title{
    padding-bottom: 10px;
}
.profile-info .card{
    padding-left: 30px;
    padding-bottom: 10px;
    font-size: medium;

    font-weight: 100;
    display: flex;
}
.profile-new{
    margin-left: 5%;
    font-family: "Montserrat", sans-serif;
}



.new-box{
    width: 90%;
    margin: auto;
    padding-top: 1%;
}
 .news{
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: all .5s cubic-bezier(0.86, 0, 0.07, 1);
    background-color: #cfcfcf;
    overflow: hidden;
    margin: 20px 10px;
}
.owner{
    display: flex;

    align-items: center;
    margin: 0 3px;
    margin-bottom: 10px;
}
.owner img{
    width: 50px !important;
    border-radius: 50%;
    height: 50px !important;
}
.news .news-btn{
    display: flex;
    align-items: center;
}
.news .news-btn a{
    margin-top: 20px;
    border-radius: 4px;
    height: 40px;
    margin-right: 10px;
    margin-left: 10px;
    width: 20%;
    border-style: none;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: large;
    cursor: pointer;
    background-color: rgb(0, 174, 255);
}
.news .news-btn a span{
    background: #fff;
    height: 100%;
    width: 0%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all .5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 1;
}

.text-read-more {
    margin: auto !important;
    color: white !important;
    position: absolute;
    top: 15%;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(0%, 0%);
    margin-left: 20px;
    color: #000;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    z-index: 2;
    text-decoration: none;
}


.news-btn a:hover span{
    width: 100% !important;
    background-color: #2EE0F7 !important;
    color: #000 !important;
}
.news .info .owner a{
    padding-left: 82%;
    color: red;
    cursor: pointer;
    font-size: larger;
}
.news .info{
    padding: 10px 10px 0 10px;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-shadow: rgba(255, 255, 255, 0);
    flex-direction: column;
    justify-content: space-between;
}
.news img{
    top: 0px;
    width: 100%;
    height: 100%;
}
.news h1{
    margin-left: 10px;
    font-size: larger;
    color: #000;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.news .info .class_desc{
    margin-left: 20px;
    overflow: hidden;
    height: 90px;
    color: #000;
    word-wrap: break-word;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.class_desc.show{
    overflow: unset !important;
    height: unset !important;
}
@media only screen and (max-width : 877px){
    [class = "read-more"]{
        width: 40% !important;
    }
    [class = "text-read-more"]{
        font-size: large;
    }
    [class = "com-input"]{
        padding: 5px 0 !important;
    }
    [class = "com-info"]{
        padding: 5px !important;
    }
    [class = "userinfo"]{
        width: 20% !important;
    }
    [class = "news"]{
        width: 90% !important;
    }
    [class = "news-section"]{
        padding : 20px 10px !important;
    }
    [class ="profile-img"] img{
        width: 50px !important;
        height : 50px !important;
    }
}
</style>