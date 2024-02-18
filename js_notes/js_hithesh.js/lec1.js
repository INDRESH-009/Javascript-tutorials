// Lecture  # 1:
// Variables and Data Types
// const = can't be re-assigned a value and can't be declared again  (block scope)
// let = can be re-assigned a value but can't be declared again (block scope)
// var = it can be re-assigned a value and it can also be declared again  (Global scope)

// => Never use var in your code instead of let because of block and functional scope issues.
// # console.table([group of variables you want to show in tabular form])

const x = 10;
// x = 20 is not possible 
let y = 13;
y = 14;
console.log(y);
// declared once but can be reassigned 
var z = 20;
var z = 45;
z = 43;
// declared , redeclared and mutation is possible

console.table([x,y,z]);