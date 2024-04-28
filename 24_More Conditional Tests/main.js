//Making variables
var kiwi = "kiwi";
var uppercasekiwi = "KIWI";
var ten = 10;
var twenty = 20;
var fruits = ["PineApple", "Pomegernade", "Orange", "Apple"];
//Tests for equality with strings
console.log("Is kiwi is equal to kiwi ?");
console.log(kiwi == "kiwi");
//Inequality with strings
console.log("\nIs kiwi is not equal to kiwi ?");
console.log(kiwi != "kiwi");
//Tests using the lower case function
console.log("\nIs KIWI is equal to kiwi after the conversion of lowercase ");
console.log(uppercasekiwi.toLowerCase() == kiwi);
console.log("\nIs KIWI is not equal to kiwi after the conversion of lowercase ");
console.log(uppercasekiwi.toLowerCase() != kiwi);
// Numerical tests involving equality 
console.log("\nIs ten is equal to twenty ?");
console.log(ten == twenty);
//Numerical tests involving inequality
console.log("\nIs ten is not equal to twenty ?");
console.log(ten != twenty);
//Greater than 
console.log("\nIs ten is greater than five ?");
console.log(ten > 5);
//less than
console.log("\nIs twenty is less than ten ?");
console.log(twenty < ten);
//Greater than or equal to
console.log("\nIs ten greater than equal to six ?");
console.log(ten >= 6);
//less than or equal to
console.log("\nIs twenty less than equal to ten ?");
console.log(twenty <= ten);
//Tests using "&&" operators
console.log("\nIs 10 is less than twenty and twenty is not equal to 10  ?");
console.log(10 < 20 && twenty != 10);
//Tests using "||" operators
console.log("\nIs twenty is greater than 10 Or ten is equal to twenty");
console.log(twenty > 10 || ten == 20);
// Test whether an item is in a array
console.log("\nIs Pomegernade in included in fruits array?");
console.log(fruits.includes("Pomegernade"));
//Test whether an item is not in a array
console.log("\nIs Pomegernade in not included in fruits array?");
console.log(!fruits.includes("Pomegernade"));
