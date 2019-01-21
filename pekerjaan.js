var brain = require('brain.js');

//var express = require('express');
//var app = express();
//app.set('view engine', 'ejs');


const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const trainingData = [
  { input: { IPK: 3, Psikologi: 6, Wawancara: 9 }, output: {Diterima: 1} },
  { input: { IPK: 3, Psikologi: 5, Wawancara: 9 }, output: {Diterima: 1} },
  { input: { IPK: 3, Psikologi: 5, Wawancara: 8 }, output: {Diterima: 1} },
  { input: { IPK: 3, Psikologi: 4, Wawancara: 8 }, output: {Diterima: 0} },
  { input: { IPK: 2, Psikologi: 6, Wawancara: 9 }, output: {Diterima: 1} },
  { input: { IPK: 2, Psikologi: 5, Wawancara: 9 }, output: {Diterima: 1} },
  { input: { IPK: 2, Psikologi: 5, Wawancara: 8 }, output: {Diterima: 1} },
  { input: { IPK: 2, Psikologi: 4, Wawancara: 8 }, output: {Diterima: 0} },
  { input: { IPK: 1, Psikologi: 6, Wawancara: 9 }, output: {Diterima: 1} },
  { input: { IPK: 1, Psikologi: 5, Wawancara: 8 }, output: {Diterima: 0} },
  { input: { IPK: 1, Psikologi: 4, Wawancara: 9 }, output: {Diterima: 1} }
];

net.train(trainingData);
var run1 = net.run({ IPK: 3, Psikologi: 4, Wawancara: 9 });
var run2 = net.run({ IPK: 2, Psikologi: 4, Wawancara: 9 });
var run3 = net.run({ IPK: 1, Psikologi: 5, Wawancara: 9 });
var run4 = net.run({ IPK: 2, Psikologi: 6, Wawancara: 8 });
var run5 = net.run({ IPK: 1, Psikologi: 6, Wawancara: 8 });
var run6 = net.run({ IPK: 3, Psikologi: 6, Wawancara: 8 });
var run7 = net.run({ IPK: 1, Psikologi: 4, Wawancara: 8 });

function float2int(value) {
    if (value > 0.5) {
        return 'Ya';
    } else {
        return 'Tidak';
    } 
}
console.log(float2int(run1['Diterima']));
console.log(float2int(run2['Diterima']));
console.log(float2int(run3['Diterima']));
console.log(float2int(run4['Diterima']));
console.log(float2int(run5['Diterima']));
console.log(float2int(run6['Diterima']));
console.log(float2int(run5['Diterima']));