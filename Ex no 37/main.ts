//Making a function
 
 function make_shirt (size: string = "Large", printMessage: string = "I Love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage}`)
 }


//Calling a function with by-default message
make_shirt ();

//Calling a function now with Medium size shirt and default message
make_shirt("Medium")

//Calling a function now with small size and also different print message
make_shirt("Small")








