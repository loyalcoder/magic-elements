<div class="data_table">
    <?php
        if(!empty($data_table_list)) ?>
        <?php foreach($data_table_list as $list) { 
            ?>
            <div class="data">
                <h4><?php echo esc_html($list['list_title']); ?></h4>
            </div>
    <?php } ?>
</div>