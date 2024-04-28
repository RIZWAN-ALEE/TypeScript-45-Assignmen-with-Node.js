//Creating Array
var user_Names = ["Huriya", "Farhan", "Admin", "Sam", "Shazam"];
//Using for.each loop
user_Names.forEach(function (user) {
    if (user === "Admin") {
        console.log("Hello ".concat(user, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again."));
    }
});
