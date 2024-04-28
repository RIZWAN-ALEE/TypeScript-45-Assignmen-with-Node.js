var GuestList = ["Huriya", "Farhan", "Sam", "Shazam"];
var Notcoming = GuestList[1];
console.log(Notcoming, "Is not coming for night out.");
GuestList.splice(1, 1, "Shabana");
GuestList.forEach(function (guest) { return console.log("Hi ".concat(guest, ", would you like to have a night out with me?")); });
