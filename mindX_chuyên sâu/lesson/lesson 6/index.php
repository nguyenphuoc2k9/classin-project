
<?php 
	session_start();
	if($_SESSION['username'] == null)
	{
		header('Location: ../index.php');
	}
    $con = mysqli_connect('localhost','root','','webadvance') or die('Khong the ket noi toi database');
    $querry = mysqli_query($con,"select * from admin") or die ('Khong the truy van database');
    $querry1 = mysqli_query($con,"select * from categories") or die ('Khong the truy van database');
?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<body>
	<h3> Danh sach Admin</h3>
	<table>
		<tr>
			<th>ID</th>
			<th>Username</th>
			<th>Password</th>
			<th>Tac vu</th>
		</tr>
		<?php
	while($row = mysqli_fetch_array($querry, MYSQLI_ASSOC))
   {
   	$id = $row['id'];
   	$user = $row['username'];
   	$pass = $row['password'];
	?>
	<tr>
			<td><?php echo $id ?></td>
			<td><?php echo $user ?></td>
			<td><?php echo $pass ?></td>
			<td><a href="admin/sua.php?id=<?php echo $id ;?>">Sua</a></td>
			<td><a href="admin/xoa.php?id=<?php echo $id ;?>">Xoa</a></td>
		</tr>
		<?php } 
		 ?>
	
	</table>
	<button type="submit" onclick="hienthiAdmin();" id="btn" name="btn"></i> Them moi</button>


	<h3>==============================================================================================</h3>
	<h3> Danh sach san pham</h3>
	<table>
		<tr>
			<th>ID</th>
			<th>hinh anh</th>
			<th>mo ta</th>
			<th>Gia</th>
			<th>Tac vu</th>
		</tr>
		<?php
	while($row = mysqli_fetch_array($querry1, MYSQLI_ASSOC))
   {
   	$id = $row['id'];
   	$hinhanh = $row['hinhanh'];
   	$mota = $row['mota'];
   	$gia = $row['gia'];
	?>
	<tr>
			<td><?php echo $id ?></td>
			<td><?php echo $hinhanh ?></td>
			<td><?php echo $mota ?></td>
			<td><?php echo $gia ?></td>
			<td><a href="SP/sua.php?id=<?php echo $id ;?>">Sua</a></td>
			<td><a href="SP/xoa.php?id=<?php echo $id ;?>">Xoa</a></td>
		</tr>
		<?php } 
	mysqli_close($con);
		 ?>
	
	</table>
	<button type="submit" onclick="hienthiSP();" id="btn" name="btn"></i> Them moi</button>
	<script>
		function hienthiAdmin()
		{
			location.replace("admin/them.php");
		}
		function hienthiSP()
		{
			location.replace("SP/them.php");
		}
	</script>
</body>
</html>