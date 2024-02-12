/*Variables and Data Types:
Declare variables of different data types (string, number, boolean, array, object) and perform operations on them.


Conditional Statements:
Write a program to check if a number is even or odd.
Create a grading system where you input a score and output the corresponding grade (A, B, C, D, or F).


Loops:
Write a program to print the first 10 natural numbers using a loop.
Create a multiplication table for a given number (e.g., 5) using a loop.


Operators:
Write a program to calculate the area of a rectangle given its length and width.
Convert temperature from Celsius to Fahrenheit and vice versa using appropriate operators.


Mixed Topics:
Write a program to find the factorial of a number using a loop.
Create a simple calculator program that performs addition, subtraction, multiplication, and division based on user input

Some extra advanced questions 
1.Implement a JavaScript program to print Fibonacci series using a for loop.
*/

//Q1
let num = 10;
let str = "javascript";
let bool = true;
let arr = ["letters","numbers","datatypes"];
let obj = {
  name:"indresh",
  status:"student",
  age:19,
}
console.log(num,str,bool,arr,obj);


//Q2
let number = 10;
if(number%2==0){
    console.log("It is even")
}
else{
    console.log("it is odd")
}

//Q3
let score = 100;
switch(true){
    case score<=50:
        console.log("F");
        break;
    case score<=60:
        console.log("E");
        break;
    case score <=70:
        console.log("D");
        break;
    case score <=80:
        console.log("C");
        break;
    case score <=90:
        console.log("B");
        break;
    case score <=100:
        console.log("A");
        break;
    default:
        console.log("not a valid mark");
}

//Q4
for(let i=1;i<=10;i++){
    console.log(i);
}

//Q5 
let table = 5;
for(let i=0;i<=10;i++){
    ans = table * i;
    console.log(`${table} * ${i} = ${ans}`);
}

//Q6 - let l = 10 and w = 15 , exp output = 150
function areaofRect(length,width){
    let area = length*width;
    console.log(area);
}
areaofRect(10,15);

//Q7 - cel to farenheit and farenheit to cel - logic 
//farenheit = 9/5 * cel + 32
function FtoC(farenheit){
    let Celsius = 5/9 * (farenheit-32);
    console.log(`${farenheit} degree farenheit is equal to ${Celsius} degree celcius`)
}

function CtoF(celcius){
    let farenheit = ((9/5)*celcius) + 32;
    console.log(`${celcius} degree celcius is equal to ${farenheit} degree farenheit`)
}
FtoC(212);
CtoF(100);

//Q8 - factorial of a number using loops 
let factorialreq = 10;
let factorialTerm = 1;
for(let i=1;i<=factorialreq;i++){
    factorialTerm *= i;
}
console.log(factorialTerm);

//Q9 - simple calculator to perform + - * / based on user input
let inputnum1 = 10;
let inputnum2 = 20;
let inputoperation = "division";
function add(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}
function mul(a,b){
    console.log(a*b);
}
function div(a,b){
    console.log(a/b);
}

if(inputoperation == "addition"){
    add(inputnum1,inputnum2);
}
if(inputoperation == "substraction"){
    sub(inputnum1,inputnum2);
}
if(inputoperation == "multiplication"){
    mul(inputnum1,inputnum2);
}
if(inputoperation == "division"){
    div(inputnum1,inputnum2);
}

//Q10 - fibonacci series using for loops
//fibonacci series have a series of numbers and each number in the series is equivalent to the sum of the previous 2 numbers 
let fibonacciTermsreq = 10;
let t1 = 0;
let t2 = 1;
console.log(t1);
console.log(t2);
for(let i=1;i <= fibonacciTermsreq;++i){
    t1 = t2;
    t2 = i;
    let nextterm = t1 + t2;
    console.log(nextterm);
}