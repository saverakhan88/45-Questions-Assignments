//Creating a guestlist array

let guestlist = ["Urooj", "Laiba" , "Aqsa", "Aimen"];

//Making  variable  for those guest who cant come
let dontcome = guestlist[0];

//Print the name of guest who cant come
console.log(dontcome, "She will not come.");

//Add or Remove values from guestlist array
guestlist.splice(0, 1, "Amna");

//Message print for Bigger Table
console.log("Good news !  We have found a Bigger Table for Dinner.");

//Adding a new guest at starting index of array
guestlist.unshift("Ali");


//Adding a new guest at ending index of array
guestlist.push("Hamdan");

//Get a  middle index of our guestlist array
let middleindex: number = Math.floor(guestlist.length / 2);

//Adding a new guest to middle index of array
guestlist.splice(middleindex, 0, "Mani");

//Print message of Updated list
console.log("Updated list of our Guests");

//Sending a invitation message to our guests one by one wiyh their names
guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));


