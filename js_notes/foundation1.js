/* Foundations of js - 01 -> PRIME FOCUS = basics of variables and datatypes*/

/*
1.What are value 
2.What is a variable 
3.what are datatypes
4.what are 7 primitive datatypes
5.3 ways to Declare a variable in js - let,const,var
6.console.log function
7.Type of operator 
8.Whats Dynamic typing & its action
9.Comments in JS
*/

// 1. What are values - its a piece of data - 13 , 12.89 , true , 'Indresh' etc

// 2. What is a variable - All tasks in software deals with data and thus it is essential to store it. Variables are containers that can store values/data

// 3. What is a datatype - values can be of different types.  These are called datatypes. In JS values are of broadly 2 types -> primitive datatypes and objects

// 4. what are 7 primitive datatypes
/*
    -> Numbers = both int and floats 
    -> String = Sequence of characters in quotes
    -> Boolean = logical datatype whose values are - true or false 
    -> undefined = means empty value & If a variable is declared and not yet initialised it takes up this datatype as default 
    -> null = indicates empty/no value and is a assigned value intentionally
    -> Bigint = ES2020 feature - stores large numbers 
    -> Symbol = ES2015 feature - represents values that are unique and cant be changed 
    */

// 5. Declaring and initialising a variable
/* declaring Syntax-> keyword variablename ;
       initialising Synatx -> variablename = value;

       There are 3 keywords to declare a variable 
       1.let keyword -> used to declare those variables whose values may be mutated in future
       2.const keyword -> used to declare those variables whose values are not going to be changed/reassigned/mutated
       3.var keyword -> shd be completely avoided after ES6  
    */
       let num1; //declaring
       num1 = 10; //initialising
       let num2 = 12; //declaring and initialing at the same time
       num1 = 15; //reassigning/mutating/changing the value of variable num1
       
       const fullname = "Indresh"; //declaring and initialising shd be done at the same time for const keyword
       //const class;               This gives error becz const variables cant be left without initialising
       //Its preffered to keep most of your code in const if you are sure its not going to be mutated
       
       var a;
       a = 10;
       var b = 12;
       //by this we see var is similar to let but there are some differences ->
       /*Variables declared by let are only available inside the block where they're defined. Variables declared by var are available throughout the function in which they're declared*/
       
       // 6. console.log function
       /*
           -> It is a built-in function in js which when called prints/logs the contents in the console of the browser
           */
       console.log("Welcome javascript"); //logging a string
       console.log(num1); //logging a variable
       console.log(12); //logging a number
       console.log(15 + 6); //logging an expression
       console.log("hello " + fullname); //logging a concatenated string and variable
       
       // 7. Typeof operator
       
       //It tells us the datatype of a value/variable
       console.log(typeof num1);
       console.log(typeof fullname);
       console.log(typeof true);
       let x;
       console.log(typeof x); // uninitialised variable - undefined datatype
       let y = null;
       console.log(typeof y); // gives output as object which is a bug and not resolved for legacy reason
       
       // 8. Dynamic typing in javascript
       /* 
       This means we dont havre to manually define the datatype of the value which the variable can store.
        a variable can have any value belonging to any datatype
        */
       let dynamic = 10; //dynamic holds a num
       dynamic = true; //dynamic holds a boolean
       dynamic = "hello JS"; //dynamic holds a string
       
       // 9. Comments in JS
       
       /* multiline comment */
       // single line comment
