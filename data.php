<?php
$conn = mysqli_connect('localhost', 'root', '', 'test');
$kharcha = $_POST['kharcha'];
$rupiya = $_POST['rupiya'];
$sql = "INSERT INTO expensive (kharcha, rupiya) VALUES ('$kharcha', $rupiya)";
mysqli_query($conn, $sql);
?>