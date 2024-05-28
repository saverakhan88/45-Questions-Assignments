//Array of current users
let current_users = ["Mani", "Arooj", "Savera", "laiba", "Sara" ]


//Array of new users
let new_users = ["Uzma", "Laiba", "Isha", "Irtiza", "mani"]

//Loop through new_users to check for usernames availability
new_users.forEach(new_one_user => {

    //Making a Condition for username already exist and save in our condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    //Print Different messages using if-else statements
    if(our_condition){
          console.log(`Sorry ${new_one_user} is already taken`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})









