const removeFromArray = function(arr, ...args) {
    let results = arr.filter(item => !args.includes(item))
    return results;
}

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
