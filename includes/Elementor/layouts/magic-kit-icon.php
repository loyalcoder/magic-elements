<div class="icon-wrapper" style="display: flex; transition: <?php echo $settings['box_hover_duration']; ?>s all;">
	<div class="magic-kit-icon">
        <?php \Elementor\Icons_Manager::render_icon( $settings['icon'], [ 'aria-hidden' => 'true' ] ); ?>
    </div>
    <div class="icon-box-content">
        <div class="magic-kit-icon-title">
            <h2 class="title" style="transition:<?php echo $settings['box_hover_duration']; ?>s all;">
                <?php echo $settings['icon_box_title']; ?>
            </h2>
            <?php  echo '<' . $settings['html_tag'] . '>' . $settings['icon_box_title'] . '</' . $settings['html_tag'] . '>'; ?>
        </div>
        <div class="magic-kit-icon-description">
            <p class="description" style="transition:<?php echo $settings['box_hover_duration']; ?>s all;">
                <?php echo $settings['icon_box_description']; ?>
            </p>
        </div>
    </div>
</div>