"use strict";

// Buttons

let onCheckBtnClicked = document.getElementById("checkPriceBtn");
let queenPreferred = document.getElementById("queenPreferredBtn");
let kingPreferred = document.getElementById("kingPreferredBtn");
let doublePreferred = document.getElementById("doublePreferredBtn");

// Output Boxes

let roomCostOutput = document.getElementById("roomCostOutput");
let discountOutput = document.getElementById("discountOutput");
let discountedRoomCostOutput = document.getElementById("discountedRoomCostOutput");
let taxOutPut = document.getElementById("taxOutPut");
let totalCostOutput = document.getElementById("totalCostOutput");  
let messageDiv = document.getElementById("messageDiv");

// Radio button options

let seniorDiscount = document.getElementById("seniorDiscount");
let militaryDiscount = document.getElementById("militaryDiscount");
let confirmationNumber = document.getElementById("confirmationNumber");

// Our unknowns

let discountPrice;
let discountedPrice;
let tax;
let roomCost;
let clientDiscount;
let TotalCost;
let confimationName;


window.onload = () => {
    onCheckBtnClicked.onclick = estimateTotalPrice;
};

function estimateTotalPrice() {
    let numberOfAdults = document.getElementById("numberOfAdultsInput").value;
    let numberOfChildrens = document.getElementById("numberOfChildrenInput").value;
    let totalNumberOfParty = Number(numberOfAdults) + Number(numberOfChildrens);
    console.log(totalNumberOfParty);
    if ((queenPreferred.checked && (totalNumberOfParty <= 5)) || (kingPreferred.checked && (totalNumberOfParty <= 2)) || (doublePreferred.checked && (totalNumberOfParty <=6))){
    
     messageDiv.innerText = " ";    
    let checkInDate = document.getElementById("checkInInput").value;
    let checkInDateConverted = new Date(checkInDate);
    let checkInMonth = checkInDateConverted.getMonth() + 1;
    let checkInYear = checkInDateConverted.getUTCFullYear();
    console.log(checkInYear)
    console.log(checkInMonth);
    let numberOfNights = document.getElementById("numberOfNightsInput").value;
    
    if (queenPreferred.checked) {
        if (checkInMonth >= 6 && checkInMonth <= 8) {
            roomCost = 250 * numberOfNights;
        } else {
            roomCost = 150 * numberOfNights;
        }
    } else if (kingPreferred.checked) {
        if (checkInMonth >= 6 && checkInMonth <= 8) {
            roomCost = 250 * numberOfNights;
        } else {
            roomCost = 150 * numberOfNights;
        }
    } else if (doublePreferred.checked) {
        if (checkInMonth >= 6 && checkInMonth <= 8) {
            roomCost = 350 * numberOfNights;
        } else {
            roomCost = 210 * numberOfNights;
        }
    }
    
    roomCostOutput.innerHTML = "$" + roomCost.toFixed(2);
    
       
    if (seniorDiscount.checked) {
        discountPrice = 0.1 * roomCost;
        discountOutput.innerHTML = "$" + discountPrice.toFixed(2);
    } else if (militaryDiscount.checked) {
        discountPrice = 0.2 * roomCost;
        discountOutput.innerHTML = "$" + discountPrice.toFixed(2);
    } else if (noDiscount.checked) {
        discountPrice = 0;
        discountOutput.innerHTML = "$0.00"
    }
    
    discountedPrice = roomCost - discountPrice;
    
    discountedRoomCostOutput.innerHTML = "$" + discountedPrice.toFixed(2); 
    
    let taxRate = 0.12;
    
    tax = taxRate * discountedPrice;
    
    taxOutPut.innerHTML = "$" + tax.toFixed(2);
    
    TotalCost = (discountedPrice + tax);
    
    totalCostOutput.innerHTML = "$" + TotalCost.toFixed(2);
    
    
    let firstName = document.getElementById("firstNameInput").value;
    let lastName = document.getElementById("lastNameInput").value;
    
    confimationName = firstName.substring(0,3);


    let confirmationNumberOutput = confimationName.toUpperCase() + '-' + checkInMonth + checkInYear + '-' + numberOfNights + ':' + numberOfAdults + ':' + numberOfChildrens;

    confirmationNumber.innerHTML = confirmationNumberOutput;
} else {
    messageDiv.innerText = "The room you selected will not hold the party!" 
}
}
