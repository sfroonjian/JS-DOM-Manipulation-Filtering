// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  d3.select("tbody").html("")

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the value property of the input element
  var inputValueDate = d3.select("#datetime").property("value");
  var inputValueCity = d3.select("#city").property("value").toLowerCase();
  var inputValueState = d3.select("#state").property("value").toLowerCase();
  var inputValueCountry = d3.select("#country").property("value").toLowerCase();
  var inputValueShape = d3.select("#shape").property("value").toLowerCase();

  var filteredData = tableData.filter(sighting => {
      return ((sighting.datetime === inputValueDate || inputValueDate === "none")
        && (sighting.city === inputValueCity || inputValueCity === "")
        && (sighting.state === inputValueState || inputValueState === "none")
        && (sighting.country === inputValueCountry || inputValueCountry === "none")
        && (sighting.shape === inputValueShape || inputValueShape === "none"))
  });

  console.log(filteredData);

  filteredData.forEach(sighting => {
    var body = d3.select("tbody");
    var row = body.append("tr")
    console.log(Object.values(sighting));
    Object.values(sighting).forEach(value => {
        row.append("td").text(value);
    });
  });
};
