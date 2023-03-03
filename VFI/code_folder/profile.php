<?php
    ob_start();
    session_start();
    $username = $_SESSION['username'];
    $id = $_SESSION['id'];
    if(!isset($_SESSION['username'])){
        header("Location:../Login/login.php");
    }
    if($_SESSION['username'] == null){
        echo "<script type='text/javascript'>";
        echo "document.getElementById('head-btn').insertAdjacentHTML('beforeend',`<button id='sigh-in'><a href='../Sigh in/SighIn.html'>Sigh In</a></button>
        <button id='log-in'> <a href='../Login/Login.php'>Log In</a></button>`)";
        echo "</script>";
    }
    include "./conn.php";
    $query = "SELECT * FROM users WHERE id = '$id'";
    $result = mysqli_query($con,$query);
    include("./profile/index.php");
    include("./profile/app.php");
    if(isset($_POST['file-btn'])){
        $name = $_POST['name'];
        $gmail = $_POST['gmail'];
        $pn = $_POST['pn'];
        $hobby = $_POST['hobby'];
        $file_name = $_FILES['file-up']['name'];
        $file_tmpname = $_FILES['file-up']['tmp_name'];
        $file_size = $_FILES['file-up']['size'];
        $file_error = $_FILES['file-up']['error'];
        $file_type = $_FILES['file-up']['type'];
        $file_ext = explode(".",$file_name);
        $file_acture_ext = strtolower(end($file_ext));
        $id = $_SESSION['id'];
        $allow = array("jpg","jpeg","png","pdf");
        if(in_array($file_acture_ext, $allow)){
            if($file_error == 0){
                if($file_size > 1000000){
                    echo " Your file is too big";
                } else {
                    $file_name_new = "img". $id . "." . $file_acture_ext;
                    $file_destination = "../user upload/" . $file_name_new;
                    move_uploaded_file($file_tmpname,$file_destination);
                    header("Location:./profile.php?fileupdated");
                    $req = "UPDATE users SET img = '$file_name_new',username = '$name',gmail = '$gmail',Phone_number = '$pn',hobby = '$hobby' WHERE id = '$id'";
                    $query = mysqli_query($con, $req);
                    $_SESSION['username'] = $name;
                    
                }
            } else {
                echo "There was an error uploading your file";
            }
        } else {
            echo "You cannot upload files of this type";
        }
    }
    //file update
    include("./profile/style.php");
?>