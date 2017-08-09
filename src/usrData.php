<?php

ini_set('display_errors', 'On');

$mysqli = new mysqli('localhost','nuno','nuno','react_tests');
$myArray = array();

if ($mysqli->connect_error) {
	die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

/////////////////
// Validate login
/////////////////
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data) && $data["action"] == "validateLogin") {
	$username = $mysqli->real_escape_string($data["username"]);
	$password = $mysqli->real_escape_string($data["password"]);

	$result = $mysqli->query("SELECT * FROM users WHERE usrUsername = '$username' AND usrPassword = '$password'");
	$rowcount = $result->num_rows;

	if ($rowcount == 1) {
		while($row = $result->fetch_assoc()) {
			$myArray[] = $row;
		}

		// array_unshift($myArray, "success");
		$response["success"] = $myArray;
	} else {
		$response["failed"] = 1;
	}

	echo json_encode($response);
}

?>
