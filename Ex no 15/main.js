var guestlist = ["Urooj", "Laiba", "Aqsa", "Aimen"];
var dontcome = guestlist[0];
console.log(dontcome, "She will not come");
guestlist.splice(0, 1, "Amna");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
