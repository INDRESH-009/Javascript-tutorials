//High level difference between the syntax of asynchronous javascript 
//1. Callbacks 
//2. Promises 
//3. Async / awaits 

//without callbacks - function is not passed as a parameter
function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function sumofsquare(a,b){
    let square1 = square(a);
    let square2 = square(b);
    return square1+square2;
}
console.log(sumofsquare(3,4));

//using callbacks - function is passed as a parameter
function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function ans(a,b,operation){
    let x = operation(a);
    let y = operation(b);
    console.log(x+y);
}
ans(1,2,cube);

// Promises are objects that represent the eventual outcome of an asynchronous operation. A Promise object can be in one of three states:

// Pending: The initial state— the operation has not completed yet.
// Fulfilled: The operation has completed successfully and the promise now has a resolved value. For example, a request’s promise might resolve with a JSON object as its value.
// Rejected: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.
// We refer to a promise as settled if it is no longer pending— it is either fulfilled or rejected. Let’s think of a dishwasher as having the states of a promise:

// Pending: The dishwasher is running but has not completed the washing cycle.
// Fulfilled: The dishwasher has completed the washing cycle and is full of clean dishes.
// Rejected: The dishwasher encountered a problem (it didn’t receive soap!) and returns unclean dishes.
// If our dishwashing promise is fulfilled, we’ll be able to perform related tasks, such as unloading the clean dishes from the dishwasher. If it’s rejected, we can take alternate steps, such as running it again with soap or washing the dishes by hand.

// All promises eventually settle, enabling us to write logic for what to do if the promise fulfills or if it rejects.

function myownasync(duration){
    setTimeout(()=>console.log("hi"),duration);
} 
console.log(myownasync(2000));


function mypromise(duration){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },duration)
    });
    return p; 
}
const output = mypromise(20000);
output.then(function(){
    console.log("hi from my promise");
});