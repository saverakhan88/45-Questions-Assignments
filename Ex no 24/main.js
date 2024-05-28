//Define variables
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "guava"];
//Test for equality and inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");
//Tests using Lowercase function
console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() === "apple");
console.log("Is APPLE is not  equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//Numerical Tests
//Equal to
console.log("\n Is ten is equal to 20?");
console.log(ten == twenty);
//Not equal to
console.log("\n Is ten is not  equal to 20?");
console.log(ten != twenty);
//Greater than
console.log("\n Is ten is greater than zero?");
console.log(ten > 0);
//Less than
console.log("\n Is ten is less than zero?");
console.log(ten < 0);
//Greater than or equal to
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5);
//Less than or equal to
console.log("\n Is ten is less than or equal to 5?");
console.log(ten <= 5);
//Test using "and"  & "or" operators
console.log("\n Twenty is not equals to 1o and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n Twenty is not equals to 1o and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
//Using || (OR)
console.log("\n Twenty is equals to 20 and twenty is greater than 50");
console.log(20 == 20 || 20 > 50);
console.log("\n Twenty is not equals to 20 and twenty is greater than 50");
console.log(20 != 20 || 20 > 50);
//Tests whether an item is include in array
console.log(" Is guava is include in my fruits array");
console.log(fruits.includes("guava"));
//Not include
console.log(" Is guava is  not include in my fruits array");
console.log(!fruits.includes("guava"));
