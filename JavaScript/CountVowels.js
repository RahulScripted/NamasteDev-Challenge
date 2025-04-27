// Write a function countVowels that takes a string as input and returns the number of vowels in that string. Vowels include both lowercase and uppercase. characters: 'a', 'e', 'i', 'o', 'u' and 'A', 'E', 'I', '0', 'U'.

// 1. countVowels("hello") -> 2
// 2. countVowels("JavaScript") -> 3
// 3. countVowels("bcd")  -> 0
// 4. countVowels ("AEIOU") -> 5
// 5. countVowels("") -> 0



function countVowels (str) {
    let count = 0;
    for(let ele of str){
        // Lower
        if(ele === 'a' || ele === 'e' || ele === 'i' || ele === 'o' || ele === 'u') count++;

        // Capital
        else if(ele === 'A' || ele === 'E' || ele === 'I' || ele === 'O' || ele === 'U') count++;
    }
    return count;
}


console.log(countVowels("hello"));
console.log(countVowels("JavaScript"));
console.log(countVowels("bcd"));
console.log(countVowels("AEIOU"));
console.log(countVowels(""));