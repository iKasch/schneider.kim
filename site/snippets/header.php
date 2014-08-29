<!DOCTYPE html>
<html lang="de">
<head>
	<meta charset="utf-8" />
	<title><?php echo html($site->title()) ?> | <?php echo html($page->title()) ?></title>
	<meta name="description" content="<?php echo html($site->description()) ?>" />
	<?php
		echo css(array(
			'assets/css/style.css',
		));
	?>

</head>
<body>
	<header>
		<div class="myface"></div>
		<div class="contentarea">
			<?php snippet('menu') ?>
		</div>
	</header>