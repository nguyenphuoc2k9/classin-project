<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Noto+Sans:wght@300&display=swap');
body{
    background-image: linear-gradient(to right, #bc9cef, #c1a4ef, #c6abf0, #cab3f0, #cfbaf0);
}
  
  .section {
    min-height: 100vh;
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    position: fixed;
    background-image: linear-gradient(to right, #bc9cef, #c1a4ef, #c6abf0, #cab3f0, #cfbaf0);
    color: #Fff;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 30px;
  }
  
  .error {
    display: none;
  }
  
*{
    margin: 0;
    padding: 0;
}
.header{
    width: 100%;
}
.header-box{
    width: 100%;
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
/*home*/
.home{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 20px;
    width: 90%;
    margin: 10% auto 20px auto;
}
.home-title{
    text-align: center;
    font-family:'Courier New', Courier, monospace;
    font-size: larger;
    color : #000;
    padding: 10px;
}
.home-box{
    display: flex;
    align-items: center;
    width: 95%;
    padding-bottom: 10px;
    margin:  10px auto 0 auto;
}
.home-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
}
/* .home-select{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
}
.home-select select{
    height: 50px;
    border-radius: 10px;
    font-size: larger;
}
.home-select section:hover{
    background-color: rgb(161, 161, 161);
}
.home-select select:focus-visible{
    outline: none;
} */
.home-select{
    width: 100%;
    width: 40%;
    display: flex;
    justify-content: center;
}
.select{
    width: 370px;
    
}
.select-btn ,.options li{
    display: flex;
    cursor: pointer;
    align-items: center;
}
.select-btn{
    background: rgb(115, 38, 239);
    height: 65px;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: lighter;
    padding: 0 20px;
    border-radius: 7px;
    font-size: 22px;
    color: #fff;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
}
.select.active .content{
    display: none !important;
}
.select.active .select-btn i{
    transform: rotate(-180deg);

}
.select-btn i{
    transition: transform 0.3s linear;
    font-size: 31px;
}
.content{
    margin-top: 15px;
    color: #fff;
    padding: 20px;
    border-radius: 7px;
    background: rgb(115, 38, 239);
}
.content .search{
    position: relative;
    width: 100%;
}
.search input{
    height: 53px;
    width: 100%;
    outline: none;
    border: 1px solid #b3b3b3;
    font-size: 17px;
    padding-left: 15%;
}
.search i{
    position: absolute;
    left: 15px;
    line-height: 53px;
    font-size: 20px;
    color: #999;
}
.content .options{
    margin-top: 10px;
    max-height: 250px;
    overflow-y:auto;
    list-style: none;
}
.options::-webkit-scrollbar{
    width: 7px;
}
.options::-webkit-scrollbar-track{
    background: #f1f1f1;
    border-radius: 25px;
}
.options::-webkit-scrollbar-thumb{
    background: #ccc;
    border-radius: 25px;
}
.options li{
    font-family:Arial, Helvetica, sans-serif;   
    font-size: 21px;
    height: 50px;
    padding-left: 10px;
    transition: all .5s cubic-bezier(0.19, 1, 0.22, 1);
    border-radius: 5px;
}
.options li:hover{
    background: #a393fc;
}


.card-title{
    font-family: monospace;
    font-size: large;
    padding: 10px 0;
}
.card-info{
    display: flex;
    justify-content: space-evenly;
    padding: 15px 0;
    width: 100%;
    border-radius: 40px;
    border: 1px solid rgb(207, 207, 207);
}
.card-in-card{
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.card-in-card p{
    padding-top: 20px;
    font-size: large;
}
#con{
    color : red;
}
#dea{
    color: #7326EF;
}
.card-info:nth-child(4){
    margin-bottom: 5%;
}
/*chart*/
.home-chart{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    margin: 10px auto;
}
.chart-desc{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 95%;
    margin-left: 10%;
}
.chart-card{
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    padding-left: 10px;
}
.chart-card h1{
    font-size: 30px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
}
.chart-card p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding-left: 10px;
    font-size: large;
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
}
</style>