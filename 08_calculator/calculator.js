const add = function(x=0, y=0) {
	return x + y;
};

const subtract = function(x=0, y=0) {
	return x - y;
};

const sum = function(list) {
  let sum = 0;
  for ( let i = 0, length = list.length; i < length; i++)
  {
    sum += list[i];
  }
	return sum;
};

const multiply = function(list) {
  let multiple = 1;
  for ( let i = 0, length = list.length; i < length; i++)
    {
      multiple *= list[i];
    }
    return multiple;
};

const power = function(x=1, y=1) {
	let power = 1;
  for (let i = 0; i < y; i++)
  {
    power *= x  
  }
  return power;
};

const factorial = function(n) {
  if ( n <= 1)
  {
    return 1;
  }
  return n * factorial(n-1);
	
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
