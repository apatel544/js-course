/*
//LECTURE 1 - JS Fundamentals Part 1
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Ankur');
console.log('23');

let firstName = "Ankur";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Ankur');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2021;

console.log(typeof year);

console.log(typeof null);


//DEFAULT- use const to start and when you need a mutatable variable then use let.

//When to use Let variable - when you are  planning on changing the value of the variable.
let age = 30;
age = 21;

//When to use Const Variable - the variable is not going to be changed and need to remain the same throughout.
const birthYear = 1991;
// birthYear = 1990; // not allowed because the variable birthYear is a Const variable

// when using Const we need to use an intial variable.
// const job;

//Never use var because its the legacy way and doesnt really allow strict rules against changing the value.
var job = "programmer";
job = "teacher";

lastName = "Patel";
console.log(lastName);

*/

/**************Basic Operators**********/
/*
// Math Operators 
const now = 2037;
const ageAnkur = now - 1996;
const ageSarah = now - 2019;
console.log(ageAnkur, ageSarah);

console.log(ageAnkur * 2, ageAnkur / 10, 2**3);
//2**3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Ankur";
const lastName = "Patel";

console.log(firstName + ' ' + lastName);

// Assignment operators     
let x = 10 + 5; //x = 15
x += 10; //x = x + 10 = 25
x *= 4;// x = x * 4 = 100
x++; // x + 1 = 101
x--; // x - 1 = 100
x--; // x - 1 = 99

console.log(x);

// Comparison Operators

console.log(ageAnkur > ageSarah); // > , < , >= , <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1996 > now - 2019);

        
const now = 2037;
const ageAnkur = now - 1996;
const ageSarah = now - 2019;

console.log(now - 1996 > now - 2019);

console.log(25 - 10 - 5);

let x, y;

x = y = 25 - 10 - 5;
console.log(x,y);
 
const averageAge = (ageAnkur + ageSarah) / 2;
console.log(ageAnkur, ageSarah, averageAge);
*/


/*********Coding Challenge 1 *************/
/*
 * Caluculating Mark and Johns BMI.
 */
/*
//Test Data 1
const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

// Test Data One
const markMassOne = 95;
const markHeightOne = 1.88;

const johnMassOne = 85;
const johnHeightOne = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight **2;

const markBMIOne = markMassOne / markHeightOne ** 2;
const johnBMIOne = johnMassOne / johnHeightOne **2;

const markHigherBMI = markBMI > johnBMI;
const markHigherBMIOne = markBMIOne > johnBMIOne;


console.log(markBMI, johnBMI, markHigherBMI);
console.log(markBMIOne, johnBMIOne, markHigherBMIOne);

*/

const firstName = "Ankur";
const job  = "programmer";
const birthYear = 1996;
const year = 2037;

const ankur = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + ".";

console.log(ankur);

const ankurNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;

console.log(ankurNew);

console.log('String \n\
with \n\
multiple \n\
lines.');

