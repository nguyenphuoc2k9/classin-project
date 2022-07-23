<?php
    $con = mysqli_connect("localhost","root","","webadvance") or die("khong the ket noio toi database");
    $id = $_GET['id'];
    if(isset($_POST['btn'])){
        $user = $_POST['username'];
    $pass = $_POST['password'];
    if(!$user || !$pass){
        echo "vui  long nhap du username và password";
        exit;
    }
    $pass = md5($pass);
    $query = "UPDATE admin Set username = '$user',password = '$pass' WHERE id = '$id'";
    if(mysqli_query($con,$query)){
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
    <form action="edit.php?id=<?php echo $id?>" method="POST">
        <table>
            <tr>
                <td>Sua admin</td>
            </tr>
            <tr>
                <td>Username:</td>
                <td><input type="text" id="username" name="username" class="form-control"></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="text" id="password" name="password" class="form-control"></td>
            </tr>
            <tr>
                <td><button type="submit" id="btn" name="btn">Save</button></td>
            </tr>
        </table>
    </form>
</body>
</html>