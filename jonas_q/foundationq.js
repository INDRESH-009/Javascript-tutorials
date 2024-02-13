// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

let MarkHeight = 1.69;
let MarkWeight = 78;
let JohnHeight = 1.88;
let JohnWeight = 95;
function bmiCalc(height,weight){
    let bmi = weight/(height**2);
    return bmi;
}
let markbmi = bmiCalc(MarkHeight,MarkWeight);
let johnbmi = bmiCalc(JohnHeight,JohnWeight);
markbmi>johnbmi ? console.log(`mark's bmi is ${markbmi} and its greater than johns bmi ${johnbmi}`) : console.log(`johns bmi ${johnbmi} is larger than marks bmi ${markbmi}`);


// Coding Challenge #2

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

function averagecalc(num1,num2,num3){
    return (num1+num2+num3)/3;
}
function decider(avg1,avg2){
    if(avg1>avg2){
        console.log(`Team dolphin scored ${avg1} and team kolas scored ${avg2} , team dolphin is the winner`);
    }
    else if(avg2>avg1){
        console.log(`Team dolphin scored ${avg1} and team kolas scored ${avg2} , team kolas is the winner`);
    }
    else{
        console.log(`Both teams have same score of ${avg1} so its a draw`);
    }
}
let avg1 = averagecalc(96,108,89);
let avg2 = averagecalc(88,91,110);
decider(avg1,avg2);

// Coding Challenge #3

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/
function tip15(billamt){
    return 0.15*billamt;
}
function tip20(billamt){
    return 0.2*billamt;
}
function finalbill(billamt){
    let tip;
    billamt>50 && billamt <300 ? tip = tip15(billamt) : tip = tip20(billamt);
    console.log(`The tip amt is ${tip} and the total bill is ${tip+billamt}`);
}


finalbill(275);



//Write a function declaration, function expressions and an arrow function for calculating the age based on birthyear

//Function declaration
function agefndeclare(birthyear){
    return 2024-birthyear;
}

//Function expreesion
let agefnexp = function(birthyear){
    return 2024-birthyear;
}

//Arrow function for 1 parameter 
let agearrowfn = birthyear => 2024-birthyear;   //function initialise = parameter => return
//Arrow function for many parameters
let agetillretirement = (birthyear,firstname) => {
    const age = 2024-birthyear;
    let forretire;
    if(age<65){
        forretire = 65-age;
        console.log(`${firstname} have ${forretire} years to retire`);
    } 
    else{
        console.log(`${firstname} already retired`);
    }
    
} 

const age1 = agefndeclare(2004);    //calling a function declartion
const age2 = agefnexp(2004);        //calling a function expression
const age3 = agearrowfn(2004);      //calling a arrow function

agetillretirement(1900,'indresh')
console.log(age1,age2,age3);

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
function averagecalc(num1,num2,num3){
    return (num1+num2+num3)/3;
}
function decider(avg1,avg2){
    if(avg1>=2*avg2){
        console.log(`Team dolphin scored ${avg1} and team kolas scored ${avg2} , team dolphin is the winner`);
    }
    else if(avg2>=2*avg1){
        console.log(`Team dolphin scored ${avg1} and team kolas scored ${avg2} , team kolas is the winner`);
    }
    else{
        console.log(`No team wins because either of the team has an average 2 as more as the other`);
    }
}
let avgfordol = averagecalc(85, 54, 41);
let avgforkola = averagecalc(230, 434, 7);
decider(avgfordol,avgforkola);


//basic array operations
let arr1 = [1,2,3,4];    //declaring an array
console.log(arr1);

arr1.push("jay");       //adding an elements in an array at the end
console.log(arr1);

arr1.unshift("ram");    //adding an elements in an array at the beginning
console.log(arr1);

arr1.pop();             //removing an element from an array always from the end 
console.log(arr1);

arr1.shift();           //removing an element from an array always from the first
console.log(arr1);

let index = arr1.indexOf(1);    //finding the index of a particular element in an array
console.log(index);
console.log(arr1.indexOf(4));

console.log(arr1.includes(3));
console.log(arr1.includes("manoj"));