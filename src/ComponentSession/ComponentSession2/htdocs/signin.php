<?php

?>

<!DOCTYPE html>
<html lang="en">
<link rel="stylesheet" href="signinPhp.css">

<head></head>

<body class="BodyInSignin">

	<form action="DangNhap.php" method="post" enctype="multipart/form-data">
		<h1>Đăng nhập tài khoản của bạn</h1>
		<input type='text' name="Account" placeholder="Vui lòng nhập email hoặc tên đăng nhập của bạn"
			class="InputPhpTestEmail"><br>
		<input type="password" name='passwordSignIn' class="InputPhpTestPassword" placeholder="Nhập mật khẩu của bạn">
		<button class="SubmitInsigninPhp">Đăng nhập</button>
		<p class="">Nếu bạn chưa có tài khoản click <a href="signup.php" class="ClickToSignUp">vào đây </a> để đăng ký
		</p>

</body>
</form>
<?php

?>