<?php
ob_start();
    session_start();
    if(!isset($_SESSION['username'])){
        header("Location:./login.php");
    }
    if($_SESSION['username'] == null){
        echo "<script type='text/javascript'>";
        echo "document.getElementById('head-btn').insertAdjacentHTML('beforeend',`<button id='sigh-in'><a href='../Sigh in/SighIn.html'>Sigh In</a></button>
        <button id='log-in'> <a href='../Login/Login.php'>Log In</a></button>`)";
        echo "</script>";
    }
    include("./create/index.php");
    include("./create/style.php");
    include('./create/app.php');
    include "./conn.php";
    if(isset($_POST['btn'])){
        $title = $_POST['title'];
        $desc = $_POST['desc'];
        $owner = $_SESSION['id'];
        $img = $_FILES['file'];
        $check = false;
         //file upload
        $filename = $_FILES['file']['name'];
        $filetmpname = $_FILES['file']['tmp_name'];
        $filesize = $_FILES['file']['size'];
        $fileerror = $_FILES['file']['error'];
        $filetype = $_FILES['file']['type'];
        $fileext = explode('.',$filename);
        $fileactualext = strtolower(end($fileext));
        $id = uniqid('',true);
        $allow = array('jpg','jpeg','png','pdf');
         //text upload
         if($title == null||$desc == null || $img==null){
            echo"input cannot be blank";
            $check = true;
         } else {
            if(in_array($fileactualext, $allow)){
                if($fileerror === 0){
                    if($filesize > 1000000){
                        echo "<script type='text/javascript'>";
                        echo "alerr('Your file is too big')";
                        echo "</script>";
                        $check = true;
                    }
                } else {
                    echo "<script type='text/javascript>";
                    echo "alert('There was an error uploading your file')";
                    echo "</script>";
                    $check = true;
                }
            } else {
                echo "<script type='text/javascript'>";
                echo "alert('You cannot upload this type of file')";
                echo "</script>";
                $check = true;
            }
        }
        if($check == false){
            $filenamenew = "img".$id. ".".$fileactualext;
            $filedestination = 'uploads/'. $filenamenew;
            move_uploaded_file($filetmpname, $filedestination);
            header("Location:./create.php?uploaddone");
            $req= "INSERT INTO post_pre(title,imgid,descritpion,owner) VALUES ('$title','$filenamenew','$desc','$owner')";
            $query = mysqli_query($con, $req);
            echo "sucseed";
        }
    }
?>