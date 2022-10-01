//Basic JavaScript Start

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

Task №71
function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
      return '5 or Smaller';
  };
  return result;
}
console.log(testElse(4));

Task №72
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }else if (val < 5) {
    return "Smaller than 5";
  }else{
  return "Between 5 and 10";
  }
}
console.log(testElseIf(7));

Task №73
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log(orderMyLogic(1));

Task №74
function testSize(num) {
  if (num < 5) {
      return 'Tiny';
  } else if (num < 10) {
      return 'Small';
  } else if (num < 15) {
      return 'Medium';
  } else if (num < 20) {
      return 'Large';
  } else {
      return 'Huge';
  };
};
console.log(testSize(21));

Task №75
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {  
 if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
  
};
console.log(golfScore(5,9 ));/

//Start Switch Case!
Task №76
function caseInSwitch(val) {
  let answer = val;
  switch (answer){
    case 1:
      answer = 'alpha';
      break;
    case 2:
      answer = 'beta';
      break;
    case 3: 
      answer = 'gamma';
      break;
    case 4:
      answer = 'delta';
      break;
    default:
      console.log ('Not defained');
  }
  return answer;
  break;
}
console.log(caseInSwitch(3));

Task №77
function switchOfStuff(val) {
  let answer = val;
  switch (answer) {
    case 'a':
      answer = 'apple';
      break;
    case 'b':
      answer = 'bird';
      break;
    case 'c':
      answer = 'cat';
      break;
    case 'd':
      answer = 'stuff';
      break;
    default:
      answer = 'stuff';
  };

  return answer;
}

console.log(switchOfStuff(4));

Task №78
function sequentialSizes(val) {
  let answer = val;
  switch(answer) {
    case 1:
    case 2:
    case 3:
      answer = 'Low';
      break;
    case 4:
    case 5:
    case 6:
      answer = 'Mid';
      break;
    case 7:
    case 8:
    case 9:
      answer = 'High';
      break;
    default:
      answer = 'Over 9';
      break;
  };
  return answer;
}
console.log(sequentialSizes(10));

Task №79
function chainToSwitch(val) {
  let answer = val;

  switch (answer) {
    case 'bob':
      answer = 'Marley';
      break;
    case 42:
      answer = 'The Answer';
      break;
    case 1:
      answer = 'There is no #1';
      break;
    case 99:
      answer = 'Missed me by this much!'
      break;
    case 7:
      answer = 'Ate Nine';
      break;
    case 'John':
      answer = '';
      break;
    case 156:
      answer = '';
      break;
    default:
      answer = 'Enter you value'
  }
  return answer;
}
console.log(chainToSwitch(156));

Task №80
function isLess(a, b) {
  return (a < b);
}

console.log(isLess(10, 15));

Task №81
function abTest(a, b) {
  if (a < 0 || b < 0){
  return;
  };

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,-2));

Task №82
let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

Task №83
const myDog = {
  'name': 'Casper',
  'legs': 4,
  'tails': 1,
  'friends': ['other dogs','water','stroll'],
};

Task №84
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;    
const shirtValue = testObj.shirt;
console.log(shirtValue);   

Task №85
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj['an entree'];   
const drinkValue = testObj['the drink'];    
console.log(drinkValue);

Task №86
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;  
const player = testObj[playerNumber];   
console.log(player);

Task №87
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.name = 'Happy Coder';
console.log(myDog.name);

Task №88
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog['bark'] = 'bow-wow';
console.log(myDog);

Task №89
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog['tails'];
console.log(myDog);

Task №90
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

  result = lookup[val];
  return result;
}
console.log(phoneticLookup(''));

Task №91
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

Task №92
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
    "artist": "Bob marley",
    "title": "Uprising Live!",
    "release_year": 2014,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": false

  },
];

Task №93
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
const gloveBoxContents = myStorage.car.inside['glove box'];
console.log(gloveBoxContents);

Task №94
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

Task №95
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

