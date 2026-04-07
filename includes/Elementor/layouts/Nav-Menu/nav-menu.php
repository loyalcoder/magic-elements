<?php
$show_custom_mobile_menu_icon = isset( $settings['show_mobile_menu_icon'] ) && 'yes' === $settings['show_mobile_menu_icon'];
$mobile_menu_button_classes   = $show_custom_mobile_menu_icon ? 'btn btn-primary mobile-menu' : 'btn btn-primary mobile-menu mobile-menu-fallback-trigger';
if( $header_layout == 'layout-one' ) { ?>
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
        <button class="<?php echo esc_attr( $mobile_menu_button_classes ); ?>" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <?php if ( $show_custom_mobile_menu_icon ) : ?>
                <?php \Elementor\Icons_Manager::render_icon( $settings['mobile_menu_icon'], [ 'aria-hidden' => 'true' ] ); ?>
            <?php else : ?>
                <span class="mobile-menu-fallback-icon" aria-hidden="true">&#9776;</span>
                <span class="screen-reader-text"><?php echo esc_html__( 'Open menu', 'magic-elements' ); ?></span>
            <?php endif; ?>
        </button>
        <!-- Offcanvas -->
        <?php $offcanvas_style = isset($settings['offcanvas_style']) ? $settings['offcanvas_style'] : 'sidebar'; ?>
        <?php if ( $offcanvas_style === 'fullscreen' ) : ?>
            <div class="offcanvas offcanvas-end offcanvas-fullscreen" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close text-reset me-close" data-bs-dismiss="offcanvas" aria-label="Close">
                        <?php if ( ! empty( $settings['offcanvas_close_icon']['url'] ) ) : ?>
                            <img src="<?php echo esc_url( $settings['offcanvas_close_icon']['url'] ); ?>" alt="<?php echo esc_attr__( 'Close', 'magic-elements' ); ?>">
                        <?php elseif ( ! empty( $settings['offcanvas_close_icon_picker']['value'] ) ) : ?>
                            <?php \Elementor\Icons_Manager::render_icon( $settings['offcanvas_close_icon_picker'], [ 'aria-hidden' => 'true' ] ); ?>
                        <?php else : ?>
                            <span aria-hidden="true">&times;</span>
                        <?php endif; ?>
                    </button>
                </div>
                <div class="offcanvas-body fullscreen-wrapper">
                    <div class="fullscreen-left">
                        <?php if ( ! empty( $settings['offcanvas_fullscreen_logo']['url'] ) ) : ?>
                            <img class="offcanvas-fs-logo" src="<?php echo esc_url( $settings['offcanvas_fullscreen_logo']['url'] ); ?>" alt="<?php echo esc_attr( get_bloginfo('name') ); ?>">
                        <?php endif; ?>
                        <div class="contact-block">
                            <h6><?php echo esc_html__( 'Email', 'magic-elements' ); ?></h6>
                            <?php if ( ! empty( $settings['offcanvas_email'] ) ) : ?>
                                <p><?php echo esc_html( $settings['offcanvas_email'] ); ?></p>
                            <?php endif; ?>
                        </div>
                        <div class="contact-block">
                            <h6><?php echo esc_html__( 'Phone', 'magic-elements' ); ?></h6>
                            <?php if ( ! empty( $settings['offcanvas_phone'] ) ) : ?>
                                <p><?php echo esc_html( $settings['offcanvas_phone'] ); ?></p>
                            <?php endif; ?>
                        </div>
                        <div class="contact-block">
                            <h6><?php echo esc_html__( 'Address', 'magic-elements' ); ?></h6>
                            <?php if ( ! empty( $settings['offcanvas_address'] ) ) : ?>
                                <p><?php echo esc_html( $settings['offcanvas_address'] ); ?></p>
                            <?php endif; ?>
                        </div>
                        <div class="fullscreen-left-footer">
                            <div class="fullscreen-copyright">
                                <span><?php echo esc_html__( '© All rights reserved', 'magic-elements' ); ?></span>
                                <span><?php echo esc_html__( 'by', 'magic-elements' ); ?> <?php echo esc_html( get_bloginfo( 'name' ) ); ?></span>
                            </div>
                            <form class="fullscreen-search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get">
                                <input type="search" name="s" class="fullscreen-search-input" autocomplete="off" placeholder="<?php echo esc_attr__( 'Search here', 'magic-elements' ); ?>" value="<?php echo esc_attr( get_search_query() ); ?>" />
                                <button type="submit" class="fullscreen-search-btn" aria-label="<?php echo esc_attr__( 'Search', 'magic-elements' ); ?>">
                                    <?php if ( ! empty( $settings['offcanvas_search_icon']['url'] ) ) : ?>
                                        <img src="<?php echo esc_url( $settings['offcanvas_search_icon']['url'] ); ?>" alt="<?php echo esc_attr__( 'Search', 'magic-elements' ); ?>">
                                    <?php else : ?>
                                        <span class="fullscreen-search-btn-fallback" aria-hidden="true"><?php echo esc_html__( 'Go', 'magic-elements' ); ?></span>
                                    <?php endif; ?>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="fullscreen-right">
                        <?php if ( ! empty( $settings['offcanvas_fullscreen_logo']['url'] ) ) : ?>
                            <div class="fs-mobile-logo">
                                <img src="<?php echo esc_url( $settings['offcanvas_fullscreen_logo']['url'] ); ?>" alt="<?php echo esc_attr( get_bloginfo('name') ); ?>">
                            </div>
                        <?php endif; ?>
                        <!-- Title/Description only for sidebar; intentionally omitted here -->
                        <div class="fullscreen-menus">
                            <?php
                                if(!empty($settings['menu_select'])){
                                    wp_nav_menu([
                                        'menu' => $settings['menu_select'],
                                        'container' => false,
                                        'menu_class' => 'cnw-nav cnw-nav-fullscreen'
                                    ]);
                                }
                            ?>
                            <?php
                                if(!empty($settings['menu_select_right'])){
                                    wp_nav_menu([
                                        'menu' => $settings['menu_select_right'],
                                        'container' => false,
                                        'menu_class' => 'cnw-nav cnw-nav-fullscreen'
                                    ]);
                                }
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        <?php else : ?>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <?php if ( ! empty( $settings['offcanvas_sidebar_logo']['url'] ) ) : ?>
                        <div class="offcanvas-sidebar-logo" id="offcanvasRightLabel">
                            <img src="<?php echo esc_url( $settings['offcanvas_sidebar_logo']['url'] ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">
                        </div>
                    <?php endif; ?>
                    <button type="button" class="btn-close text-reset me-close" data-bs-dismiss="offcanvas" aria-label="Close">
                        <?php if ( ! empty( $settings['offcanvas_close_icon']['url'] ) ) : ?>
                            <img src="<?php echo esc_url( $settings['offcanvas_close_icon']['url'] ); ?>" alt="<?php echo esc_attr__( 'Close', 'magic-elements' ); ?>">
                        <?php elseif ( ! empty( $settings['offcanvas_close_icon_picker']['value'] ) ) : ?>
                            <?php \Elementor\Icons_Manager::render_icon( $settings['offcanvas_close_icon_picker'], [ 'aria-hidden' => 'true' ] ); ?>
                        <?php else : ?>
                            <span aria-hidden="true">&times;</span>
                        <?php endif; ?>
                    </button>
                </div>
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
        <?php endif; ?>
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
        <button class="<?php echo esc_attr( $mobile_menu_button_classes ); ?>" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <?php if ( $show_custom_mobile_menu_icon ) : ?>
                <?php \Elementor\Icons_Manager::render_icon( $settings['mobile_menu_icon'], [ 'aria-hidden' => 'true' ] ); ?>
            <?php else : ?>
                <span class="mobile-menu-fallback-icon" aria-hidden="true">&#9776;</span>
                <span class="screen-reader-text"><?php echo esc_html__( 'Open menu', 'magic-elements' ); ?></span>
            <?php endif; ?>
        </button>
        <!-- Offcanvas -->
        <?php $offcanvas_style = isset($settings['offcanvas_style']) ? $settings['offcanvas_style'] : 'sidebar'; ?>
        <?php if ( $offcanvas_style === 'fullscreen' ) : ?>
            <div class="offcanvas offcanvas-end offcanvas-fullscreen" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close text-reset me-close" data-bs-dismiss="offcanvas" aria-label="Close">
                        <?php if ( ! empty( $settings['offcanvas_close_icon']['url'] ) ) : ?>
                            <img src="<?php echo esc_url( $settings['offcanvas_close_icon']['url'] ); ?>" alt="<?php echo esc_attr__( 'Close', 'magic-elements' ); ?>">
                        <?php elseif ( ! empty( $settings['offcanvas_close_icon_picker']['value'] ) ) : ?>
                            <?php \Elementor\Icons_Manager::render_icon( $settings['offcanvas_close_icon_picker'], [ 'aria-hidden' => 'true' ] ); ?>
                        <?php else : ?>
                            <span aria-hidden="true">&times;</span>
                        <?php endif; ?>
                    </button>
                </div>
                <div class="offcanvas-body fullscreen-wrapper">
                    <div class="fullscreen-left">
                        <?php if ( ! empty( $settings['offcanvas_fullscreen_logo']['url'] ) ) : ?>
                            <img class="offcanvas-fs-logo" src="<?php echo esc_url( $settings['offcanvas_fullscreen_logo']['url'] ); ?>" alt="<?php echo esc_attr( get_bloginfo('name') ); ?>">
                        <?php endif; ?>
                        <div class="contact-block">
                            <h6><?php echo esc_html__( 'Email', 'magic-elements' ); ?></h6>
                            <?php if ( ! empty( $settings['offcanvas_email'] ) ) : ?>
                                <p><?php echo esc_html( $settings['offcanvas_email'] ); ?></p>
                            <?php endif; ?>
                        </div>
                        <div class="contact-block">
                            <h6><?php echo esc_html__( 'Phone', 'magic-elements' ); ?></h6>
                            <?php if ( ! empty( $settings['offcanvas_phone'] ) ) : ?>
                                <p><?php echo esc_html( $settings['offcanvas_phone'] ); ?></p>
                            <?php endif; ?>
                        </div>
                        <div class="contact-block">
                            <h6><?php echo esc_html__( 'Address', 'magic-elements' ); ?></h6>
                            <?php if ( ! empty( $settings['offcanvas_address'] ) ) : ?>
                                <p><?php echo esc_html( $settings['offcanvas_address'] ); ?></p>
                            <?php endif; ?>
                        </div>
                        <div class="fullscreen-left-footer">
                            <div class="fullscreen-copyright">
                                <span><?php echo esc_html__( '© All rights reserved', 'magic-elements' ); ?></span>
                                <span><?php echo esc_html__( 'by', 'magic-elements' ); ?> <?php echo esc_html( get_bloginfo( 'name' ) ); ?></span>
                            </div>
                            <form class="fullscreen-search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get">
                                <input type="search" name="s" class="fullscreen-search-input" autocomplete="off" placeholder="<?php echo esc_attr__( 'Search here', 'magic-elements' ); ?>" value="<?php echo esc_attr( get_search_query() ); ?>" />
                                <button type="submit" class="fullscreen-search-btn" aria-label="<?php echo esc_attr__( 'Search', 'magic-elements' ); ?>">
                                    <?php if ( ! empty( $settings['offcanvas_search_icon']['url'] ) ) : ?>
                                        <img src="<?php echo esc_url( $settings['offcanvas_search_icon']['url'] ); ?>" alt="<?php echo esc_attr__( 'Search', 'magic-elements' ); ?>">
                                    <?php else : ?>
                                        <span class="fullscreen-search-btn-fallback" aria-hidden="true"><?php echo esc_html__( 'Go', 'magic-elements' ); ?></span>
                                    <?php endif; ?>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="fullscreen-right">
                        <?php if ( ! empty( $settings['offcanvas_fullscreen_logo']['url'] ) ) : ?>
                            <div class="fs-mobile-logo">
                                <img src="<?php echo esc_url( $settings['offcanvas_fullscreen_logo']['url'] ); ?>" alt="<?php echo esc_attr( get_bloginfo('name') ); ?>">
                            </div>
                        <?php endif; ?>
                        <!-- Title/Description only for sidebar; intentionally omitted here -->
                        <div class="fullscreen-menus">
                            <?php
                                if(!empty($settings['menu_select'])){
                                    wp_nav_menu([
                                        'menu' => $settings['menu_select'],
                                        'container' => false,
                                        'menu_class' => 'cnw-nav cnw-nav-fullscreen'
                                    ]);
                                }
                            ?>
                            <?php
                                if(!empty($settings['menu_select_right'])){
                                    wp_nav_menu([
                                        'menu' => $settings['menu_select_right'],
                                        'container' => false,
                                        'menu_class' => 'cnw-nav cnw-nav-fullscreen'
                                    ]);
                                }
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        <?php else : ?>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <?php if ( ! empty( $settings['offcanvas_sidebar_logo']['url'] ) ) : ?>
                        <div class="offcanvas-sidebar-logo" id="offcanvasRightLabel">
                            <img src="<?php echo esc_url( $settings['offcanvas_sidebar_logo']['url'] ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">
                        </div>
                    <?php endif; ?>
                    <button type="button" class="btn-close text-reset me-close" data-bs-dismiss="offcanvas" aria-label="Close">
                        <?php if ( ! empty( $settings['offcanvas_close_icon']['url'] ) ) : ?>
                            <img src="<?php echo esc_url( $settings['offcanvas_close_icon']['url'] ); ?>" alt="<?php echo esc_attr__( 'Close', 'magic-elements' ); ?>">
                        <?php elseif ( ! empty( $settings['offcanvas_close_icon_picker']['value'] ) ) : ?>
                            <?php \Elementor\Icons_Manager::render_icon( $settings['offcanvas_close_icon_picker'], [ 'aria-hidden' => 'true' ] ); ?>
                        <?php else : ?>
                            <span aria-hidden="true">&times;</span>
                        <?php endif; ?>
                    </button>
                </div>
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
        <?php endif; ?>
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
                <p><?php echo esc_html( $settings['call_us_text'] ); ?></p>
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
        <button class="<?php echo esc_attr( $mobile_menu_button_classes ); ?>" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <?php if ( $show_custom_mobile_menu_icon ) : ?>
                <?php \Elementor\Icons_Manager::render_icon( $settings['mobile_menu_icon'], [ 'aria-hidden' => 'true' ] ); ?>
            <?php else : ?>
                <span class="mobile-menu-fallback-icon" aria-hidden="true">&#9776;</span>
                <span class="screen-reader-text"><?php echo esc_html__( 'Open menu', 'magic-elements' ); ?></span>
            <?php endif; ?>
        </button>
        <!-- Offcanvas -->
        <?php $offcanvas_style = isset($settings['offcanvas_style']) ? $settings['offcanvas_style'] : 'sidebar'; ?>
        <?php if ( $offcanvas_style === 'fullscreen' ) : ?>
            <div class="offcanvas offcanvas-end offcanvas-fullscreen" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close text-reset me-close" data-bs-dismiss="offcanvas" aria-label="Close">
                        <?php if ( ! empty( $settings['offcanvas_close_icon']['url'] ) ) : ?>
                            <img src="<?php echo esc_url( $settings['offcanvas_close_icon']['url'] ); ?>" alt="<?php echo esc_attr__( 'Close', 'magic-elements' ); ?>">
                        <?php endif; ?>
                    </button>
                </div>
                <div class="offcanvas-body fullscreen-wrapper">
                    <div class="fullscreen-left">
                        <?php if ( ! empty( $settings['offcanvas_fullscreen_logo']['url'] ) ) : ?>
                            <img class="offcanvas-fs-logo" src="<?php echo esc_url( $settings['offcanvas_fullscreen_logo']['url'] ); ?>" alt="<?php echo esc_attr( get_bloginfo('name') ); ?>">
                        <?php endif; ?>
                        <div class="contact-block">
                            <h6><?php echo esc_html__( 'Email', 'magic-elements' ); ?></h6>
                            <?php if ( ! empty( $settings['offcanvas_email'] ) ) : ?>
                                <p><?php echo esc_html( $settings['offcanvas_email'] ); ?></p>
                            <?php endif; ?>
                        </div>
                        <div class="contact-block">
                            <h6><?php echo esc_html__( 'Phone', 'magic-elements' ); ?></h6>
                            <?php if ( ! empty( $settings['offcanvas_phone'] ) ) : ?>
                                <p><?php echo esc_html( $settings['offcanvas_phone'] ); ?></p>
                            <?php endif; ?>
                        </div>
                        <div class="contact-block">
                            <h6><?php echo esc_html__( 'Address', 'magic-elements' ); ?></h6>
                            <?php if ( ! empty( $settings['offcanvas_address'] ) ) : ?>
                                <p><?php echo esc_html( $settings['offcanvas_address'] ); ?></p>
                            <?php endif; ?>
                        </div>
                        <div class="fullscreen-left-footer">
                            <div class="fullscreen-copyright">
                                <span><?php echo esc_html__( '© All rights reserved', 'magic-elements' ); ?></span>
                                <span><?php echo esc_html__( 'by', 'magic-elements' ); ?> <?php echo esc_html( get_bloginfo( 'name' ) ); ?></span>
                            </div>
                            <form class="fullscreen-search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get">
                                <input type="search" name="s" class="fullscreen-search-input" autocomplete="off" placeholder="<?php echo esc_attr__( 'Search here', 'magic-elements' ); ?>" value="<?php echo esc_attr( get_search_query() ); ?>" />
                                <button type="submit" class="fullscreen-search-btn" aria-label="<?php echo esc_attr__( 'Search', 'magic-elements' ); ?>">
                                    <?php if ( ! empty( $settings['offcanvas_search_icon']['url'] ) ) : ?>
                                        <img src="<?php echo esc_url( $settings['offcanvas_search_icon']['url'] ); ?>" alt="<?php echo esc_attr__( 'Search', 'magic-elements' ); ?>">
                                    <?php else : ?>
                                        <span class="fullscreen-search-btn-fallback" aria-hidden="true"><?php echo esc_html__( 'Go', 'magic-elements' ); ?></span>
                                    <?php endif; ?>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="fullscreen-right">
                        <?php if ( ! empty( $settings['offcanvas_fullscreen_logo']['url'] ) ) : ?>
                            <div class="fs-mobile-logo">
                                <img src="<?php echo esc_url( $settings['offcanvas_fullscreen_logo']['url'] ); ?>" alt="<?php echo esc_attr( get_bloginfo('name') ); ?>">
                            </div>
                        <?php endif; ?>
                        <!-- Title/Description only for sidebar; intentionally omitted here -->
                        <div class="fullscreen-menus">
                            <?php
                                if(!empty($settings['menu_select'])){
                                    wp_nav_menu([
                                        'menu' => $settings['menu_select'],
                                        'container' => false,
                                        'menu_class' => 'cnw-nav cnw-nav-fullscreen'
                                    ]);
                                }
                            ?>
                            <?php
                                if(!empty($settings['menu_select_right'])){
                                    wp_nav_menu([
                                        'menu' => $settings['menu_select_right'],
                                        'container' => false,
                                        'menu_class' => 'cnw-nav cnw-nav-fullscreen'
                                    ]);
                                }
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        <?php else : ?>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <?php if ( ! empty( $settings['offcanvas_sidebar_logo']['url'] ) ) : ?>
                        <div class="offcanvas-sidebar-logo" id="offcanvasRightLabel">
                            <img src="<?php echo esc_url( $settings['offcanvas_sidebar_logo']['url'] ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">
                        </div>
                    <?php endif; ?>
                    <button type="button" class="btn-close text-reset me-close" data-bs-dismiss="offcanvas" aria-label="Close">
                        <?php if ( ! empty( $settings['offcanvas_close_icon']['url'] ) ) : ?>
                            <img src="<?php echo esc_url( $settings['offcanvas_close_icon']['url'] ); ?>" alt="<?php echo esc_attr__( 'Close', 'magic-elements' ); ?>">
                        <?php endif; ?>
                    </button>
                </div>
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
        <?php endif; ?>
        <!-- Mobile Menu End-->
    </div>
</header>
<?php }else{ ?>
    <h3>Any Layout not Found</h3>
<?php }?>  