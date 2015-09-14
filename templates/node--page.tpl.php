<section class="block">

	<?php

	hide($content['field_background_image']);
	hide($content['field_background_color']);

	if ($node->field_background_image){

		$url = file_create_url($node->field_background_image[LANGUAGE_NONE][0]['uri']);

	?>

	<div class="wr-node node-<?php print $node->nid; ?>" style="background: url(<?php echo $url; ?>); background-size:cover; color:#ffffff;">

	<?php 

	}

	elseif ($node->field_background_color) {

		switch ($node->field_background_color['und'][0]['value']) {
		    case "Green":
		        $bgcolor = "#7ac143";
		        break;
		    case "Gray":
		        $bgcolor = "#515151";
		        break;
		    case "Blue":
		        $bgcolor = "#2ba9e9";
		        break;
		    case "Yellow":
		        $bgcolor = "#efb111";
		        break;
		    default:
		        $bgcolor = "#2ba9e9";
		}

	?>

	<div class="wr-node node-<?php print $node->nid; ?>" style="background: <?php echo $bgcolor; ?>; color:#ffffff;">

	<?php

	}

	else{

	?>

	<div class="wr-node node-<?php print $node->nid; ?>" style="background: #ffffff; color:#131313;">

	<?php

	}

	?>

	<?php if ($node->nid==32): ?>
		<div class="logo"></div>
	<?php endif; ?>

	<?php print render($content); ?>
	</div>
</section>




