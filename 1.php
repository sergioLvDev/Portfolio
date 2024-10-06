<?php
$nombre = $_POST['name'];
$email = $_POST['email'];
$asunto = $_POST['subject'];
$comentario = $_POST['comments'];


$comentario = "Este mensanje fue enviado por: " . $nombre . ",\r\n";
$comentario .= "Su correo es: " . $email . ",\r\n";
$comentario .= "El asunto es: " . $asunto . ",\r\n";
$comentario .= "Comentarios: " . $comentarios . "\r\n";
$comentario .= "Enviado el: " . date('d/m/Y', time());


$para = "sergio.lavilletta@gmail , sergio_pk@hotmail.com";
$asunto = "Contacto desde mi sitio web";

mail($para, $asunto, $comentario, $headers);

header("Location: exito.html");

?>