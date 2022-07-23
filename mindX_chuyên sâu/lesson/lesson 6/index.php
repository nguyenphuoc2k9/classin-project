<?php 
if (isset($_POST['btn'])) 
{

    include('connection.php');
    unset($_SESSION['username']);


     
    //Lấy dữ liệu nhập vào
    $username = addslashes($_POST['username']);
    $password = addslashes($_POST['password']);


    $password = md5($password);
    $query = mysqli_query($con,"SELECT username, password FROM admin WHERE username='$username'");
    if (mysqli_num_rows($query) == 0) {
        echo "Tên đăng nhập này không tồn tại. Vui lòng kiểm tra lại. <a href='javascript: history.go(-1)'>Trở lại</a>";
        exit;
    }
    $row = mysqli_fetch_array($query);
    if ($password != $row['password']) {
        echo "Mật khẩu không đúng. Vui lòng nhập lại. <a href='javascript: history.go(-1)'>Trở lại</a>";
        exit;
    }
     
    $_SESSION['username'] = $username;
    header('Location: ./admin/admin.php');

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
 <script>
            // Lấy giá trị của một input
            function getValue(id){
                return document.getElementById(id).value.trim();
            }

            // Hiển thị lỗi
            function showError(key, mess){
                document.getElementById(key + '_error').innerHTML = mess;
            }

            function validate()
            {
                var flag = true;

                // 1 username
                var username = getValue('username');
                if (username == '' || username.length < 5 || !/^[a-zA-Z0-9]+$/.test(username)){
                    flag = false;
                    showError('username', 'Vui lòng kiểm tra lại Username');
                }

                // 2. password
                var password = getValue('password');
                if (password == '' || password.length < 8 ){
                    flag = false;
                    showError('password', 'Vui lòng kiểm tra lại Password');
                }

                return flag;
            }
        </script>
<body>
 <form action='index.php' method='POST'>
                                <div class="form-group">
                                    <input id="username" name="username" class="form-control" placeholder="Username" type="text"/>
                                    <span id="username_error"></span>
                                </div>
                                <div class="form-group">
                                    <input required="" class="form-control" placeholder="Password" id="password" name="password" value="" type="password"/>
                                    <span id="password_error"></span>
                                </div>
                                <!-- Change this to a button or input when using this as a form -->
                                <hr/>
                                <p align="center">
                                    <button type="submit" onclick="return validate();" id="btn" name="btn"></i> login</button>
                                </p>
                                <hr/>
</form>
 <footer class="container-fluid" style="background:#444; font-size:19px; color:#fff;">
            <p align="center" style="padding-top:5px;">Copyright &copy; 2021</p>
            <p align="center">Mindx || AnhMai</p>
        </footer>
</body>
</html>