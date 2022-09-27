// Boolean
// Undefined
// Null
// String
// Number


var a = 35;
console.log(typeof a);
   
// Variable store string data type
a = "GeeksforGeeks";
console.log(typeof a);
   
// Variable store Boolean data type
a = true;
console.log(typeof a);
   
// Variable store undefined (no value) data type
a = undefined;
console.log(typeof a);


var company = {
    Name: "GeeksforGeeks", 
    Address: "Noida", 
    Contact: "+919876543210",
    Email: "abc@geeksforgeeks.org"
};
  
// Display the object information
console.log("Information of variable company:", company);
       
// Display the type of variable
console.log("Type of variable company:", typeof company);


//-----------------------functions--------------------------------

function multiply(num1, num2) {
  
    // It returns the multiplication
    // of num1 and num2
    return num1 * num2;
}
       
// Declare variable
var x = 2;
var y = 3;
  
// Display the answer returned by
// multiply function
console.log("Multiplication of", x, 
    "and", y, "is", multiply(x, y));



    var x = "Welcome to GeeksforGeeks ";
   
    var y = 'Node.js Tutorials';
       
    var z = ['Geeks', 'for', 'Geeks'];
       
    console.log(x);
       
    console.log(y);
       
    console.log("Concat Using (+) :", (x + y));
       
    console.log("Concat Using Function :", (x.concat(y)));
       
    console.log("Split string: ", x.split(' '));
       
    console.log("Join string: ", z.join(', '));
       
    console.log("Char At Index 5: ", x.charAt(5) );