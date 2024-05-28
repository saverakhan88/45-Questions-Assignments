//Creating a array
let userNames = ["Maira", "Sana", "Mani", "Admin", "Hamdan"];

//Using forEach Loop on Array
userNames.forEach(oneUser => {
    if(oneUser === "Admin"){
    console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello  ${oneUser}, thank you for logging in again.`)
    }
})















