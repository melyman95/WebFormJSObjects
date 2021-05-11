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
    if (AllDataValid()) {
        getVehicle();
        displayVehicle(myVehicle);
    }
}
function AllDataValid() {
    return true;
}
function displayVehicle(vehicle) {
    var displayDiv = document.getElementById("display");
    var vehicleMake = document.createElement("h2");
    vehicleMake.innerHTML = myVehicle.make;
    displayDiv.appendChild(vehicleMake);
    var vehicleModel = document.createElement("p");
    vehicleModel.innerHTML = myVehicle.model;
    displayDiv.appendChild(vehicleModel);
    var vehicleYear = document.createElement("p");
    vehicleYear.innerHTML = myVehicle.year;
    displayDiv.appendChild(vehicleYear);
}
function getVehicle() {
    var vehicle = myVehicle;
    var makeInput = document.getElementById("make");
    vehicle.make = makeInput.value;
    var modelInput = document.getElementById("model");
    vehicle.model = modelInput.value;
    var yearInput = document.getElementById("year");
    vehicle.year = yearInput.value;
    return vehicle;
}
