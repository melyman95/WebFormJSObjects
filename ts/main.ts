
class Vehicle {
    make:string;
    model:string;
    year:string;
}

let myVehicle = new Vehicle();

window.onload = function () {
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVehicle;
}

function addVehicle() {
    
    if(AllDataValid()) {
        getVehicle();
        displayVehicle(myVehicle);
    }
}

function AllDataValid() {
    return true;
}

function displayVehicle(vehicle:Vehicle):void {
    let displayDiv = <HTMLElement>document.getElementById("display");
    
    let vehicleMake = document.createElement("h2");
    vehicleMake.innerHTML =  myVehicle.make;
    
    displayDiv.appendChild(vehicleMake);

    let vehicleModel = document.createElement("p");
    vehicleModel.innerHTML = myVehicle.model;

    displayDiv.appendChild(vehicleModel);

    let vehicleYear = document.createElement("p");
    vehicleYear.innerHTML = myVehicle.year;

    displayDiv.appendChild(vehicleYear);
}

function getVehicle(){
    let vehicle = myVehicle;

    let makeInput = <HTMLInputElement>document.getElementById("make");
    vehicle.make = makeInput.value;

    let modelInput = <HTMLInputElement>document.getElementById("model");
    vehicle.model = modelInput.value;

    let yearInput = <HTMLInputElement>document.getElementById("year");
    vehicle.year = yearInput.value;

    return vehicle;
}