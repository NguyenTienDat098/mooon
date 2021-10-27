<?php  
$server_username = "epiz_30186111";
$server_password = "OVHI0lkYoIL8Be";
$server_host = "sql111.epizy.com";
$database = 'epiz_30186111_XXX';
$conn = mysqli_connect($server_host,$server_username,$server_password,$database) or die("Unable to connect to database");
mysqli_query($conn,"SET NAMES 'UTF8'");
if (isset($_POST["login"])) {
		// get info users
	$username = $_POST["username"];
	$password = $_POST["password"];
		//clean information, remove html tags, special characters
		//intentionally added by the user for sql injection attacks
	$username = strip_tags($username);
	$username = addslashes($username);
	$password = strip_tags($password);
	$password = addslashes($password);
	if ($username == "" || $password =="") {
		echo "username or password you cannot leave it blank!";
	}else{
		$sql = "select * from users where username = '$username' and password = '$password' ";
		$query = mysqli_query($conn,$sql);
		$num_rows = mysqli_num_rows($query);
		if ($num_rows==0) {
			echo "Incorrect username or password!";
		}else{
				//proceed to save the login name in the session for later processing
			$_SESSION['username'] = $username;
                // Execute action after saving information to session
			header('Location: ../moonpage.html');
		}
	}
}




?>