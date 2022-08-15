const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce((total, item) => {return total + item}, 0);
};

const multiply = function(array) {
  return array.length === 0 ? 0:array.reduce((total, item) => total * item, 1);
};

const power = function(num1, num2) {
	let result = num1;
  for (let i = 1; i < num2; i++) {
    result *= num1;
  }
  return result;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