function updateRecords(records, id, prop, value) {
  if (value === '') {
    delete records[id][prop];
  } else if (prop === 'tracks') {
    records[id][prop] = records[id][prop] || []; 
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// START "WHILE" and "FOR"

Task №96
const myArray = [];
let i = 5

while (i >= 0) {
  myArray.push(i);
  i--;
}
console.log(myArray);

Task №97
const myArray = [];

for (let x = 1; x <= 5; x++){
  myArray.push(x);
};
console.log(myArray);

Task №98
const myArray = [];

for (let x = 1; x <= 9; x += 2) {
  myArray.push(x);
};
console.log(myArray);

Task №99
const myArray = [];

for (let x = 9; x > 0; x -= 2) {
  myArray.push(x);
};
console.log(myArray);

Task №100
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for(let i = 0; i < myArr.length; i++){
  total += myArr[i];
};
console.log(total);

Task №101
function multiplyAll(arr) {
  let product = 1;

  for (var x = 0; x < arr.length; x++) {
    for(var i = 0; i < arr[x].length; i++){
    product = product * arr[x][i];
    }
  };
  return product;
}

console.log(multiplyAll([[1],[2],[3]]));

Task №102
const myArray = [];
let i = 10;

do{
  myArray.push(i);
  i++;
}while (i < 10) {
}
console.log(i);

Task №103
function sum(arr, n) {
  if (n <= 0) { 
    return 0
  } else {
    return sum (arr, n - 1) + arr[n-1];
  }
}
console.log(sum([1], 0));

Task №104
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
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));

Task №105
function randomFraction() {
return Math.random();
}
console.log(randomFraction());

Task №106
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

Task №107
function randomRange(myMin, myMax) {
return  Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
console.log(randomRange(1, 10));

Task №108
function convertToInteger(str) {
  return parseInt(str);
}
console.log(convertToInteger("0063"));

Task №109
function convertToInteger(str) {
  return parseInt(str, 2);
}
console.log(convertToInteger("10011"));

Task №110
function checkEqual(a, b) {
 return a===b ? 'Equal' : 'Not Equal'
}
console.log(checkEqual(2, 2));

Task №111
function checkSign(num) {
return  (num > 0) ? 'positive'
: (num === 0) ? 'zero'
: 'negative'
}
console.log(checkSign(-1));

Task №112
function countdown(n){
 if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
console.log(countdown(-1));

Task №113
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    let numbers = rangeOfNumbers(startNum, endNum - 1)
    numbers.push(endNum);
    return numbers
  }
};
console.log(rangeOfNumbers(10, 20));

//Basic JavaScript End




//EC6 Start
Task №1
function checkScope() {
  let i = 'function scope';
  if (true) {
   let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
console.log(checkScope());

Task №2
const s = [5, 7, 2];
function editInPlace() {
s[0] = 2;
s[1] = 5;
s[2] = 7;
}
editInPlace();
console.log(s);

Task №3
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

Task №4
const magic = () => new Date();

Task №5
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

Task №6
const increment = (number, value = 1) => number + value ;
console.log(increment(5));

Task №7
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1,2,3,4));

Task №8
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  
console.log(arr2);

Task №9
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const {today,tomorrow} = HIGH_TEMPERATURES;
console.log({today,tomorrow});

Task №10
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

Task №11
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
const {today:{low:lowToday, high:highToday}} = LOCAL_FORECAST;
console.log(LOCAL_FORECAST.today);

Task №12
let a = 8, b = 6;
[a, b] = [b, a];
console.log(a,b)

Task №13
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a,b, ...arr] = list; 
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);

Task №14
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({min,max}) => (max + min) / 2.0; 
console.log(half(stats));

Task №15
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
   const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
 }
  return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList);

Task №16
const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson('Gary',24,'man'));

Task №17
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

Task №18
class Vegetable {
  constructor(name) {
    this.name = name;
  }  
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); 

Task №19
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
const thermos = new Thermostat(76); 
let temp = thermos.temperature; 
thermos.temperature = 26;
temp = thermos.temperature; 
console.log(temp);

Task №20
<html>
  <body>
    <script type='module' src='index.js'></script>
  </body>
</html>

Task №21
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
export {lowercaseString};

Task №22
uppercaseString("hello");
lowercaseString("WORLD!");
import {uppercaseString, lowercaseString} from './string_functions.js';

Task №23
import * as stringFunctions from './string_functions.js';
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

Task №24
export default function subtract(x, y) {
  return x - y;
}

Task №25
import subtract from './math_functions.js';  
subtract(7,4);

Task №26
const makeServerRequest = new Promise((resolve, reject) => {

});

Task №27
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer;
    
  if(responseFromServer) {
    resolve('We got the data');
  } else {  
    reject('Data not received');
  }
});

Task №28
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
console.log(result)
});

Task №29
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});
//ES6 END!



//Regular Expressions START!
Task №1
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);



