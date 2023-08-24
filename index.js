function isPalindrome(word) {
  // Write your algorithm here
  return word.split("").reverse().join("") === word
}

/* 
function isPalindrome(word):
    return reverseString(word) == word

function reverseString(str):
    reversedStr = ""
    for each char in str, starting from the end:
        add char to the beginning of reversedStr
    return reversedStr*/

/*
The given code checks if a word is a palindrome by comparing the reversed version of the word with the original word. The isPalindrome function calls the reverseString function to reverse the word, and then compares it with the original word. If they match, the word is a palindrome.

The reverseString function reverses a given string by iterating through its characters and constructing a reversed version. It starts from the end of the string and adds each character to the beginning of the reversed string.

This concise version maintains the same logic as the original code while using fewer lines of pseudocode.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
