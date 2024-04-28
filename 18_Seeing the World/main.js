var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Storing location in Array & Printing its Original order
var countriesToVisit = ["Dominica", "Bangladesh", "China", "America"];
console.log("Original Order :", countriesToVisit);
// Print array in alphabetical order without modifying the actual list
console.log("Alphabetical Order :", __spreadArray([], countriesToVisit, true).sort());
//• Showing that array is still in its original order by printing it
console.log("Still in its original order:", countriesToVisit);
//Print array  in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order :", __spreadArray([], countriesToVisit, true).reverse());
// Again Showing that array is still in its original order by printing it
console.log("Still in its original order:", countriesToVisit);
//Reverse the order of original list & Printing it
console.log("Reverse the original order :", countriesToVisit.reverse());
//Changing the array back to its original order
console.log("Back to Original Order :", countriesToVisit.reverse());
//Sorting the array in its alphabetical order & Printing it
console.log("Sorting Array in Alphabetical Order :", countriesToVisit.sort());
//Reverse the order of original list Again & Printing it
console.log("Reverse the original order Again:", countriesToVisit.reverse());
