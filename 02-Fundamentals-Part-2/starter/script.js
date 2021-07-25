'use strict';
//using strict will throw error messages when the code has an error.

// let hasLicense = false;
// const passTest = true;

// if (passTest) hasLicense =true;

// if(hasLicense) console.log("I can drive!");

//This throws an error because it is not a valid variable name.
// const private = 1234;
// const interface = 'audio';


/*
function logger() {
    //anything inside is {} is called the function buddy
    console.log('My name is Ankur!');
}
//calling, running, or invoking the function
logger();
*/

/*
//functions can reuse a piece of code but can also take in data.(parameters)

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(2,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,3);
console.log(appleOrangeJuice);



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

// Arrow Functions

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);


const yearsToRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years!`;
}

console.log(yearsToRetirement(1996, 'Ankur'));



function fruitCutter(fruit)  {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = fruitCutter(apples);
    const orangePieces = fruitCutter(oranges);
 
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}
 
console.log(fruitProcessor(2, 3));
*/

// Functions Review
const calcAge = function(birthYear){
    return 2021 - birthYear;
}

const yearsToRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
        console.log(`${firstName} retires in ${retirement} years!`);
   return retirement; 
    // if(retirement > 0){
    //     console.log(`${firstName} retires in ${retirement} years!`);
    //     return retirement;
    // }else {
    //     console.log(`${firstName} has already retired!!`);
    //     return -1;
    // }
    // // return `${firstName} retires in ${retirement} years!`;
}

console.log(yearsToRetirement(1996, 'Ankur'));
const retirement = yearsToRetirement(1996, 'Ankur');
console.log(yearsToRetirement(1950, 'Mike'));
