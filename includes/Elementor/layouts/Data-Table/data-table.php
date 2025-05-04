<?php 
    if (empty($columns) || empty($rows)) {
        return;
    }
?>
<div class="elementor-data-table">
    <table>
        <thead>
            <tr>
                <?php foreach ($columns as $column): ?>
                    <th style="width: <?php echo esc_attr($column['column_width']['size'] . $column['column_width']['unit']); ?>;">
                        <?php echo esc_html($column['column_name']); ?>
                    </th>
                <?php endforeach; ?>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($rows as $row): ?>
                <tr>
                    <?php 
                    $cells = $row['row_cells'];
                    for ($i = 0; $i < count($columns); $i++): 
                        $cell_content = isset($cells[$i]) ? $cells[$i]['cell_content'] : '';
                    ?>
                        <td>
                            <?php echo wp_kses_post($cell_content); ?>
                        </td>
                    <?php endfor; ?>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>