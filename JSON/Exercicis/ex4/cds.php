<?php
header("Content-Type: application/json; charset=UTF-8");

$mysqli = new mysqli("localhost","root","","cds");
if ($mysqli->connect_error) {
    die('Connect Error (' .
        $mysqli->connect_errno . ') ' .
        $mysqli->connect_error);
}
$sql = "SELECT * FROM SONG";
$result = $mysqli->query($sql);

$row = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($row);