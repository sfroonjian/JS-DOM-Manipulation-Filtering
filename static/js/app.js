// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers that run the function below when button is clicked and form is submitted
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Empties tables every time new filter is run
  d3.select("tbody").html("")

  // Prevents the page from refreshing
  d3.event.preventDefault();

  // Select the input elements for each input and get the value property of each input element
  var inputValueDate = d3.select("#datetime").property("value");
  var inputValueCity = d3.select("#city").property("value").toLowerCase();
  var inputValueState = d3.select("#state").property("value").toLowerCase();
  var inputValueCountry = d3.select("#country").property("value").toLowerCase();
  var inputValueShape = d3.select("#shape").property("value").toLowerCase();

  // checks to see which items in the dataset match the criteria the user inputted
  // if the user did not input anything for a certain criteria, it will just take every piece of data for that category
  var filteredData = tableData.filter(sighting => {
      return ((sighting.datetime === inputValueDate || inputValueDate === "all")
        && (sighting.city === inputValueCity || inputValueCity === "")
        && (sighting.state === inputValueState || inputValueState === "all")
        && (sighting.country === inputValueCountry || inputValueCountry === "all")
        && (sighting.shape === inputValueShape || inputValueShape === "all"))
  });

  console.log(filteredData);

  // goes through each object that matched the user's input
  filteredData.forEach(sighting => {
    // takes the body of the table
    var body = d3.select("tbody");
    // adds a row in the table for every piece of data that matched the user's input
    var row = body.append("tr")
    console.log(Object.values(sighting));
    // goes through each value of each object that matched the user's input
    Object.values(sighting).forEach(value => {
      // adds the value of the object to the cell of the table
        row.append("td").text(value);
    });
  });
};
