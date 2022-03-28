# FreeCodeCamp
Traning JS
Task№01
//qwerttrty
/*qwertt
qwert*/

Task№02
var myName;

Task№03
var a;
a= 7;

Task№04
var a;
a = 7;
var b;
b = a;

Task№05
var a = 9;

Task№06
var myFirstName = 'Vladislav';
var myLastName = 'MarkoV';

Task№07
// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

Task№08
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

Task№09
let catName = "Oliver";
let catSound = "Meow!";

Task№10
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line









Task№44
// Setup
const myArray = [["John", 23], ["cat", 2]];
myArray.push(['dog', 3]);
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
myArray.unshift(["Paul", 35])
// Only change code below this line
console.log(myArray);

Task№48
const myList = [['egg', 10], ['wather bottles', 5], ['chees', 1], ['lemons', 2], ['chocolate', 4]];
console.log(myList);

Task№49
function reusableFunction() {
  console.log("Hi World");
};
reusableFunction();

Task№50
function functionWithArgs(one, two) {
  console.log(one + two);
  console.log(one + two);
};
functionWithArgs(1, 2);
functionWithArgs(7, 9);


Task№51
function timesFive(num) {
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
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
console.log(testEqual(10))

Task№61
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
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
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

Task№64
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

Task№65
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

Task№66
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
testGreaterOrEqual(10);

Task№67
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}
testLessThan(10);
console.log(testLessThan(99));

Task№68
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
console.log(testLessOrEqual(25));

Task№69
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
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

  if (val >= 21 || val <= 9) {
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
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes == par - 1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par + 1) {
    return "Bogey";
  } else if (strokes == par + 2) {
    return "Double Bogey";
  } else {
    return "Go Home!"
  }
  // Only change code above this line
}

golfScore(5, 4);
console.log(golfScore(4, 2));

Task№76
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }

  // Only change code above this line
  return answer;
}
caseInSwitch(1);
console.log(caseInSwitch(1));

Task№77
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      return "apple";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;
    default:
      return "stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

switchOfStuff(1);
console.log(switchOfStuff("a"));

Task№78
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return 'High';
      break;
  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);
console.log(sequentialSizes(6))

Task№79
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      return "Marley";
      brake;
    case 42:
      return "The Answer";
      break;
    case 1:
      return "There is no #1";
      break;
    case 99:
      return "Missed me by this much!";
      break;
    case 7:
      return "Ate Nine";
      break;
    default: "";
  }
  // Only change code above this line
  return answer;
}

chainToSwitch(7);
console.log(chainToSwitch())

Task№80
function isLess(a, b) {
  // Only change code below this line
  return a <= b
  // Only change code above this line
}

isLess(10, 15);
console.log(isLess(10, 15));

Task№81
// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);
console.log(abTest(-2, 2));

Task№82
let count = 0;

function cc(card) {
  // Only change code below this line

  var blackJ = /[JQKA]/;
  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10 || blackJ.test(card)) {
    count--;
  }

  if (count > 0) return count + " Bet";
  return count + " Hold";


  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(2), cc(3), cc(4), cc(5), cc(6));

Task№83
const myDog = {
  // Only change code below this line
  "name": "Casper",
  "legs": 4,
  "tails": 1,
  "friends": ["Dogs", "People"]
  // Only change code above this line
};

Task№84
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat     // Change this line
const shirtValue = testObj.shirt    // Change this line

Task№85
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];// Change this line
const drinkValue = testObj["the drink"];      // Change this line

console.log(drinkValue);

Task№86
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

console.log(playerNumber);

Task№87
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
// Only change code below this line
myDog.name = "Happy Coder";
console.log(myDog.name);

Task№88
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "bow-wow";
console.log(myDog.bark);

Task№89
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails;
console.log(myDog);

Task№90
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  // Only change code above this line
  result = lookup[val];
  return result;
}

phoneticLookup("charlie");
console.log(phoneticLookup("foxtrot"));

Task№91
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

Task№92
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

Task№93
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

Task№94
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];
console.log(secondTree);

Task№95
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

Task№96
// Setup
const myArray = [];
let y = 5;

while (y >= 0) {
  myArray.push(y);
  y--;
}
// Only change code below this line
console.log(myArray);

Task№97
// Setup
const myArray = [];

for (let y = 1; y <= 5; y++) {
  myArray.push(y);
}
// Only change code below this line
console.log(myArray);

Task№98
// Setup
const myArray = [];
for (let y = 1; y < 10; y += 2) {
  myArray.push(y);
};
// Only change code below this line
console.log(myArray);

Task№99
// Setup
const myArray = [];
for (let y = 9; y > 0; y -= 2) {
  myArray.push(y);
};
// Only change code below this line
console.log(myArray);

Task№100
// Setup
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let y = 0; y < myArr.length; y++) {
  total += myArr[y];
}
// Only change code below this line
console.log(total);

Task№101
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let y = 0; y < arr[i].length; y++)
      product = product * arr[i][y];

  }
  // Only change code above this line
  return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(multiplyAll([[1], [2], [3]]));

Task№102
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
} while (i < 10) {
  myArray.push(i);
  i++;
}

Task№103
function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}

Task№104
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
  // Only change code above this line
}
lookUpProfile("Akira", "likes");
console.log(lookUpProfile("Kristian", "lastName"));

Task№105
function randomFraction() {

  // Only change code below this line
  var result = 0;
  while (result === 0) {
   result =  Math.random();
  } 
  return result;
  // Only change code above this line
}

Task№106
function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random()*10);
}

Task№107
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  // Only change code above this line
}

Task№108
function convertToInteger(str) {
 var a = parseInt (str);
  return a;
}

convertToInteger("56");
console.log(convertToInteger('0077'));

Task№109
function convertToInteger(str) {
  return parseInt(str,2);

}

convertToInteger("10011");
console.log(convertToInteger('10011'));

Task№110

function checkEqual(a, b) {
   return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);
console.log(checkEqual(1,-1));

Task№111
function checkSign(num) {
  return (num === 0) ? "zero"
    : (num >= 10) ? "positive"
    : "negative"
}

checkSign(10);
console.log(checkSign(-10));

Task№112


