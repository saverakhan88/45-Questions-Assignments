//Array of current users
var current_users = ["Mani", "Arooj", "Savera", "laiba", "Sara"];
//Array of new users
var new_users = ["Uzma", "Laiba", "Isha", "Irtiza", "mani"];
//Loop through new_users to check for usernames availability
new_users.forEach(function (new_one_user) {
    //Making a Condition for username already exist and save in our condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //Print Different messages using if-else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
