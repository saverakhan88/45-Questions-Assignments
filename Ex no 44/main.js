//Define a function with a rest parameter that accepts items arguments representing our sandwich
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a fuction with following items: \n");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
//Call the function 3 times with 3 different number of arguments
make_sandwich("Chicken", "Cheese", "Mayo", "Ketchup", "Egg");
make_sandwich("Bread", "Butter");
make_sandwich("Lettuce", "Tomato");
