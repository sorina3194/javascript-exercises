const sumAll = function (min, max) {
  let sum = 0;
  if (
    min < 0 ||
    max < 0 ||
    typeof min !== "number" ||
    typeof max !== "number"
  ) {
    return "ERROR";
  }
  const initial = min < max ? min : max;
  const final = max < min ? min : max;

  for (let i = initial; i <= final; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
