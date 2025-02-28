<?php
	

	$cnn = new mysqli("localhost","root","","user");
	if($cnn->connect_error)
	{
		die("Connection Failed".mysqli_connect_error());
	}
	else
	{
		echo "Connection Success";
	
		$sql = "create table feedback
			(
				Name varchar(50),
				Email varchar(50),
				Comment varchar(200)
			);"

		if($cnn->query($sql)==true)
		{
			echo "Table Created."
		}
		else
		{
			echo "Table Not Created."
		}
	}
	$cnn->close();
?>