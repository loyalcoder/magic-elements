<div <?php  echo $this->get_render_attribute_string('heading'); ?>  >
    <div <?php echo $this->get_render_attribute_string('url'); ?> >
        <?php  echo wp_kses_post($newoutput ); ?>  
    </div>
</div>