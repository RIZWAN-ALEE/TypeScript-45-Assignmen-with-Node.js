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

// Making a copy of magician_names array
let  copy_magician_names = magicians_names.slice();

// Modifying our copy array to add "The Great" in it
let copy_great_magician = make_great(copy_magician_names);

// Printing both Original & Copy Array
console.log("Original Array:\n");
show_magicians(magicians_names);

console.log("\nCopied Array:");
show_magicians(copy_great_magician);