<?php
	$cnn = new mysqli("localhost","root","");
	if($cnn->connect_error)
	{
		die("Connection Failed".mysqli_connect_error());
	}
	else
	{
		echo "Connection Success";
	
		$sql = "create database user";
		if($cnn->query($sql)==true)
		{
			echo "Database Created";
		}
		else
		{
			echo "Database Not Created";
		}
	}
	$cnn -> close();
?>
