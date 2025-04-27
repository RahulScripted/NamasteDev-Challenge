// Write a function findMaxNumber that takes an array of numbers as input and returns the largest number in the array. If the array is empty, return null.

// findMaxNumber([1, 2, 3, 4, 5]) -> 5
// findMaxNumber([-10, -20, -3, -1]) -> -1
// findMaxNumber([42]) -> 42
// findMaxNumber([]) -> null
// findMaxNumber([100, 100, 100]) -> 100



function findMaxNumber(arr){
    if (arr.length === 0) return null;
    return Math.max(...arr)
}


console.log(findMaxNumber([100, 100, 100]));
console.log(findMaxNumber([]));
console.log(findMaxNumber([42]));
console.log(findMaxNumber([-10, -20, -3, -1]));
console.log(findMaxNumber([1, 2, 3, 4, 5]));