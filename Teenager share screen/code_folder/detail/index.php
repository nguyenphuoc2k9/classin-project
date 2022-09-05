<?php
    $con = mysqli_connect("localhost","root","","teen-project-database");
    $query = mysqli_query($con, "SELECT * FROM webpost WHERE id ='$id'");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail</title>
    <link rel="stylesheet" href="./detail.css">
    <script src="https://kit.fontawesome.com/1410425ca1.js" crossorigin="anonymous"></script>
</head>
<body>
    <!-- Header -->

    <div class="header">
        <div class="header-box">
            <div class="head-logo">
                <a  class ="logo-image" href="#"><img src="../d.png" alt="logo"></a>
                <?php
                    if(isset($_POST['search-btn'])){
                        $_SESSION['k'] = $_POST['k'];
                    } else {
                        $_SESSION['k'] = null;
                    }
                ?>
                <form action = "../search_result/search.php?k=<?php echo $_SESSION['k']?>">
                    <input type="text" name = "k" placeholder="Enter the things that you want to search">
                    <button type="submit" name="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <div class="head-btn" id="head-btn">
                    
                </div>
            </div>
            <div class="head-con">
                <a class="head-text" href="../Home_/home.php"><i class="fa-solid fa-house"></i>Home</a>
                <a class="head-text" href="../News/new.php"><i class="fa-solid fa-newspaper"></i>News</a>
                <a href="../Create/create.php" class="head-text"><i class="fa-solid fa-plus"></i>Create</a>
            </div>
        </div>
    </div>
    <!--Sidenav-->

    <div class="sidenav">
        <div class="sidenav-box" id="sidenav-box">
        <div class="option">
                <a href="../Home_/home.php">Main news</a>
                <a href="../News/new.php">Personal news</a>
            </div>
            <hr/>
            <div class="userinfo">
                <h1><a href="../profile/profile.php"><img src="<?php echo $_SESSION['img']?>"></a> <?php echo $_SESSION['username']; ?></h1>
                <button id="log-out"> <a href = "../Login/logout.php">Log Out</a></button>
            </div>
        </div>
        <div class="sidenav-close-btn" id="close-">
            <button id="close"><i class="fa-solid fa-bars"></i></button>
        </div>
    </div>

    <!--Detail-->
    <?php
        while($row = mysqli_fetch_assoc($query)){
            $title = $row['title'];
            $desc  =$row['descrition'];
            $img = "../web img/" . $row['img'];
        }
    ?>
    <div class="detail">
        <div class="detail-box">
            <div class="detail-title">
                <h1><?php echo $title?></h1>
            </div>
            <div class="detail-desc">
                <p><?php echo $desc?></p>
            </div>
            <div class="detail-img">
                <img src="<?php echo $img?>" alt="">
            </div>
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
    <script src="./app.js"></script>
    <script type="text/javascript">
        var menubtn = document.getElementById("close")
var btn = document.getElementById("close-")
var sidenav = document.getElementById("sidenav-box")
    sidenav.style.left = "-30%"
    btn.style.left = "3%"
menubtn.onclick=()=>{
    if(sidenav.style.left == "0%"){
        sidenav.style.left = "-30%"
        menubtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
        btn.style.left = "3%"
    } else {
        sidenav.style.left = "0%"
        menubtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        btn.style.left = "21%"
    }

}
    </script>
</body>
</html>