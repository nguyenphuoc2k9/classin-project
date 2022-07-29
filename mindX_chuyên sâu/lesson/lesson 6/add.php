<?php
    $con = mysqli_connect("localhost","root","","webadvance") or die("khong the ket noio toi database");
    if(isset($_POST['btn'])){
        $newuser = $_POST['username'];
        $newpass = $_POST['password'];
        if(!$newpass || !$newuser){
            echo "vui long khong bo trong username va password";
        }
        $newpass = md5($newpass);
        $querry = "INSERT INTO admin (username,password) VALUES ('$newuser','$newpass')";
        if(mysqli_query($con,$querry)){
            header("Location:./home.php");
        }else{
            $re = "loi them noi". mysqli_error($con);
        }
    }
    mysqli_close($con);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="add.php" method='post'>
        <table>
            <tr>
                <td>Thêm admin</td>
            </tr>
            <tr>
                <td>Username:</td>
                <td><input type="text" id="username" name="username" class="form-control"></td>
            </tr>
            <tr>
                <td>Password:</td>
                <td><input type="text" id="password" name="password" class="form-control"></td>
            </tr>
            <tr>
                <td><button type="submit" id="btn" name="btn">Save</button></td>
            </tr>
        </table>
    </form>
</body>
</html>