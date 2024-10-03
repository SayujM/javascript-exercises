const convertToCelsius = function(inpFahrenheit) {
let tempInCelsius = (inpFahrenheit - 32) * (5/9.0);
return parseFloat(tempInCelsius.toFixed(1));
};

const convertToFahrenheit = function(inpCelsius) {
  let tempInFahrenheit = (inpCelsius * (9 / 5.0)) + 32.0;
  return parseFloat(tempInFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
