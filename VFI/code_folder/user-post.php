<?php
    include "./conn.php";
    if(!isset($_SESSION['admin-name'])){
        header("Location:./admin-login.php");
    }
    $query = mysqli_query($con, "SELECT * FROM post_pre");
    $query2 = mysqli_query($con, "SELECT * FROM post");
    $id;
    if(!empty($_GET['id'])){
        $id = $_GET['id'];
    }
    if(isset($_POST['edit-btn'])){
        $title = $_POST['title'];
        $desc = $_POST['desc'];
        $file = $_FILES['file'];
        $check = false;
        $imgid = uniqid("", true); 
        $file_name = $_FILES['file']['name'];
        $file_tmpname = $_FILES['file']['tmp_name'];
        $file_size = $_FILES['file']['size'];
        $file_error = $_FILES['file']['error'];
        $file_ext = explode(".", $file_name);
        $file_type = $_FILES['file']['type'];
        $file_acture_ext = strtolower(end($file_ext));
        $allow = array("jpg","jpeg","png","pdf");
        if(!empty($title) || !empty($desc) || !empty($file)){
            if(in_array($file_acture_ext, $allow)){
                if($file_error === 0){
                    if($file_size > 1000000){
                        echo "<script type ='text/javascript'>";
                        echo "alert('Your file was too big')";
                        echo "</script>";
                        $check = true;
                    } 
                } else {
                    echo "<script type ='text/javascript'>";
                    echo "alert('There was an error uploading your file')";
                    echo "</script>";
                    $check = true;
                }
            } else {
                echo "<script type ='text/javascript'>";
                echo "alert('you cannot upload files of this type')";
                echo "</script>";
                $check = true;
            }
        } else {
            $check = true;
            echo "<script type ='text/javascript'>";
            echo "alert('input cannot be blank')";
            echo "</script>";
        }
        if($check == false){
            
            $file_new_name = "img" . $imgid .".". $file_acture_ext;
            $file_destination = "../Create/uploads/" . $file_new_name;
            move_uploaded_file($file_tmpname, $file_destination);
            
            $query3 = "UPDATE post Set title = '$title',descritpion = '$desc' ,imgid = '$file_new_name' WHERE id='$id' ";
            if(mysqli_query($con,$query3)){
                echo $file_new_name;
                echo "<script type ='text/javascript'>";
                echo "alert('Sucseed')";
                echo "</script>";
                header("Location:./user-post.php?id=$id");
            }else{
                echo $file_new_name;
                $re = "loi them noi". mysqli_error($con);
            }
            }
    }
    // if(isset($_POST['edit-btn'])){
    //     $title = $_POST['title'];
    //     $desc = $_POST['desc'];
    //     $file = $_FILES['file'];
    
    // }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Posts manage</title>
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
                <h1>Pending approval Posts</h1>
                <h3 class="nums">Number of pending post: <?php echo mysqli_num_rows($query);?></h3>
            </div>
            <div class="post-table">
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Tittle</td>
                            <td>Description</td>
                            <td>Img</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                            while($row = mysqli_fetch_assoc($query)){
                                $title_pre = $row['title'];
                                $id_pre = $row['id'];
                                $desc_pre = $row['descritpion'];
                                $img = "../Create/uploads/" . $row['imgid'];
                                
                        ?>
                        <tr>
                            <td><p><?php echo $id_pre?></p></td>
                            <td><p><?php echo $title_pre?></p></td>
                            <td><p><?php echo $desc_pre?></p></td>
                            <td><img src="<?php echo $img?>" alt=""></td>
                            <td><a href="./admin_page/action/deny.php?id=<?php echo $id_pre?>" class="deny">Deny<i class="fa-solid fa-xmark"></i></a><a href="./action/accept.php?id=<?php echo $id_pre?>" class="ap">Accept<i class="fa-solid fa-check"></i></a></td>
                        </tr>
                        <?php
                            }
                        ?>
                        <!-- <tr>
                            <td><p>1</p></td>
                            <td><p>hi</p></td>
                            <td><p>XT test</p></td>
                            <td><p>imgpc.png</p></td>
                            <td><a href="#" class="deny">Deny<i class="fa-solid fa-xmark"></i></a><a href="#" class="ap">Accept<i class="fa-solid fa-check"></i></a></td>
                        </tr>
                        <tr>
                            <td><p>1</p></td>
                            <td><p>hi</p></td>
                            <td><p>XT test</p></td>
                            <td><p>imgpc.png</p></td>
                            <td><a href="#" class="deny">Deny<i class="fa-solid fa-xmark"></i></a><a href="#" class="ap">Accept<i class="fa-solid fa-check"></i></a></td>
                        </tr>
                        <tr>
                            <td><p>1</p></td>
                            <td><p>hi</p></td>
                            <td><p>XT test</p></td>
                            <td><p>imgpc.png</p></td>
                            <td><a href="#" class="deny">Deny<i class="fa-solid fa-xmark"></i></a><a href="#" class="ap">Accept<i class="fa-solid fa-check"></i></a></td>
                        </tr>
                        <tr>
                            <td><p>1</p></td>
                            <td><p>hi</p></td>
                            <td><p>XT test</p></td>
                            <td><p>imgpc.png</p></td>
                            <td><a href="#" class="deny">Deny<i class="fa-solid fa-xmark"></i></a><a href="#" class="ap">Accept<i class="fa-solid fa-check"></i></a></td>
                        </tr> -->
                    </tbody>
                </table>
            </div>
        </div>
        <div class="current-post">
            <div class="title">
                <h1>Current Posts</h1>
                <h3 class="nums">Number of Current Post: <?php echo mysqli_num_rows($query2);?></h3>
            </div>
            <div class="post-table">
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>Tittle</td>
                            <td>Description</td>
                            <td>Img</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                            while($row2 = mysqli_fetch_assoc($query2)){
                                $title_main = $row2['title'];
                                $desc_main = $row2['descritpion'];
                                $id_main = $row2['id'];
                                $img = "../Create/uploads/" . $row2['imgid'];
                        ?>
                            <tr>
                                <td><p><?php echo $id_main?></p></td>
                                <td><p><?php echo $title_main?></p></td>
                                <td><p><?php echo $desc_main?></p></td>
                                <td><img src="<?php echo $img?>" alt=""></td>
                                <td><a href="./user-post.php?id=<?php echo $id_main?>" class="edit" class="pop-up">Edit<i class="fa-solid fa-pen-to-square"></i></a><a href="./action/delete.php?id=<?php echo $id_main?>&&query=post" class="dele">Delete<i class="fa-solid fa-trash-can"></i></a></td>
                            </tr>
                            <?php
                            }
                            ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="pop-up" id="pop-up">
        <div class="pop-box">
            <button class="closepop" id="closepop"><i class="fa-solid fa-xmark"></i></button>
            <h1>Edit Post</h1>
            <form action="./user-post.php?id=<?php echo $id?>" method="post" enctype='multipart/form-data'>
                <div class="pop-card">
                    <label for="title">Title :</label>
                    <input type="text" name="title" required>
                </div>
                <div class="pop-card">
                    <label for="desc">Description :</label>
                    <input type="text" name="desc" required>
                </div>
                <div class="pop-card">
                    <label for="img">Img :</label>
                    <input type="file" name="file" required>
                </div>  
                <div class="pop-btn">
                    <button type="submit" name="edit-btn">Submit</button>
                </div>
            </form>
        </div>
    </div>
    <script>
        var closepop = document.getElementById("closepop")
var popup = document.getElementById("pop-up")
closepop.addEventListener("click",function(){
  popup.style.display = 'none';
})
var search = new URLSearchParams(window.location.search)
var id = search.get("id");
if(id != null){
  document.getElementById("pop-up").style.display = "block";
} else {
}
    </script>
</body>
</html>