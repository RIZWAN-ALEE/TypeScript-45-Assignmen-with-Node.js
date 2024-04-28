// Creating a function for car object with adding additional option
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Intializing manufacturer and model in object
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // adding additional option in the object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Storing our return value in a var
var cars = create_car("Toyota", "Corolla", "Color : Grey ", "Year : 2019");
console.log(cars);
