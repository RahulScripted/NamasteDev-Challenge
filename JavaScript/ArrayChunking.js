// Write a function that splits an array into chunks (subarrays) of a given size n. If the array cannot be split evenly, the final chunk should contain the remaining elements.





function chunkArray(arr, n) {
    const result = [];
    for (let i = 0; i < arr.length; i += n){
        const chunks = arr.slice(i, i + n);
        result.push(chunks);
    }
    return result;
}

console.log(chunkArray([1, 2, 3, 4], 2));
console.log(chunkArray([1, 2, 3, 4, 5], 2));
console.log(chunkArray([], 3));