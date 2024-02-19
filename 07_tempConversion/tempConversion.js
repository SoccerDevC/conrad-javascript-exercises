const convertToCelsius = function(temp) {
  let newTemp = (temp - 32) * .5556;
  let roundedTemp = Math.round(newTemp * 10)/10;
  return roundedTemp;
};

const convertToFahrenheit = function(temp) {
  let newTemp = (temp * 1.8) + 32;
  let roundedTemp = Math.round(newTemp * 10)/10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
