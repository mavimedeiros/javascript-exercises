// 1- Take an array
// 2- Take other arguments
//    You can manipulate the original array you pass into the 
// function call or create a new array that is returned as the result, but the 
// function should return the resulting array regardless of the approach.
// 4- make a new empty array
// take an argument, if that argument is in the array, it removes it from the array.

// Look for an item in the array, find the index it is on and return it.
// take the index found and delete the item in that index.


// using indexOf() method if value is not found it returns -1, then the -1 negative 
// index is used and indexNum and deletes that last num in the index.
// So try and use another method. This one is not gonna work.

// const removeFromArray = function(arr, num) {
//     let indexNum = arr.indexOf(num);
//     arr.splice(indexNum, 1);
//     return arr;
// }

// using filter - filter returns an array of all matching elements
// if true item is pushed to results and the iteration continues
// returns empty array if nothing found

const removeFromArray = function(arr, ...args) {
    let results = arr.filter(item => !args.includes(item))
    return results;
}

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
