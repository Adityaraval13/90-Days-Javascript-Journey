/*Given two strings s and t, return true if the two strings are anagrams of each other,
otherwise return false. */

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  } else {
    ((s = s.toLowerCase()), (t = t.toLowerCase()));
  }

  const freq = {};

  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of t) {
    if (freq[char]) {
      freq[char]--;
    } else {
      return false;
    }
  }
  return true;
}

let s = "Hello";
let t = "olleh";

console.log(isAnagram(s, t));
