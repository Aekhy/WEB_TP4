<?php
header("Content-type: application/json");

// connexion
$nomdb = "";
$conn = mysqli_connect("localhost", "root", "", "$nomdb");
mysqli_set_charset($conn, "utf8");

// sql request
$nomtable = "";
$sql = "select * from $nomtable";

// traitement du resultat et json
$result = mysqli_query($conn, $sql);
echo json_encode(mysqli_fetch_all($result, MYSQLI_ASSOC));
?>
