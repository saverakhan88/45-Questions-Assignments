//Define a function to print each magician names

function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));
    }
    
//Function to make magicians great through .map() it will modify array
function make_great(magicians:string[]){
  return magicians.map(name => `The Great ${name}`);
}



    //Define an array of magicians names
    let magician_names = ["Herry Potter", "DaraCola", "Gappu"];

//Making a copy of original array through .slice() function
let copy_magician_names = magician_names.slice()

//Modify the copied array to include "The Great" with their names
let  copy_great_magicians = make_great(copy_magician_names);

//Show both arrays original and copied

//Original
console.log("Origianl Array\n")
show_magician(magician_names);

//Copy
console.log("\nCopied Array\n")
show_magician(copy_great_magicians);





