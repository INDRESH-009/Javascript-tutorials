//callback hell
/*function callbackHell(){
    setTimeout(()=> {
        console.log("Callback 1");
        setTimeout(()=> {
            console.log("Callback 2");
            setTimeout(()=> {
                console.log("Callback 3");
                setTimeout(()=>{
                    console.log("Callback 4");
                },3000)
            },2000)
        },1000)
    },1000)
}
callbackHell();
//In the above example we are using an async function setTimeout and passing an arrow function as a parameter , Thus when a function is passes into another function as parameter it is called as callback function 
//Callbacks inside callbacks create an ugly syntax and pyramid of dooom , to avoid this we use promises 

const p = new Promise (function(resolve){
    let output = setTimeout(()=>{
        console.log("Callback 1");
        resolve(output);
    },1000)
})
p.then(function(resolve){
    setTimeout(()=>{
        console.log("Callback 2")
    },10000);
})
.then(function(resolve){
    setTimeout(()=>{
        console.log("Callback 3")
    },1000);
})
console.log(p);
*/

const pro = new Promise(function(resolve) {
    let output = setTimeout(() => {
        console.log("Callback 1");
        resolve(output); // Resolving with the timeout ID
    }, 1000);
});

pro.then(function(output) { // Using the resolved value from the Promise
    return new Promise(function(resolve) {
        setTimeout(() => {
            console.log("Callback 2");
            resolve(); // Resolving without a value
        }, 10000);
    });
})
.then(function() {
    return new Promise(function(resolve) {
        setTimeout(() => {
            console.log("Callback 3");
            resolve(); // Resolving without a value
        }, 1000);
    });
});

console.log(pro); // Logging the Promise object

