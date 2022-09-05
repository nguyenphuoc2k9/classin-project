 <style> 
*{
    margin: 0;
    padding: 0;
}
body{
    background-image: linear-gradient(to left, #e4e7eb, #dfe6ed, #dae5ef, #d4e4f1, #cde4f2);
}
.header{
    width: 100%;
    z-index: 99;
    height: 20%;
    position: fixed;
}
.header-box{
    display: flex;
    position: relative;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(106, 140, 233);
}
.head-name{
    color: #fff;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 25px;
}
.head-acc{
    display: flex;
    align-items: center;
    width: 20%;
    gap: 10px;
    margin-right: 5%;
    justify-content: flex-end;
}
.head-acc h1{
    font-size: large;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #fff;
}
.head-acc i{
    cursor: pointer;
    font-size: large;
    color: #fff;
}
.head-acc img{
    width: 50px;
    height: 50px;
    border-radius: 50px;
}
.dropdown{
    float: right;
    position: relative;
    display: inline;
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
/*sidenav*/
.sidenav{
    position: fixed;
    z-index: 99;
    height: 100%;
    width: 20%;
    padding-top: 6%;
}
.sidenav hr{
    color: #fff;
    padding: 5px;
    border-radius: 2px;
    margin: 5px 0;
    border: none;
    background-color: #fff;
}
.sidenav-box{
    background-color: rgb(106, 140, 233);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 100%;
}
.sidenav-box a{
    color: #fff;
    text-decoration: none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: larger;
    text-align: center;
    padding: 20px 0;
    width: 100%;
    transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.sidenav a:hover{
    background-color: #579cf1;
}
/*table*/
.post-manage{
    margin-left: 20%;
    padding-top: 6%;
    position: relative;
}
.pending-post{
    border-radius: 5px;
    margin: 3% 0 0 3%;
    background-color: #f3f3f3;
    width: 95%;
}
.current-post{
    border-radius: 5px;
    margin: 3% 0 3% 3%;
    background-color: #f3f3f3;
    width: 95%;
}
.title{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding: 10px 10px 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.title button{
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: large;
    color: #fff;
    background-color: #0055bd;
}
.title i{
    padding-left: 5px;
}
.post-table{
    padding: 1%;
    position: relative;
}
table {
    width: 100%;
    border-collapse:collapse;
    position: relative;
}
tbody{
    height: 200px;
    display: block;
    overflow: scroll;    
}
thead tr{
    border-top: 1px solid #d6d6d6;
    border-bottom: 1px solid #d6d6d6;
}
thead td{
    font-weight: 700;
}
td img {
    width: 50px;
    height: 50px;
}
td img.avartar{
    border-radius: 50%;
}
thead, tbody tr{
    display: table;
}
thead td{
    text-align: center;
    width: 10%;
    padding:  .5rem 1rem;
    font-size: large;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
td {
   width: 10%;
   padding:  .5rem 1rem;
   text-align: center;
   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   font-size: medium; 
}
td p{
    overflow: hidden;
    height: 19px;
    font-family: sans-serif;
    font-weight: bolder;
    word-break: break-all;
}
td a{
    text-decoration: none;
}
td a:hover{
    text-decoration: underline;
}
td a i{
    padding-left: 3px;
}
td .deny{
    color: rgb(250, 68, 68);
    padding-right: 20px;
}
td .ap{
    color: rgb(49, 228, 49);
}
td .edit{
    color: rgb(11, 181, 248);
    padding-right: 20px;
    cursor: pointer;
}
td .dele {
    cursor: pointer;
    color: rgb(250, 68, 68);
}
.only {
    padding: 20px;
}
.nums{
    border-radius: 10px;
    color: #fff;
    background-color: #0055bd;
    padding: 10px;
}
/*Dashboard*/
.dashboard{
    margin-left: 20%;
    padding-top: 7%;
    position: relative;
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;
    justify-content: space-around; 
}
.dashboard .detail-card{
    background-color: #f3f3f3;
    border-radius: 10px;
    width: 20%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5%;
}
.detail-card .info{
    display: flex;
    flex-direction: column;
}
.detail-card .info h1{
    color: rgb(11, 181, 248);
    font-size: 55px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.detail-card .info h3{
    color: #c5c5c5;
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.detail-card i{
    font-size: 55px;
    color: rgb(68, 68, 68);
}
/*sighin*/
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
/* @keyframes animate
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
} */
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
    margin: 3% auto;
    width: 100%;
}
.profile-box{
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    width: 70%;
    border-radius: 10px;
    background-color: rgb(247, 247, 247);
}
.profile-img img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.profile-img{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: larger;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.profile-info{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.profile-info h1{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 3% 0;
}
.profile-info .card{
    display: flex;
    align-items: center;
    gap: 7px;
}
.profile-info h2{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.profile-info .card button{
    border: none;
    background: none;
    font-size: medium;
    cursor: pointer;
    transition: .5s;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.profile-info .card button:hover{
    text-decoration: underline;
}
.card-btn button{
    background-color: rgba(119, 133, 255);
    color: #fff;
    padding: 10px;
    font-size: larger;
    border: none;
    cursor: pointer;
    border-radius: 10px;
}
.profile-info button i{
    font-size: small;
}
#file{
    border: none;
}
</style> 