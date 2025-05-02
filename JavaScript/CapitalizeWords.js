// Write a function that takes a sentence as input and returns a new sentence where the first letter of each word is capitalized, and the rest of the letters are in lowercase.

// Input: A string sentence containing one or more words separated by spaces.

// Output: A new string where each word starts with an uppercase letter followed by lowercase letters.






function capitalizeWords(sentence) {
    return sentence
        .trim()
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}