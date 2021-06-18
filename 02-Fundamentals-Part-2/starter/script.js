'use strict';
//using strict will throw error messages when the code has an error.
// let hasLicense = false;
// const passTest = true;

// if (passTest) hasLicense =true;

// if(hasLicense) console.log("I can drive!");

// const private = 1234;
// const interface = 'audio';

/*
function logger() {
    //anything inside is {} is called the function buddy
    console.log('My name is Ankur!');
}
//calling, running, or invoking the function
logger();

//functions can reuse a piece of code but can also take in data.(parameters)

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(2,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,3);
console.log(appleOrangeJuice);
*/

// Function Declaration
function calcAge1(birthYear) {
    return 2021 - birthYear;
}
const age1 = calcAge1(1996);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}
 
const age2 = calcAge2(1996);

console.log(age1, age2);
