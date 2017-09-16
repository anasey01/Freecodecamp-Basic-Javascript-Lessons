/*
    Instruction :
    Return the length of the longest word in the provided sentence.
    Your response should be a number.

    Recommended Methods:
    String.length - A property that returns the length of a string in numbers.
    String.prototype.split() - converts a string into an array with a specified seperator.

    THOUGHT PROCESS:
    convert the string into an array of individual words, which will give me access to each of the
    words in the string.
    I want a place holder to store the length of the longest word
    Run a loop to look through the individual words in the array and return the lenght of the longest word.
*/

const findLongestWord = (str) => {
    words = str.split(' ');
    // console.log(words);
    let longestWord = 0;
    for (var i = 0; i < words.length; i++){            
    let wordLength = words[i].length;
    // console.log(words[i]);
    // console.log(wordLength);
        //Check for the condition if the length of the current word is greater than the next
    if (words[i].length > longestWord){
        //Set the longest word to the current length
        longestWord = words[i].length ;
        }
    
    }
    //Return the length.
    // return console.log(longestWord);

}

findLongestWord("The quick brown fox jumped over the lazy dog"); //Should return 6.
