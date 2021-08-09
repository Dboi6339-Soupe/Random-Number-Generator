// adjust the parameters
var xParameter1 = 10
var xParameter2 = 1
var yParameter1 = 10
var yParameter2 = 1

// init "x"
var x = Math.floor((Math.random() * xParameter1) + xParameter2);

// init "y"
var y = Math.floor((Math.random() * yParameter1) + yParameter2);

// init equation
const equation = Math.pow(x, y);

// log equation
console.log(equation);