'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
/////////////////////////////////////////////////
// CONVERTING AND CHECKING NUMBER
console.log(Number('23')); //To convert string into number
//OR
console.log(+'23');

console.log(Number.parseInt('30px', 10)); //To get rid of unnecessary symbols
console.log(Number.parseInt('e24')); //Only works when starting with number

console.log(Number.parseFloat('2.5rem'));

console.log(Number.isNaN(20)); //To check any value is not a number (NaN)?
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

console.log(Number.isFinite(20)); //A better way to check any value is a number?
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23)); //To check integer?
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

/////////////////////////////////////////////////
// MATH AND ROUNDING
console.log(Math.sqrt(25)); //To calculate square root
//OR
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3)); //To calculate cubic root

console.log(Math.max(4, 12, 55, 68.5, 7));
console.log(Math.max(4, 12, '55', 68, 7)); //Still work bc of coersion
console.log(Math.max(4, 12, '55px', 68, 7)); //Doesnt work

console.log(Math.min(4, 12, 55, 68.5, 7));

console.log(Math.PI * Number.parseFloat('10px') ** 2); //To calculate area of a circle

console.log(Math.trunc(Math.random() * 6 + 1)); //To draw a random dice roll

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min; //A function to draw a random number with max and min

// Rounding integers
console.log(Math.trunc(23.45)); //To remove all decimal parts

console.log(Math.round(23.45)); //To round up or down
console.log(Math.round(23.55));

console.log(Math.ceil(23.45)); //To round up
console.log(Math.ceil(23.55));

console.log(Math.floor(23.45)); //To round down
console.log(Math.floor(23.55));

console.log(Math.trunc(-23.45));
console.log(Math.floor(-23.45)); //Works better than trunc in negative case

// Rounding decimals
console.log((2.7).toFixed(0)); //Rounding without decimal part, toFixed always returns a STRING
console.log(+(2.7).toFixed(3)); //Rounding with 3 numbers of decimal part
console.log(+(2.7454).toFixed(2)); //Rounding with 2 numbers of decimal part


/////////////////////////////////////////////////
//THE REMAINDER OPERATOR
console.log(5 % 2);
console.log(5 / 2); //5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); //8 = 2 * 3 + 2

const isEven = n => n % 2 === 0; //To check a number is even or odd?
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(1544.6));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
  });
});

/////////////////////////////////////////////////
//NUMERIC SEPARATORS
const diameter = 287_476_348_000; //Easy to read the number but does not change anything
console.log(diameter);


/////////////////////////////////////////////////
//WORKING WITH BIGINT
console.log(61897184315768156484433334868n); //Add n at the end of really big number so Js can read correctly
//OR
console.log(BigInt(165478653));

//Operations
console.log(164316848441684448876n * 4564456884467n);

const huge = 45454574454435454866n;
const num = 23;
console.log(huge * BigInt(num)); //Cannot mix BigInt with other types


/////////////////////////////////////////////////
//CREATING DATES
const now = new Date();
console.log(now);

console.log(new Date('Wed Dec 22 2021 20:14:14'));
console.log(new Date('December 24, 2021'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 5, 12, 53, 28));
console.log(new Date(2037, 10, 32));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); 

//Working with dates
const future = new Date(2037, 10, 5, 12, 53);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getTime());
console.log(future.toISOString());

future.setFullYear(2040);
console.log(future); 

/////////////////////////////////////////////////
//OPERATIONS WITH DATES
const future = new Date(2037, 10, 5, 12, 53);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24); //To convert from millisecond to day
const day1 = calcDaysPassed(new Date(2037, 10, 5), new Date(2037, 10, 15));
console.log(day1);

///////////////////////////////////////
// INTERNATIONALIZATION NUMBERS
const num = 3884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};

console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
); 

///////////////////////////////////////
// TIMERS

// setTimeout: To schedule a function to run after a certain amount of time
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000, //delay the function for 3s =3000ms in the background
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval: To run a function over and over again
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000); */
