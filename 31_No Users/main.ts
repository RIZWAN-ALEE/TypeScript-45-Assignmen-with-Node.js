// Creating Array
let user_Names = ["Huriya" , "Sam" , "Admin" , "Rubab" , "Zeeshan"];

//Empty Array
user_Names = []

if(user_Names.length === 0){
    console.log("Oops, your array is empty we need to find some users!")
}else{
    //Using for.each loop
user_Names.forEach(user =>{
    if(user === "Admin"){
        console.log(`Hello ${user}, would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${user}, thank you for logging in again.`)
    }
})
}
