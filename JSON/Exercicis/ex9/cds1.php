<?php
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "cds");
$stmt = $conn->prepare("SELECT * FROM SONG WHERE idsong=" . $_REQUEST['idsong']);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($outp);
