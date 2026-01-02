<?php  if( $header_layout == 'layout-one' ) { ?>
<header>
    <div class="container magic-menu" style="display:flex;justify-content:space-between;align-items:center;padding:20px 0;">
        <!-- Search -->
        <?php if($settings['show_search']=='yes'): ?>
            <button class="menu-search">
                <?php \Elementor\Icons_Manager::render_icon( $settings['search_icon'], [ 'aria-hidden' => 'true' ] ); ?>
            </button>
        <?php endif; ?> 
        <!-- Left Menu -->
        <nav class="nav-menu-left">
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
            <a class="menu-logo" href="<?php echo esc_url(home_url()); ?>">
                <img src="<?php echo esc_url($settings['logo']['url']); ?>">
            </a>
        <?php endif; ?>
        <!-- Right Menu -->
        <nav class="nav-menu-right">
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