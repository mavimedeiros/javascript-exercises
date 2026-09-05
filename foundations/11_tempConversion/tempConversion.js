const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32)* 5/9;
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

console.log(convertToCelsius(32)) // fahrenheit to celsius, should return 0
console.log(convertToFahrenheit(0)) // celsius to fahrenheit, should return 32
console.log(convertToCelsius(100)) // should return 37.8 and not 37.77777777777778.

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
