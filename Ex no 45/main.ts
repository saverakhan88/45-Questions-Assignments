//Define a function to create a car object with optional options...

function create_car(manufacturer: string, model: string, ...options){
let car = {
    manufacturer: manufacturer,
    model: model,
};

options.forEach(option => {
    let [key, value] = option.split(":");
    car[key.trim()] = value.trim();

});

return car;

}

//Call the function to create a car object
let my_car = create_car("Toyota", "Corolla", "Color: Black", "Sunroof: True");


//Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);







