/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, 
we would like you to use one of the JavaScript substring methods instead.

Useful Methods
String.prototype.substr() 
String.prototype.substring() 
*/


function confirmEnding(str, target) {
    // The starting index and the length of characters to include in the resulting string
    var endingString= str.substr(-target.length);   
     
    //Chseck for strict equality
    if(endingString === target){
        return console.log(true);
    }
        return console.log(false);   
   }
   
   confirmEnding("Bastian", "n"); //Should return true.
   confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); //Should return false.
   confirmEnding("He has to give me a new name", "name"); //true