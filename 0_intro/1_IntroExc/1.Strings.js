// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = '1.10';
const numberTwo = '2.30';

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const num1 = parseFloat(numberOne);
const num2 = parseFloat(numberTwo);
const sum = num1 + num2;
console.log(sum);

// --------------------------------------

// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = '1.10';
const anotherNumberTwo = '2.30';

const anotherNum1 = parseFloat(anotherNumberOne);
const anotherNum2 = parseFloat(anotherNumberTwo);
const anotherSum = (anotherNum1 + anotherNum2).toFixed(2);
console.log(anotherSum);

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const average = ((one + two + three) / 3).toFixed(5);
console.log(average);

// --------------------------------------
// Exercise 4 - Get the character by index

const letters = 'abc';
// Get me the character "c"
const c = letters.charAt(2);
console.log(c);

// --------------------------------------
// Exercise 5 - Replace

const fact = 'You are learning javascript!';

// capitalize the J in Javascript

const newFact = fact.replace('j', 'J');
console.log(newFact);

// --------------------------------------
