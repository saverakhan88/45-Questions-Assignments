//Making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage));
}
//Calling a function with by-default message
make_shirt();
//Calling a function now with Medium size shirt and default message
make_shirt("Medium");
//Calling a function now with small size and also different print message
make_shirt("Small");
