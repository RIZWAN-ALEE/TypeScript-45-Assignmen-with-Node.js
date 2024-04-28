//Making a function
function describe_city(city: string ="Karachi" , country : string = "Pakistan"){
    console.log(`${city} is in ${country}.`);
}

//Calling our function with default message
describe_city();

//Calling our function with city Islamabad and default message printed on it
describe_city("Islamabad");

//Calling our function with Multan city and default message printed on it
describe_city("Multan");

//Calling our function with Delhi City and India Country
describe_city("The Big Apple" , "New York");
