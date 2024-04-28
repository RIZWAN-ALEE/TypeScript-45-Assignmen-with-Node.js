//Array of current_users
let current_users = ["Fatima" , "qamar" , "Tooba" , "Arsalan" , "Rabiya" , "Noor"];

//Array of new_users
let new_users =["Tooba" , "Ali" , "Qamar" , "Maham" , "Imran" , "rabiya"];

//USing .forEach loop on new_users to match the values given in the above array
new_users.forEach(new_one_user =>{

    //Checking the avalibility of user name if they are already taken or not
    let user_condition = (current_users.some(current_users => current_users.toLowerCase() === new_one_user.toLowerCase()))

    //Making different condition by using IF_Else Statement
    if(user_condition){
        console.log(`Sorry ${new_one_user} , is already taken.`);
    }else{
        console.log(`This Username ${new_one_user} , is avaliable.`);
        }

    
})