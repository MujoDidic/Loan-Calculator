
function getValues() {

    // Get values from the page
    let amountValue = document.getElementById("amountValue").value;
    let monthsValue = document.getElementById("monthsValue").value;
    let interestValue = document.getElementById("interestValue").value


    //Check are they numbers
    amountValue = parseInt(amountValue);
    monthsValue = parseInt(monthsValue);
    interestValue = parseInt(interestValue);
    //Check are they integers
    if (Number.isInteger(amountValue) && Number.isInteger(monthsValue) && Number.isInteger(interestValue)) {
        
        //call FizzBuzz
        let fbArray = loanPayment(amountValue, monthsValue, interestValue);
        
        
        //Display data to a screen
        displayData(fbArray);
    }else{
        alert("You must input number!!!");
    }
       
}

function loanPayment(amountValue, monthsValue, interestValue){

    let returnArray = [];

    let interest = interestValue / 100; // interest u procentima

    let monthInterest = amountValue * interest / 12; //mjesecna kamata

    
//--------------------------------------------------------------
    let totalInterest = 0;

    let restOfLoan = amountValue;

    let pastMonths;


    for (pastMonths = 1; pastMonths <= monthsValue; pastMonths++) {
        
        let monthRate = restOfLoan / (monthsValue - pastMonths);

        let monthRateWithInterest = monthRate + monthInterest;
        
        returnArray.push(pastMonths);
        returnArray.push(monthRateWithInterest);
        returnArray.push(monthRate);
        returnArray.push(monthInterest = restOfLoan * interest / 12);
        returnArray.push(totalInterest = totalInterest + monthInterest);
        returnArray.push(restOfLoan = restOfLoan - monthRateWithInterest);
        
    }
    
    return returnArray;

}


function displayData(fbArray){
    
    let tableBody = document.getElementById("results");

    //Get Template

    let templateRow = document.getElementById("fbTemplate");
    
    //clear the table
    tableBody.innerHTML ="";

    for (let index = 0; index < fbArray.length; index += 6) {
        
        let tableBody = document.getElementById("results");

        let tableRow = document.importNode(templateRow.content, true);

        //grab tds and put in array
        let rowCols = tableRow.querySelectorAll("td");
        
       // rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        //rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index + 1].toFixed(2);

       // rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index + 2].toFixed(2);

        //rowCols[3].classList.add(fbArray[index + 3])
        rowCols[3].textContent = fbArray[index + 3].toFixed(2);

        //rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index + 4].toFixed(2);

        //rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[5].textContent = fbArray[index + 5].toFixed(2);

        tableBody.appendChild(tableRow);
    }


}

