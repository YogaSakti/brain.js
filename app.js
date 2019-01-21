var brain = require('brain.js');

//var express = require('express');
//var app = express();
//app.set('view engine', 'ejs');


const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
];

net.train(trainingData);

var run1 = net.run([0, 0]);
var run2 = net.run([0, 1]);
var run3 = net.run([1, 0]);
var run4 = net.run([1, 1]);

var hsl = [run1,run2,run3,run4 ]
console.log(hsl);


//app.get('/', function(req, res){ res.render('dashboard',{data: 'kosong'})});
//const PORT = process.env.PORT || 5000;

//app.listen(PORT, console.log(`Server started on port ${PORT}`));
