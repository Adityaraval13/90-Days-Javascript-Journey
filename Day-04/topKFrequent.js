// Given an integer array nums and an integer k, return the k most frequent elements within the array.

function topKFrequent(nums, k) {
  const countMap = new Map();
  // We create an array of empty arrays
  const buckets = Array.from({ length: nums.length + 1 }, () => []);

  // 1. Fill the frequency map 
  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  // 2. Fill the buckets
  // count is the frequency (index), num is the value
  for (let [num, count] of countMap) {
    buckets[count].push(num);
  }

  // 3. Collect the top k elements
  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }
  }

  return result.slice(0, k); // Slice in case we have more than k in the last bucket
}

console.log("Top 2:", topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
