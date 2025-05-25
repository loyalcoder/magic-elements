<div class="magic-elements-builder-sections">
    <h1><?php echo esc_html__('Magic Elements Builder', 'magic-elements'); ?></h1>
    <hr>
    <ul class="magic-elements-builder-list">
        <li>
            <a href="#header" data-title="<?php echo esc_html__('Header Template', 'magic-elements'); ?>" data-type="header">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1.66666L1.66667 5.83333L10 10L18.3333 5.83333L10 1.66666Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.66667 14.1667L10 18.3333L18.3333 14.1667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.66667 10L10 14.1667L18.3333 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <?php echo esc_html__('Header', 'magic-elements'); ?>
            </a>
        </li>
        <li>
            <a href="#footer" data-title="<?php echo esc_html__('Footer Template', 'magic-elements'); ?>" data-type="footer">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1.66666L1.66667 5.83333L10 10L18.3333 5.83333L10 1.66666Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.66667 14.1667L10 18.3333L18.3333 14.1667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.66667 10L10 14.1667L18.3333 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <?php echo esc_html__('Footer', 'magic-elements'); ?>
            </a>
        </li>
    </ul>
</div>
<?php 
   $preview = __DIR__ . '/preview.php';
   if(file_exists($preview)){
    include $preview;
   }
  $new = __DIR__ . '/addnew.php';
  if(file_exists($new)){
    include $new;
  }
