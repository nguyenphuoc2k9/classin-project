<?php
ob_start();
    session_start();
    if(!isset($_SESSION['username'])){
        header("Location:../Login/login.php");
    }
    if($_SESSION['username'] == null){
        echo "<script type='text/javascript'>";
        echo "document.getElementById('head-btn').insertAdjacentHTML('beforeend',`<button id='sigh-in'><a href='../Sigh in/SighIn.html'>Sigh In</a></button>
        <button id='log-in'> <a href='../Login/Login.php'>Log In</a></button>`)";
        echo "</script>";
    }
    include("./index.html");
    $con = mysqli_connect("localhost","root","","teen-project-database")or die("khong the ket noi toi database");
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
                        echo "Your file is too big";
                        $check = true;
                    }
                } else {
                    echo"There was an error uploading your file";
                    $check = true;
                }
            } else {
                echo"you cannot upload files of this type";
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