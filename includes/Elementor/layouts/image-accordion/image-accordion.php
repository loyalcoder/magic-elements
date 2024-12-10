<style>
    *{
  box-sizing: border-box;
  font-family: Montserrat,sans-serif;
}

body{
  background-color: #343E48;
}

h1{
  text-align: center;
  color: #FFF;
}

/* ---- Create Accordion --- */

.accordion{ 
  max-width: 1080px;
  height: 250px;
  display: flex;
  overflow: hidden;
  margin: 50px auto;
}

.tab{
  position: relative;
  width: 20%;
  height: inherit;
  padding: 20px;
  background: #000;
  color: #FFF;
  cursor: pointer;
  transition: width .5s ease;
}

.tab img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all .5s ease;
}

.caption{
  position: absolute;
  z-index: 2;
  white-space: nowrap;
  top: 150px;
  opacity: 0;
}

.caption h2{
  margin-bottom: 2px;
  text-overflow:clip;
  font-size:24px;
  text-transform:uppercase;
}

.caption p{
  margin: 0;
  font-family: 'Open Sans';
  font-size: .9rem;
}

/* --- Hover Effects --- */

.tab:hover img{
  opacity: .6;
}

.tab:hover{
  width: 80%;
}

.tab:hover .caption{
  transition: all .5s ease;
  opacity: 1;
}

 /* --- Click Effects --- */
 .tab.active {
            width: 80%;
        }

        .tab.active img {
            opacity: 0.6;
        }

        .tab.active .caption {
            opacity: 1;
        }
</style>




<div class="accordion">
    <?php  if(!empty($image_accordion)){
        foreach ($image_accordion as $index => $item){ 
           
            ?>
        <div class="tab">
            <?php
             $this->add_render_attribute( 'image', 'src', $item['background_image']['url'] );
            $this->add_render_attribute( 'image', 'alt', \Elementor\Control_Media::get_image_alt( $item['background_image'] ) );
            $this->add_render_attribute( 'image', 'title', \Elementor\Control_Media::get_image_title( $item['background_image'] ) );
            $this->add_render_attribute( 'image', 'class', 'hello' );
            
            echo \Elementor\Group_Control_Image_Size::get_attachment_image_html( $item, 'full', 'background_image' ) ?>  
            <div class="caption">
            <h2><?php  echo esc_html( $item['title']); ?>  </h2>
            <p><?php  echo esc_html( $item['description']); ?> </p>
            </div>
        </div>
   <?php } } ?>  
</div>