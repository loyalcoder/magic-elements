<div class="feature_list">
    <h2><?php echo esc_html($settings['feature_list_title']); ?></h2>
    <div>
        <?php if(!empty($feature_list)){
            foreach($feature_list as $list){
                $icon = $list['feature_list_icons']['value'];
                $text = $list['feature_list_item']; ?>
                <div class="feture">
                    <i class="<?php echo esc_attr($icon); ?> feature_icon"></i>
                    <h4><?php echo esc_html($text); ?></h4>
                </div>
        <?php    }
        }else{
            echo esc_html__("Feature list not found", "elementor-magic-kit");
        } ?>
    </div>
    <div class="feature_button">
        <?php 
            if ( ! empty( $settings['button_link']['url'] ) ) {
                $this->add_link_attributes( 'button_link', $settings['button_link'] );
            }
        ?>
        <a <?php $this->print_render_attribute_string( 'button_link' ); ?>>
			<?php echo esc_html($settings['button_text']); ?>
		</a>
    </div>
</div>