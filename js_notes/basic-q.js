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

Some extra advanced questions on functions
1.Implement a JavaScript program to print Fibonacci series using a for loop.
2.Write a JavaScript function to find the largest number among three numbers using nested if-else statements.
3.Write a JavaScript function to calculate the factorial of a number.
4.Implement a JavaScript function to check if a number is prime or not.
5.Write a JavaScript function to reverse a string.

Some extra advanced questions on arrays
1.Write JavaScript code to find the sum of elements in an array.
2.Implement a function to find the maximum and minimum elements in an array.
3.Write JavaScript code to remove duplicate elements from an array.


 Questions based on Objects 
1.Create a JavaScript object representing a car with properties like make, model, year, and color.
2.Write a method to display all properties of the car object.
3.Implement a function to calculate the total cost of maintenance for the car based on its age and mileage.
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


let terms = 10; //defining the number of terms req
let t1 = 0;     //let 1st term is 0
let t2 = 1;     //let 2nd term is 1
console.log(t1);//logging t1 and t2
console.log(t2);
for(let i=1;i<=terms;i++){  //loop to iterate and form the fibonacci series
    let nextterm = t1 + t2; // fibonacci rule - each term is sum          of previous 2 terms t1 and t2
    t1 = t2;    //now t1 updated to t2 
    t2 = nextterm;  //t2 updated to nextterm value
    console.log(nextterm)   //logging the nextterm
}

// Q11- function to find largerst of 3 numbers

function largestOf3(num1,num2,num3){
    if(num1>num2 && num1>num3){
        console.log(`${num1} is greatest`);
    }
    else if(num2>num1 && num2>num3){
        console.log(`${num2} is greatest`);
    }
    else if(num3>num1 && num3>num2){
        console.log(`${num3} is greatest`);
    }
    else{
        console.log("there is not a single greatest number");
    }
}
largestOf3(2,200,20);

// Q12 - make a fn to calulate factorial of a number
function factorial(num){
    let ans =1;
    for(let i=1;i<=num;i++){
        ans *= i;
    }
    return ans;
}
console.log(factorial(5));

//here we used console.log statement to log the function because the function is returning ans so to log the returned value we are using console.log , if we log the return statement inside the function itself it doesnt rquire logging while calling the function , we can just call the function and pass the arguments as last examples

//Q13 - Implement a JavaScript function to check if a number is prime or not.

function primechecker(num){
    for(let i=2;i<num;i++){
        if(num%i===0){
            return `${num} is not prime`;
        }    
    }
    return `${num} is prime`
}
console.log(primechecker(25));
console.log(primechecker(2));
console.log(primechecker(3));
console.log(primechecker(234));
console.log(primechecker(23));

// Q-14 Write a JavaScript function to reverse a string.
function strRev(str){
    let arrayOfletters = str.split("");
    let revString = "";
    for(let i=arrayOfletters.length-1;i>=0;i--){
        revString += arrayOfletters[i];
    }
    return revString;
}
console.log(strRev("Indresh is a good boy"));

//Q15 Write JavaScript code to find the sum of elements in an array.
let sum = 0;
function sumArray(arr){
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    console.log(sum);
}
sumArray([1,2,3,4,5]);

// Q16 Implement a function to find the maximum and minimum elements in an array.

function arrayMaxMin(arr){
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        arr[i]>max ? max = arr[i]:"";
    }
    console.log(`${max} is the largest element in he array`);
    let min = arr[0];
    for(let j=0;j<arr.length;j++){
        arr[j]<min ? min = arr[j]:"";
    }
    console.log(`${min} is the smallest element in he array`);
}
arrayMaxMin([1,2,3,4,5]);


// Q17 Write JavaScript code to remove duplicate elements from an array.
/*function removeDuplicate(arr){
    for(let i=0;i<arr.length;i++){
        let letter = arr[i];
        for(let j=0;j<arr.length;j++){
            letter == arr[j] ? arr.splice(j,1) : "";
        }
    }
}
removeDuplicate([1,1,2,3,4,4,3]);*/

function removeDuplicate(arr){
    for(let i=0;i<arr.length;i++){
        let letter = arr[i];
        for(let j = i + 1; j < arr.length; j++){
            if(letter === arr[j]) {
            arr.splice(j, 1);
            j--;
            }
        }
    }
    return arr;
}

removeDuplicate([1,1,2,3,4,4,3]);


// Q18 Create a JavaScript object representing a car with properties like make, model, year, and color.
let car = {
    made : "BMW",
    model : "sedan",
    year : 2004,
    color : "black",   
}
console.log(car);

