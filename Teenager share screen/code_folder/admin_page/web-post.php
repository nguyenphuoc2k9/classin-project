<?php
    include "./conn.php";
    $query = mysqli_query($con, "SELECT * FROM webpost");
    $id;
    if(!isset($_SESSION['admin-name'])){
        header("Location:./admin-login.php");
    }
    if(!empty($_GET['id'])){
        $id = $_GET['id'];
    }
    if(isset($_POST['edit-btn'])){
        $title = $_POST['title'];
        $desc = $_POST['desc'];
        $file = $_FILES['file'];
        //file
        $file_name = $_FILES['file']['name'];
        $file_tpm_name = $_FILES['file']['tmp_name'];
        $file_error = $_FILES['file']['error'];
        $file_size = $_FILES['file']['size'];
        $imgid =  uniqid("",true);
        $file_ext = explode(".",$file_name);
        $file_acture_ext = strtolower(end($file_ext));
        $allow = array('jpg','jpeg','png','pdf');
        if(!empty($title) || !empty($desc) || !empty($file)){
            if(in_array($file_acture_ext, $allow)){
                if($file_error === 0){
                    if($file_size > 1000000){
                        echo "<script type ='text/javascript'>";
                        echo "alert('Your file was too big')";
                        echo "</script>";  
                    } else {
                        $file_name_new = "img". $imgid.".". $file_acture_ext;
                        $file_destination = "../web img/" . $file_name_new;
                        move_uploaded_file($file_tpm_name, $file_destination);
                        if(mysqli_query($con, "UPDATE webpost SET title='$title',descrition='$desc',img='$file_name_new' WHERE id='$id'")){
                            header("Location:./web-post.php");
                        } else {
                            $re = "loi them moi" . mysqli_errno($con);
                        }
                    } 
                } else {
                    echo "<script type ='text/javascript'>";
                    echo "alert('There was an error uploading your file')";
                    echo "</script>";
                }
            } else {
                echo "<script type ='text/javascript'>";
                echo "alert('You cannot upload files of this type')";
                echo "</script>";
            }
        } else {
            echo "<script type ='text/javascript'>";
            echo "alert('Input cannot be blank')";
            echo "</script>";
        }
    }
    if(isset($_POST['create-btn'])){
        $title = $_POST['title-new'];
        $desc = $_POST['desc-new'];
        $file = $_FILES['file-new'];
        //file
        $file_name = $_FILES['file-new']['name'];
        $file_tmp = $_FILES['file-new']['tmp_name'];
        $file_size = $_FILES['file-new']['size'];
        $file_error = $_FILES['file-new']['error'];
        $imgid = uniqid("",true);
        $file_ext = explode(".", $file_name);
        $file_acture_ext = strtolower(end($file_ext));
        $file_type = $_FILES['file-new']['type'];
        $allow = array("jpg","jpeg","png","pdf");
        if(!empty($title) || !empty($desc) || !empty($file)){
            if(in_array($file_acture_ext, $allow)){
                if($file_error === 0){
                    if($file_size < 1000000){
                        $file_name_new = "img" . $imgid . $file_acture_ext;
                        $file_destination = "../web img/" . $file_name_new;
                        move_uploaded_file($file_tmp,$file_destination);
                        if(mysqli_query($con, "INSERT INTO webpost(title,img,descrition) VALUES('$title','$file_name_new','$desc')")){
                            header("Location:./web-post.php");
                        } else {
                            $re = "loi them moi" . mysqli_error($con);
                        }
                    } else {
                        echo "<script type ='text/javascript'>";
                        echo "alert('Your file was too big')";
                        echo "</script>";
                    }
                } else {
                    echo "<script type ='text/javascript'>";
                    echo "alert('There was an error uploading your file')";
                    echo "</script>";
                }
            } else {
                echo "<script type ='text/javascript'>";
                echo "alert('You cannot upload files of this type')";
                echo "</script>";
            }
        }else {
            echo "<script type ='text/javascript'>";
            echo "alert('Input cannot be blank')";
            echo "</script>";
        }  
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Post manage</title>
    <link rel="shotcut icon" type="image/x-icon" href="https://duckduckgo.com/?q=admin%20pgae%20icon&iax=images&ia=images&iai=https://img00.deviantart.net/70dc/i/2016/130/f/7/admin_page_color_red_background_by_dnilvincent333-da22be8.png&atb=v333-1">
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
        <div class="current-post">
            <div class="title">
                <h1>Website Posts</h1>
                <button id="pop-up-open">Add Website Post</button>
                <h3 class="nums">Number of Current Post: <?php echo mysqli_num_rows($query);?></h3>
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
                                $desc_pre = $row['descrition'];
                                $img = "../web img/" . $row['img'];
                                
                        ?>
                        <tr>
                            <td><p><?php echo $id_pre?></p></td>
                            <td><p><?php echo $title_pre?></p></td>
                            <td><p><?php echo $desc_pre?></p></td>
                            <td><img src="<?php echo $img?>" alt=""></td>
                            <td><a href="./web-post.php?id=<?php echo $id_pre?>" class="edit" class="pop-up">Edit<i class="fa-solid fa-pen-to-square"></i></a><a href="./action/delete.php?id=<?php echo $id_pre?>&&query=web_post" class="dele">Delete<i class="fa-solid fa-trash-can"></i></a></td>
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
    </div>
    <div class="pop-up" id="pop-up">
        <div class="pop-box">
            <button class="closepop" id="closepop"><i class="fa-solid fa-xmark"></i></button>
            <h1>Edit Post</h1>
            <form action="./web-post.php?id=<?php echo $id?>" method="post" enctype='multipart/form-data'>
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
    <div class="pop-up" id="pop-up-add">
        <div class="pop-box">
            <button class="closepop" id="closepop2"><i class="fa-solid fa-xmark"></i></button>
            <h1>Add Website Post</h1>
            <form action="./web-post.php" method="post" enctype='multipart/form-data'>
                <div class="pop-card">
                    <label for="title-new">Title :</label>
                    <input type="text" name="title-new" required>
                </div>
                <div class="pop-card">
                    <label for="desc-new">Description :</label>
                    <input type="text" name="desc-new" required>
                </div>
                <div class="pop-card">
                    <label for="file-new">Img :</label>
                    <input type="file" name="file-new" required>
                </div>  
                <div class="pop-btn">
                    <button type="submit" name="create-btn">Submit</button>
                </div>
            </form>
        </div>
    </div>
    <script src="./app2.js"></script>
</body>
</html>