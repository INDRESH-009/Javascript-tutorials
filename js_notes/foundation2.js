/* Foundations of js - 02 -> PRIME FOCUS = everything needed for Logical statements */

/*
1.What are statements and expressions
2.What is a operator and a operand  -> operator precendence
3.Concatenation of string by + operator & template literals
4.Multiline strings before ES6 and after ES6 
5.Conditional if-else statement
6.Type conversion and type coercion in numbers , strings and boolean
7.Equality operators (== vs ===)
8.Inequality operators (!= vs !==)
9.Switch statements in JS
10.Conditional / terenary operator
*/

// 1. What is statements and expression
/*
Expression is a piece of code that is a value or produces/outputs a value
3+4 , 15 , true && false , 23 > 13 , "hello" -> all these are values or gives a value after solving

Statements is a piece of code that gives instructions and is executed but it doesnt hold any value of its own
Many expressions combine to form a statement and they end with ;
*/

if (23 > 13) {
    // this is a statement as whole, 23>13 is expression having a value of true
    console.log("23 is greater than 13"); // this is a statement & the value inside console.log is an expression
  }
  
  //The main reason to understad statemnenst and expressions is because JS expects an expression at a place where a value is expected and statements at a place where a value is not expected.
  
  //2. What is operator and operand
  
  //let us take an expression ->
  2 + 5; //2,5 -> operand , + -> operator , 7 is the value of expression
  true && false; //true,false -> operand , && -> operator , false is the value of expression
  "hello" + "world"; //"hello" , "world" -> operand , + -> operator , "helloworld" is the value of expression
  