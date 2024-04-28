//Creating Array
let user_Names = ["Huriya" , "Farhan" , "Admin" , "Sam" , "Shazam"];

//Using for.each loop
user_Names.forEach(user =>{
    if(user === "Admin"){
        console.log(`Hello ${user}, would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${user}, thank you for logging in again.`)
    }
})
