//Making a function
function describe_city(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
//Calling our function with default message
describe_city();
//Calling our function with city Islamabad and default message printed on it
describe_city("Islamabad");
//Calling our function with Multan city and default message printed on it
describe_city("Multan");
//Calling our function with Delhi City and India Country
describe_city("The Big Apple", "New York");
