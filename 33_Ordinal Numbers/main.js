//Creating An Array
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Using for-loop
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var oneNumber = number_1[_i];
    var ordinal_number = void 0;
    //If-Else-If Statement
    if (oneNumber === 1) {
        ordinal_number = "st";
    }
    else if (oneNumber === 2) {
        ordinal_number = "nd";
    }
    else if (oneNumber === 3) {
        ordinal_number = "rd";
    }
    else {
        ordinal_number = "th";
    }
    console.log("".concat(oneNumber).concat(ordinal_number));
}
