"use strict";

window.onload = init;

let onEstimateBtnClicked = document.getElementById("estimateBtn");

function init() {
  onEstimateBtnClicked.onclick = estimateValues;
}

function estimateValues() {
  let numberOfRent = document.getElementById("rentalNumberOfDate").value;
  let dailyRate = Number(numberOfRent) * 29.99;

  let electronicTollRate;

  if (document.getElementById("electronicTollCheckBox").checked) {
    electronicTollRate = numberOfRent * 3.95;
  } else {
    electronicTollRate = 0;
  }

  let gpsRate;

  if (document.getElementById("gpsCheckBox").checked) {
    gpsRate = numberOfRent * 2.95;
  } else {
    gpsRate = 0;
  }

  let roadsideRate;

  if (document.getElementById("roadsideAssistanceCheckBox").checked) {
    roadsideRate = numberOfRent * 2.95;
  } else {
    roadsideRate = 0;
  }

  let totalRate = dailyRate + electronicTollRate + gpsRate + roadsideRate;

  let under25Surcharge;

  if (document.getElementById("yesUnder25").checked) {
    under25Surcharge = 0.3 * totalRate;
  } else if (document.getElementById("notUnder25").checked) {
    under25Surcharge = 0;
  }

  let newTotalRate = totalRate + under25Surcharge;

  let totalOptionsRate = electronicTollRate + gpsRate + roadsideRate;

  let result1 = "Car rental: $" + dailyRate;

  let messageBox1 = document.getElementById("resultDisplayBox1");

  messageBox1.innerHTML = result1;

  let messageBox2 = document.getElementById("resultDisplayBox2");

  if (totalOptionsRate > 0) {
    let result2 = "Options: $" + totalOptionsRate.toFixed(2);

    messageBox2.innerHTML = result2;
  } else {
    messageBox2.innerHTML = " ";
  }

  let messageBox3 = document.getElementById("resultDisplayBox3");

  if (under25Surcharge > 0) {
    let result3 = "Under 25 Surcharge: $" + under25Surcharge.toFixed(2);

    messageBox3.innerHTML = result3;
  } else if (under25Surcharge == 0) {
    messageBox3.innerHTML = " ";
  }

  let totalResult = "Total Due: $" + newTotalRate.toFixed(2);

  let messageBox4 = document.getElementById("resultDisplayBox4");

  messageBox4.innerHTML = totalResult;
}
