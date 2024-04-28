//Array of current_users
var current_users = ["Fatima", "qamar", "Tooba", "Arsalan", "Rabiya", "Noor"];
//Array of new_users
var new_users = ["Tooba", "Ali", "Qamar", "Maham", "Imran", "rabiya"];
//USing .forEach loop on new_users to match the values given in the above array
new_users.forEach(function (new_one_user) {
    //Checking the avalibility of user name if they are already taken or not
    var user_condition = (current_users.some(function (current_users) { return current_users.toLowerCase() === new_one_user.toLowerCase(); }));
    //Making conndition by using different IF_Else Statement
    if (user_condition) {
        console.log("Sorry ".concat(new_one_user, " , is already taken."));
    }
    else {
        console.log("This Username ".concat(new_one_user, " , is avaliable."));
    }
});
