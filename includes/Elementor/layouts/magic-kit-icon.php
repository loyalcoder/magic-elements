<div class="icon-wrapper" style="display: flex; transition: <?php echo $settings['box_hover_duration']; ?>s all;">
	<div class="magic-kit-icon">
        <?php \Elementor\Icons_Manager::render_icon( $settings['icon'], [ 'aria-hidden' => 'true' ] ); ?>
    </div>
    <div class="icon-box-content">
        <div class="magic-kit-icon-title">
            <?php  echo '<' . $settings['html_tag'] . ' ' . 'class="title"' .'>' ?><?php echo $addlinkaft . ' ' . 'style="transition:' . $settings['box_hover_duration'] . 's all;"' .'>' . $settings['icon_box_title'] . $addlinkpre . '</' . $settings['html_tag'] . '>'; ?>      
        </div>
        <div class="magic-kit-icon-description">
            <p class="description" style="transition:<?php echo $settings['box_hover_duration']; ?>s all;">
                <?php echo $settings['icon_box_description']; ?>
            </p>
        </div>
    </div>
</div>