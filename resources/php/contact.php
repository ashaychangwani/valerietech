<?php
    $name=$_POST["name"];
    $email=$_POST["email"];
    $phone=$_POST["phone"];
    $find=$_POST["otherFind"];

    $recipient="team@valerietech.in";
    
    $subject="[Contact] for $name";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Source: $findUs\n";
    $email_content .= "Other (source): $otherFind\n";


    $email_headers="From: $name <$email>";

    mail($recipient,$subject,$email_content,$email_headers);

    header("Location: http://www.valerietech.in");
?>