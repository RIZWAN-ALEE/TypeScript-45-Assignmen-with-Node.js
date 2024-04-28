//Making a function
function make_shirt(size : string ="Large" , printmessage : string = "I love TypeScript"){
    console.log(`You selected ${size} shirt with ${printmessage} printed in it.`);
}

//Calling our function with default message
make_shirt();

//Calling our function with Medium size and default message printed on it
make_shirt("Medium");

//Calling our function with Medium size and default message printed on it
make_shirt("Small" , "I like the Way U hit Me❤️");
