//Define a function to print each magician names
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magicians names
var magician_names = ["Herry Potter", "DaraCola", "Gappu"];
//Making a copy of original array through .slice() function
var copy_magician_names = magician_names.slice();
//Modify the copied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magician_names);
//Show both arrays original and copied
//Original
console.log("Origianl Array\n");
show_magician(magician_names);
//Copy
console.log("\nCopied Array\n");
show_magician(copy_great_magicians);
