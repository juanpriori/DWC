<?php
header("Content-Type: application/json; charset=UTF-8");
$user = 'root';
$password = '';
$database = 'JSON';
$servername = 'localhost';

$mysqli = new mysqli(
    $servername,
    $user,
    $password,
    $database
);

if ($mysqli->connect_error) {
    die('Connect Error (' .
        $mysqli->connect_errno . ') ' .
        $mysqli->connect_error);
}

// SQL query to select data 
// from database 
$sql2 = "SELECT * FROM JSONnokey";
$result = $mysqli->query($sql2);

// Fetching data from the database 
// and storing in array of objects 
while ($row = $result->fetch_array()) {
    $dataDB[] = array(
        "ID" => $row["id"],
        "Title" => $row["title"],
        "Genre" => $row["genre"],
        "Director" => $row["director"],
    );
}

// Creating a dynamic JSON file 
$file = "dataDBnoKEY.json";

// Converting data into JSON and putting 
// into the file 
// Checking for its creation 
if (file_put_contents(
    $file,
    json_encode($dataDB)
))
    echo ("File created");
else
    echo ("Failed");

// Closing the database 
$mysqli->close();
/*$servername = "localhost";
$username = "root";
$password = "";
$dbname = "JSON";

$conn = mysqli_connect($servername, $username, $password, $dbname);*/
