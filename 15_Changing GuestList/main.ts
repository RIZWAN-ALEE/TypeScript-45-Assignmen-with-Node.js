let GuestList = ["Huriya" , "Farhan" , "Sam" , "Shazam"];
let Notcoming = GuestList [1];
console.log(Notcoming, "Is not coming for night out.")
GuestList.splice(1,1, "Shabana");

GuestList.forEach (guest => console.log(`Hi ${guest}, would you like to have a night out with me?` ));