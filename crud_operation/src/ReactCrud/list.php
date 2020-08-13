<?php
   header("Access-Control-Allow-Origin: *");
   header("Access-Control-Allow-Headers: access");
   header("Access-Control-Allow-Methods: POST");
   header("Content-Type: application/json; charset=UTF-8");
   header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    require("connect.php");
        $data=[];
        $qry="select * from user";
        if($res=mysqli_query($con,$qry))
        {
            $count=0;
        while($row=mysqli_fetch_assoc($res))
        {
        $data[$count]['id']=$row['id'];
         $data[$count]['Fname']=$row['FirstName'];
         $data[$count]['Mname']=$row['MiddleName'];
         $data[$count]['Lname']=$row['LastName'];
         $data[$count]['email']=$row['Email'];
         $count++;
        }
}
   echo json_encode($data);

?>