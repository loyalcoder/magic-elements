<div class="builder-list">

        <?php 
         $get_builders = isset($builder_posts['posts']) ? $builder_posts['posts'] : [];
        if (!empty($get_builders)) : ?>
            <table class="wp-list-table widefat fixed striped">
                <thead>
                    <tr>
                        <th><?php echo esc_html__('Title', 'magic-elements'); ?></th>
                        <th><?php echo esc_html__('Status', 'magic-elements'); ?></th>
                        <th><?php echo esc_html__('Display By', 'magic-elements'); ?></th>
                        <th><?php echo esc_html__('Display On', 'magic-elements'); ?></th>
                        <th><?php echo esc_html__('Actions', 'magic-elements'); ?></th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($builder_posts as $post) : 
                     include __DIR__."/loop/list.php";
                    endforeach; ?>
                </tbody>
            </table>
        <?php else : ?>
            <div class="builder-empty">
                <?php echo esc_html__('No headers found.', 'magic-elements'); ?>
            </div>
        <?php endif; ?>
    </div>