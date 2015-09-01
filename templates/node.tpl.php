<section class="block">

	<div class="node node-<?php print $node->nid; ?>">

		<?php if ($node->nid==1): ?>
			<div class="logo"></div>
		<?php endif; ?>

		<?php print render($content); ?>
	</div>
</section>