
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
'standard',
'metric'];

function buttonHandler(e) {
  var targetEl = e.target;
  e.preventDefault();

  converter(document.getElementById('enter-number').value, conversionNumbers[valArray.indexOf(document.getElementById('select-conv').value)]);

};

document.getElementById('convert-button').addEventListener('click', buttonHandler, false);

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

function converter(userInput, rate){
  'use strict';
  console.log('rate: ' + rate + 'user Input :' + userInput);
  var output = rate * userInput;
  console.log(userInput + ' ' + rate + ' ' + output);
  var li = document.createElement('li');
  li.textContent = output;
  post.appendChild(li);
}
