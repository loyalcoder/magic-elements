import "./admin.scss";
// import * as Popper from "@popperjs/core"
// import Tab from 'bootstrap/js/dist/tab';
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
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        formData.append('action', 'save_magic_kit_settings');
        formData.append('nonce', document.getElementById('magic_kit_nonce').value);

        jQuery.ajax({
            url: ajaxurl,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                if(response.success) {
                    showToast('Settings saved successfully!');
                } else {
                    showToast('Error saving settings', 'error');
                }
            },
            error: function(xhr, status, error) {
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
});