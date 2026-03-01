/* Given an array of strings strs, group all anagrams together into sublists.
  You may return the output in any order.
  
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]*/

function groupAnagrams(strs) {
  let res = {};

  for (let s of strs) {
    let sorted = s.split("").sort().join("");

    if(!res[sorted]){
        res[sorted]=[];
    }

    res[sorted].push(s);
  }
  return Object.values(res);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
