// Object Methods Explanation
function objectMethods(obj) {
    console.log("Original Object:", obj);
  

    //Object is an global / inbuilt class that has static methods like keys , values , entries , assign etc which performs a specific task

    //get the keys of an object as an array
    let keys = Object.keys(obj);
    console.log("After Object.keys():", keys);
  

    //get the values of an object as an array
    let values = Object.values(obj);
    console.log("After Object.values():", values);
  

    //get the key value pairs of an object where each each key:value pair is an array and the entire collection of key value paired array is inside a parent array [[key1:value1],[key2:value2]]...
    let entries = Object.entries(obj);
    console.log("After Object.entries():", entries);
  

    //check if the mentioned property is present in the object ,if yes logs true , else logs false
    let hasProp = obj.hasOwnProperty("property");
    console.log("After hasOwnProperty():", hasProp);
  

    //helps to add more key value pairs into the existing object
    let newObj = Object.assign({}, obj, { newProperty: "newValue" });
    console.log("After Object.assign():", newObj);
  
  
  }
  
  // Example Usage for Object Methods
  const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };
  
  objectMethods(sampleObject);
  