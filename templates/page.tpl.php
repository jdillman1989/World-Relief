<div class="container">
	
	<header class="nav animate position">

		<?php 
			print theme(
				'links__system_main_menu', 
				array('links' => $main_menu, 'attributes' => array('class' => 'main-nav'))
			); 
		?>
	</header>

	<div class="mobile-menu animate">

		<div class="mobile-icon-first mobile-icon animate"></div>

		<div class="mobile-icon-second mobile-icon animate"></div>

		<div class="mobile-icon-third mobile-icon animate"></div>
	</div>

	<?php if ($tabs): ?>
		<?php print render($tabs);?>
	<?php endif; ?>

	<?php print render($page["content"]); ?>
</div>