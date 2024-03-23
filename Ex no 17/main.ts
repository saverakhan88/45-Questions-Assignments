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

//Sending a invitation message to our guests one by one with their names
guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));

//Inform that only two guests can be invited for dinner 
console.log("unfortunately, the new dinner table wont arrive on time, so I can only invite two guests to dinner with me");

//Using while-loop to remove guests from the array until only two names remain
while(guestlist.length > 2){
  let removedguest = guestlist.pop();
console.log(`Sorry, ${removedguest} I cant invite you to dinner`)
}

//Sending a invitation to the last two guests in the list
console.log("Invitation to the last 2 guests");
guestlist.forEach(lasttwo => console.log(`Luckily ${lasttwo}, you are still invited to dinner`));


guestlist.pop();
guestlist.pop();

console.log("Empty list:", guestlist);

