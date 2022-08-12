<?php
    session_start();
    $id = $_SESSION['id'];
    $con = mysqli_connect("localhost","root","","teen-project-database") or die("khong the ket noi toi database");
    $query = mysqli_query($con, "SELECT * FROM users WHERE id='$id'");
    if(!isset($_SESSION['username'])){
        header("Location:../Login/login.php");
    }
    if($_SESSION['username'] == null){
        echo "<script type='text/javascript'>";
        echo "document.getElementById('head-btn').insertAdjacentHTML('beforeend',`<button id='sigh-in'><a href='../Sigh in/SighIn.html'>Sigh In</a></button>
        <button id='log-in'> <a href='../Login/Login.php'>Log In</a></button>`)";
        echo "</script>";
    }
    $query2 = mysqli_query($con, "SELECT * FROM webpost");
?>
