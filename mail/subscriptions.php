<?php

$servername = "localhost";
$username = "root";
$password = "root";
$db = "zakhanya";
$subscription_email = $_POST['subemail'];

// Create connection
$connection = new mysqli($servername, $username, $password,$db);
// Check connection
if ($connection->connect_error) {
    	die("Connection failed: " . $connection->connect_error);
 }
$sql = "INSERT INTO emails (subscriber_email)
		VALUES ('".$subscription_email."')";
$result = $connection->query($sql);
$connection->close();
echo json_encode($result);

?>