// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
// Make a array of magician’s names
var magician_names = ["Severus Snape", "Ronaldo", "Albus"];
// Creating a function 
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//Calling our function
show_magicians(magician_names);
//Printing function
// console.log(show_magicians(magician_names));
