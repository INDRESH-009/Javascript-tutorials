//loops in javascript 
//Q1 = sum of first 10 numbers
let sum=0;
for(let i=0;i<=10;i++){
    sum += i;
}
console.log(sum);


//Q2 = print all even numbers from 1 to 10
//using for loop
for(let j=0;j<=10;j++){
    j%2==0?console.log(j):"" 
    //in terenary operator syntax is [condition ? execute_if_true:else statements] 
    //if you dont have any else block you still have to complete the syntax using "" as above 
}
//using while loop
let num = 0;
while(num<=10){
    num%2==0 ? console.log(num) : ""
    num++;
}

//Q3 = find factorial of the number upto 10
//do in in a for loop
let factorial = 1;
for(let i=1;i<=5;i++){
    factorial *= i;
}
console.log(factorial);

//make it as a function named calcfactorial 
function calcfactorial (terms){
    let ans = 1;
    for(let i=1;i<=terms;i++){
        ans *= i;
    }
    console.log(ans);
}
console.log(calcfactorial(5));


//Understanding nested loops 
/* nested loops are loops that are embedded into one another . Each time the outer loop runs and comes to the inner loop , the inner loop completes complete iteration and then goes back to outer loop. This process takes place until the outer loop is fully iterated */

//Example to understand this phenomena
for(let i=1;i<=2;i++){
    for(let j=1;j<=3;j++){
        console.log(`outerloop iteration no.${i} : innierloop iteration no.${j}`);
    }
}



//Print a pattern if starts using nested loops 
/* require output pattern

*
**
***
****

*/
for(let i=0;i<=4;i++){
    let  pattern = ""   //creates an empty line after each iteration
    for(let j=0;j<=i;j++){  //flls the no.of stars on the empty line based on the row.no (i)
        pattern += "*";
    }
    console.log(pattern);
}

console.log('\n'); //escape sequence


//Print a pattern of starts using nested loops 
/* require output pattern

******
******
******
******
******

*/
for(let i=0;i<=4;i++){
    let pattern = "";   //starts each line as a empty string
    for(let j=0;j<=5;j++){  //prints 6 stars on each line
        pattern += "*";
    }
    console.log(pattern);
}

console.log('\n');  //escape sequence 

//Print a pattern of starts using nested loops 
/* require output pattern

******
*****
****
***
**
*

*/
for(let i=5;i>=0;i--){  //since we require a inverted triangle we are initiasing i from and  continuing the iteration till i reaches 0 by decrementing it as i--
    let pattern = "";
    for(let j=0;j<=i;j++){
        pattern += "*";
        
    }
    console.log(pattern); 
}


//Print a pattern of starts using nested loops 
/* require output pattern

     *
    **
   ***
  ****
 *****

 To create a right triangle pattern in javascript you will have to deal with 3 loops, 1 of which is external and 2 are internal. The external loop will execute internal loops for 'n' number of times and the internal loop will design a pattern for each row.

From the above pattern, you can see each row has a series of stars and spaces. The number of stars in a row starts from 1 preceding with 'n-1' spaces and ends with 'n' star and 0 spaces.

Create 2 internal loops, 1st print n - i spaces and 2nd print i stars, where i is the number of times the external loop is executed.

*/
let row=5;
for(let i=0;i<row;i++){
    let pattern="";
    for(let j=0;j<row-i;j++){
        pattern += " " ;
    }
    for(let k=0;k<=i;k++){
        pattern += "*";
    }
    console.log(pattern);
}

//Print a pattern of starts using nested loops 
/* require output pattern
      *
     ***
    *****
*/
let x=3;

//initalising the outer loop
for(let i=1;i<=x;i++){
    let pattern = "";
    //loop for spacing viz x-i 
    for(let j=1;j<=x-i;j++){
        pattern += " ";
    }
    //loop for creating stars viz odd no. per row (2*i-1)
    for(let k=1;k<=2*i-1;k++){
        pattern += "*";
    }
    console.log(pattern);
}

//Print a pattern of starts using nested loops 
/* require output pattern
      *
     ***
    *****
   *******
  *********
*/

let n = 5;
let string = "";
 //External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);


//Print a pattern of starts using nested loops 
/* require output pattern
    * * * * *
    *       *
    *       *
    *       *
    * * * * *
    

Steps to create a hollow square star pattern are:

Create a variable to store the string and assign it with an empty string
Create a for loop to run for 'n' number of times, where 'n' is number of rows/columns in the square, i.e for(let i = 0; i < n; i++)
Inside the loop, create a for loop that prints a star (*) at the beginning and end of the line and space in between
Also, keep in mind that the first and last row should have only stars
Add a new line after each row

*/
let rows = 5;
for(let i=1;i<=rows;i++){   //outerloop for no.of rows
    let pattern = "";       //prints new line for each outerloop iteration
    for(let j=1;j<=rows;j++){   //innerloop for columns
        if(i==1||i==rows||j==1||j==rows){   //for row 1 and 5 and column 1 and 5 print stars else print space.
            pattern += "*";
        }
        else{
            pattern += " ";
        }
    }

    console.log(pattern);
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter something: ", function(userInput) {
    console.log("You entered:", userInput);
    rl.close();
});
