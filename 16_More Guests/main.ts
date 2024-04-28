//Creating a Guestlist array
let GuestList = ["Huriya" , "Farhan" , "Sam" , "Shazam"];

//Making var for those people who are not coming
let Notcoming = GuestList [0];

//Printing those people who are not coming
console.log(Notcoming, "Is not coming for night out.")

//Ading and Removing those people who are not coming from the array
GuestList.splice(0,1, "Shabana");

//Message print for more voucher
console.log("Here's an Update! We have got more voucher for the night out.");

//Adding new person in the starting of the array
GuestList.unshift("Daud");

//Adding new person in the Ending of the array
GuestList.push("Sana");

//Making a var for storing middle index of our array
let middleindex : number = Math.floor(GuestList.length/2);

//Adding new person in the Middle of the array
GuestList.splice(middleindex, 0, "Rabia");

//Printing Message
console.log("New List of Our Guest");

//Sending Invitation One by One to  Our Guests
GuestList.forEach (guest => console.log(`Hi ${guest}, would you like to have a night out with me?` ));