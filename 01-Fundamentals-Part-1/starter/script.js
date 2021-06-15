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


const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
    console.log('Sarah can start driving!');
} else {
    yearsLeft = 18 - age;
    console.log(`Sarah has to wait ${yearsLeft} before she can drive.`);
}

const birthYear = 1996;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

*/

/************Coding Challenge 2 **************/
/*
//Test Data
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

if (johnBMI > markBMI){
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}).`)
} else {
    console.log(`Mark's BMI (${markBMI}) is higher than John's, which was (${johnBMI}). `)
}
*/
/**************Type Coercion******/
/*
const inputYear = '1996';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Ankur'));
console.log(typeof NaN);

console.log(String(23), 23);


//Type Corecion

console.log('I am ' + 23 + ' years old.')


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean('Ankur'));
console.log(Boolean({}));


const age = 18;

if(age === 18){
    console.log("You are a new adult!!! (Strict)");
}
if (age == 18) {
    console.log("You just became an adult! (loose)");
}

const favorite = Number(prompt("what is your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log('23 is a cool number');
} else if (favorite === 7) {
    console.log('7 is pretty great!');
} else if (favorite === 9) {
    console.log('9 is also really cool!');
} else {
    console.log('The number entered isnt 23, 7, or 9.')
}

if (favorite !== 23){
    console.log('Why not 23 or 7?');
}

*/


/*********** Boolean Logic ****************/

/*
const hasLicense  = true; // A
const goodVision = true;  // B

console.log(hasLicense && goodVision);
console.log(hasLicense || goodVision);
console.log(!hasLicense && goodVision);



const shouldDrive = hasLicense && goodVision;

// if(shouldDrive){
//     console.log('Sarah can drive!')
// }else {
//     console.log('Sarah needs to be driven around.')
// }

const isTired = false; // C

console.log(hasLicense && goodVision && isTired);

if(hasLicense && goodVision && !isTired){
    console.log('Sarah can drive!')
}else {
    console.log('Sarah needs to be driven around.')
}

*/

/********************Coding Challenge 3 **************/

/** Main coding challenge
 * Calculating the average of both teams scores and using logical operators
 * to see which team has a greater score to win!
 */

/*
const avrgDolphinScore = (96 + 108 + 89) / 3;
const avrgKoalaScore = (88 + 91 + 118) / 3;

console.log(avrgDolphinScore, avrgKoalaScore);

if (avrgDolphinScore > avrgKoalaScore) {
    console.log("Doliphin's win!");
} else if (avrgKoalaScore > avrgDolphinScore) {
    console.log("Koala's win!");
} else if (avrgDolphinScore === avrgKoalaScore) {
    console.log("It's a Draw!");
}

//Bonus 1 coding challenge
const dolphinsAvrg = (97 + 112 + 101) / 3;
const koalasAvrg = (109 + 95 + 110) / 3;

console.log(dolphinsAvrg, koalasAvrg);

if (dolphinsAvrg >= 100 && dolphinsAvrg > koalasAvrg) {
    console.log("Doliphin's win!");
} else if (koalasAvrg>= 100 && koalasAvrg > dolphinsAvrg) {
    console.log("Koala's win!");
} 
else if (dolphinsAvrgScore === koalasAvrgScore && dolphinsAvrgScore >= 100 && koalasAvrgScore >= 100) {
    console.log("Its a Draw!");
}


// Bonus 2 coding challenge
const dolphinsAvrgScore = (97 + 112 + 101) / 3;
const koalasAvrgScore = (109 + 95 + 106) / 3;

console.log(dolphinsAvrgScore, koalasAvrgScore);

if (dolphinsAvrgScore >= 100 && dolphinsAvrgScore > koalasAvrgScore) {
    console.log("Doliphin's win!");
} else if (koalasAvrgScore >= 100 && koalasAvrgScore > dolphinsAvrgScore) {
    console.log("Koala's win!");
} else if (dolphinsAvrgScore === koalasAvrgScore && dolphinsAvrgScore >= 100 && koalasAvrgScore >= 100) {
    console.log("Its a Draw!");
} else if (dolphinsAvrg < 100 && koalasAvrg < 100) {
    console.log("its a draw!");
}
*/


const day = 'thursday';

switch(day) {
    case 'monday':
        console.log('Plan course structure.');
        console.log('Go to coding bootcamp.');
        break;
    case 'tuesday':
        console.log('Prepare git repository.');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos.');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend!')
        break;
    default:
        console.log('invalid date');
}
