/*Top k frequent characters
 Given an integer array nums and an integer k, return the k most frequent elements within the array.*/

function topKfrequent(nums, k) {
  const countMap = new Map();

  const buckets = Array.from({ length: nums.length + 1 }, () => []);

  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (let [num, count] of countMap) {
    buckets[count].push(num);
  }

  const result = [];

  for (let i = buckets.length - 1; i > 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }
  }
  return result.slice(0, k);
}

let nums = [1, 1, 1, 2, 2, 3] ; let k = 2;
console.log(topKfrequent(nums, k));
