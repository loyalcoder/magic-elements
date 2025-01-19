/**
 * Magic Kit Admin JavaScript
 * 
 * Handles admin functionality for the Magic Kit plugin including:
 * - Settings form submission via AJAX
 * - Toast notifications
 * - Bulk widget enable/disable actions
 *
 * @package Elementor_Magic_Kit
 * @since 1.0.0
 */

import "./admin.scss";

/**
 * Display toast notification message
 * 
 * Shows a temporary notification message to provide feedback to user actions.
 * Automatically hides after 3 seconds.
 *
 * @since 1.0.0
 * @param {string} message The message to display in the toast
 * @param {string} type The type of notification - 'success' or 'error'
 * @return {void}
 */
const showToast = (message, type = 'success') => {
    const toast = document.getElementById('settings-toast');
    if (!toast) {
        return;
    }
    
    toast.textContent = message;
    toast.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';
    toast.style.display = 'block';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
};

/**
 * Initialize admin functionality when DOM is loaded
 * 
 * Sets up event listeners for:
 * - Settings form submission
 * - Bulk action buttons
 *
 * @since 1.0.0
 */
document.addEventListener('DOMContentLoaded', () => {
    // Get settings form element
    const form = document.getElementById('magic-kit-settings');
    if (!form) {
        return;
    }
    
    /**
     * Handle settings form submission
     * 
     * Submits form data via AJAX and shows success/error message
     */
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const nonce = document.getElementById('magic_kit_nonce');
        
        // Verify nonce exists
        if (!nonce) {
            showToast('Security check failed', 'error');
            return;
        }
        
        // Add required action and nonce to form data
        formData.append('action', 'save_magic_kit_settings');
        formData.append('nonce', nonce.value);

        // Submit form via AJAX using vanilla JS
        const xhr = new XMLHttpRequest();
        xhr.open('POST', window.ajaxurl);
        
        xhr.onload = function() {
            if (xhr.status === 200) {
                try {
                    const response = JSON.parse(xhr.responseText);
                    if (response && response.success) {
                        showToast(response.data?.message || 'Settings saved successfully!');
                    } else {
                        showToast(response.data?.message || 'Error saving settings', 'error');
                    }
                } catch (error) {
                    showToast('Error processing response', 'error');
                    console.error('Magic Kit Parse Error:', error);
                }
            } else {
                showToast('Error saving settings', 'error');
                console.error('Magic Kit XHR Error:', xhr.statusText);
            }
        };

        xhr.onerror = function() {
            showToast('Network error occurred', 'error');
            console.error('Magic Kit Network Error');
        };

        xhr.send(formData);
    });

    /**
     * Handle bulk enable/disable actions for widgets
     * 
     * Allows checking/unchecking all widget checkboxes at once
     */
    const bulkActionButtons = document.querySelectorAll('.bulk-action-button');
    if (bulkActionButtons.length) {
        bulkActionButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                const checkboxes = document.querySelectorAll('input[type="checkbox"][name="magicelements_enabled_widgets[]"]');
                // First button enables (index 0), second disables (index 1)
                const enable = index === 0;
                
                checkboxes.forEach(checkbox => {
                    checkbox.checked = enable;
                });
            });
        });
    }
});