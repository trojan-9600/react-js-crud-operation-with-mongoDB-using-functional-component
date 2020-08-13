<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require("connect.php");
$post=file_get_contents("php://input");
if(isset($post) && !empty($post))
{
    $data=json_decode($post);
    $Fname=$data->firstname;
    $Mname=$data->middlename;
    $Lname=$data->lastname;
    $email=$data->email;
    $res=mysqli_query($con,"insert into user values(null,'$Fname','$Mname','$Lname','$email');");
    if($res==true)
    {
            print_r("query successfull");
    }
    else{
        print_r("query error");
    }
}

?>