<style>



/* ---- Create Accordion --- */

/* ---- Create Accordion with Animations --- */
@-webkit-keyframes fadeInUp {
  0% {
    visibility: visible;
    opacity: 0;
    -webkit-transform: translate3d(0, 110%, 0);
    transform: translate3d(0, 110%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInUp {
  0% {
    visibility: visible;
    opacity: 0;
    -webkit-transform: translate3d(0, 110%, 0);
    transform: translate3d(0, 110%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.accordion {
  display: flex;
  width: 100%;
  margin: 50px auto;
  overflow: hidden;
  position: relative;
}

.tab {
  position: relative;
  flex: 1;
  height: 50vh;
  background: #000;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
  transition: flex 0.4s;
}

.tab img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  transition: opacity 0.5s ease;
}

.tab:hover img,
.tab.active img {
  opacity: 0.5;
}

.caption {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  opacity: 0;
  visibility: hidden;
  animation: fadeInUp 0.8s forwards;
}

.tab:hover .caption,
.tab.active .caption {
  opacity: 1;
  visibility: visible;
}

.tab:hover {
  flex: 3;
}

.tab.active {
  flex: 3;
}

.accordion.horizontal .tab:not(:last-child) {
  margin-right: 10px;
}

.accordion.vertical {
  flex-direction: column;
}

.accordion.vertical .tab:not(:last-child) {
  margin-bottom: 10px;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .accordion {
    flex-direction: column;
  }

  .tab {
    height: 50vh;
  }
}

@media (max-width: 480px) {
  .tab {
    height: 40vh;
  }

  .caption {
    font-size: 14px;
  }
}

</style>




<div class="accordion <?php echo esc_attr($behavior_class) ?>">
    <?php  if(!empty($image_accordion)){
        foreach ($image_accordion as $index=> $item){ 
           
            ?>
        <div class="tab">
          <?php
            $this->add_render_attribute('image', 'src', $item['background_image']['url']);
            $this->add_render_attribute('image', 'alt', \Elementor\Control_Media::get_image_alt($item['background_image']));
            $this->add_render_attribute('image', 'title', \Elementor\Control_Media::get_image_title($item['background_image']));
            $this->add_render_attribute('image', 'class', 'image-class');
            echo \Elementor\Group_Control_Image_Size::get_attachment_image_html( $item, 'full', 'background_image' ) 
            ?>
            <div class="caption">
            <h2><?php  echo esc_html( $item['title']); ?>  </h2>
            <p><?php  echo esc_html( $item['description']); ?> </p>
            </div>
        </div>
   <?php } } ?>  
</div>