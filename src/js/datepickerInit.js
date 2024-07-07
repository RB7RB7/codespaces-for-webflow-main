// datepickerInit.js
import $ from 'jquery';
import 'jquery';
import '@chenfengyuan/datepicker';

export function initializeDatepicker() {
  $(document).ready(function() {
    $('.datepicker-input').datepicker({
      autoHide: true, // Ensures the datepicker closes after a date is selected
    }).on('pick.datepicker', function(event) {
      const date = event.date; // Get the selected date as a Date object
      updateMovingDate(date);
    });
    
    // Disable manual input for date field
    $('.datepicker-input').on('keydown', function(event) {
      event.preventDefault();
    });
  });
}
