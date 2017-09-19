/*
    Return the remaining elements of an array after chopping off n elements from the head.

    The head means the beginning of the array, or the zeroth index.

    Useful Methods

    Array.slice()
    Array.splice()
*/

const slasher = (arr, howMany) => {
    //Using splice() remove elements starting at zero index and ending at "howMany";
  arr.splice(0, howMany);
  //Return the array to return the remaining element in the array
  return console.log(arr);
}

slasher([1, 2, 3], 2); // should return [3]
slasher([1, 2, 3], 9) //should return []
slasher(["burgers", "fries", "shake"], 1) //should return ["fries", "shake"]
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) //should return ["cheese", 4]