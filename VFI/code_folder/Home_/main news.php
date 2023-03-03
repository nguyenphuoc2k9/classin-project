<?php
    session_start();
    include "./conn.php";
    $query = mysqli_query($con, "SELECT * FROM webpost");
    if(!isset($_SESSION['username'])){
        header("Location:../Login/login.php");
    }
    if($_SESSION['username'] == null){
        echo "<script type='text/javascript'>";
        echo "document.getElementById('head-btn').insertAdjacentHTML('beforeend',`<button id='sigh-in'><a href='../Sigh in/SighIn.html'>Sigh In</a></button>
        <button id='log-in'> <a href='../Login/Login.php'>Log In</a></button>`)";
        echo "</script>";
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
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
                    }
                ?>
                <form action = "../search_result/search.php?k=<?php echo $_SESSION['k']?>" class="form">
                    <input type="text" name = "k" placeholder="Enter your ideas...">
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
                <a href="#">Main news</a>
                <a href="#">Personal news</a>
                <a href="#">Update</a>
                <a href="#">About</a>
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
    <!--main news-->
    
    <div class="home">
        <div class="home-title">
            <h1>Main news</h1>
        </div>
        <div class="home-box">
            <div class="home-container">
                <div class="extra">
                    <div class="main-img">
                        <img src="../dảk image.png" alt="imgae">
                    </div>
                    <div class="main-info">
                        <div class="main-title">
                            <h1>hi</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.il eveniet! Blanditiis vel facere laudantium consequatur vitae voluptate enim. <a href="#">Read more</a></p>
                    </div>
                </div>
                <?php
                    while($row = mysqli_fetch_array($query, MYSQLI_ASSOC))
                ?>
            </div>
        </div>
    </div>
    <script src="./app.js"></script>
</body>
</html>