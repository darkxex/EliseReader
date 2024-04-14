<?php

	$filename = "https://visortmo.ws/manga/doctor-elise/". $_GET['link'] ."/1";
	$content = file_get_contents($filename);
	
	echo $content;
?>