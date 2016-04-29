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

  converter( valArray.indexOf(document.getElementById('select-conv').value));
  console.log('Calling Conversion function');

};

document.getElementById('convert-button').addEventListener('click', buttonHandler, false);
