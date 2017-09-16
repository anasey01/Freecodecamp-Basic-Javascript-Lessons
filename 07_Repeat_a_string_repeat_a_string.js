/*
Repeat a given string (first argument) num times (second argument). 
Return an empty string if num is not a positive number.

Helpful link
Global String Object.
*/

const repeatStringNumTimes = (str, num) =>{
    // A placeholder to set string to empty string.
    let string = "";
    // Check if num is a positive integer
  if(num <= 0){
      return  console.log(string);
     
  }
  // call the repeat method passing num as nummber of times.
return console.log(str.repeat(num));

}

repeatStringNumTimes("abc", 3); // should return "abcabcabcabc"
repeatStringNumTimes("*", 3) //should return "***"
repeatStringNumTimes("abc", -2) //should return ""