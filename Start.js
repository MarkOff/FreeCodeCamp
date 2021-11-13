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

Task№63
// Setup
function testNotEqual(val) {
  if (val!=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

Task№64
// Setup
function testStrictNotEqual(val) {
  if (val!==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

Task№65
function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }

  if (val>10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

Task№66
function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
testGreaterOrEqual(10);

Task№67
function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }

  if (val<55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}
testLessThan(10);
console.log(testLessThan(99));

Task№68
function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
console.log(testLessOrEqual(25));

Task№69
function testLogicalAnd(val) {
  // Only change code below this line

  if (val<=50 && val>=25) {
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
console.log(testLogicalAnd(80)); 

Task№70
function testLogicalOr(val) {
  // Only change code below this line

  if (val>=21 || val<=9) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
console.log(testLogicalOr(10));

Task№71
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  // Only change code above this line
  return result;
}
testElse(4);
console.log(testElse(6));

Task№72
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";
  }
};

testElseIf(7);
console.log(testElseIf(12));

Task№73
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
console.log(orderMyLogic(11));

Task№74
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else { 
    return "Huge";
  }
}
  // Only change code above this line
testSize(7);
console.log(testSize(25));

Task№75
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2){
    return "Eagle";
  } else if (strokes == par - 1){
    return "Birdie";
  }else if (strokes == par){
    return "Par";
  }else if (strokes == par + 1){
    return "Bogey";
  }else if (strokes == par + 2){
     return "Double Bogey";
  }else {
    return "Go Home!"
  }
  // Only change code above this line
}

golfScore(5, 4);
console.log(golfScore(4,2 ));

Task№76
