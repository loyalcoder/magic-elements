<div class="wrapper">
	<figure class="comparison-wrapper">
    <?php echo \Elementor\Group_Control_Image_Size::get_attachment_image_html( $settings, 'thumbnail', 'before_image' ); ?>		
    <span class="comparison-label" data-type="original">Before</span>

		<div class="compare-img">
        <?php echo \Elementor\Group_Control_Image_Size::get_attachment_image_html( $settings, 'thumbnail', 'after_image' ); ?>			
        <span class="comparison-label" data-type="modified">After</span>
		</div>

		<span class="compare-drag"></span>
	</figure>
</div>