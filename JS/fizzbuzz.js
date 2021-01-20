
//Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows:

//If i is a multiple of both 3 and 5, print FizzBuzz.
//If i is a multiple of 3 (but not 5), print Fizz.
//If i is a multiple of 5 (but not 3), print Buzz.
//If i is not a multiple of 3 or 5, print the value of i.


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function fizzBuzz(n) {

    for (let i=1;i<=n;i++) {
        if (!(i%3) && !(i%5)) {
            console.log("FizzBuzz")
        } else if (!(i%3) && i%5) {
            console.log("Fizz")
        } else if (!(i%5) && i%3) {
            console.log("Buzz")
        } else  {
            console.log(i)
        } 
    }
  
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    fizzBuzz(n);
}
