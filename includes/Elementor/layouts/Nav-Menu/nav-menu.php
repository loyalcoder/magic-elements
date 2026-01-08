<?php  if( $header_layout == 'layout-one' ) { ?>
<header class="magic-header <?php echo ($settings['enable_sticky'] === 'yes') ? 'is-sticky' : ''; ?>">
    <div class="container magic-menu" style="display:flex;justify-content:space-between;align-items:center;padding:20px 0;">
        <!-- Search -->

        <?php if($settings['show_search']=='yes'): ?>
            <button class="menu-search open_search">
                <?php \Elementor\Icons_Manager::render_icon( $settings['search_icon'], [ 'aria-hidden' => 'true' ] ); ?>
            </button>
            <div class="search_block">
                <div class="search_box">
                    <div class="inner">
                        <form action="<?php echo esc_url( home_url('/') ); ?>" method="get">
                            <input type="search" name="s" id="search" class="search_input" autocomplete="off" placeholder="Search Here ..." value="<?php echo get_search_query(); ?>" />
                            <button type="submit">
                                <?php echo esc_html($settings['search_button_title']); ?>
                            </button>
                        </form>
                    </div>
                </div>
                <div class="overlayer"></div>
            </div>
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
        <!-- Mobile Menu -->
        <!-- Icon -->
        <?php if($settings['show_mobile_menu_icon']=='yes'): ?>
        <button class="btn btn-primary mobile-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <?php \Elementor\Icons_Manager::render_icon( $settings['mobile_menu_icon'], [ 'aria-hidden' => 'true' ] ); ?>
        </button>
        <?php endif; ?>
        <!-- Offcanvas -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h3 id="offcanvasRightLabel"><?php echo esc_html($settings['offcanvas_title']); ?></h3>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
            </div>
            <div><p class="offcanvas_description"><?php echo esc_html($settings['offcanvas_description']); ?></p></div>
            <div class="offcanvas-body">
                <?php
                    if(!empty($settings['menu_select'])){
                        wp_nav_menu([
                            'menu' => $settings['menu_select'],
                            'container' => false,
                            'menu_class' => 'cnw-nav'
                        ]);
                    }
                ?>
                <?php
                    if(!empty($settings['menu_select_right'])){
                        wp_nav_menu([
                            'menu' => $settings['menu_select_right'],
                            'container' => false,
                            'menu_class' => 'cnw-nav'
                        ]);
                    }
                ?>
            </div>
        </div>
        <!-- Mobile Menu End-->
    </div>
</header>
<?php }elseif( $header_layout == 'layout-two' ){ ?>
<header class="magic-header <?php echo ($settings['enable_sticky'] === 'yes') ? 'is-sticky' : ''; ?>">
    <div class="container magic-menu" style="display:flex;justify-content:space-between;align-items:center;padding:20px 0;">
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
        <!-- Book Button -->
         <div class="book-button">
            <?php 
                if ( ! empty( $settings['book_button_link']['url'] ) ) {
                    $this->add_link_attributes( 'book_button_link', $settings['book_button_link'] );
                }
		    ?>
            <a <?php $this->print_render_attribute_string( 'book_button_link' ); ?>>
                <?php echo esc_html($settings['book_button_title']); ?>
            </a>
         </div>
        <!-- Book Button  End-->
          <!-- Mobile Menu -->
        <!-- Icon -->
        <?php if($settings['show_mobile_menu_icon']=='yes'): ?>
        <button class="btn btn-primary mobile-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <?php \Elementor\Icons_Manager::render_icon( $settings['mobile_menu_icon'], [ 'aria-hidden' => 'true' ] ); ?>
        </button>
        <?php endif; ?>
        <!-- Offcanvas -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h3 id="offcanvasRightLabel"><?php echo esc_html($settings['offcanvas_title']); ?></h3>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
            </div>
            <div><p class="offcanvas_description"><?php echo esc_html($settings['offcanvas_description']); ?></p></div>
            <div class="offcanvas-body">
                <?php
                    if(!empty($settings['menu_select'])){
                        wp_nav_menu([
                            'menu' => $settings['menu_select'],
                            'container' => false,
                            'menu_class' => 'cnw-nav'
                        ]);
                    }
                ?>
                <?php
                    if(!empty($settings['menu_select_right'])){
                        wp_nav_menu([
                            'menu' => $settings['menu_select_right'],
                            'container' => false,
                            'menu_class' => 'cnw-nav'
                        ]);
                    }
                ?>
            </div>
        </div>
        <!-- Mobile Menu End-->
    </div>
</header>
<?php }elseif( $header_layout == 'layout-three' ){ ?>
<header class="magic-header <?php echo ($settings['enable_sticky'] === 'yes') ? 'is-sticky' : ''; ?>">
    <div class="container magic-menu" style="display:flex;justify-content:space-between;align-items:center;padding:20px 0;">
    <!-- Logo -->
        <?php if(!empty($settings['logo']['url'])): ?>
            <a class="menu-logo" href="<?php echo esc_url(home_url()); ?>">
                <img src="<?php echo esc_url($settings['logo']['url']); ?>">
            </a>
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
        <!-- Book Button -->
        <div class="right-side">
            <div class="call-us">
                <p><?php echo esc_html($settings['call_us_text']); ?></p>
            </div>
            <div class="book-button">
                <?php 
                    if ( ! empty( $settings['book_button_link']['url'] ) ) {
                        $this->add_link_attributes( 'book_button_link', $settings['book_button_link'] );
                    }
                ?>
                <a <?php $this->print_render_attribute_string( 'book_button_link' ); ?>>
                    <?php echo esc_html($settings['book_button_title']); ?>
                </a>
            </div>
        </div>
        <!-- Book Button  End-->
          <!-- Mobile Menu -->
        <!-- Icon -->
        <?php if($settings['show_mobile_menu_icon']=='yes'): ?>
        <button class="btn btn-primary mobile-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <?php \Elementor\Icons_Manager::render_icon( $settings['mobile_menu_icon'], [ 'aria-hidden' => 'true' ] ); ?>
        </button>
        <?php endif; ?>
        <!-- Offcanvas -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h3 id="offcanvasRightLabel"><?php echo esc_html($settings['offcanvas_title']); ?></h3>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
            </div>
            <div><p class="offcanvas_description"><?php echo esc_html($settings['offcanvas_description']); ?></p></div>
            <div class="offcanvas-body">
                <?php
                    if(!empty($settings['menu_select'])){
                        wp_nav_menu([
                            'menu' => $settings['menu_select'],
                            'container' => false,
                            'menu_class' => 'cnw-nav'
                        ]);
                    }
                ?>
                <?php
                    if(!empty($settings['menu_select_right'])){
                        wp_nav_menu([
                            'menu' => $settings['menu_select_right'],
                            'container' => false,
                            'menu_class' => 'cnw-nav'
                        ]);
                    }
                ?>
            </div>
        </div>
        <!-- Mobile Menu End-->
    </div>
</header>
<?php }?>  