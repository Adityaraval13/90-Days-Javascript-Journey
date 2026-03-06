/*group anagrams 
Given an array of strings strs, group all anagrams together into sublists.
You may return the output in any order.
  
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]

*/

function groupAnagram(strs) {
  let result = {};

  for (let s of strs) {
    let sorted = s.split("").sort().join("");

    if (!result[sorted]) {
      result[sorted] = [];
    }

    result[sorted].push(s);
  }
  return Object.values(result);
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagram(strs));
