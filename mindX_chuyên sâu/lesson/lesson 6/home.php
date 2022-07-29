<?php
    // session_start()
    // if($_SESSION["username"] == null){
    //     header("Locaion:../index.php");
    // }
    $con=mysqli_connect("localhost","root","","webadvance") or die("khong the ket noi toi database");
    $query = mysqli_query($con,"select * from admin") or die("khong the truy van database");
    // $query1 = mysqli_quuery($con,"select * from catagories") or die("khong the truy van database");
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
    <h3>Danh sách Admin</h3>
    <table>
        <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Tác vụ</th>
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
    <a href="./add.php" id="btn" name="btn">Thêm mới</a>
    <h3>================================================================</h3>
    <!-- <h3>Danh sách sản phẩm</h3>
    <table>
        <tr>
            <th>ID</th>
            <th>hình ảnh</th>
            <th>mô tả</th>
            <th>giá</th>
            <th>tác vụ</th>
        </tr>
        <?php
            while($row = mysqli_fetch_array($query1,MYSQLI_ASSOC)){
                $id = $row['id'];
                $hinhanh = $row['hinhanh'];
                $mota = $row['mota'];
                $gia = $row['gia'];
            }
        ?>

    </table> -->
    <script>
        function hienthiadmin(){
            location.replace("./add.php")
        }
    </script>
    <?php mysqli_close($con)?>
</body>
</html>