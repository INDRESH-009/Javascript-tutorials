//JSON stands for javascript object notation
//what is an exapmle of javascript object 
const user = {
    name:"indresh",
    age:19,
    designation:"junior software engineer",
}
//this object in an js is functional and can be used to manipulate the data but what if we need to share this data to another process ? we need to convert the object into a string so that they can undertad the struncture if the data.

const users = '{"name":"indresh","age":19,"designation":"junior software engineer"}'

//so we ned to convert objects into strings and strings into objects back , and for this we are using json class which gives 2 high level functions
// 1.JSON.parse
// 2.JSON.stringify

// parse command lets you convert the string into an object back . lets parse the users string
const parsingstr = JSON.parse(users);
console.log(parsingstr);

// let use create a object and use stringify to convert it into string
let obj = {
    location: "india",
    mail : "abc@gmail.com",
    continent  :"asia"
}
let stringify_obj = JSON.stringify(obj);
console.log(stringify_obj);

