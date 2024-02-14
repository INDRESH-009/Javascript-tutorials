// Classes in JavaScript are templates for creating objects. They encapsulate data (properties) and behavior (methods) into reusable blueprints. They provide a way to create multiple objects with similar characteristics and functionalities. Classes define the structure and behavior of objects, making it easier to manage and organize code. They are a key feature of object-oriented programming (OOP) in JavaScript, allowing for code reuse, abstraction, and inheritance.

class ClassName {
    // Constructor method
    constructor(parameters) {
        // Initialization code
    }

    // Method definitions
    methodName1() {
        // Method code
    }

    methodName2() {
        // Method code
    }
    
    // More methods...
}


// In this syntax:

// class keyword is used to define a class.
// ClassName is the name of the class.
// constructor() method is a special method used for initializing objects created with the class. It's called automatically when a new instance of the class is created.
// methodName1, methodName2, and other method names are the names of methods defined within the class.
// Inside the class definition, you can define properties and methods that all objects created from the class will have.


// Defining a class
class Person {
    // Constructor method
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an instance of the class
let person1 = new Person("John", 30);

// Accessing properties and calling methods
console.log(person1.name); // Output: "John"
console.log(person1.age); // Output: 30
person1.greet(); // Output: "Hello, my name is John and I am 30 years old."


// In this example:

// We define a class called Person using the class keyword.
// Inside the class, we define a constructor method using the constructor keyword. This method is called when a new instance of the class is created and is used to initialize object properties.
// We also define a method called greet() inside the class.
// We create an instance of the Person class using the new keyword and pass arguments to the constructor.
// We access object properties (name and age) and call the greet() method on the instance.




//Create a class car that can construct objects with properties of brand,model,year of manufacture,color,fueltype and create a 1. method that can print these info 2. method that can tell out of the give cars which is the latest manufactured

class car{
    //constructor
    constructor(brand,model,manufactured_on,color,fueltype){
        this.brand = brand;
        this.model = model;
        this.manufactured_on = manufactured_on;
        this.color =color;
        this.fueltype = fueltype;
    }
    //print method
    print(){
        console.log(`This is a ${this.color} ${this.brand} ${this.model} ${this.manufactured_on} model and it has a ${this.fueltype} engine`);
    }

    //comparng 2 cars method 
    manufacturecompare(car2){
        if(this.manufactured_on > car2.manufactured_on){
            console.log(`${this.brand} ${this.model} is the latest.`)
        }
        else if(this.manufactured_on < car2.manufactured_on){
            console.log(`${car2.brand} ${car2.model} is the latest .`);
        }
        else{
            console.log(`${this.brand} ${this.model} and  ${car2.brand} ${car2.model} both are manufactured on the same year`)
        }
    }

    //comaring manufactured year of many cars 
    //to compare the manufacturing year of many cars, you can modify the manufacturecompare() method to accept an array of cars as an argument instead of just one other car. Then, you can iterate over the array to find the latest car based on the manufacturing year.

    
    static comparemanycars(arr){
        if(!arr || arr.length == 0){
            console.log("no cars provided for comaprision");
        }

        // if arr is given , to find the latest car lets declare a latest car 
        let latestcar = arr[0];
        for(let i=0;i<arr.length;i++){
            if(arr[i].manufactured_on > latestcar.manufactured_on){
                latestcar = arr[i];
            }
        }
        console.log(`${latestcar.brand} ${latestcar.model} is the latest. `)
    }

    //compareManufacturingYear is indeed a static method of the Car class. This means it's a method associated with the class itself, not with instances of the class.
    //Inside the compareManufacturingYear method, latestCar is not a method; it's a variable used to store a reference to a Car object. It's initialized to the first car in the cars array, and then updated based on the comparison of manufacturing years during the loop iteration.

}
let bmw = new car ("bmw","l350",2022,"black","petrol");
let rollsroyce = new car ("rollsroyce","ghost",2003,"black","petrol");
let audi = new car("audi","A6",2023,"white","disel");
bmw.print();
bmw.manufacturecompare(rollsroyce);

//creating an array of cars
let arr = [bmw,rollsroyce,audi];
car.comparemanycars(arr);   //calling the static class











//explanation of static keyword in classes
/*
In JavaScript, when you define a class, you can declare methods or properties as static using the static keyword. Here's a simple explanation of static methods and properties in a class:

Static Methods:
Static methods are associated with the class itself rather than instances of the class.
They can be called directly on the class without needing to create an instance.
These methods are useful for utility functions or operations that don't depend on specific instances of the class.
Example: Suppose you have a Math class, and you want to define a method to calculate the square root of a number. This method can be static because it doesn't need any specific instance data.


Static Properties:
Similarly, static properties are also associated with the class itself.
They are accessed using the class name without needing an instance.
These properties are useful for storing class-level data or constants.
Example: In a Constants class, you might have static properties like PI or MAX_SIZE, which are universal and don't vary between instances.

In summary, static methods and properties provide a way to define functionality and data associated with a class itself, rather than with instances of the class. They are useful for organizing and accessing class-level behavior and data.
example:::

*/

class mathUtil{
    //static method
    static squareroot(x){
        return Math.sqrt(x);
    }
    //static property
    static PI = 3.14;
}

//calling static method directly with refrence to class
console.log(mathUtil.squareroot(25));
//calling a static property with refrence to class
console.log(mathUtil.PI);




class bank{
    constructor(name,accNo,type_of_account,bal){
        this.name = name;
        this.accno = accNo;
        this.type = type_of_account;
        this.bal = bal;
    }
    deposit(amount){
        this.bal = this.bal+amount;
        return `Your account ${this.accno} has been credited with ${amount}`;
    }
    withdraw(money){
        if(money<=this.bal){
            console.log(`rupees ${money} is debited from your account`);
            this.bal = this.bal - money;
            return this.bal;
        }
        else{
            let output = `you have insufficient balance to debit ${money} rupees`;
            return output;
        }
    }
    namebal(accno){
        if(accno === this.accno){
            return (`${this.name} has a balance of ${this.bal}`)
        }
        
    }
}
let indresh = new bank("indresh",32434523,"student account",4800);
let punit = new bank("fuck",9999999999,"icici",120);

let addamt = punit.deposit(500);
console.log(addamt);

let getamt = punit.withdraw(30);
console.log(getamt);

let getbal = punit.namebal(9999999999);
console.log(getbal);

