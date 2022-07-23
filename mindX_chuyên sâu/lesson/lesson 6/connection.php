<?php
	session_start();
	$con = mysqli_connect('localhost','root','','webadvance') or die('Khong the ket noi toi database');
	mysqli_set_charset($con,'UTF8');
	if($con ===false){
		die("Loi ket noi" . mysqli_connect_error());
	}
?>