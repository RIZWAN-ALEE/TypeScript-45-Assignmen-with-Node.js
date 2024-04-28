//Creating An Array
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
//Using for-loop
for(let oneNumber of number){
    let ordinal_number :string;

    //If-Else-If Statement
    if(oneNumber === 1){
        ordinal_number = "st"
    }
    else if(oneNumber === 2){
        ordinal_number = "nd"
    }
    else if(oneNumber === 3){
        ordinal_number = "rd"
    }
    else{
        ordinal_number = "th"
    }
     console.log (`${oneNumber}${ordinal_number}`);

}