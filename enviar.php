<?php
$nombre = $_POST['name'];
$email = $_POST['email'];
$asunto = $_POST['subject'];
$comentarios = $_POST['comments'];

$comentario = "Este mensanje fue enviado por: " . $nombre . ",\r\n";
$comentario .= "Su correo es: " . $email . ",\r\n";
$comentario .= "El asunto es: " . $asunto . ",\r\n";
$comentario .= "Comentarios: " . $comentarios . "\r\n";
$comentario .= "Enviado el: " . date('d/m/Y', time());


$para = 'sergio.lavilletta@gmail.com';
$header = "From: $email \r\n";
mail($para, $asunto, $comentario, $header) or die("Error!");

header("Location: exito.html");
?>