<?php 
	session_start();
	if($_SESSION['username'] == null)
	{
		header('Location: ../../index.php');
	}
    $con = mysqli_connect('localhost','root','','webadvance') or die('Khong the ket noi toi database');
    

    if (isset($_POST['btn'])) 
	{

	$user = $_POST['username'];
    $pass = $_POST['password'];
		//Kiểm tra đã nhập đủ tên đăng nhập với mật khẩu chưa
    if (!$user || !$pass) {
        echo "Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu. <a href='javascript: history.go(-1)'>Trở lại</a>";
        exit;
    }
     
	$pass = md5($pass);
	$querry = "INSERT INTO admin (username,password) VALUES ('$user','$pass')";
	if(mysqli_query($con,$querry))
	{
		header('Location: home.php');
		
	}
	else{
		$re = "loi them moi" . mysqli_error($con);
	}
	mysqli_close($con);
}

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<body>
	<form action='them.php' method='POST'>
	<table>
		<tr>
			<td>Them Admin</td>
		</tr>
		<tr>
			<td>Username: </td>
			<td><input id="username" name="username" class="form-control" placeholder="Username" type="text"/></td>
		</tr>
		<tr>
			<td>Password: </td>
			<td><input id="password" name="password" class="form-control" placeholder="Password" type="text"/></td>
		</tr>
		<td>
			<button type="submit" id="btn" name="btn"></i> Save</button></td>
		</tr>
	</table>
</form>
</body>
</html>