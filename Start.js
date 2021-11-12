# FreeCodeCamp
Traning JS
 
Task№44
// Setup
const myArray = [["John", 23], ["cat", 2]];
myArray.push(['dog',3]);
// Only change code below this line
console.log(myArray);

Task№45
// Setup
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
// Only change code below this line
console.log(removedFromMyArray);

Task№46
// Setup
const myArray = [["John", 23], ["dog", 3]];
let removedFromMyArray = myArray.shift();
// Only change code below this line
console.log(myArray);

Task47
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul",35])
// Only change code below this line
console.log(myArray);

Task№48
const myList = [['egg',10],['wather bottles',5],['chees',1 ],['lemons',2],['chocolate',4]];
console.log(myList);

Task№49
 function reusableFunction(){
   console.log("Hi World");
 };
 reusableFunction();

Task№50
function functionWithArgs(one, two) {
  console.log(one + two);
  console.log(one + two);
};
functionWithArgs(1,2);
functionWithArgs(7,9);


Task№51
function timesFive (num) {
  return num * 5;
};
const result = timesFive(5);
const result1 = timesFive(2);
const result2 = timesFive(0);

console.log(result);
console.log(result1);
console.log(result2);

Task№52
// Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

Task№53
function myLocalScope() {
  // Only change code below this line
  let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

Task№54
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}
console.log(myOutfit());

Task№55
// Setup
let sum = 0;
function addThree() {
  sum = sum + 3;
}
// Only change code below this line
function addFive() {
  sum = sum + 5;
};
// Only change code above this line
addThree();
addFive();

Task№56
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
// Only change code below this line
console.log(processed);


Task№57
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

Task№58
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}
console.log(welcomeToBooleans());

Task№59
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
 if (wasThatTrue) {
   return "Yes, that was true";
 }
  return "No, that was false";
  // Only change code above this line
}

Task№60
// Setup
function testEqual(val) {
  if (val==12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
console.log(testEqual(10))

Task№61
// Setup
function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);
console.log(testStrict(7));

Task№62
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
console.log(compareEquality());
