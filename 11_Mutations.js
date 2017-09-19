/*
 Return true if the string in the first element of the array contains all of the 
 letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in 
the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Useful Method
String.indexOf();
*/

const mutation = (arr) => {
    //Converts to Lowercase
    let input = arr[0].toLowerCase();
    let check = arr[1].toLowerCase();

    //Loop to iterate in the length of the second index
    for(var i = 0; i < check.length; i++){
        //If the index of the 0th indexOf 1th is  less than zero, then it doesnt exist. 
        if(input.indexOf(check[i]) <0){
            return console.log(false);
        }
    }
    return console.log(true);
    
}

mutation(["hello", "hey"]);// should return false.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);// should return true.
mutation(["Mary", "Army"]); // should return true
mutation(["voodoo", "no"]);// should return false.