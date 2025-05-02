// Write a function that checks whether two input strings are anagrams of each other. An anagram is a word formed by rearranging the letters of another word, using all original letters exactly once.






function isAnagram(str1, str2) {
    const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

    // Check if the sorted characters are the same
    return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
}