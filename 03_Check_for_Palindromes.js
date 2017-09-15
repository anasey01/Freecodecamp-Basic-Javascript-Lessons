/*
    Instruction =>
    * Return true if the given string is a palindrome. Otherwise, return false.

    What's a palindrome?
    A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring 
    punctuation, case, and spacing.

    Note
    You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and 
    turn everything lower case in order to check for palindromes.

    We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

    We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

    Remember to use Read-Search-Ask if you get stuck. Write your own code.

    Here are some helpful Methods:

    String.prototype.replace() = Searches a string for a specified value or RegEx and returns
    a string where the specified values are.
    String.prototype.toLowerCase() = converts a string value to lowercase
    String.prototype.charAt() = It returns a charater at the specified position from a string.

    MY TRAIN OF THOUGHTS
        -  OPTION 1 : Step 1 : Take out the special charaters in the string and convert to lowercase
                      Step 2 : Make a copy of the string; On the second copy, Convert the string into an 
                               array with the split method, Reverse the array and Join.
                      Step 3 : Compare the original string with the newly reversed string and return the 
                               appropriate booleen value.
                               
        - OPTION 2 : (MY PREFERED OPTION)
                Step 1 : Same as Above.
                Step 2 : Find the middle number in the string using the .length/2 property;
                Step 3 : Using a while loop, (You'll need 2, one for the left and one for the right)
                         Checking for the condition while i < middle; assign this to the left value
                         while j > middle; assign this to the right value. Don't forget to increase the 
                         Iteration for i by 1 and decrease the iteration for j by 1;
                Step 4 : Compare the values and return the appropriate booleen value.
*/
    
const palindrome = (str) => {
    //Remove any special characters from the string and convert the string to lowercase.
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // console.log(str);

    //Convert the string into an array so I can get easy access to each characters in the present string.
    // let arrPalindrome = str.split(''); // Not using this so I can use the charAt() method.
    // console.log(arrPalindrome);

    //gettingg the index of the middle value
    let middle = Math.floor(str.length/2);
    let i = 0;
    let j = str.length-1;
    // console.log(middle);
    // console.log(i);
    // console.log(j);
    while(i < middle){
        let left = str.charAt(i);
        i++;
        // console.log(left);
        while (j > middle){
            let right = str.charAt(j);
            j--;
            // console.log(right);

            if(left === right){
                return console.log('The left value is: '+ left + ' and right value is: '+ right + ': Palindrome: ' + true);

            }else{
                return console.log('The left value is: '+ left + ' and right value is: '+ right + ': Palindrome: ' + false);
            }
        }
    }

}


palindrome("_eye"); //true
palindrome("race car"); //true
palindrome("not a palindrome"); //false
palindrome("A man, a plan, a canal. Panama"); //true
palindrome("0_0 (: /-\ :) 0-0"); //true
palindrome("five|\_/|four");//false