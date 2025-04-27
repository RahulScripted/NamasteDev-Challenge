// Write a function that determines whether a given string is a valid palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward. Ignore cases and all non-alphanumeric characters.

// Input: A single string str.

// Output: Return true if the string is a valid palindrome, false otherwise.




function validatePalindrome(str){
    let i = 0, j = str.length - 1;
    while(i < j){
        if(!str[i].match(/[a-zA-Z0-9]/)) i++;
        else if(!str[j].match(/[a-zA-Z0-9]/)) j--;
        else if(str[i].toLowerCase() === str[j].toLowerCase()){
            i++;
            j--;
        }
        else return false;
    }
    return true;
}


console.log(validatePalindrome("A man, a plan, a canal: panama"));
console.log(validatePalindrome("race a  car"));
console.log(validatePalindrome("1234"));