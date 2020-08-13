<?php
    define("host","localhost");
    define("user","root");
    define("pass","");
    define("db","ReactCrud");
    
    function connect()
    {
        $connect=mysqli_connect(host,user,pass,db);
        return $connect;
    }
    $con=connect();
?>