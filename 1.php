<?php

$nombre = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$comments = $_POST['comments'];

$formcontent="
    Nombre: $name \n
    E-mail: $email \n
    Asunto: $subject \n
    Comentarios: $comments
";

$recipient = "sergio.lavilletta@gmailcom, sergio_pk@hotmail.com";

$header = "From: $email \r\n";
$header .= "Content-Type: text/plain; charset=UTF-8";
mail($recipient, $formcontent, $header) or die("Error!");
header("Location: index.html");

?>