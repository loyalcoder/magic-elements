<div class="wrap">
    <h1><?php esc_html_e('Magic Kit Settings', 'magic-kit'); ?></h1>

    <style>
        .toggle-switch {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 22px;
            margin-right: 10px;
            vertical-align: middle;
        }

        .toggle-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .toggle-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 22px;
        }

        .toggle-slider:before {
            position: absolute;
            content: "";
            height: 16px;
            width: 16px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }

        input:checked + .toggle-slider {
            background-color: #2196F3;
        }

        input:checked + .toggle-slider:before {
            transform: translateX(18px);
        }

        .widget-row {
            display: inline-block;
            margin-right: 20px;
            margin-bottom: 15px;
            padding: 8px 15px;
            background: #f8f9fa;
            border-radius: 20px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            cursor: pointer;
        }

        .widget-label {
            font-size: 13px;
            font-weight: 500;
            vertical-align: middle;
            cursor: pointer;
        }

        .form-group {
            margin-top: 20px;
        }

        .bulk-actions {
            margin-bottom: 20px;
        }

        .bulk-action-button {
            background: #fff;
            border: 1px solid #ddd;
            padding: 5px 15px;
            border-radius: 15px;
            cursor: pointer;
            margin-right: 10px;
        }

        .bulk-action-button:hover {
            background: #f8f9fa;
        }

        .toast {
            position: fixed;
            top: 50px;
            right: 20px;
            padding: 15px 25px;
            background: #4CAF50;
            color: white;
            border-radius: 5px;
            display: none;
            z-index: 9999;
            animation: slideIn 0.5s, fadeOut 0.5s 2.5s;
        }

        @keyframes slideIn {
            from {transform: translateX(100%);}
            to {transform: translateX(0);}
        }

        @keyframes fadeOut {
            from {opacity: 1;}
            to {opacity: 0;}
        }
    </style>

    <div id="settings-toast" class="toast"></div>

    <form id="magic-kit-settings" method="post">
        <?php wp_nonce_field('magic_kit_settings_nonce', 'magic_kit_nonce'); ?>
        
        <div class="form-group">
            <h3><?php esc_html_e('Enable/Disable Widgets', 'magic-kit'); ?></h3>

            <div class="bulk-actions">
                <button type="button" class="bulk-action-button" onclick="toggleAll(true)">
                    <?php esc_html_e('Enable All', 'magic-kit'); ?>
                </button>
                <button type="button" class="bulk-action-button" onclick="toggleAll(false)">
                    <?php esc_html_e('Disable All', 'magic-kit'); ?>
                </button>
            </div>
            
            <?php
            $widgets = [
                'button' => __('Button', 'magic-kit'),
                'heading' => __('Heading', 'magic-kit'), 
                'image' => __('Image', 'magic-kit'),
                'text' => __('Text', 'magic-kit'),
                'icon' => __('Icon', 'magic-kit')
            ];

            $enabled_widgets = get_option('magic_kit_enabled_widgets', array());

            foreach($widgets as $widget_key => $widget_label) : ?>
                <div class="widget-row">
                    <label class="toggle-switch" onclick="document.getElementById('toggle-<?php echo esc_attr($widget_key); ?>').click()">
                        <input type="checkbox" 
                               id="toggle-<?php echo esc_attr($widget_key); ?>"
                               name="magic_kit_enabled_widgets[]" 
                               value="<?php echo esc_attr($widget_key); ?>" 
                               <?php checked(in_array($widget_key, $enabled_widgets)); ?>>
                        <span class="toggle-slider"></span>
                    </label>
                    <span class="widget-label" onclick="document.getElementById('toggle-<?php echo esc_attr($widget_key); ?>').click()"><?php echo esc_html($widget_label); ?></span>
                </div>
            <?php endforeach; ?>
        </div>

        <button type="submit" class="button button-primary"><?php esc_html_e('Save Changes', 'magic-kit'); ?></button>
    </form>
</div>

<script>
const showToast = (message, type = 'success') => {
    const toast = document.getElementById('settings-toast');
    toast.textContent = message;
    toast.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';
    toast.style.display = 'block';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('magic-kit-settings');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        formData.append('action', 'save_magic_kit_settings');
        formData.append('nonce', document.getElementById('magic_kit_nonce').value);

        try {
            const response = await fetch(ajaxurl, {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            
            if(data.success) {
                showToast('Settings saved successfully!');
            } else {
                showToast('Error saving settings', 'error');
            }
        } catch(error) {
            showToast('Error saving settings', 'error');
            console.error('Error:', error);
        }
    });
});

const toggleAll = (enable) => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="magic_kit_enabled_widgets[]"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = enable;
    });
}
</script>
