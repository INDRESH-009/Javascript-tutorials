/*
Video 1 

Introduction

Initially we could communicate with the computer only using binary and assembly code but it was not a optimal way to write code because each hardware processor have different assembly code to do the same process so the software solutions can't be scaled. Thats the reason why we are having high level languages now which are comparitively easy to write as well as scalable because the comiler compiles the high level code into machine understandable code.

JS Architecture 



Primities of javascript
1.Variables
2.Strings 
3.Arrays
4.Numbers
5.Loops - for and while
6.Functions - Prinmitives and callbacks
API - native vs web
*/



//Question1 
// sum from 1 to 100
let sum = 0;
for(let i=0;i<=100;i++){
    sum = sum + i;
}
console.log(sum);

//Question2
//Print fibonacci series - it is a series of number where every number is the sum of the preceeding 2 numbers
let t1 = 0,t2=1;
let terms = 10;
let nextterm;
console.log(t1);
console.log(t2);
for(let i=3;i<=terms;++i){
    nextterm = t1+t2
    console.log(nextterm);
    t1 = t2;
    t2 = nextterm;
    nextterm = t1+t2;
}
