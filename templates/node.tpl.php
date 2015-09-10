<section class="block">

	<?php

	if ($node->field_background_image){

		$url = file_create_url($node->field_background_image[$node->language][0]['uri']);

	?>

	<div class="wr-node node-<?php print $node->nid; ?>" style="background: url(<?php echo $url; ?>); background-size:cover; color:#ffffff;">

	<?php 

	}

	else{

	?>

	<div class="wr-node node-<?php print $node->nid; ?>" style="color:#131313;">

	<?php

	}

	?>

	<?php if ($node->nid==32): ?>
		<div class="logo"></div>
	<?php endif; ?>

	<?php print render($content); ?>
	</div>
</section>