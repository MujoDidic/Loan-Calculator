
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
        let fbArray = fizzBuzzXXL(amountValue, monthsValue, interestValue);
        
        
        //Display data to a screen
        displayData(fbArray);
    }else{
        alert("You must input number!!!");
    }
       
}

function fizzBuzzXXL(amountValue, monthsValue, interestValue){

    let returnArray = [];

    //for (let i = 1; i <=100; i++){
        
    //    let value = ((i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz' : '' ) || i);
    //    returnArray.push(value);
    //}
    //let value = ((amountValue > 0 && monthsValue > 0 && interestValue > 0));

    if (amountValue > 0 && monthsValue > 0 && interestValue > 0) {
        //let value = ((amountValue > 0 && monthsValue > 0 && interestValue > 0));
        returnArray.push(amountValue)
        returnArray.push(monthsValue)
        returnArray.push(interestValue)
    }
    
    return returnArray;

}


function displayData(fbArray){
    
    let tableBody = document.getElementById("results");

    //Get Template

    let templateRow = document.getElementById("fbTemplate");
    
    //clear the table
    tableBody.innerHTML ="";

    for (let index = 0; index < fbArray.length; index += 3) {
        
        let tableBody = document.getElementById("results");

        let tableRow = document.importNode(templateRow.content, true);

        //grab tds and put in array
        let rowCols = tableRow.querySelectorAll("td");
        
       // rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        //rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index + 1];

       // rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index + 2];

        //rowCols[3].classList.add(fbArray[index + 3])
        //rowCols[3].textContent = fbArray[index + 3];

        //rowCols[4].classList.add(fbArray[index + 4]);
        //rowCols[4].textContent = fbArray[index + 4];

        tableBody.appendChild(tableRow);
    }


}

