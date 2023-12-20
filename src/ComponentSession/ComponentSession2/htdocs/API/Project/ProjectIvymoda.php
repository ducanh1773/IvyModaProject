<?php
header("Content-Type: application/json", true);
header("Access-Control-Allow-Origin: *", true);
header("Referrer-Policy: unsafe-url", true);
header("Access-Control-Allow-Methods: GET, POST, OPTIONS", true);
header("Access-Control-Allow-Headers: *", true);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "productivyoda";

$postBody = json_decode(
    file_get_contents('php://input'),
    true
);
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if($conn->connect_error) {
    die("Connection failed: ".$conn->connect_error);
}

var_dump($postBody);


$queryMail = "SELECT * FROM san_pham WHERE id_sanpham = \"".$postBody['id_project']."\" ";
// $queryPassWord = "SELECT * FROM khach_hang WHERE matkhau_dangnhap = \"".$postBody['password']."\" ";
$count_Mail = $conn->query($queryMail);
// $count_PassWord = $conn->query($queryPassWord);

if($count_Mail->num_rows > 0) {
    // output data of each row
   echo json_encode([
    "sanpham" => $count_Mail->fetch_assoc()
   ]);
        
    
} else {
   echo json_encode([
    "sanpham" => null
   ]);
}


?>