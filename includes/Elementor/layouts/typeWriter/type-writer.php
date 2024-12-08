<style>
  #typewriter-widget {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid black;
    animation: blink 0.7s step-end infinite;
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}

</style>


<div id="typewriter-widget">
  <span id="static-text"><?php echo esc_html( $static_text ); ?></span>
  <span id="typewriter-text"></span>
</div>

<script>
        jQuery(document).ready(function ($) {
            const dynamicTexts = <?php echo $dynamic_texts_json; ?>; // Pass PHP data to JavaScript
            const $typewriterText = $('#typewriter-text');
            let index = 0, charIndex = 0;

            function typeWriterEffect() {
                if (index < dynamicTexts.length) {
                    if (charIndex < dynamicTexts[index].length) {
                        $typewriterText.text(function (_, txt) {
                            return txt + dynamicTexts[index].charAt(charIndex);
                        });
                        charIndex++;
                        setTimeout(typeWriterEffect, 100); // Typing speed
                    } else {
                        charIndex = 0;
                        index++;
                        setTimeout(() => {
                            $typewriterText.text(''); // Clear text
                            typeWriterEffect();
                        }, 2000); // Pause before next text
                    }
                } else {
                    index = 0; // Loop back to start
                    typeWriterEffect();
                }
            }

            if (dynamicTexts.length > 0) {
                typeWriterEffect(); // Start typewriter effect
            }
        });
    </script>