<?php
	
	$server="sql102.epizy.com";
	$username="epiz_25937455";
	$password="ctmsTbsVlsP85";
	$dbname="epiz_25937455_gokulramsample";
	
	$conn = mysqli_connect($server,$username, $password, $dbname);
	
	if(!$conn){
			die("Connection Failed:".mysqli_connect_error());
	
	}
	
?>