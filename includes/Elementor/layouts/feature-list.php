<?php 
// Prevent direct access to the file
    if (!defined('ABSPATH')) {
        exit;
    }
?>
<div class="feature_list">
    <h2><?php echo esc_html($settings['feature_list_title']); ?></h2>
    <div class="feature_rep">
        <?php if(!empty($feature_list)){
            foreach($feature_list as $list){
                $text = $list['feature_list_item']; ?>
                <div class="feature">
                    <?php \Elementor\Icons_Manager::render_icon( $list['feature_list_icons'], [ 'aria-hidden' => 'true' ] ); ?>
                    <h4><?php echo esc_html($text); ?></h4>
                </div>
        <?php    }
        }else{
            echo esc_html__("Feature list not found", "magic-elements");
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