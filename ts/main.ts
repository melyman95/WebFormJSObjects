
class Vehicle {
    make:string;
    model:string;
    year:string;
    price:string;
}

let myVehicle = new Vehicle();

window.onload = function () {
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVehicle;
}

function addVehicle() {
    clearInputErrors();
    if(AllDataValid()) {
        getVehicle();
        displayVehicle(myVehicle);
    }
}

function getInputById(id:string):HTMLInputElement {
    return <HTMLInputElement>document.getElementById(id);
}

function AllDataValid() {
    let isValid = true;
    
    let make = getInputById("make").value;

    let model = getInputById("model").value;

    let year = getInputById("year").value;
    let yearValue = parseInt(year);

    let price = getInputById("cost").value;
    let priceValue = parseFloat(price);

    if(make == "") {
        isValid = false;
        let errorSummary = document.getElementById("validation-summary");
        let errorItem = document.createElement("li");
        errorItem.innerText = "Make is required.";

        errorSummary.appendChild(errorItem);
    }

    if(model == "") {
        isValid = false;
        let errorSummary = document.getElementById("validation-summary");
        let errorItem = document.createElement("li");
        errorItem.innerText = "Model is required.";

        errorSummary.appendChild(errorItem);
    }

    if(year == "" || isNaN(yearValue) || year.length != 4) {
        isValid = false;
        let errorSummary = document.getElementById("validation-summary");
        let errorItem = document.createElement("li");
        errorItem.innerText = "Year field is empty or is invalid.";

        errorSummary.appendChild(errorItem);
    }

    if(price == "" || isNaN(priceValue)) {
        isValid = false;
        let errorSummary = document.getElementById("validation-summary");
        let errorItem = document.createElement("li");
        errorItem.innerText = "Price field is empty or isn't a number.";

        errorSummary.appendChild(errorItem);
    }

    return isValid;
}

function clearInputErrors() {
    let errorSummary = document.getElementById("validation-summary");
    errorSummary.innerHTML = "";
}

function displayVehicle(vehicle:Vehicle):void {
    let displayDiv = <HTMLElement>document.getElementById("display");
    
    let vehicleMake = document.createElement("h2");
    vehicleMake.innerHTML =  "Make: " + myVehicle.make;
    
    displayDiv.appendChild(vehicleMake);

    let vehicleModel = document.createElement("p");
    vehicleModel.innerHTML = "Model: " + myVehicle.model;

    displayDiv.appendChild(vehicleModel);

    let vehicleYear = document.createElement("p");
    vehicleYear.innerHTML = "Year: " + myVehicle.year;

    displayDiv.appendChild(vehicleYear);

    let vehiclePrice = document.createElement("p");
    vehiclePrice.innerHTML = "$" + myVehicle.price;

    displayDiv.appendChild(vehiclePrice);

}

function getVehicle(){
    let vehicle = myVehicle;

    let makeInput = <HTMLInputElement>document.getElementById("make");
    vehicle.make = makeInput.value;

    let modelInput = <HTMLInputElement>document.getElementById("model");
    vehicle.model = modelInput.value;

    let yearInput = <HTMLInputElement>document.getElementById("year");
    vehicle.year = yearInput.value;

    let priceInput = <HTMLInputElement>document.getElementById("cost");
    vehicle.price = priceInput.value;

    return vehicle;
}