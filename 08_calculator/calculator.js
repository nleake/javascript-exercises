const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	if(!arr.length) return 0;
  return arr.reduce((acc, item) => acc + item);
};

const multiply = function(...nums) {
  return nums.reduce((acc, item) => acc * item);
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {
	if(num === 0) return 1;
  let factorial = 1;
  while (num > 0) {
      factorial *= num;
      num--;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
