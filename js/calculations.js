
// [ 2.54, // inches to cm
//   .394, // cm to inches
//   29.574, //fluid oz to ml
//   0.0338135, //ml to fl
//   1.6, //miles to km
//   .625, //km to miles
//   .455, // pounds to kg
//   2.2, // kg to pounds
//   0.907185,//std shit tone
//   1.10231,//metric shit ton
// ]

var valArray = [ 'inches',
'centimeters',
'ounces',
'milliliters',
'miles',
'kilometers',
'pounds',
'kilograms',
'standard shit-tons',
'metric shit-tons'];

function buttonHandler(e) {
  var targetEl = e.target;
  e.preventDefault();

  switch (e.target.id) {
  case 'convert-button':
    converter(document.getElementById('enter-number').value, valArray.indexOf(document.getElementById('select-conv').value));
    break;
  case 'clear-conv':
    document.getElementById('post-results').innerHTML = '';
    break;
  }
};

document.getElementById('convert-button').addEventListener('click', buttonHandler, false);
document.getElementById('clear-conv').addEventListener('click', buttonHandler, false);

var conversionNumbers = [
  2.54, // inches to cm
  .394, // cm to inches
  29.574, //fluid oz to ml
  0.0338135, //ml to fl
  1.6, //miles to km
  .625, //km to miles
  .455, // pounds to kg
  2.2, // kg to pounds
  0.907185,//std shit tone
  1.10231//metric shit ton
];

var userInput = document.getElementById('enter-number').value;
var post = document.getElementById('post-results');

function converter(userInput, rateIndex){
  'use strict';
  console.log('rate: ' + rateIndex + 'user Input :' + userInput);
  var output = conversionNumbers[rateIndex] * userInput;
  console.log(userInput + ' ' + valArray[rateIndex] + ' ' + output);
  var li = document.createElement('li');

  //1 inch equals 2.540 centimeters"
  var myPluralEnding = rateIndex === 0 ? 2 : 1; // drop two characters for convertFrom Units if rateIndex is 0 (inches)
  var convertFromString = userInput <= 1 ? valArray[rateIndex].substr(0, valArray[rateIndex].length - myPluralEnding) : valArray[rateIndex];

  myPluralEnding = rateIndex % 2 === 0 ? rateIndex + 1 : rateIndex - 1 === 0 ? 2 : 1; //drop 2 characters from convertTo Units if conerting to previous item in array
  var convertToString = output <= 1 ? valArray[(rateIndex % 2 === 0) ? rateIndex + 1 : rateIndex - 1].substr(0, valArray[(rateIndex % 2 === 0) ? rateIndex + 1 : rateIndex - 1].length - myPluralEnding) : valArray[rateIndex];

  li.textContent = userInput + ' ' + convertFromString + ' equals ' + output.toFixed(3) + ' ' + convertToString;
  post.appendChild(li);
}
