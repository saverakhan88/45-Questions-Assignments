var userNames = ["Hamza", "Ali", "Sara", "Mani", "Savera"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array is Empty.We need to ");
}
else
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello  ".concat(oneUser, ", thank you for logging in again."));
        }
    });
