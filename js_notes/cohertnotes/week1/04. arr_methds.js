function explainParseInt(value) {
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("After parseInt:", result);
  }
  
  // Example Usage for parseInt - converts into integer 
  explainParseInt("42");
  explainParseInt("42px");  //characters if present after the number is trimmed and gives an int as output but if characters are present in the beginning of the number is not concerted into int and outputs as NaN
  explainParseInt("3.14");
  
  function explainParseFloat(value) {
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result);
  }
  
  // Example Usage for parseFloat - converts into a float
  explainParseFloat("3.14");
  explainParseFloat("42");
  explainParseFloat("42px");
  

  // Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
// adds elemet to an array at the end
function pushExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.push(element);
    console.log("After push:", arr);
  }
  pushExample([1, 2, 3], 4);

  // unshift()
  // adds element to an array at the front
  function unshiftExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.unshift(element);
    console.log("After unshift:", arr);
  }
  unshiftExample([1, 2, 3], 0);
  
  // pop()
  // removes element from a array from the end
  function popExample(arr) {
    console.log("Original Array:", arr);
  
    arr.pop();
    console.log("After pop:", arr);
  }
  popExample([1, 2, 3]);
  
  // shift()
  // removes element fron an array from the front
  function shiftExample(arr) {
    console.log("Original Array:", arr);
  
    arr.shift();
    console.log("After shift:", arr);
  }
  shiftExample([1, 2, 3]);
  
  
  // concat() - joins 2 array - syntax = arr1.concat(arr2);
  // this method takes 2 arrays one at the front , a dot operator and concat keyword and2nd array as a parameter and joins arr2 and arr2
  function concatExample(arr1, arr2) {
    console.log("Original Arrays:", arr1, arr2);
  
    let arr3 = arr1.concat(arr2);
    console.log("After concat:", arr3);
  }
  concatExample([1, 2, 3], [4, 5, 6]);
  
  // forEach()
  function forEachExample(arr) {
    console.log("Original Array:", arr);
  
    arr.forEach(function(item, index) {
      console.log(item, index);
    });
  }
  forEachExample([1, 2, 3]);
  
  // map()
  function mapExample(arr) {
    console.log("Original Array:", arr);
  
    let newArr = arr.map(function(item) {
      return item * 2;
    });
    console.log("After map:", newArr);
  }
  mapExample([1, 2, 3]);
  
  // filter()
  function filterExample(arr) {
    console.log("Original Array:", arr);
  
    let newArr = arr.filter(function(item) {
      return item > 3;
    });
    console.log("After filter:", newArr);
  }
  filterExample([1, 2, 3, 4, 5]);
  
  // find()
  function findExample(arr) {
    console.log("Original Array:", arr);
  
    let found = arr.find(function(item) {
      return item > 3;
    });
    console.log("After find:", found);
  }
  findExample([1, 2, 3, 4, 5]);
  
  // sort()
  function sortExample(arr) {
    console.log("Original Array:", arr);
  
    arr.sort(function(a, b) {
      return a - b;
    });
    console.log("After sort:", arr);
  }
  sortExample([5, 2, 3, 4, 1]);
  





































  