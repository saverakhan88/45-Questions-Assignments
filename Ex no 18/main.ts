  
  //Making a Array of Countries and Print its Original Order
  let countriesToVisit: String []= ["China", "Denmark", "Brazil", "Argentina"];

console.log("Original Order:", countriesToVisit);

//Print the Array in Alphabetical order without  modifying the Actual Array List
console.log("Alphabetical Order:", [...countriesToVisit].sort());

//Show that the array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);

//Print the Array in Reversed Order without modifying the Actual Array List
console.log("Reverse Order:", [...countriesToVisit].reverse());

//Show that the array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);

//We have changed the original array order now
console.log("Original Array Reversed:",countriesToVisit.reverse());

//Print the array to show that its back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());

//Print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());


//We have changed again  the original array order now in reversed order again
console.log("Original Array Reversed:",countriesToVisit.reverse());







