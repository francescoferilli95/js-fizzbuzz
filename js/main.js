/**
 * 
 * TASK FIZZBUZZ
 *  1. GENERATE NUMBERS FROM 1 TO 100.
 *  2. FOR THE MULTIPLES OF 3 GENERATE AS OUTPUT: FIZZ.
 *  3. FOR THE MULTIPLES OF 5 GENERATE AS OUTPUT: BUZZ.
 *  4. FOR BOTH THE MULTIPLES OF 3 AND 5 GENERATE AS OUTPUT: FIZZBUZZ.
 * 
/**/

// VARIABLES FOR GENERATE NUMBERS FROM 1 TO 100

var numbers = [];
var requestedNumbers = 100;

// CREATING THE NUMBERS AND SWITCHING MULTIPLES AS TASK ASKS

for (var i = 1; i <= requestedNumbers; i++){

    // console.log(i);

    if(i % 5 === 0 && i % 3 === 0) {
        console.log('FizzBuzz');
    } else if(i % 5 === 0) {
        console.log('Buzz');
    } else if(i % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}