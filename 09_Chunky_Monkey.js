/*
    Write a function that splits an array (first argument) 
    into groups the length of size (second argument) and returns them as a two-dimensional array.

    Useful Methods
    Array.prototype.push()
    Array.prototype.slice()

*/


const chunkArrayInGroups = (arr, size) => {
    //A placeholder to store the new array
var newArray = [];

//Loop intializing 1 to zero;the loop will run as long as i < length of arr;
//On every Iteration, add i to the size
//Reason being we don't want to iterate in the array by one to avoid duplicating the elements 
//and don't want to be stuck in an infinite loop
//hence, we want to skip to the next element's size after the first round of size.
for(var i = 0; i < arr.length; i += size){
    newArray.push(arr.slice(i ,  i+size));
}
    return console.log(newArray);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); //should return [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)// should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) // should return [[0, 1, 2], [3, 4, 5], [6]]