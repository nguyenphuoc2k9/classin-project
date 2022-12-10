<?php
    include "./admin_page/conn.php";
    $query = mysqli_query($con, "SELECT * FROM users");
    if(!isset($_SESSION['admin-name'])){
        header("Location:./admin-login.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User manage</title>
    <script src="https://kit.fontawesome.com/1410425ca1.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="header">
        <div class="header-box">
            <div class="head-name">
                <h1>Admin Page</h1>
            </div>
            <div class="head-acc">
                <img src="https://tchblg.de/wp-content/uploads/user-avatar-768x768.png" alt="">
                <h1><?php echo $_SESSION['admin-name']?></h1>
                <div class="dropdown">
                    <i onclick="drop()"id='dropbtn'class="fa-solid fa-angle-down"></i>
                    <div class="dropdown-content" id="dropdown">
                    <a href="#">Sigh Out</a>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="sidenav">
        <hr>
        <div class="sidenav-box">
            <a href="./dashboard.php">Dashboard</a>
            <a href="./user-post.php">Manage User Post</a>
            <a href="./user.php">Manage User</a>
            <a href="./web-post.php">Manage Website Post</a>
        </div>
    </div>
    <div class="post-manage">
        <div class="pending-post">
            <div class="title">
                <h1>Users</h1>
                
                <h3 class="nums">Number of User: <?php echo mysqli_num_rows($query);?></h3>
            </div>
            <div class="post-table">
                <table>
                    <thead>
                        <tr>
                            <td>Avartar</td>
                            <td>Id</td>
                            <td>User name</td>
                            <td>Password</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                            while($row = mysqli_fetch_assoc($query)){
                                $id = $row['id'];
                                $username = $row['username'];
                                $password = $row['password'];
                                if($row['img']==null){
                                    $img = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fgray-user-management%2F512%2Frounded-512.png&f=1&nofb=1";
                                } else {
                                    $img = "./user upload/" . $row['img'];
                                }
                        ?>
                            <tr>
                                <td><img class ='avartar'src="<?php echo $img?>" alt=""></td>
                                <td><p><?php echo $id?></p></td>
                                <td><p><?php echo $username?></p></td>
                                <td><p><?php echo $password?></p></td>
                                <td><a href="./admin_page/action/delete.php?id=<?php echo $id?>&&query=user" class="dele only">Delete<i class="fa-solid fa-trash-can"></i></a></td>
                            </tr>
                            <?php
                            }
                            ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <script src="./app.js"></script>
</body>
</html>