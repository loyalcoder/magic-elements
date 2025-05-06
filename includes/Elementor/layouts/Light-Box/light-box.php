<div class="custom-lightbox-wrapper">
            <?php
            // Trigger element
            switch ($settings['trigger_type']) {
                case 'button':
                    echo '<button class="lightbox-trigger" data-target="#' . $unique_id . '">' . esc_html($settings['button_text']) . '</button>';
                    break;
                case 'image':
                    echo '<img class="lightbox-trigger" data-target="#' . $unique_id . '" src="' . esc_url($settings['trigger_image']['url']) . '" alt="Lightbox Trigger" style="cursor: pointer;">';
                    break;
                case 'text':
                    echo '<a href="#" class="lightbox-trigger" data-target="#' . $unique_id . '" style="cursor: pointer;">' . esc_html($settings['trigger_text']) . '</a>';
                    break;
            }
            ?>
            
            <!-- Lightbox Content (hidden by default) -->
            <div id="<?php echo $unique_id; ?>" class="custom-lightbox-content" style="display: none;">
                <div class="lightbox-inner">
                    <span class="lightbox-close">&times;</span>
                    <?php
                    switch ($settings['lightbox_type']) {
                        case 'image':
                            echo '<img src="' . esc_url($settings['image_content']['url']) . '" alt="Lightbox Image">';
                            break;
                        case 'text':
                            echo '<div class="lightbox-text-content">' . wp_kses_post($settings['text_content']) . '</div>';
                            break;
                        case 'video':
                            $video_url = esc_url($settings['video_content']);
                            if (strpos($video_url, 'youtube') !== false || strpos($video_url, 'youtu.be') !== false) {
                                // YouTube video
                                preg_match('/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/', $video_url, $matches);
                                $video_id = $matches[1] ?? '';
                                echo '<iframe width="560" height="315" src="https://www.youtube.com/embed/' . $video_id . '" frameborder="0" allowfullscreen></iframe>';
                            } elseif (strpos($video_url, 'vimeo') !== false) {
                                // Vimeo video
                                preg_match('/vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|video\/|)(\d+)(?:|\/\?)/', $video_url, $matches);
                                $video_id = $matches[2] ?? '';
                                echo '<iframe src="https://player.vimeo.com/video/' . $video_id . '" width="640" height="360" frameborder="0" allowfullscreen></iframe>';
                            } else {
                                // Other video (MP4, etc.)
                                echo '<video controls><source src="' . $video_url . '" type="video/mp4">Your browser does not support the video tag.</video>';
                            }
                            break;
                    }
                    ?>
                </div>
            </div>
        </div>