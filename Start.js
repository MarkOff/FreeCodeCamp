Task №1
//Hi World
/*Hi
World*/

Task №2
var myName;

Task №3
var a;
var a = 7;

Task №4
var a;
a = 7;
var b;
b = a;

Task №5
var a = 9;

Task №6
var myFirstName = 'Vladislav';
var myLastName = 'Markov';

Task №7
var a = 5;
var b = 10;
var c = 'I am a';

a = a + 1;
b = b + 5;
c = c + " String!";

Task №8
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

Task №9
let catName = "Oliver";
let catSound = "Meow!";

Task №10
const FCC = "freeCodeCamp"; 
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact); 

Task №11
const sum = 10 + 10;

Task №12
const difference = 45 - 33;

Task №13
const product = 8 * 10;

Task №14
const quotient = 66 / 33;

Task №15
let myVar = 87;
myVar++;
console.log(myVar);

Task №16
let myVar = 11;
myVar --;
console.log(myVar)

Task №17
const myDecimal = 5.7;

Task №18
const product = 2.0 * 2.5;

Task №19
const quotient = 4.4 / 2.0; // Change this line

Task №20
const remainder = 11 % 3;
console.log(remainder);

Task №21
let a = 3;
let b = 17;
let c = 12;

a += 12 ;
b += 9;
c += 7;

console.log(a);
console.log(b);
console.log(c);

Task №22
let a = 11;
let b = 9;
let c = 3;


a -= 6 ;
b -= 15 ;
c -= 1;

console.log(a);
console.log(b);
console.log(c);

Task №23
let a = 5;
let b = 12;
let c = 4.6;


a *= 5 ;
b *= 3;
c *= 10;

console.log(a);
console.log(b);
console.log(c);

Task №24
let a = 48;
let b = 108;
let c = 33;


a /= 12;
b /= 4;
c /= 11;

console.log(a);
console.log(b);
console.log(c);

Task №25
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
console.log(myStr);

Task №26
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr);

Task №27
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

Task №28
const myStr = 'This is the start. '+'This is the end.'; 
console.log(myStr);

Task №29
let myStr = 'This is the first sentence. ';
myStr += 'This is the second sentence.';
console.log(myStr);

Task №30
const myName = 'Vlad';
const myStr = 'My name is'+ myName + 'and I am well!';
console.log(myStr);

Task №31
const someAdjective = "Cool!";
let myStr = "Learning to code is ";
myStr += someAdjective;

Task №32
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

Task №33
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; 

Task №34
let myStr = "Jello World";
myStr = "Hello World"; 

Task №35
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2]; 

Task №36
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length -1]; 

Task №37
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length -2]; 

Task №38
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = myAdjective + ' ' + myNoun + ' ' + myAdverb + ' ' + myVerb; 
console.log(wordBlanks);

//ARRAY TASK START!

Task №39
const myArray = ['This firs array', 2];

Task №40
const myArray = [['first array',1],['second array',2]];

Task №41
const myArray = [50, 60, 70];
var myData = myArray[0];

Task №42
const myArray = [18, 64, 99];
myArray[0] = 45;

Task №43
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
const myData = myArray[2][1];

Task №44
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
console.log(myArray);

Task №45
const myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop(); 
console.log(myArray);

Task №46
const myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);

Task №47
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

Task №48
const myList = [['Milk', 2],['Chocolate', 5],['bread', 1],['eggs', 2],['vegetables', 5]];

//ARRAY TAKS FINISH!

//FUNCTION TASK START!

Task №49
function reusableFunction() {
  console.log('Hi World');
};
reusableFunction();

Task №50
function  functionWithArgs(number1, number2) {
  console.log(number1+number2);
};
functionWithArgs(7,9);

Task №51
function timesFive(num) {
  return num * 5;
};
var reult = timesFive(5);
console.log(reult);

Task №52
function fun1() {
  oopsGlobal = 5;
}

let myGlobal = 10;
 
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

Task №53
function myLocalScope() {
  var myVar = 'Hi';
  console.log('inside myLocalScope', myVar);
}

myLocalScope();

console.log('outside myLocalScope', myVar);

Task №54
const outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = 'sweater';
  return outerWear;
}

myOutfit(); 
console.log(myOutfit());

Task №55
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
  
};

addThree();
console.log(addFive());

Task №56
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = 2;
processed = processArg(7)
console.log(processed);

//FUNCTION + ARRAY

Task №57
function nextInLine(arr, item) {
  arr.push(item);
  var sum = arr.shift();
  return sum;
}

const testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//FUNCTION + TRUE OR FALSE

Task №58
function welcomeToBooleans() {
  var trueOrFalse = true;
  return trueOrFalse; 
}
console.log(welcomeToBooleans());

Task №59
function trueOrFalse(wasThatTrue) {
 if (wasThatTrue) {
   return 'Yes, that was true';
 }
  return 'No, that was false';
}
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));

Task №60
function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}
console.log(testEqual(12));

Task №61
function testStrict(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}
console.log(testStrict(7));

Task №62
function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality(10, 10));

Task №63
function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}
console.log(testNotEqual('99', 99));

Task №64
function testStrictNotEqual(val) {
  if (val !== 17) { 
    return "Not Equal";
  }
  return "Equal";
}
console.log(testStrictNotEqual(17));

Task №65
function testGreaterThan(val) {
  if (val > 100) {  
    return "Over 100";
  }
  if (val > 10) {  
    return "Over 10";
  }
  return "10 or Under";
}
console.log(testGreaterThan(400));

Task №66
function testGreaterOrEqual(val) {
  if (val >= 20) {  
    return "20 or Over";
  }
  if (val >= 10) { 
    return "10 or Over";
  }
  return "Less than 10";
}
console.log(testGreaterOrEqual(4));

Task №67
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}
console.log(testLessThan(55);
            
Task №68
function testLessOrEqual(val) {
  if (val <= 12) {  
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) { 
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}
console.log(testLessOrEqual(10));

Task №69
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
      return "Yes";
    }
  return "No";
}
console.log(testLogicalAnd(55));

Task №70
function testLogicalOr(val) {

  if (val < 10 || val > 20) {
    return "Outside";
  }
    return "Inside";
}
console.log(testLogicalOr(9));




