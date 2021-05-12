var Vehicle = (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var myVehicle = new Vehicle();
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVehicle;
};
function addVehicle() {
    clearInputErrors();
    if (AllDataValid()) {
        getVehicle();
        displayVehicle(myVehicle);
    }
}
function getInputById(id) {
    return document.getElementById(id);
}
function AllDataValid() {
    var isValid = true;
    var make = getInputById("make").value;
    var model = getInputById("model").value;
    var year = getInputById("year").value;
    var yearValue = parseInt(year);
    var price = getInputById("cost").value;
    var priceValue = parseFloat(price);
    if (make == "") {
        isValid = false;
        var errorSummary = document.getElementById("validation-summary");
        var errorItem = document.createElement("li");
        errorItem.innerText = "Make is required.";
        errorSummary.appendChild(errorItem);
    }
    if (model == "") {
        isValid = false;
        var errorSummary = document.getElementById("validation-summary");
        var errorItem = document.createElement("li");
        errorItem.innerText = "Model is required.";
        errorSummary.appendChild(errorItem);
    }
    if (year == "" || isNaN(yearValue) || year.length != 4) {
        isValid = false;
        var errorSummary = document.getElementById("validation-summary");
        var errorItem = document.createElement("li");
        errorItem.innerText = "Year field is empty or is invalid.";
        errorSummary.appendChild(errorItem);
    }
    if (price == "" || isNaN(priceValue)) {
        isValid = false;
        var errorSummary = document.getElementById("validation-summary");
        var errorItem = document.createElement("li");
        errorItem.innerText = "Price field is empty or isn't a number.";
        errorSummary.appendChild(errorItem);
    }
    return isValid;
}
function clearInputErrors() {
    var errorSummary = document.getElementById("validation-summary");
    errorSummary.innerHTML = "";
}
function displayVehicle(vehicle) {
    var displayDiv = document.getElementById("display");
    var vehicleMake = document.createElement("h2");
    vehicleMake.innerHTML = "Make: " + myVehicle.make;
    displayDiv.appendChild(vehicleMake);
    var vehicleModel = document.createElement("p");
    vehicleModel.innerHTML = "Model: " + myVehicle.model;
    displayDiv.appendChild(vehicleModel);
    var vehicleYear = document.createElement("p");
    vehicleYear.innerHTML = "Year: " + myVehicle.year;
    displayDiv.appendChild(vehicleYear);
    var vehiclePrice = document.createElement("p");
    vehiclePrice.innerHTML = "$" + myVehicle.price;
    displayDiv.appendChild(vehiclePrice);
}
function getVehicle() {
    var vehicle = myVehicle;
    var makeInput = document.getElementById("make");
    vehicle.make = makeInput.value;
    var modelInput = document.getElementById("model");
    vehicle.model = modelInput.value;
    var yearInput = document.getElementById("year");
    vehicle.year = yearInput.value;
    var priceInput = document.getElementById("cost");
    vehicle.price = priceInput.value;
    return vehicle;
}
