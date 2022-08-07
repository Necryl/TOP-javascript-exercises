const sumAll = function(firstNum, secondNum) {
    let error = false;
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
        error = true;
    } else if (firstNum < 0 || secondNum < 0) {
        error = true;
    }
    if (error === true) {
        return 'ERROR';
    }
    
    let sum = 0;
    let num1;
    let num2;
    let equal = false;
    
    if (firstNum < secondNum) {
        num1 = firstNum;
        num2 = secondNum;
    } else if (firstNum > secondNum) {
        num1 = secondNum;
        num2 = firstNum;
    } else {
        equal = true;
    }

    let adder = num1;
    if (!equal) {
        while (adder <= num2) {
            sum += adder;
            adder += 1;
        }
    } else {
        sum = num1 + num2;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
