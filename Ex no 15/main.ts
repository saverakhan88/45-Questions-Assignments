let guestlist = ["Urooj", "Laiba", "Aqsa", "Aimen"];

let dontcome = guestlist[0];

console.log(dontcome, "She will not come");

guestlist.splice(0, 1, "Amna");

guestlist.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));

