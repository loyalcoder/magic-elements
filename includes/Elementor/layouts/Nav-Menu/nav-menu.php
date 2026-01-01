<?php  if( $header_layout == 'layout-one' ) { ?>
<header>
    <div class="cnw-container" style="display:flex;justify-content:space-between;align-items:center;padding:10px 20px;">
        <!-- Search -->
        <?php if($settings['show_search']=='yes'): ?>
            <button class="cnw-search">
                <?php \Elementor\Icons_Manager::render_icon( $settings['search_icon'], [ 'aria-hidden' => 'true' ] ); ?>
            </button>
        <?php endif; ?>
        <!-- Left Menu -->
        <nav class="cnw-menu-left">
            <?php
            if(!empty($settings['menu_select'])){
                wp_nav_menu([
                    'menu' => $settings['menu_select'],
                    'container' => false,
                    'menu_class' => 'cnw-nav'
                ]);
            }
            ?>
        </nav>
            <!-- Logo -->
        <?php if(!empty($settings['logo']['url'])): ?>
            <a class="cnw-logo" href="<?php echo esc_url(home_url()); ?>">
                <img src="<?php echo esc_url($settings['logo']['url']); ?>" style="height:50px;">
            </a>
        <?php endif; ?>

        <!-- Right Menu -->
        <nav class="cnw-menu-right">
            <?php
            if(!empty($settings['menu_select_right'])){
                wp_nav_menu([
                    'menu' => $settings['menu_select_right'],
                    'container' => false,
                    'menu_class' => 'cnw-nav'
                ]);
            }
            ?>
        </nav>
        <!-- Mobile Menu Icon -->
        <?php if($settings['show_mobile_menu_icon']=='yes'): ?>
            <button class="mobile-menu">
                <?php \Elementor\Icons_Manager::render_icon( $settings['mobile_menu_icon'], [ 'aria-hidden' => 'true' ] ); ?>
            </button>
        <?php endif; ?>
    </div>
</header>
<?php }elseif( $header_layout == 'layout-two' ){ ?>
    <h3>Layout two</h3>
<?php }elseif( $header_layout == 'layout-three' ){ ?>
    <h3>Layout three</h3>
<?php }?>  