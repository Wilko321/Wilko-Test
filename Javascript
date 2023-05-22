// Define the list of locations with associated numbers
var locations = {
  "Location A": ["123", "456"],
  "Location B": ["789"],
  "Location C": ["101", "202", "303"]
};

// Function to perform the lookup
function lookupLocation() {
  var numberInput = document.getElementById("number-input").value;
  var resultElement = document.getElementById("result");

  var location = findLocation(numberInput);
  
  if (location) {
    resultElement.textContent = "The closest station/stop to this pole is: " + location;
  } else {
    resultElement.textContent = "We can't find a location for that Pole Number ";
  }
}

// Function to find the location based on the input number
function findLocation(number) {
  for (var location in locations) {
    if (locations.hasOwnProperty(location)) {
      if (locations[location].includes(number)) {
        return location;
      }
    }
  }
  return null;
}

