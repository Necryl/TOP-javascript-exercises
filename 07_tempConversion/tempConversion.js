const ftoc = function(num) {
  let result = (num - 32) / 9 * 5;
  result = Math.round(result * 10) / 10;
  return result;
};

const ctof = function(num) {
  let result = num / 5 * 9 + 32;
  result = Math.round(result * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
