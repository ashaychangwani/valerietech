<?php
    $name=$_POST["name"];
    $email=$_POST["email"];
    $phone=$_POST["phone"];
    $amount=$_POST["amount"];
    $priority1=$_POST["priority1"];
    $priority2=$_POST["priority2"];
    $priority3=$_POST["priority3"];
    $specificReq=$_POST["specificReq"];
    $softwares1=$_POST["softwares1"];
    $softwares2=$_POST["softwares2"];
    $softwares3=$_POST["softwares3"];
    $otherSoftware=$_POST["otherSoftware"];
    $games1=$_POST["games1"];
    $games2=$_POST["games2"];
    $games3=$_POST["games3"];
    $otherGame=$_POST["otherGame"];


    $recipient="info@valerietech.in";
    
    $subject="[PC Build] for $name";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone number: $phone\n";
    $email_content .= "Amount: $amount\n";
    $email_content .= "Priority 1: $priority1\n";
    $email_content .= "Priority 2: $priority2\n";
    $email_content .= "Priority 3: $priority3\n";
    $email_content .= "Specific Requirements: $specificReq\n";
    $email_content .= "Software 1: $softwares1\n";
    $email_content .= "Software 2: $softwares2\n";
    $email_content .= "Software 3: $softwares3\n";
    $email_content .= "Other Software: $otherSoftware\n";
    $email_content .= "Games 1: $games1\n";
    $email_content .= "Games 2: $games2\n";
    $email_content .= "Games 3: $games3\n";
    $email_content .= "Other Game: $otherGame\n";


    $email_headers="From: $name <$email>";

    mail($recipient,$subject,$email_content,$email_headers);

    header("Location: http://www.valerietech.in");
?>