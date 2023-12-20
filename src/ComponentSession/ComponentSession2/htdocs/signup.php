<!DOCTYPE html>
<html lang="en">
<link rel="stylesheet" href="signUp.css">

<head></head>

<body class="signUpPage">
	<h1>Đăng ký tài khoản của bạn</h1>
	<form action="Submit.php" method="post" enctype="multipart/form-data">
		<p class="TextInSignUp">Nhập tên của bạn</p>
		<input type="text" name="name" class="InformationInput" placeholder="Nhập tên của bạn">
		<p>Nhập email của bạn</p>
		<input type="text" name="email" class="InformationInput" placeholder="Nhập email của bạn">
		<p class="TextInSignUp">Nhập mật khẩu của bạn</p>
		<input type="password" name='password' class="InformationInput" placeholder="Nhập mật khẩu của bạn"><br>
		<p class="TextInSignUp">Nhập lại mật khẩu của bạn</p>
		<input type="password" name='checkpassword' class="InformationInput" placeholder="Nhập lại mật khẩu của bạn">
		<p>Chọn giới tính của bạn</p>
		<br>
		<input type="radio" name="gender" value="female">Nam
		<input type="radio" name="gender" value="male">Nữ
		<input type="radio" name="gender" value="other">Khác
		<br>
		<p class="TextInSignUp">Nhập tuổi của bạn</p>
		<input type="number" min="1" max="120" name="age" class="InformationInput" placeholder="Nhập tuổi của bạn"> <br>
		<br>
		<input type="submit" class="SubmitInSignUp" placeholder="Đăng ký">

	</form>
</body>