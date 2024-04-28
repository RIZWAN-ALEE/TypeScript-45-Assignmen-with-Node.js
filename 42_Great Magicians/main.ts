// Creating An array of magicians names
let magicians_names = ["Albus" , "Severus Snape" , "Ronaldo"];

// Making a function show_magicians() to pass the array
function show_magicians(magicians : string[]){

    // Using forEach method 
    magicians.forEach(name => console.log(name));
}

// MAking a function of great_magicians() to modify our array "The Great"
function make_great(magicians : string[]){

    // Using .map method to modify our array
    return magicians.map ( name => `The Great ${name}. `)
}

//make_great(magicians_names);
let great_magicians = make_great(magicians_names);

// console.log(great_magicians);

show_magicians(great_magicians);