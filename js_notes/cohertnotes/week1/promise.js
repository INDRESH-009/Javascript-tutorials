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