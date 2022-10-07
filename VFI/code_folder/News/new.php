<?php
    session_start();
    $con = mysqli_connect("localhost","root","","teen-project-database") or die("khong the ket noi toi database");
    $querry = mysqli_query($con,"SELECT * FROM post");
    
    if(!isset($_SESSION['username'])){
        header("Location:../Login/login.php");
    }
    if($_SESSION['username'] == null){
        echo "<script type='text/javascript'>";
        echo "document.getElementById('head-btn').insertAdjacentHTML('beforeend',`<button id='sigh-in'><a href='../Sigh in/SighIn.html'>Sigh In</a></button>
        <button id='log-in'> <a href='../Login/Login.php'>Log In</a></button>`)";
        echo "</script>";
    }
    include "./news.php";
    include "./style.php";
    include "./app.php";
?>
