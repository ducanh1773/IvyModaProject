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


echo "Trang xử lý" . "<br>";
if (!empty($_SERVER['REQUEST_METHOD'])) {
	echo 'prev';
	print_r($_FILES);
}
echo "<br>";


$checkName = false;
$checkEmail = false;
$CheckAge = false;
$checkPassWord = false;
$checkGender = false;







if (isset($_POST["name"])) {
	if (strlen($_POST["name"]) < 10) {
		echo "<style>
		.erros{
			color : red;
		}
		 </style>";
		echo "<p class = \"erros \">Name is required</p>";
	} else {
		echo "name : ";
		echo $_POST['name'] . "<br>";
		$checkName = true;
	}
} else {
	echo "<p class = \"erros \">Name is required</p>";


}



if (isset($_POST["email"])) {
	if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		echo "<style>
		.erros{
			color : red;
		}
		 </style>";
		echo "<p class = \"erros \">Email is required</p>";
	} else {
		echo "Email : ";
		echo $_POST['email'] . "<br>";
		$checkEmail = true;
	}
} else {
	echo "<p class = \"erros \">Email is required</p>";

}




if (isset($_POST['gender'])) {
	echo "Gender : ";
	echo $_POST["gender"] . "<br>";
	$checkGender = true;
} else {
	echo "<p class = \"erros \">Gender is required</p>";
}



if (isset($_POST['age'])) {
	echo "Age : ";
	echo $_POST['age'] . "<br>";
	$CheckAge = true;
} else {
	echo "<p class = \"erros \">Age is required</p>";

}



if (isset($_POST['password']) && isset($_POST['checkpassword'])) {
	if (strlen($_POST["password"]) <= '8') {
		echo "Your Password Must Contain At Least 8 Characters!";
	} elseif (!preg_match("#[0-9]+#", $_POST['password'])) {
		echo "Your Password Must Contain At Least 1 Number!";
	} elseif (!preg_match("#[A-Z]+#", $_POST['password'])) {
		echo "Your Password Must Contain At Least 1 Capital Letter!";
	} elseif (!preg_match("#[a-z]+#", $_POST['password'])) {
		echo "Your Password Must Contain At Least 1 Lowercase Letter!";
	} elseif ($_POST['password'] != $_POST['checkpassword']) {
		echo "Your Password does'nt match";
	} else {
		$checkPassWord = true;

	}

} else {
	echo "<p class = \"erros \">Password is required</p>";


}



$query = "SELECT * FROM submitson WHERE Email = \"" . $_POST["email"] . "\" ";
$count_Email = $conn->query($query);
// var_dump($count_Email);

if ($count_Email -> num_rows > 0) {
	$checkEmail = false;
	echo "Email da duoc su dung ";
} else {
	$checkEmail = true;
}









if ($checkName == true && $checkEmail == true && $CheckAge == true && $checkPassWord == true) {

	$sql = "INSERT INTO submitson (name, Email , gender, age , password) 
VALUES ('" . $_POST['name'] . "' , '" . $_POST['email'] . "' , '" . $_POST['gender'] . "' , '" . $_POST['age'] . "' , '" .$_POST['password'] .   "')";
	// echo $sql;
//kiểm tra

	if ($conn->query($sql) === TRUE)
		// Thông báo nếu thành công
		echo 'Bạn đã đăng ký tài khoản thành công';
	else
		// Hiện thông báo khi không thành công
		echo 'Không thành công. Lỗi' . $conn->error;
	//ngắt kết nối
	$conn->close();
}
?>