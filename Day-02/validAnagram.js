//An anagram is when two strings contain the same characters in any order.

/*Frequency map : A frequency map is just a plain object {} in js that keeps the track
 of how many times something occurs.
 
 *It is useful for :
 - Anagram detection 
 - Counting characters / digits
 - Finding duplicates
 - Frequency based sorting 
 - Advanced pattern matching+


Given two strings s and t, return true if the two strings are anagrams of each other,
otherwise return false. */

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  } else {
    (str1=str1.toLowerCase(), str2=str2.toLowerCase());
  }

  let count = {};

  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2) {
    if (count[char]) {
      count[char]--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("Hello", "lleoh")); //should be true
console.log(isAnagram("anagram", "nagaram")); // Should be true
console.log(isAnagram("rat", "car")); // Should be false
