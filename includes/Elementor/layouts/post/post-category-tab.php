<div class="tabs">
    <!-- Tab Navigation -->
    <ul class="nav nav-tabs justify-content-center" id="postTabs">
        <li class="nav-item">
            <button class="nav-link active" data-category="all">
                <?php echo esc_html__('All', 'elementor-magic-kit'); ?>
            </button>
        </li>
        <?php if (!empty($settings['emk__get_post_in'])) {
            foreach ($settings['emk__get_post_in'] as $cat) {
                $term = get_term($cat); ?>
                <li class="nav-item">
                    <button class="nav-link" data-category="<?php echo esc_attr($term->term_id); ?>">
                        <?php echo esc_html($term->name); ?>
                    </button>
                </li>
            <?php }
        } ?>
    </ul>

    <!-- Posts Container -->
    <div class="row mt-5 posts-container">
        <?php if (!empty($query->have_posts())) {
            while ($query->have_posts()) : $query->the_post();
                $date = get_the_date('F d, Y');
                $categories = wp_get_post_terms(get_the_ID(), 'category'); 
                $category_classes = '';
                foreach ($categories as $category) {
                    $category_classes .= ' category-' . $category->term_id;
                } ?>
                <div class="col-lg-4 col-md-6 col-sm-12 post-item<?php echo esc_attr($category_classes); ?>">
                    <div class="post">
                        <div class="post-wrapper">
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="img-container">
                                    <?php the_post_thumbnail('full'); ?>
                                </div>
                            <?php endif; ?>
                        </div>
                        <div class="post-content">
                            <h3><?php the_title('<h3 class="m-0"><a class="post-title text-decoration-none" href="' . get_the_permalink() . '">', '</a></h3>'); ?></h3>
                            <div class="author">
                                <span><?php the_author(); ?></span>
                                <span>--</span>
                                <span><?php echo esc_html($date); ?></span>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endwhile;
        } else {
            echo esc_html__('No posts found.', 'elementor-magic-kit');
        } ?>
    </div>
</div>
