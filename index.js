// adjust the parameters "between one and ???"
var xParameter1 = 10
const xParameter2 = 1 // must be one, change at your discretion
var yParameter1 = 10
const yParameter2 = 1  // must be one, change at your discretion

// init "x"
var x = Math.floor((Math.random() * xParameter1) + xParameter2);

// init "y"
var y = Math.floor((Math.random() * yParameter1) + yParameter2);

// init equation
const equation = Math.pow(x, y);

// log equation
console.log(equation);