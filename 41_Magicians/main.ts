// Make a array of magician’s names
let magician_names = ["Severus Snape" , "Ronaldo" , "Albus"];

// Creating a function 
function show_magicians(magician : string[]){
    magician.forEach(name => console.log(name));
}

//Calling our function
show_magicians(magician_names);

