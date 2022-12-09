<style>
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
    background-color: rgba(91,104,199);
    position: fixed;
    display: flex;
    width: 20%;
    left: 0%;
    height: 100%;
    margin-top: -4.1%;
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
.sidenav-box .option .card{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    transition: all .5s cubic-bezier(0.215, 0.610, 0.355, 1);
}
.sidenav-box .option .card i{
    color: #fff;
    font-size: large;
}
.sidenav-box .option a{
    text-decoration: none;
    padding: 10%;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: larger;
    color: #fff;
}
.sidenav-box .option a i{
    padding-left: 70%;
    font-size: larger;
}
.sidenav-box .option .card:hover{
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
    background-color:rgba(91,104,199);
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
    background-color: rgba(91,104,199);
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
    margin-top: 10%;
    flex-direction: column;
    width: 100%;
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
    gap: 2%;
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
    width: 20%;
    border-right: 1px solid rgb(216, 213, 213);
}
.home-box .main .main-img img{
    height: 150px;
    width: 150px;
}
.home-box .main-info{
    display: flex;
    padding-right: 10%;
    position: relative;
    flex-direction: column;
    gap: 10px;
    margin-left: 3%;
}
.main-info a{
    text-decoration: none;
    color: rgb(0, 194, 253);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: large;
    position: relative;
}
.main-info a:hover{
    text-decoration: underline;
}
.main .main-info p{
    padding-right: 10px;
    font-size : large;
    color: #fff;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 60px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
.main-info h1{
    color: #fff;
    position: relative;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.home-box .extra{
    width: 40%;
    margin-top: 2%;
    display: flex;
    position: relative;
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
.home-box .extra .main-img img {
    height: 150px;
    width: 150px;
}
.home-box .extra .main-info{
    display: flex;
    width: 100%;
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
    position: relative;
    width: 25%;
    padding-bottom: 10px;
}
.main-info a:hover{
    text-decoration: underline;
}
.extra .main-info p{
    padding-right: 10px;
    font-size : medium;
    width: 100%;
    height: 50px;
    font-weight: 300;
    position: relative;
    overflow: hidden;
    color: rgb(0, 0, 0);
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
.extra .main-info h1{
    padding-top: 10px;
    position: relative;
    color: rgb(0, 0, 0);
    font-size: large;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.extra:nth-child(){
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
    padding: 20px;
    margin-left: 10%;
    font-size: larger;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.update-news .update-box{
    width: 100%;
    padding: 0 0 5% 0;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    gap: 10px;

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
@media only screen and (max-width : 877px){
    [class = "userinfo"]{
        width: 20% !important;
    }
    [class = "extra"] .main-img img{
        width: 100px !important;
        height:  125px !important;
    }
    [class = "main"] .main-img img{
        width: 100px !important;
        height:  150px !important;
    }
    [class = "home-box"]{
        margin-left: 0 !important;
    }
    [class = "main"] {
        border-radius: 0px !important;
        width: 100% !important;
        margin-bottom: 2% !important;
    }
    [class = "home-title"], [class = "update-title"]{
        width: 100% !important;
        padding: 0 !important;
        background-color: #7984d3;
        display: flex;
        align-items: center;
        margin: 0% !important;
        justify-content: center;
    }
    [class ="update-box"]{
        align-items: center;
        margin-left:  0 !important;
        justify-content: center;
    }
    [class = "update"]{
        width: 95% !important;
    }
    [class = "home-container"]{
        gap : 0.1% !important;
    }
    [class = "home"]{
        margin-top : 8% !important;
    }
    [class = "extra"]{
        width: 100% !important;
        margin-top: 0% !important;
    }
    [class = "extra"] .main-img{
        width: 13% !important;
    }
}
</style>