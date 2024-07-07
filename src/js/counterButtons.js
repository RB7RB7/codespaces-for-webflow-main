// counterButtons.js
import $ from 'jquery';

export function initializeCounterButtons() {
  $(document).ready(function() {
    // On 'up' button click
    $('.counter-button-up').on('click', function() {
      var inputId = $(this).data('target');
      var inputValue = Number($(inputId).val());
      $(inputId).val(inputValue + 1);
    });

    // On 'down' button click
    $('.counter-button-down').on('click', function() {
      var inputId = $(this).data('target');
      var inputValue = Number($(inputId).val());
      if (inputValue > 0) {
        $(inputId).val(inputValue - 1);
      }
    });

    // On input value change
    $('.counter-input.w-input').change(function() {
      var num = Number($(this).val());
      if (!isNaN(num) && num >= 0) {
        $(this).val(num);
      } else {
        $(this).val(0); // Reset to 0 if it's not a valid number
      }
    });
  });
}
