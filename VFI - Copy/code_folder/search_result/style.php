<style>
html{
    scroll-behavior: smooth;
}
*{
    margin: 0;
    padding: 0;
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
.head-userinfo {
    width: 11%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
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
.head-userinfo h1{
    font-size: larger;
    color: #fff;
    gap: 10px;
    display: flex;
    align-items: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.head-userinfo button a{
    text-decoration:none;
    color:#fff;
}
.head-userinfo img{
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
/*search*/
.search-result{
    width: 100%;
    margin-top:10%;
    height: 100%;
    display: flex;
    justify-content: center;
}
.search-re-box{
    display: flex;
    width: 84%;
    flex-direction: column;
}
.nums-of-re h1{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color:#000;
    padding: 5% 0;
}
.search-re-print-pe-post{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
}
.post{
    width: 100%;
    background-color: #f3f3f3;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
}
.img{
    display: flex;
}
.post .img img{
    width: 100px;
    margin: auto 0;
    height: 100px;
}
.post hr {  
    padding: 2px;
    border: none;
    margin: 0 10px;
    background-color: #000;
}
.post .info{
    padding: 10px;
    display: flex;
    flex-direction: column;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.post .info p{
    height: 38px;
    font-family: sans-serif;
    overflow: hidden;
}
.post .info a{
    color: #000;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-decoration: none;
}
.post .info a:hover{
    text-decoration: underline;
}
.search-re-users{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
}
.user{
    background-color: #f3f3f3;
    border-radius: 10px;
    width: 100%;
    display: flex;
    padding: 10px;
    flex-direction: row;
}
.user-img{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.user .user-img img{
    width: 100px;
    border-radius: 50%;
    height: 100px;
}
.userinfo{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
}
.userinfo .infocard{
    font-size: medium;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding: 10px 0;
    display: flex;
}
</style>