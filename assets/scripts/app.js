const defaultResult = 0;
let currentResult=defaultResult;
let logEntries = [];
//Gets input from input field
function getUserNumberInput(){
    return parseInt(usrInput.value);
}
//Creating output
function createOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}
//Generates and writes calculation log
function writeToLog(operationIdentifier, prevResult, operationNumber,newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        nextNumber: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEntries );
}
//Making every calculations using else-if loop
function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();
    if(calculationType!=='ADD' &&
    calculationType!=='SUBTRACT' &&
    calculationType !=='MULTIPLY' &&
    calculationType !== 'DIVIDE' ||
    !enteredNumber){
        return
    }
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType ==='ADD'){
        currentResult +=enteredNumber;
        mathOperator = '+';
    }else if (calculationType ==='SUBTRACT'){
        currentResult-=enteredNumber;
        mathOperator ='-';
    }else if (calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator ='*';
    }else if (calculationType === 'DIVIDE'){
        currentResult /= enteredNumber;
        mathOperator ='/';
    }
    createOutput(mathOperator,initialResult,enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}
function add(){
    calculateResult('ADD');
}
function subtract(){
    calculateResult('SUBTRACT');
}
function multiply(){
    calculateResult('MULTIPLY');
}
function divide(){
    calculateResult('DIVIDE');
}
function reset(){
    currentResult=0;
    createOutput('',0,'');
    logEntries = [];
}
//Adding buttins functionality from vendor.js file
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
resetBtn.addEventListener('click', reset);