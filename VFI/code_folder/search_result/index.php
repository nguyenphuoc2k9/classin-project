<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search</title>
    <link rel="icon" href="../VFI__3_-removebg-preview.png">
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
                        <a href="../Login/logout.php">Sigh Out</a>
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
    <!--Sidenav-->



    <!--Search-->

    <div class="search-result">
        <div class="search-re-box">
            <div class="nums-of-re" id="title">
                <h1>There are<?php echo " " . $nums?> results of <?php echo $_GET['k']?>(Personal Posts)</h1>
            </div>
            <div class="search-re-print-pe-post" id="pe-post">
                <?php
                    while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
                        $title = $row['title'];
                        $desc = $row['descritpion'];
                        $img =  "../Create/uploads/". $row['imgid'];
                        $id = $row['id'];
                ?>
                <div class="post">
                    <div class="img">
                        <img src="<?php echo $img?>" alt="test-image">
                        <hr>
                    </div>
                    <div class="info">
                        <h1><?php echo $title?></h1>
                        <p><?php echo $desc?></p>
                        <a href="../detail/detail.php?id=<?php echo $id;?>&&tt=pe-post">Read more</a>
                    </div>
                </div>
                <?php
            }
            ?>
            
                <!-- <div class="post">
                    <div class="img">
                        <img src="../dảk image.png" alt="test-image">
                        <hr>
                    </div>
                    <div class="info">
                        <h1>Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas quas beatae excepturi quo minus dolor commodi consequuntur facilis tempore neque deserunt similique eius nihil quia, omnis ipsum. Similique, incidunt?</p>
                        <a href="../detail/detail.html?">Read more</a>
                    </div>
                </div>
                <div class="post">
                    <div class="img">
                        <img src="../dảk image.png" alt="test-image">
                        <hr>
                    </div>
                    <div class="info">
                        <h1>Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas quas beatae excepturi quo minus dolor commodi consequuntur facilis tempore neque deserunt similique eius nihil quia, omnis ipsum. Similique, incidunt?</p>
                        <a href="../detail/detail.html?">Read more</a>
                    </div>
                </div> -->
            </div>
            <div class="search-re-users">
                <div class="nums-of-re">
                    <h1>There are <?php echo" ". $nums2?> user match <?php echo $_GET['k']?> </h1>
                </div>
                <?php 
                        while($row2 = mysqli_fetch_assoc($result2)){
                            $username = $row2['username'];
                            $gmail = $row2['gmail'];
                            $id = $row2['id'];
                            if($row2['img'] == null){
                                $img = "../user upload/img.png";
                            } else {
                                $img = "../user upload/".$row2['img'];
                            }
                    ?>
                <div class="user">
                    
                    <div class="user-img">
                        <a href="../profile/otherprofile.php?id=<?php echo $id;?>"><img src="<?php echo $img?>" alt=""></a>
                    </div>
                    <div class="userinfo">
                        <div class="infocard">
                            <h3><?php echo $username?></h3>
                        </div>
                        <div class="infocard">
                            <h3><?php echo $gmail?></h3>
                        </div>
                    </div>
                </div>
                <?php
                        }
                ?>
            </div>
            <div class="search-re-print-pe-post" id="pe-post" style="margin-bottom: 20px;">
            <div class="nums-of-re" id="title">
                <h1>There are<?php echo " " . $nums3?> results of <?php echo $_GET['k']?>(Website Posts)</h1>
            </div>
                <?php
                    while($row = mysqli_fetch_array($result3, MYSQLI_ASSOC)){
                        $title = $row['title'];
                        $desc = $row['descrition'];
                        $img =  "../web img/". $row['img'];
                        $id = $row['id'];
                ?>
                <div class="post">
                    <div class="img">
                        <img src="<?php echo $img?>" alt="test-image">
                        <hr>
                    </div>
                    <div class="info">
                        <h1><?php echo $title?></h1>
                        <p><?php echo $desc?></p>
                        <a href="../detail/detail.php?id=<?php echo $id;?>&&tt=webpost">Read more</a>
                    </div>
                </div>
                <?php
            }
            ?>
            
                <!-- <div class="post">
                    <div class="img">
                        <img src="../dảk image.png" alt="test-image">
                        <hr>
                    </div>
                    <div class="info">
                        <h1>Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas quas beatae excepturi quo minus dolor commodi consequuntur facilis tempore neque deserunt similique eius nihil quia, omnis ipsum. Similique, incidunt?</p>
                        <a href="../detail/detail.html?">Read more</a>
                    </div>
                </div>
                <div class="post">
                    <div class="img">
                        <img src="../dảk image.png" alt="test-image">
                        <hr>
                    </div>
                    <div class="info">
                        <h1>Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas quas beatae excepturi quo minus dolor commodi consequuntur facilis tempore neque deserunt similique eius nihil quia, omnis ipsum. Similique, incidunt?</p>
                        <a href="../detail/detail.html?">Read more</a>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
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