// multiStepForm.js
export function loadMultiStepScript() {
    // Check if the script is already loaded
    if (document.getElementById('multi-step-script')) {
      console.warn('multi-step.js script is already loaded.');
      return;
    }
  
    // Create a script element
    const script = document.createElement('script');
    script.id = 'multi-step-script';
    script.src = "https://cdn.jsdelivr.net/gh/videsigns/webflow-tools@latest/multi-step.js";
    script.onload = () => {
      try {
        const multiStepElement = document.getElementById('multi-step-id');
        if (multiStepElement) {
          multiStepElement.style.display = 'block';
        }
        // Optionally disable the submit button if necessary
        // disableSubmitButton();
      } catch (error) {
        console.error('Error during script onload execution:', error);
      }
    };
    script.onerror = () => {
      console.error('Failed to load multi-step.js script.');
    };
    document.head.appendChild(script);
  }
  
  export function initializeCustomCheckboxListeners() {
    const customCheckboxes = document.querySelectorAll('.w-checkbox-input--inputType-custom');
    if (customCheckboxes.length > 0) {
      customCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => {
          setTimeout(updateSubmitButtonState, 50); // Use the same delay to account for any other scripts
        });
      });
    } else {
      console.warn('No custom checkboxes found to initialize listeners.');
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    loadMultiStepScript();
    initializeCustomCheckboxListeners();
  });
  