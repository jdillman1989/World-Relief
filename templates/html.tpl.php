<!doctype html>
<html>
	<head>

		<?php print $head; ?>

		<meta charset="utf-8">

		<title><?php print $head_title; ?></title>

		<script src="https://use.typekit.net/wkx8tqv.js"></script>
		
		<script>try{Typekit.load({ async: true });}catch(e){}</script>

		<?php print $styles; ?>

		<!-- <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script> -->

		<?php print $scripts; ?>
	</head>

	<body>
		<?php print $page_top; ?>
		<?php print $page; ?>
		<?php print $page_bottom; ?>
	</body>
</html>