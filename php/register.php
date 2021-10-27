<?php  
// CREATE DATABASE IF NOT EXISTS `moonpage` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
// USE `moonpage`;

// CREATE TABLE IF NOT EXISTS `users` (
// 	`id` int(11) NOT NULL AUTO_INCREMENT,
// 	`username` varchar(30) NOT NULL,
// 	`password` varchar(30) NOT NULL,
// 	`email` varchar(255) NOT NULL,
// 	PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;


# step 1: create database
$server_username = "epiz_30186111";
$server_password = "OVHI0lkYoIL8Be";
$server_host = "sql111.epizy.com";
$database = 'epiz_30186111_XXX';
$conn = mysqli_connect('sql111.epizy.com', 'epiz_30186111', 'OVHI0lkYoIL8Be');
# if the connection fails
if (!$conn) {
	die("Connection fails : " . mysqli_connect_error());
}
# command to create data base
$checkconn = mysqli_connect('sql111.epizy.com', 'epiz_30186111', 'OVHI0lkYoIL8Be', 'epiz_30186111_XXX');
if (!(isset($checkconn))) {
	$sql = "CREATE DATABASE epiz_30186111_XXX";
	# execute the query
	if (mysqli_query($conn, $sql)) 
	{
		echo 'Create database successfully!';
    # step 2: create table database
		mysqli_select_db($conn, 'epiz_30186111_XXX');
    # command SQL
		$sql = "CREATE TABLE users (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,username VARCHAR(30) NOT NULL,password VARCHAR(30) NOT NULL,
		email VARCHAR(60) NOT NULL)";
    # exucute the query 
		if (mysqli_query($conn, $sql)) {
			echo "Create database successfully";
		} else {
			echo "Create database fail : " . mysqli_error($conn);
		}
	} else {
		echo "Create database fail : " . mysqli_error($conn);
	}
	# disconnect from the database
	mysqli_close($conn);

}
// $sql = "CREATE DATABASE IF NOT EXISTS `moonpage` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
// USE `moonpage`"

#create a register acount 
$server_username = "root";
$server_password = "";
$server_host = "localhost";
$database = 'moonpage';
$conn = mysqli_connect($server_host,$server_username,$server_password,$database) or die("Unable to connect to database");
mysqli_query($conn,"SET NAMES 'UTF8'");
if (isset($_POST["register"])) {
	$username = $_POST["username"];
	$password = $_POST["password"];
	$email = $_POST["email"];
	if ($username == "" || $password == "" || $email == "") {
		echo "Please enter all information";
	}else{
		$sql="select * from users where username='$username'";
		$check=mysqli_query($conn, $sql);
		if(mysqli_num_rows($check)  > 0){
			echo "Account already exits";
		}else{
			$sql = "INSERT INTO users(username,password,email) VALUES ('$username','$password','$email')";
			$i = mysqli_query($conn,$sql);
			if ($i == 1) {
				header('Location: ../moonpage.html');
			}
		}
	}
}


?>