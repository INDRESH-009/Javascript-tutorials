// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
// length is a property and not an inbuilt function / method brcause it doesnt take any parameter as input 
function getLength(str) {
    console.log("Original String:", str);
    console.log("Length:", str.length);
  }
  getLength("Hello World");
  
  // indexOf
  // finds the index of first occurance of the element we specified  in the string
  function findIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.indexOf(target));
  }
  findIndexOf("Hello World", "World");
  
  // lastIndexOf
  // if the specified element has multiple occuance in the string like below , to specify the index of the last occurance of that element we use lastIndexOf() 
  function findLastIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.lastIndexOf(target));
  }
  findLastIndexOf("Hello World World", "World");
  
  // slice
  // it is a method that provides a substring from the mainstring based on 2 inputs , one is the starting index from which we need to cut the string and the 2nd input is the ending index to stop the formation of substring . note that the starting index is included in splicing but the ending indexx is not included , instead it cuts the string one index before te ending index
  function getSlice(str, start, end) {
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
  }
  getSlice("Hello World", 0, 5);
  
  // substr
  // it is the same as splice but here 1st input takes the index from whhich substring has to be formed and the 2nd input specifies how many characters to be taken from the starting point to form the substring.
  function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substr(start, end));
  }
  getSubstring("Hello World", 2, 5);
  
  // replace
  // It is a method that atkes 2 input , one is the string that is needed to be replaced and the 2nd is the substitute string for the selected one. It replaces the selected string by the string it needs to be substituted.
  //str.replace("hello","hi") -> replces hello by hi in str 
  function replaceString(str, target, replacement) {
    console.log("Original String:", str);
    console.log("After replace:", str.replace(target, replacement));
  }
  replaceString("Hello World", "World", "JavaScript");
  
  // split
  //This method helps to split the string into an array , the  parameter in the split() method is the "delimiter". In the context of the split() method, the delimiter is the character or regular expression used to specify where the string should be split. It indicates the points at which the string will be divided into substrings to form the resulting array.
  function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
  }
  splitString("Hello World", " ");  //splits after space
  
  // trim
  // This method is used to trip out spaces form the  beginning and the end of a string, not in between
  function trimString(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
  }
  trimString(" Hello World ");
  
  // toUpperCase
  //changes the str from lower ot upper case 
  function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
  }
  toUpper("Hello World");
  
  // toLowerCase
  //changes the str from upper to lower case 
  function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
  }
  toLower("Hello World");
  