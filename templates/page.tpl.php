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

	<?php print render($page["content"]); ?>

	<div class="footer">

		<div class="social">

			<ul>

				<li>
					<a href="https://www.facebook.com"></a>
				</li>

				<li>
					<a href="https://www.twitter.com"></a>
				</li>

				<li>
					<a href="https://instagram.com"></a>
				</li>

				<li>
					<a href="https://www.linkedin.com"></a>
				</li>
			</ul>
		</div>

		<div class="copyright">

			<p>&copy; World Relief. All Rights Reserved.</p>

			<p>7 East Baltimore Street, Baltimore MD 21202 | 443.451.1900</p>
		</div>
	</div>

	<?php if ($tabs): ?>
		<?php print render($tabs);?>
	<?php endif; ?>
</div>