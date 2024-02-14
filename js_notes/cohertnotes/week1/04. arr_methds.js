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
  