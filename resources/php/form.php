<?php
    $name=$_POST["name"];
    //$name=str_replace(array("\r","\n"),array(" "," "),$name);
    //$email=filter_var(trim($_GET["email"]), //FILTER_SANITIZE_EMAIL);
    $message="Test";
    //$price=$_GET["amount"];
    
    echo "<pre> Name:$name";
    print_r($_POST);
    echo "</pre>";

    $recipient="ashaychangwani@gmail.com";
    
    $subject="New contact from $name";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message: \n$message\n";


    $email_headers="From: $name <$email>";

//    echo "name: $name\nEmail: $email"
//    mail($recipient,$subject,$email_content,$email_headers);

//    header("Location: http://www.valerietech.in");
?>