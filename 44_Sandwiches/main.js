// Making a function with rest perimeter that accept our ingredients of sandwich
function makeSandwhich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a Sandwhich with the following items:\n");
    items.forEach(function (oneitem) { return console.log(oneitem); });
    console.log("\n Enjoy your Sandwhich. Hope you will surely like it❤!");
}
// Calling our function 3 times with 3 different number of arguments
makeSandwhich("Bread", "Beef", "Lettuce");
makeSandwhich("Egg", "Cabbage", "Chicken", "Mayo");
makeSandwhich("Broast pieces", "Butter", "Tomato", "Cream", "Garlic");
