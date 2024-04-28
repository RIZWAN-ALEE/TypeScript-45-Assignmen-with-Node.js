// Creating An array of magicians names
var magicians_names = ["Albus", "Severus Snape", "Ronaldo"];
// Making a function show_magicians() to pass the array
function show_magicians(magicians) {
    // Using forEach method 
    magicians.forEach(function (name) { return console.log(name); });
}
// MAking a function of great_magicians() to modify our array "The Great"
function make_great(magicians) {
    // Using .map method to modify our array
    return magicians.map(function (name) { return "The Great ".concat(name, ". "); });
}
//make_great(magicians_names);
var great_magicians = make_great(magicians_names);
// console.log(great_magicians);
show_magicians(great_magicians);
