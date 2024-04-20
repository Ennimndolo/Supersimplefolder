function calculateTaxes(salary, hasCar, hasHouse) {
  salary = salary ? parseFloat(salary) : 0;

  var incomeTaxRate = 0.1; // Example income tax rate (20%)
  var carInsuranceRate = hasCar ? 0.01 : 0; // Example car insurance rate (10%) if has car, otherwise 0
  var houseInsuranceRate = hasHouse ? 0.05 : 0; // Example house insurance rate (5%) if owns house, otherwise 0
  
  var incomeTax = salary * incomeTaxRate;
  var carInsurance = hasCar ? salary * 0.1 : 0; // Apply car insurance only if user has a car
  var houseInsurance = hasHouse ? salary * 0.05 : 0; // Apply house insurance only if user owns a house
  var totalTaxes = incomeTax + carInsurance + houseInsurance;
  var netSalary = salary + totalTaxes;
  var taxesOutput = "<div class='tax-container'>" +
                    "<p>Income Tax: " + incomeTax.toFixed(2) + " MWK (" + (incomeTaxRate * 100) + "%)</p>";
  
  if (hasCar) {
    taxesOutput += "<p>Car Insurance Amount: " + carInsurance.toFixed(2) + " MWK (10%)</p>";
  }
  
  if (hasHouse) {
    taxesOutput += "<p>House Insurance Amount: " + houseInsurance.toFixed(2) + " MWK (5%)</p>";
  }
  
  taxesOutput += "<p>Total Taxes: " + totalTaxes.toFixed(2) + " MWK</p>" +
                 "<p>Tax Free Salary: " + netSalary.toFixed(2) + " MWK</p>" +
    "</div>";
  
  document.getElementById("taxes").innerHTML = taxesOutput;
}

function promptCar() {
  var salary = document.getElementById("salary").value;
  var hasCarString = prompt("Do you have a car? (yes/no)");
  var hasCar = hasCarString.toLowerCase() === "yes";
  promptHouse(salary, hasCar);
}

function promptHouse(salary, hasCar) {
  var hasHouseString = prompt("Do you own a house? (yes/no)");
  var hasHouse = hasHouseString.toLowerCase() === "yes";
  calculateTaxes(salary, hasCar, hasHouse);
}

function refresh() {
    location.reload();
}
