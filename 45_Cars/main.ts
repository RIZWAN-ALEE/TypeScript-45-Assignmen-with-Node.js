// Creating a function for car object with adding additional option
function create_car(manufacturer , model  , ...options ){

    // Intializing manufacturer and model in object
    let car = {
        manufacturer: manufacturer,
        model : model
    };

    // adding additional option in the object
    options.forEach(option =>{
        let [key , value] = option.split(":");
        car [key.trim()] = value.trim();
    });

    return car;
}

// Storing our return value in a var
let cars = create_car("Toyota" , "Corolla" , "Color : Grey " , "Year : 2019")

console.log(cars);