const add = function (operand1, operand2) {
  const sum = operand1 + operand2;
  return sum;
};

const subtract = function (operand1, operand2) {
  const difference = operand1 - operand2;
  return difference;
};

const sum = function (nums = []) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
};

const multiply = function (nums = []) {
  let total = 1;
  for (let num of nums) {
    total *= num;
  }
  return total;
};

const power = function (operand1, operand2) {
  const total = operand1 ** operand2;
  return total;
};

const factorial = function (num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
