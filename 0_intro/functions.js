function add(x, y) {
  return x + y;
}
const addInAVariable = function (x, y) {
  return x + y;
};
const addArrowFunction = (x, y) => x + y;

console.log(addArrowFunction(35, 2));

function doActionWithSomone(anyFunctionRefrence, name) {
  (anyFunctionRefrence(name));
  
}
function doActionWithSomoneWithReturn(anyFunctionRefrence, secondFunction, name, number) {
return anyFunctionRefrence(name) + (secondFunction(number));
}

const running = (name) => `name} is running`;
const fishing = (name) => `name} is fishing`;

const counting = (number) => ` and number} of balls is passed`

// Anders is running
doActionWithSomone(running, 'Anders');

//Alex is fishing
/* console.log(doActionWithSomoneWithReturn(fishing, 'Alex')); */

//passing + any function

const passing = (name) => `name} is passing a number} ball(s)`;
console.log(doActionWithSomoneWithReturn(running, counting, 'Paweł', 25));
