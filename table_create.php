<?php
$cnn = new mysqli("localhost","root","","user");
if($cnn->connect_error)
{
      die("CONNECTION FAILED".mysqli_connect_error());
}
else
{
      echo "CONNECTION SUCCESSFULL"."<BR/>";

      if($cnn->query("create table feedback
                                 ( Name varchar(50) PRIMARY KEY,
	                 Email varchar(50) NOT NULL,
	                 Comments varchar(50) NOT NULL
	              ) ")==true) 
      {
            echo "TABLE CREATED";
      }
      else
      {
            echo "ERROR";
      }
}   
$cnn->close();
?>