//Making a function
function make_shirt(size, printmessage) {
    if (size === void 0) { size = "Large"; }
    if (printmessage === void 0) { printmessage = "I love TypeScript"; }
    console.log("You selected ".concat(size, " shirt with ").concat(printmessage, " printed in it."));
}
//Calling our function with default message
make_shirt();
//Calling our function with Medium size and default message printed on it
make_shirt("Medium");
//Calling our function with Medium size and default message printed on it
make_shirt("Small", "I like the Way U hit Me❤️");
