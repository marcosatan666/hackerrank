//Your task is to implement a function stepCounter that:
//takes a single parameter k
//returns a new object, representing a step counter with the initial value of 0 and with three methods:
//increment() : increments the current value by k
//decrement() : decrements the current value by k
//getValue() : returns the current value

 

//Your implementation must encapsulate the provided counter object and use it for 
//its implementation. The object returned by stepCounter must not have a changeBy property.

//Your implementation of the function will be tested by a provided code stub on several 
//input files. Each input file contains a parameter for stepCounter, followed by several 
//values denoting the operations to perform on the object returned by stepCounter. 
//The results of performing the operations will be printed to the standard output by the provided code. 






'use strict';

const fs = require('fs');
const assert = require('assert');

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

const counter = (function counter() {
  let value = 0;
  return {
    getValue: function() {
      return value;
    },
    changeBy: function(k) {
      value += k;
    },
  }
})();
function getFixedCounter(k) {
  let value = 0;
  return {
      increment: function() {
      value += k;
      console.log(k);
    },
    decrement: function() {
      value -= k;
      console.log(k);
    },
    getValue: function() {
      return value;
    }
    
  }
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const val = parseInt(readLine().trim());

  const c = getFixedCounter(val);
  assert(!('changeBy' in c));
    console.log(c)
  const n = parseInt(readLine().trim());
  for (let i = 0; i < n; ++i) {
    const op = readLine().trim();
    if (op == '+') {
      c.increment();
    } else if (op == '-') {
      c.decrement();
    } else if (op === '?') {
      ws.write(`${c.getValue()}\n`);
    }
  }
  ws.end();
}
