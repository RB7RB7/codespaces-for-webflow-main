// summarySection.js
export default function initializeSummarySection() {
    document.addEventListener('DOMContentLoaded', () => {
      // Initialize elements and data
      const elements = {
        input: document.getElementById("housing_size"),
        movingDate: document.getElementById("moving_date"),
        flexibleMovingDate: document.getElementById("flexible_moving_date"),
        cleaningBaseCosts: document.querySelectorAll(".house_cleaning_base_cost"),
        totalResults: document.querySelectorAll(".total_result"),
        resultMovingDates: document.querySelectorAll(".result_moving_date"),
        resultFlexibleMovingDates: document.querySelectorAll(".result_flexible_moving_date"),
        resultHousingSizes: document.querySelectorAll(".result_housing_size"),
        otherCostsElements: document.querySelectorAll(".other_costs"),
        resultExtras: document.querySelectorAll(".result_extras"),
        checkboxes: document.querySelectorAll('.form12_checkbox_field input[type="checkbox"]')
      };
  
      const intervals = [
        { min: 0, max: 29, price: 1549 },
        { min: 30, max: 39, price: 1599 },
        { min: 40, max: 49, price: 1649 },
        { min: 50, max: 59, price: 1799 },
        { min: 60, max: 69, price: 1999 },
        { min: 70, max: 79, price: 2199 },
        { min: 80, max: 89, price: 2399 },
        { min: 90, max: 99, price: 2599 },
        { min: 100, max: 114, price: 2799 },
        { min: 115, max: 124, price: 2999 },
        { min: 125, max: 136, price: 3199 },
        { min: 137, max: 148, price: 3399 },
        { min: 149, max: 159, price: 3599 },
        { min: 160, max: 169, price: 3849 },
        { min: 170, max: 179, price: 3949 },
        { min: 180, max: Infinity, price: 23 } // Price increase per m² over 180
      ];
  
      const basePriceDictionary = {
        'normal_balcony': 250,
        'glass_balcony': 450,
        'terrace': 750,
        'fireplace': 200,
        'freeze_defrost': 195,
        'basement_attic': 250,
        'oven_plates': 300,
        'garage': 300,
        'water_lock_washingmachine': 200,
        'water_lock_sink' : 200,
       
      };
  
      const otherCostsDictionary = {
        'blind_wash': 250,
        'joint_treatment': 300,
        'deep_cleaning': 300
      };
  
      const selectedCheckboxes = new Set();
  
      function initializeFields() {
        updateDisplay(elements.resultMovingDates, "-");
        updateDisplay(elements.resultFlexibleMovingDates, "-");
        updateDisplay(elements.resultHousingSizes, "-");
        updateDisplay(elements.resultExtras, "-");
        updateDisplay(elements.otherCostsElements, "-");
  
        // Initialize moving date with saved value or "-"
        const savedDate = localStorage.getItem("selected-date");
        if (savedDate) {
          elements.movingDate.value = savedDate;
          updateDisplay(elements.resultMovingDates, savedDate); // Populate resultMovingDates as well
        } else {
          elements.movingDate.value = "";
          updateDisplay(elements.resultMovingDates, "-"); // Populate resultMovingDates with "-"
        }
      }
  
      function calculatePrice(dictionary) {
        let price = 0;
        selectedCheckboxes.forEach(id => {
          if (dictionary[id]) {
            price += dictionary[id];
          }
        });
        return price;
      }
  
      function calculateBasePrice() {
        return calculatePrice(basePriceDictionary);
      }
  
      function calculateOtherCosts() {
        return calculatePrice(otherCostsDictionary);
      }
  
      function findIntervalPrice(size) {
        if (size >= 180) {
          return intervals.find(interval => interval.min === 180).price * (size - 180) + intervals[intervals.length - 2].price;
        } else {
          const interval = intervals.find(interval => size >= interval.min && size <= interval.max);
          return interval ? interval.price : "Kontakta oss";
        }
      }
  
      function updateDisplay(elements, value) {
        elements.forEach(element => {
          element.textContent = value;
        });
      }
  
      function updateResults() {
        const basePrice = calculateBasePrice();
        const otherCosts = calculateOtherCosts();
  
        updateDisplay(elements.resultExtras, basePrice || "-");
        updateDisplay(elements.otherCostsElements, otherCosts || "-");
  
        let parsedInput = parseFloat(elements.input.value);
        if (isNaN(parsedInput)) {
          parsedInput = 0;
          elements.input.value = 0;
        }
  
        if (elements.input.value === "0") {
          elements.input.value = "";
        }
  
        const result = findIntervalPrice(parsedInput);
  
        updateDisplay(elements.cleaningBaseCosts, result);
        
        const totalResultText = otherCosts ? `${result + basePrice} kr + ${otherCosts} kr/h` : `${result + basePrice} kr`;
        updateDisplay(elements.totalResults, totalResultText);
        
        updateDisplay(elements.resultHousingSizes, elements.input.value || "-");
      }
  
      function updateFlexibleMovingDate() {
        updateDisplay(elements.resultFlexibleMovingDates, elements.flexibleMovingDate.value || "-");
      }
  
      function updateMovingDate(date) {
        if (date instanceof Date && !isNaN(date)) {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
          const day = String(date.getDate()).padStart(2, '0');
          const formattedDate = `${year}-${month}-${day}`; // Format the date as YYYY-MM-DD
          updateDisplay(elements.resultMovingDates, formattedDate);
        } else {
          updateDisplay(elements.resultMovingDates, "-");
          console.error("Invalid date:", date);
        }
      }
  
      // Event listeners for checkboxes
      elements.checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            selectedCheckboxes.add(checkbox.parentElement.id);
          } else {
            selectedCheckboxes.delete(checkbox.parentElement.id);
          }
          updateResults();
        });
      });
  
      // Event listener for input field
      elements.input.addEventListener("input", updateResults);
  
      // Event listener for flexible moving date input
      elements.flexibleMovingDate.addEventListener("change", updateFlexibleMovingDate);
  
      // Initialize date picker for moving date input
      $(elements.movingDate).datepicker({
        autoHide: true, // Ensures the datepicker closes after a date is selected
      }).on('pick.datepicker', function(event) {
        const date = event.date; // Get the selected date as a Date object
        updateMovingDate(date);
      });
      
      // Disable manual input for date field
      elements.movingDate.addEventListener('keydown', function(event) {
        event.preventDefault();
      });
  
      // Initialize the results and fields on page load
      initializeFields();
      updateResults();
      updateFlexibleMovingDate();
    });
  }
  