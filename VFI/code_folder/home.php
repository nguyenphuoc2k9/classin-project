<?php
ob_start();
    include("./Home_/code.php");
    include("./Home_/style.php");
    include ("./Home_/app.php");
    while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)){
        $img = "./user upload/" . $row['img'];
        if($row['img'] == null){
            $_SESSION['img'] = "./user upload/img.png";
        } else {
            $_SESSION['img'] = $img;
        }
    }  
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="icon" href="./VFI__3_-removebg-preview.png">
    <script src="https://kit.fontawesome.com/1410425ca1.js" crossorigin="anonymous"></script>
</head>
<body>
    <!-- Header -->

    <div class="header">
        <div class="header-box">
            <div class="head-logo">
                <a  class ="logo-image" href="#"><img src="./VFI__3_-removebg-preview.png" alt="logo"></a>
                <?php
                    if(isset($_POST['search-btn'])){
                        $_SESSION['k'] = $_POST['k'];
                    } else {
                        $_SESSION['k'] = null;
                    }
                ?>
                <form action = "./search.php?k=<?php echo $_SESSION['k']?>">
                    <input type="text" name = "k" placeholder="Enter the things that you want to search">
                    <button type="submit" name="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <div class="userinfo">
                    <h1><a href="./profile.php?id=<?php echo $_SESSION['id'];?>"><img src="<?php echo $_SESSION['img'] ?>"></a> <?php echo $_SESSION['username']; ?></h1>
                    <div class="dropdown">
                        <i onclick="drop()"id='dropbtn'class="fa-solid fa-angle-down"></i>
                        <div class="dropdown-content" id="dropdown">
                        <a href="./logout.php">Sigh Out</a>
                    </div>
                </div>
                </div>
            </div>
            <div class="head-con">
                <a class="head-text" href="./home.php"><i class="fa-solid fa-house"></i>Home</a>
                <a class="head-text" href="./new.php" class="fa-solid fa-newspaper"></i>News</a>
                <a href="./create.php" class="head-text"><i class="fa-solid fa-plus"></i>Create</a>
                <a href="./virus.php" class="head-text"><i class="fa-solid fa-virus"></i>Covid-19 details</a>
            </div>
        </div>
    </div>
    <!-- Home-container -->

    <div class="home">
        <div class="home-box">
            <div class="home-title">
                <h1>Recent News</h1>
            </div>
            <div class="home-container">
                <?php
                    while($length = mysqli_fetch_assoc($count)){
                        $l = $length['count'];
                            while($row = mysqli_fetch_assoc($query2)){
                                if($l >= 1){
                                    $title = $row['title'];
                                    $desc = $row['descrition'];
                                    $id = $row['id'];
                                    $img = "./web img/" . $row['img'];
                                }
                                $l--;
                            }
                            
                        }
                        mysqli_data_seek($query2, 0);

                    
                ?>
                <div class="main">
                    <div class="main-img">
                        <img src="<?php echo $img?>" alt="image">
                    </div>
                    <div class="main-info">
                        <div class="main-title">
                            <h1><?php echo $title;?></h1>
                        </div>
                        <p><?php echo $desc?></p><a href="./detail.php?id=<?php echo $id?>&&tt=webpost">Read more</a>
                    </div>
                </div>
                <?php
                    $n =0;
                    while($row2 = mysqli_fetch_assoc($query2)){
                        if($n >= 0 && $n < 2){
                            $title_ext = $row2['title'];
                            $desc_ext = $row2['descrition'];
                            $id = $row2['id'];
                            $img = "./web img/" . $row2['img'];
                        } else {
                            $title_ext = null;
                            $desc_ext = null;
                        }
                    $n++;
                ?>
                    <script type="text/javascript">
                        var html = `<div class="extra">
                    <div class="main-img">
                        <img src="<?php echo $img?>" alt="imgae">
                    </div>
                    <div class="main-info">
                        <div class="main-title">
                            <h1><?php echo $title_ext?></h1>
                        </div>
                        <p><?php echo $desc_ext?></p><a href="./detail.php?id=<?php echo $id?>&&tt=webpost">Read more</a>
                    </div>
                    </div>`
                    var title = new String("<?php echo $title_ext?>")
                    if(title != ""){
                        document.getElementsByClassName("home-container")[0].insertAdjacentHTML("beforeend",html)
                    }
                    </script>
                <?php
                    }
                    
                ?>
                <!-- <div class="extra">
                    <div class="main-img">
                        <img src="../dảk image.png" alt="imgae">
                    </div>
                    <div class="main-info">
                        <div class="main-title">
                            <h1>hi</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  repudiandae tempora, nihil eveniet! Blanditiis vel facere laudantium consequatur vitae voluptate enim. <a href="#">Read more</a></p>
                    </div>
                </div> -->
            </div>
        </div>
    </div>

    <!-- UPDATE-->
    <div class="update-news" id="update">
        <div class="update-title">
            <h1>Update news</h1>
        </div>
        <div class="update-box">
            <div class="update">
                <h1>Our website just release</h1>
                <p>This is my first project in MindX Advance, so this website is about news,i always wonder that what if a day the teacher can noicte us in the website instead saying at class.So i deicied to make this website.This Website is the place where student can read teacher or school message easier,imaging how tired are you when the there is a message of the teacher taht need to be noitce, if the teacher is busy he can't report us so they can upload on my website and the student can ready it.</p>
            </div>
            <a href="#" class="more"></a>
        </div>
    </div>
    <!-- footer -->

    <div class="footer" id="footer">
        <div class="footer-title">
            <h1>You can contact us on</h1>
        </div>
        <div class="footer-icon">
            <a href="https://www.facebook.com/Teenager-Blog-109466681887056"><i class="fa-brands fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/teenblog2009/"><i class="fa-brands fa-instagram-square"></i></a>
            <a href="https://www.youtube.com/channel/UCC_Q2OmoQP0vEwVF3nr87Tg"><i class="fa-brands fa-youtube-square"></i></a>
            <a href="https://web.telegram.org/z/#777000"><i class="fa-brands fa-telegram"></i></a>
        </div>
        <div class="footer-info">
          <div class="info-card">
              <h5>Email:</h5>
              <p>Phuochuunguyen2009@gmail.com</p>
          </div>
          <div class="info-card">
              <h5>Phone number:</h5>
              <p>0905332540</p>
          </div>
          <div class="info-card">
              <h5>Facebook:</h5>
              <p>nguyễn Phước</p>
          </div>  
        </div>
    </div>
</body>
</html>