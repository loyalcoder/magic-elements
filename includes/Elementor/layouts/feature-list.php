<div>
    <h2><?php echo esc_html($settings['feature_list_title']); ?></h2>
    <div class="feature_list">
        <?php if(!empty($feature_list)){
            foreach($feature_list as $list){
                $icon = $list['feature_list_icons']['value'];
                $text = $list['feature_list_item']; ?>
                <div class="feture">
                    <i class="<?php echo esc_attr($icon); ?>"></i>
                    <h2><?php echo esc_html($text); ?></h2>
                </div>
        <?php    }
        }else{
            echo esc_html__("Feature list not found", "elementor-magic-kit");
        } ?>
    </div>
</div>