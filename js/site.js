
function getValues() {

    // Get values from the page
    let loanAmount = document.getElementById("loanAmount").value;
    let numberOfMonths = document.getElementById("numberOfMonths").value;
    let interestOfLoan = document.getElementById("interestOfLoan").value


    //Check are they numbers
    loanAmount = parseInt(loanAmount);
    numberOfMonths = parseInt(numberOfMonths);
    interestOfLoan = parseInt(interestOfLoan);
    //Check are they integers
    if (Number.isInteger(loanAmount) && Number.isInteger(numberOfMonths) && Number.isInteger(interestOfLoan)) {
        
        //call FizzBuzz
        let loanArray = loanPayment(loanAmount, numberOfMonths, interestOfLoan);
        
        
        //Display data to a screen
        displayData(loanArray);
    }else{
        alert("You must input number!!!");
    }
       
}

function loanPayment(loanAmount, numberOfMonths, interestOfLoan){

    let returnLoanArray = [];

    let interest = interestOfLoan / 100; // interest turned in percentages

    let monthInterest = loanAmount * interest / 12; // monthly interest

    
//--------------------------------------------------------------
    let totalInterest = 0;

    let restOfLoan = loanAmount;

    let pastMonths;


    for (pastMonths = 1; pastMonths <= numberOfMonths; pastMonths++) {
        
        let monthRate = restOfLoan / (numberOfMonths - pastMonths);

        let monthRateWithInterest = monthRate + monthInterest;
        
        returnLoanArray.push(pastMonths);
        returnLoanArray.push(monthRateWithInterest);
        returnLoanArray.push(monthRate);
        returnLoanArray.push(monthInterest = restOfLoan * interest / 12);
        returnLoanArray.push(totalInterest = totalInterest + monthInterest);
        
        if(monthRateWithInterest > restOfLoan)
            monthRateWithInterest = restOfLoan;
            returnLoanArray.push(restOfLoan = restOfLoan - monthRateWithInterest);
        
        
        
    }
    
    return returnLoanArray;

}


function displayData(loanArray){
    
    let tableBody = document.getElementById("results");

    //Get Template

    let templateRow = document.getElementById("fbTemplate");
    
    //clear the table
    tableBody.innerHTML ="";

    for (let index = 0; index < loanArray.length; index += 6) {
        
        let tableBody = document.getElementById("results");

        let tableRow = document.importNode(templateRow.content, true);

        //grab tds and put in array
        let rowCols = tableRow.querySelectorAll("td");
        
       
        rowCols[0].textContent = loanArray[index];

        rowCols[1].textContent = loanArray[index + 1].toFixed(2);

        rowCols[2].textContent = loanArray[index + 2].toFixed(2);

        rowCols[3].textContent = loanArray[index + 3].toFixed(2);

        rowCols[4].textContent = loanArray[index + 4].toFixed(2);

        rowCols[5].textContent = loanArray[index + 5].toFixed(2);

        tableBody.appendChild(tableRow);
    }


}

