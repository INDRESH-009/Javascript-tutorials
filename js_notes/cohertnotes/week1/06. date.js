//date is a prebuilt class that helps us to access the current date and time 
// In JavaScript, the Date object is a built-in constructor function, not a class or method. It is used to create instances of the Date object, which represent dates and times.
//Here's how you can use the Date constructor function to create a new instance of the Date object:
let currentdate = new Date();
console.log(currentdate);

//In this example, new Date() creates a new instance of the Date object representing the current date and time.

function dateMethods() {
    const currentDate = new Date();
    console.log("Current Date:", currentDate);
  
    // Getting various components of the date
    console.log("Date:", currentDate.getDate());
    console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
    console.log("Year:", currentDate.getFullYear());
    console.log("Hours:", currentDate.getHours());
    console.log("Minutes:", currentDate.getMinutes());
    console.log("Seconds:", currentDate.getSeconds());
  
    // Setting components of the date
    currentDate.setFullYear(2022);
    console.log("After setFullYear:", currentDate);
  
    currentDate.setMonth(5); // Setting month to June (zero-indexed)
    console.log("After setMonth:", currentDate);
  
    // Getting and setting time in milliseconds since 1970 - epoch timestamp
    console.log("Time in milliseconds since 1970:", currentDate.getTime());
  
    const newDate = new Date(2023, 8, 15); // Creating a new date
    console.log("New Date:", newDate);
  }
  
  // Example Usage for Date Methods
  dateMethods();

  /*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function Sum(n){
    let ans = 0;
    for(let i=0;i<=n;i++){
        ans += i;
    }
    return `${ans} is the sum on numbers from 0 to ${n}`;
}
let beforedate = new Date();
let time_before_execution = beforedate.getTime();

console.log(Sum(1000000));

let afterdate = new Date();
let time_after_execution = afterdate.getTime();

console.log(time_after_execution - time_before_execution);

// function Sum(n) { ... }: This function calculates the sum of numbers from 0 to n. It initializes a variable ans to 0, then iterates from 0 to n and adds each number to ans. Finally, it returns a string that includes the sum and the value of n.
// let beforedate = new Date(); / let time_before_execution = beforedate.getTime();: These lines create a Date object representing the current date and time, and then extract the timestamp (in milliseconds since January 1, 1970) using the getTime() method. This marks the start time before the execution of the Sum function.
// Sum(1000000);: This line calls the Sum function with an argument of 1000000, which calculates the sum of numbers from 0 to 1,000,000.
// let afterdate = new Date(); / let time_after_execution = afterdate.getTime();: These lines create another Date object representing the current date and time after the execution of the Sum function, and then extract the timestamp.
// console.log(time_after_execution - time_before_execution);: This line calculates the difference between the two timestamps (i.e., the time taken to execute the Sum function) and logs it to the console.
// The execution time measured here represents the total time taken by the Sum function to execute, including the time taken for the loop to iterate from 0 to n and perform addition operations.


//Using `getMilliseconds()` instead of `getTime()` would not provide accurate timing for measuring execution time. 

// Here's the difference between `getMilliseconds()` and `getTime()`:

// - `getMilliseconds()`: This method returns the milliseconds portion of the time represented by the `Date` object, ranging from 0 to 999. It does not return the entire timestamp but only the milliseconds part.

// - `getTime()`: This method returns the number of milliseconds since January 1, 1970, also known as Unix time or epoch time. It provides the full timestamp, allowing for accurate timing measurements.

// For measuring execution time, it's essential to use `getTime()` to get the full timestamp before and after the code execution to accurately calculate the elapsed time. Using `getMilliseconds()` would only give you the milliseconds portion of the time, which would not be sufficient for accurate timing measurements.



//make a countdown clock using js for 30 seconds 
// function Counter(sec){
//     for(let i=0;i<=100;i++){
//         setInterval(1000);
//         console.log(i);
//     }
// }
// Counter(30);

function counter(sec){
    let seconds =0 ;
    for(let i=0;i<=sec;i++){
        seconds += i;
    }
    return console.log(seconds);
}
setInterval(counter(30),1000);