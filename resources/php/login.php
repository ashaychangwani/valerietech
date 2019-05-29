<?php
    ini_set('display_errors', 1);
    $conn = mysqli_connect("localhost", "valeriet_admin", "Valtech1A", "valeriet_users");
    
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT password from users where email = '".$email."'";
    $pass = $conn->query($sql);
    $result = $pass->fetch_assoc();
    if($password==$result['password'])
    {
        header("Location: http://www.valerietech.in/");
    }
    else
    {
        echo "Error";
    }
?>