// Making a function with rest perimeter that accept our ingredients of sandwich
function makeSandwhich(...items : string[]){
    console.log("\nMaking a Sandwhich with the following items:\n");

    items.forEach(oneitem => console.log(oneitem));

    console.log("\n Enjoy your Sandwhich. Hope you will surely like it❤!");

} 

// Calling our function 3 times with 3 different number of arguments
makeSandwhich("Bread" , "Beef" , "Lettuce");

makeSandwhich("Egg" , "Cabbage" , "Chicken" , "Mayo");

makeSandwhich("Broast pieces" , "Butter" , "Tomato" , "Cream" , "Garlic");
