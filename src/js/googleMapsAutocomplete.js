// googleMapsAutocomplete.js

export default function loadGoogleMaps() {
    // Load the Google Maps JavaScript API asynchronously and defer execution
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAcFkwm5jayySDY2AsWv2MWvsXZU3Excwo&libraries=places&callback=initAutocomplete&loading=async';
    script.async = true;
    script.defer = true;
    
    // Define the initAutocomplete function
    window.initAutocomplete = function() {
      const gpaInputs = document.querySelectorAll('.gpa-autocomplete');
      const options = {
        componentRestrictions: { country: 'se' } // restrict results to Sweden
      };
      gpaInputs.forEach(input => {
        new google.maps.places.Autocomplete(input, options);
      });
    };
  
    // Append the script to the document head
    document.head.appendChild(script);
  }
  
  