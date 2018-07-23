<?php
    $name=$_POST["name"];
    $email=$_POST["email"];
    $find=$_POST["otherFind"];

    $recipient="ashaychangwani@gmail.com";
    
    $subject="[Contact] for $name";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Source: $find\n";


    $email_headers="From: $name <$email>";

    mail($recipient,$subject,$email_content,$email_headers);

    header("Location: http://www.valerietech.in");
?>