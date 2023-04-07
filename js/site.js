// Loan calculator software
function getValues() {

    // Get values from the page
    loanAmount = document.getElementById("loanAmount").value;
    numberOfMonths = document.getElementById("numberOfMonths").value;
    interestOfLoan = document.getElementById("interestOfLoan").value


    //Check are they numbers
    loanAmount = parseInt(loanAmount);
    numberOfMonths = parseInt(numberOfMonths);
    interestOfLoan = parseInt(interestOfLoan);
    //Check are they integers
    if (Number.isInteger(loanAmount) && Number.isInteger(numberOfMonths) && Number.isInteger(interestOfLoan)) {
        
        //call Array for Loan calculation
        let loanArray = loanPayment(loanAmount, numberOfMonths, interestOfLoan);
        
        
        //Display data in table to a screen
        displayData(loanArray);

        
    }else{
        alert("You must input number!!!");
    }
    //Displays data on screen into h3 HTML tag
    DisplayOnBody(loanAmount);
       
}

// Made it global because it's used in functions loanPayment() and DisplayOnBody()
var totalInterest;


// Loan calculation

function loanPayment(loanAmount, numberOfMonths, interestOfLoan){

    let returnLoanArray = [];

    let interest = interestOfLoan / 100; // interest turned in percentages

    let monthInterest = loanAmount * interest / 12; // monthly interest

    let restOfLoan = loanAmount;
    
    let pastMonths;
    
    totalInterest = 0;


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

// shows data in table
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

//shows whole of loan with interest on body 

function DisplayOnBody() {
    
    document.getElementById("amountLoanedDisplay").innerHTML = parseFloat(loanAmount).toFixed(2);
    document.getElementById("totalInterestDisplay").innerHTML = parseFloat(totalInterest).toFixed(2);
    document.getElementById("totalAmountToPayDisplay").innerHTML = parseFloat(loanAmount + totalInterest).toFixed(2);
    
}