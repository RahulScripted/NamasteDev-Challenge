// Write a function shuffle that accepts an array and returns a new array with the elements in randomized order. Ensure that all elements from the original array are present exactly once and that the original array is not mutated.

// Input: [1, 2, 3, 4, 5]  Output: [3, 1, 5, 2, 4]
// Input: ['a', 'b', 'c']  Output: ['b', 'c', 'a']




function shuffle(arr){
    let newArr = [...arr]
    for(let i = newArr.length - 1;i >= 0;i--){
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr
}


console.log(shuffle([1, 2, 3, 4, 5] ));
console.log(shuffle(['a', 'b', 'c'] ));