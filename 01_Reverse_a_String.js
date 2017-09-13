/*
First Challenge is to Reverse a String;

We're provided a string and expected to reverse the string.

Example. 
String - "Hello";
Result should be - "olleh"

Useful Methods

String.prototype.split() 
what it does - It takes a string and splits it into an array with a specified seperator.

Array.prototype.reverse()
What it does - It reverses an array in that the first becomes the last and last becomes first.

Array.Prototype.join()
What it does - It joins all the element in an array into a string.
*/

const reverseString = (str) => {
    //convert the string into an Array so that I can have access to the indivisual elements in the array.
    //An empty string with no space in the middle as a seperator.
    //Reverse the elements in the array using the reverse method.
    //Now join the array back into a string with the join Method with no space as the in the empty string.
    str = str.split('').reverse().join('');
    console.log(str);
}

reverseString('Hello');
reverseString("Howdy");
reverseString("Greetings from Earth");