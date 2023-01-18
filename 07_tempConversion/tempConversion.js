const convertToCelsius = function (celsius) {
  let FahrToC = (celsius - 32) * (5 / 9);
  let round = Math.round(FahrToC * 10) / 10;
  let fixed = round.toFixed(1);
  return Number(fixed);
};

const convertToFahrenheit = function (fahrenheit) {
  let cToFahr = fahrenheit * (9 / 5) + 32;
  let round = Math.round(cToFahr * 10) / 10;
  let fixed = round.toFixed(1);
  return Number(fixed);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
