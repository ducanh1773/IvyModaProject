<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "submitform";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$CheckAccount = false;
$CheckPassWordSignIn = false;


$queryMail = "SELECT * FROM submitson WHERE Email = \"" . $_POST["Account"] . "\" ";
$queryName = "SELECT * FROM submitson WHERE name = \"" . $_POST["Account"] . "\" ";
$queryPassWord = "SELECT * FROM submitson WHERE password = \"" . $_POST["passwordSignIn"] . "\" ";
$count_Mail = $conn->query($queryMail);
$count_Name = $conn->query($queryName);
$count_PassWord = $conn->query($queryPassWord);

if (isset($_POST['Account'])) {
    if (isset($_POST['passwordSignIn'])) {
        if ($count_Mail->num_rows > 0 || $count_Name->num_rows > 0) {
            $CheckAccount = true;
            if ($count_PassWord->num_rows > 0) {
                $CheckPassWordSignIn = true;
            } else {
                echo "Bạn đã nhập sai mật khẩu" . "<br>";
            }


        }
    } else {
        echo "Vui lòng nhập mật khẩu của bạn" . "<br>";
    }

} else {
    echo "Bạn chưa nhập tên đăng nhập hoặc Email" . "<br>";
}



$WelcomePage = "<a href=\"signup.php\" class=\"ClickToSignUp\">";





if ($CheckAccount == true && $CheckPassWordSignIn == true) {
    $WelcomePage;
    echo "Bạn đã đăng nhập thành công";     

} else {
    echo "Đăng nhập không thành công";
}


$conn -> close();
?>
