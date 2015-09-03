<section class="block">

	<div class="wr-node node-<?php print $node->nid; ?>">

		<?php if ($node->nid==32): ?>
			<div class="logo"></div>
		<?php endif; ?>

		<?php print render($content); ?>
	</div>
</section>