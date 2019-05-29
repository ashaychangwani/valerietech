<?php
    ini_set('display_errors', 1);
    $conn = mysqli_connect("localhost", "valeriet_admin", "Valtech1A", "valeriet_users");
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $conf = $_POST['confirm-password'];
    $phone = $_POST['phone'];
    
    if($password==$conf)
    {
        $sql = "INSERT INTO users (name, email, password, number) VALUES ('$name', '$email', '$password', '$phone')";
        if($conn->query($sql))
        {
            header("Location: http://www.valerietech.in/");
        }
    }
    else
    {
        echo "Error";
    }
?>