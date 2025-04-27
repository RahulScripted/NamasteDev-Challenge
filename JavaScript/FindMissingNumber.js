// You are given an array containing n distinct numbers taken from the range 0 to n. This means the array should ideally contain all numbers from 0 to n, but one number is missing. Your task is to find and return that missing number.

// Input: An array of n integers where each integer is
// unique and lies between 0 and n (inclusive) except for one missing number.

// Output: Return the missing number.



function findMissingNumber(arr){
    let n = arr.length;
    let xor1 = 0, xor2 = 0;

    // XOR of array elements
    for(let i = 0;i < n;i++) xor1 ^= arr[i];

    // XOR of actual elements
    for(let i = 0;i <= n;i++) xor2 ^= i;

    // Return the missing
    return xor1 ^ xor2
}


let arr = [3, 0, 1]
console.log(findMissingNumber(arr))

arr = [0, 1]
console.log(findMissingNumber(arr))

arr = [8, 2, 4, 5, 3, 7, 1, 0]
console.log(findMissingNumber(arr))

arr = [0]
console.log(findMissingNumber(arr))