/*
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Useful method
String.prototype.split() - splits a string into an array with a seperator as an indicator
where to split the string.

MY LOGIC BEHIND THE CODE
 - Convert the string to an array for easy access to individual charater
 - Call the map function so I can do something to each element in the array
 - Get the first charater using the bracket notation and change it to uppercase then concatinate the
 result with the rest of the letters starting at the 1 index (changed to lowercase)
 - Lastly, Join the result to make it back to a string.
*/

const titleCase = (str) => {
    //Converts the string to an array with space selector.
    arr = str.split(' ');
   
    
    let mapped = arr.map(function (words){
        //Gets the alphabet at index zero, converts to uppercase
                                        //Get the rest of the alphabets starting at index 1 to the end
                                        //then convert to lowercase.
        return words[0].toUpperCase() + words.slice(1).toLowerCase();
    })

        //Back to a string.
    return console.log(mapped.join(' '));
}




titleCase("I'm a little tea pot"); //Should Return "I'm A Little Tea Pot"
titleCase("sHoRt AnD sToUt") //should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") //should return "Here Is My Handle Here Is My Spout"