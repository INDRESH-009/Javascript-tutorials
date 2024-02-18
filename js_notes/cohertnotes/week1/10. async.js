// Synchronous and asyncronous functions in javascript 

//What does syncronous mean = together , one-after-another , one thing at a time
//What does asyncronous mean = opp to syncronous , hapens in parts , multiple things are context switching with each other.

//Can js conetxt switch - yes , using async functions. 

//sync function example
function findSum(n){
    let sum = 0;
    for(let i=0;i<=n;i++){
        sum += i;
    }
    console.log(sum);
}
findSum(100);
//When we run this function the js thread is busy running it . 1st when the program is executed the control reaches line 9 and the jumps to line 16 . After line 16 contol goes back to line 10 and then the for loops is being processed n times making the threads busy doing these calculations and not free . This is a syncronous function 

//async function example
function sumOfn(n){
    let sum = 0;
    for(let i=0;i<=n;i++){
        sum += i;
    }
    return sum;
}
function findsumto10(){
    console.log(sumOfn(10));
}
setTimeout(findsumto10,1000);  //global function that helps to run a function after specific duration
console.log("Hello");

//How this is a async function - 
//First when the program is executed the control reaches line 20 , the function sumOfn is declareed and the control moves to line 27 and the function findsumto10 is also declared. then control reaches line 30 where the global function settimeout is called and it has been asked to execute the findsumto10 function but only after 1 sec so instead of waiting there for a second and executing that line and then moving to the next function , the control reaches the next line and executes the 31st line and logs hello in the console and by that time 1 sec is completed and so the settimeout function also executes 

//In this example we observe that instead of waiting in line 30 for a second and executing it , context switching happens and the control reaches next line and executes it , by that time 1sec happens and then the settimeout function is processed and is waiting in the callback queue. When the  . 

//Concept of busy wait 
//We can get the same functionnality of delayed execution like the settimeout function but in syncronous nature using the busy wait concept
//Here suppose we want a statement to be executed after few seconds of delay but syncronously then we use busy wait where we make the thread busy executing a function that is very expensive (time consuming) and that creates a delay in the execution of the next statement


function syncSleep(){
    let a = 1;
    for(let i=0;i<=10000000000;i++){
        a++;
    }
}
syncSleep();
console.log("hello world");

//Here we created a function syncsleep which runs a very expensive operation where the loop iterates for 1 billion times which creates a time lag before executing the next line viz looging "hello world" . This mimics the functionality of setTimeout function but syncronously .



//COMMON ASYNC FUNCTIONS IN JS
// 1.setTimeout - delayed execution
// 2.fs.readFile - reads a file from your file system
// 3.Fetch - to fetch data from a API endpoint

//Using fs.readfile 
//The readfile is an async function that reads file within the file system 


const fs = require("fs");
//require('fs') imports the Node.js built-in fs module, which provides file system-related functionality.
fs.readFile("read.txt","utf-8",function(err,data){ 
    //(filename,utf-8,anonymous function with arg - err and data)
    if(err){
        console.log("error in reading the file");
    }
    else{
    console.log(data);
    }
})
console.log("Hi there from 1")
let sum = 0;
for(let i=0;i<=100;i++){
    sum += i;
}
console.log(sum);



// 1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
// 2. Inversion of control is overcome by using promise.
//   2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
//   2.2) A promise has 3 states: pending | fulfilled | rejected.
//   2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
//   2.4) A promise resolves only once and it is immutable. 
//   2.5) Using .then() we can control when we call the cb(callback) function.

// 3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
// 4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()


