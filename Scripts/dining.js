"use strict";


window.onload = function () {
    const payAsYouGoRadio = document.getElementById('payAsYouGo');
    const allInclusiveRadio = document.getElementById('allInclusive');
    const payAsYouGoInfo = document.getElementById('payAsYouGoInfo');
    const allInclusiveInfo = document.getElementById('allInclusiveInfo');
    const submitBtn = document.getElementById("submitBtn");
    
    payAsYouGoRadio.onchange = function () {
        if (this.checked) {
            payAsYouGoInfo.classList.remove('hidden');
            allInclusiveInfo.classList.add('hidden');
        }
    };
    
    allInclusiveRadio.onchange = function () {
        if (this.checked) {
            allInclusiveInfo.classList.remove('hidden');
            payAsYouGoInfo.classList.add('hidden');
        }
    };

    submitBtn.onclick = () => {
        
        const confirmationNumberInput = document.getElementById('confirmationNumberInput').value;
        let numberOfDaysIndex = confirmationNumberInput.indexOf(":");
        let numberOfAdultsIndex = confirmationNumberInput.lastIndexOf(":");
        var numberOfDays = confirmationNumberInput.substring(numberOfDaysIndex-1,numberOfDaysIndex);
        var numberOfAdults = confirmationNumberInput.substring(numberOfDaysIndex+1,numberOfAdultsIndex);
        var numberOfChildrens = confirmationNumberInput.substring(numberOfAdultsIndex+1);

        if(document.getElementById("basicInclusive").checked){
            let newPrice = (62.5*numberOfDays*numberOfAdults) + (49.99 * numberOfDays*numberOfChildrens);
            document.getElementById("messageDiv").innerText = "The all-inlcusive option has been added to your reservation. The Price of your stay has increased by $" + newPrice + " based on your selections here."
        }else if (document.getElementById("premiumInclusive").checked){
            let newPrice = ((80*numberOfDays*numberOfAdults) + (49.99 * numberOfDays*numberOfChildrens)).toFixed(2);
            document.getElementById("messageDiv").innerText = "The all-inlcusive option has been added to your reservation. The Price of your stay has increased by $" + newPrice + " based on your selections here."
        }
    }
};


