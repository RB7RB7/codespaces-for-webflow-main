// localStorage.js
export default function initializeLocalStorage() {
    document.addEventListener("DOMContentLoaded", function() {
      try {
        // Get references to the input fields where the saved values will be displayed
        var inputField1 = document.getElementById("housing_size");
        var inputField2 = document.getElementById("moving_date");
  
        if (!inputField1) {
          console.warn("Input field with id 'housing_size' not found.");
        }
        if (!inputField2) {
          console.warn("Input field with id 'moving_date' not found.");
        }
  
        // Check if there are any saved items in local storage
        var savedItem1 = localStorage.getItem("size-in-kvm");
        var savedItem2 = localStorage.getItem("selected-date");
  
        // Set the values of the input fields if they have saved values
        if (inputField1 && savedItem1) {
          inputField1.value = savedItem1;
        } else {
          console.warn("No saved value for 'size-in-kvm' found or input field not available.");
        }
  
        if (inputField2 && savedItem2) {
          inputField2.value = savedItem2;
        } else {
          console.warn("No saved value for 'selected-date' found or input field not available.");
        }
      } catch (error) {
        console.error("An error occurred while loading values from local storage:", error);
      }
    });
  }
  