//Creating a Guestlist array
var GuestList = ["Huriya", "Farhan", "Sam", "Shazam"];
//Making var for those people who are not coming
var Notcoming = GuestList[0];
//Printing those people who are not coming
console.log(Notcoming, "Is not coming for night out.");
//Ading and Removing those people who are not coming from the array
GuestList.splice(0, 1, "Shabana");
//Message print for more voucher
console.log("Here's an Update! We have got more voucher for the night out.");
//Adding new person in the starting of the array
GuestList.unshift("Daud");
//Adding new person in the Ending of the array
GuestList.push("Sana");
//Making a var for storing middle index of our array
var middleindex = Math.floor(GuestList.length / 2);
//Adding new person in the Middle of the array
GuestList.splice(middleindex, 0, "Rabia");
//Printing Message
console.log("New List of Our Guest");
//Sending Invitation One by One to  Our Guests
GuestList.forEach(function (guest) { return console.log("Hi ".concat(guest, ", would you like to have a night out with me?")); });
//Informing that only 2 persons can go for a a night out with me.
console.log("Unfortunately, only 2 persons can go for a a night out with me.");
//Using while-loop to remove guest from the array until 2 persons remains.
while (GuestList.length > 2) {
    var removeguest = GuestList.pop();
    console.log("Sorry, ".concat(removeguest, " I can\u2019t invite you to nightout."));
}
//Print a message to each of the two people still on list, letting them know they’re still invited.
console.log("Invitation to the last two guest");
GuestList.forEach(function (lasttwo) { return console.log("Luckly, ".concat(lasttwo, " you are still invited for the night out.")); });
//Remove the last two names from the list, so we have an empty list
GuestList.pop();
GuestList.pop();
console.log("Empty List:", GuestList);
