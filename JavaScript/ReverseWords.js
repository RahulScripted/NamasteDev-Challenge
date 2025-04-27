// Write a function reverseWords that takes a sentence string as input and returns a new string where each word is reversed, but the order of the words remains the same. Words are separated by spaces. Preserve the original spacing.

// 1.   reverseWords("Hello World")
// 2.   reverseWords("JavaScript is fun")
// 3.   reverseWords(" Lead and Trail ")
// 4.   reverseWords("")
// 5.   reverseWords("OneWord")




function reverseWords(str){
    return str
        .split(/(\s+)/) // Split by space
        .map(word => {
            return word.trim() ? word.split('').reverse().join('') : word
        })
        .join('')
}


console.log(reverseWords("Hello World"));
console.log(reverseWords("JavaScript is fun"));
console.log(reverseWords(" Lead and Trail "));
console.log(reverseWords(""));
console.log(reverseWords("OneWord"));