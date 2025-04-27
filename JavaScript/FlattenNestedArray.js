// Create a function that takes a nested array of arbitrary depth and returns a flattened array where all nested elements are extracted and placed in a single array.

// 1.   Input: [1, [2, [3, 4], 5], 6] Output: [1, 2, 3, 4, 5, 6]

// 2.   Input: [["a"], ["b", ["c", "d"]], "e"] Output: ["a", "b", "c", "d", "e"]



function flattenArray(arr){
    return arr.flat(Infinity);
}


console.log(flattenArray([1, [2 , [3, 4], 5], 6]));
console.log(flattenArray([["a"], ["b", ["c", "d"]], "e"]));