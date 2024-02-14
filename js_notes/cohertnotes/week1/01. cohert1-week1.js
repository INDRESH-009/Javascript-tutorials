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
let summ = 0;
for(let i=0;i<=100;i++){
    summ = summ + i;
}
console.log(summ);

//Question2
//Print fibonacci series - it is a series of number where every number is the sum of the preceeding 2 numbers
let t1 = 0,t2=1;  //t1 and t2 are always same
let terms = 10;  //no.of fibonacci terms required
let nextterm;    //declaring  the nextterm variable
console.log(t1); //logging t1 and t2 in console
console.log(t2);
for(let i=3;i<=terms;++i){  //iterating form term 3 
    nextterm = t1+t2
    console.log(nextterm);  //once printed we change t1 to t2 and t2 to nextterm.
    t1 = t2;
    t2 = nextterm;
    nextterm = t1+t2;       //now add the new 2 preceding terms 
}


//ARRAYS

//arrays - They are a datastructure which grps similar kinds if data
// declaring a  array in js
let ages = [12,13,14,56,34,67];
//printing only even ages from the array
for(let i=0;i<=ages.length;i++){
    ages[i]%2==0 ? console.log(ages[i]) : "";
}

//write a code to pint the biggest number in an array
let max = 0;
for(let i=0;i<ages.length;i++){
    ages[i]>max ? max = ages[i] : "";
}
console.log(`The maximum number is ${max}`);

//reverse an array
let num=[1,2,3,4,5];
let revnum=[];
for(let i=0;i<num.length;i++){
    revnum[(num.length-1)-i]=num[i];
}
console.log(`the reversed array is ${revnum}`);


//OBJECTS

//print only the male candidates from a complex objects
// here we are using object of arrays and to acces those array elements in the object we use the .(dot) operator
let users={
    firstname:["indresh","rohan","radha","rama","shiva"],
    gender:["male","male","female","female","male"]
}
for(let i=0;i<users.firstname.length;i++){
    users.gender[i]=="male"?console.log(users.firstname[i]):"";
}

//using array of objects print only the male candidates above age 18 from a complex objects
let userinfo = [
    {
        username:"indresh",
        gender:"male",
        metadata:{
            phone:123456789,
            address:"asdfgg",
            age:20,
        }
    },
    {
        username:"shakthi",
        gender:"female",
        metadata:{
            phone:12356789,
            address:"asdg",
            age:22,
        }
    },
    {
        username:"rohan",
        gender:"male",
        metadata:{
            phone:2356789,
            address:"dfgg",
            age:10,
        }
    }
]
for(let i=0;i<userinfo.length;i++){
    userinfo[i]["gender"]=="male" && userinfo[i]["metadata"]["age"]>18 ? console.log(`male user above 18 is ${userinfo[i]["username"]}`):"";
}

//FUNCTIONS
// functions let you abstract out logic out of your program
// They take argument as input and return value as an output
//we can think of them as independent program that is supposed to do something when given an input
//functions can take other functions as input this is called callbacks


//write a function to calculate sum of 2 numbers , let  a and b be the parameters and call the funvction with the arguments 12 and 34
function sum(a,b){
    let ans = a+b;
    return ans;
}
let sum1 = sum(12,34);
console.log(sum1);

//creating a function that takes input of 2 numbers and the oprator to provide the solution for the arithematic expression
function arithmatic(a,b,type){
    if(type == "+"){
        return a+b;
    }
    else if(type == "-"){
        return a-b;
    }
}
console.log(arithmatic(12,23,'+'));
//In the above codebase we directly used the arithematic operations in the conditional stetements itelf.


//In the below codebase we are trying to use 2 differnce seperate functions to calculate sum and difference but we use condotional statement just to call those 2 function based on the type of operation user needs to perform like sum or difference

// /Note that in the below codebase we are calling a function inside another function. For eg - function calc is calling 2 functions sum and difference.
function calc(a,b,type){
    if(type == "+"){
        return plus(a,b);
    }
    else if(type == "-"){
        return difference(a,b);
    }
}
function plus(a,b){
    return a+b;
}
function difference(a,b){
    return a-b;
}
console.log(calc(10,10,"-"));


//now instead of using all these conditional statements we are going to use these functins as an argument and this is called callbacks

//here we are giving functions add and sub as a parameter and based on the input the fn is called

//Callbacks functions can be useful only if the 2 functions viz the function viz calling and the function viz called both have same parameters. Callbacks are not used at places where functions have different parameters
function calculator(num1,num2,operationfn){
    let ans = operationfn(num1,num2);
    return ans;
}
function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
console.log(calculator(10,20,sub));


//another example of callback function can be understood using setTimeout function

//function to greet someone
function greet(){
    console.log("hello world");
}
setTimeout(greet,3*1000);
console.log(greet); //calling greet function


//This setTimeout is a function that takes 2 arguments , one is the function it needs to execute and teh other is the time it shd wait ir freez before executing that function. Here 3*1000 - is 3 sec so it means wait for 3 sec before executing the greet function 


//basically if u run this program we can see that greet function is executed only after 3 sec of running the program. so here

//setTImeot is a fuction that takes 2 arguments where one of the argument is a function. This is called callbacks


//Are we allowed to call a function inside another fuction - yes

function square(n){
    return n*n;
}
function squaresum(a,b){
    let val1 = square(a);
    let val2 = square(b);
    return val1 + val2;
} 
console.log(squaresum(4,3));



//Are we allowed to use a function as a parameter for another function - yes and its called callback function
function sq(a){
    return a*a;
}
function cb(a){
    return a*a*a;
}
function calcsum(num1,num2,callback){
    const val1 = callback(num1);
    const val2 = callback(num2);
    return val1+val2;
}
console.log(calcsum(10,10,sq));
console.log(calcsum(10,10,cb));

//Are we allowed to use a function as a parameter ? - yes and its called anonymous function

//these functoions dont require any function name because they cant be called anywhere else if they are passes as a parameter , so these nameless functions are called anonymous function


function calcmodulo(a,b,fn){    //3 parameters, 2 numbers and a function
    console.log(fn) //we are logging the function to see its type.on line 243 we see the argument directly has the fucnction body . This is called anonymous function
    const mod = fn(a,b);    //now we pass the fn and save its result in mod variable
    return a+b+mod;         //return statement
}
console.log(calcmodulo(13,7,function(a,b){  //function as argument has to do the a%b
    return a%b;
}))





















































