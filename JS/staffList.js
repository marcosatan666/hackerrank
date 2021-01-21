//The task is to create a class StaffList. 
//The class will manage a collection of staff members, 
//where each member is uniquely identified by a name.  
//The class must have the following methods:

//1. add(name, age):
//Parameters string name and integer age are passed to this function.
//If age is greater than 20, it adds the member with the given name to the collection.
//Else if age is less than or equal to 20, it throws an Error with the
//message 'Staff member age must be greater than 20'.
//It is guaranteed that at any time, if a member is in the collection, 
//then no other member with the same name will be added to the collection.

//2. remove(name):
//If the member with the given name is in the collection, 
//it removes the member from the collection and returns true.
//Else if the member with the given name is not in the collection, 
//it does nothing and returns false.

//getSize():
//returns the number of members in the collection.


'use strict';

const fs = require('fs');

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

class StaffList {
    constructor() {
        this.list = [];
    }
    
    getIndexByName(name) {
        for(let i = 0; i < this.list.length; i++) if(this.list[i].name === name) return i;
        return -1;
    }

    add(name,age) {
        let index = this.getIndexByName(name);
        if(index === -1) {
            if(age > 20) {
                this.list.push({name, age});
            } else {
                throw new Error("Staff member age must be greater than 20");
            }
        }
    }
    
    remove(name) {
        let index = this.getIndexByName(name);
        if(index !== -1) {
            this.list.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }
    
    getSize() {
        return this.list.length;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    const obj = new StaffList();
    const operationCount = parseInt(readLine().trim());
    
    for(let i = 1; i <= operationCount; i++) {
        const operationInfo = readLine().trim().split(' ');
        try {
            let res;
            if (operationInfo[0] === 'add') {
                obj.add(operationInfo[1], parseInt(operationInfo[2]));
            } else if (operationInfo[0] === 'remove') {
                res = obj.remove(operationInfo[1]);
                ws.write(`${res}\n`);
            } else if (operationInfo[0] === 'getSize') {
                res = obj.getSize();
                ws.write(`${res}\n`);
            }
        } catch (e) {
            ws.write(`${e}\n`);
        }
    }
    ws.end();
}
