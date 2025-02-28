<?php
$cnn = new mysqli("localhost","root","","user");

$user_name = $_REQUEST['name'];
$user_em = $_REQUEST['email'];
$user_comm = $_REQUEST['comments'];

if($cnn->connect_error)
{
      die("CONNECTION FAILED".mysqli_connect_error());
}
else
{
      echo "CONNECTION SUCCESSFULL"."<BR/>";
      if($cnn->query("insert into feedback(Name,Email,Comments) values('$user_name','$user_em','$user_comm')")==true) 
      {
            echo "DATA INSERTED";
      }
      else
      {
            echo "ERROR";
      }
}   
$cnn->close();
?>