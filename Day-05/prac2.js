/* Given an array of integers nums and an integer target,
 return the indices i and j such that nums[i] + nums[j] == target and i != j.*/

//nested approach

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return `false:There are no such two numbers which adds up to ${target}`;
}

//o(n) approach (Linear approach) (Hash Map)

function twoSumHash(nums, target) {
  const memory = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    const complement = target - currentNum;

    if (memory.has(complement)) {
      return [memory.get(complement), i];
    }

    memory.set(currentNum, i);
  }
}

let nums = [4, 5, 6],
  target = 10;

console.log(twoSumHash(nums, target));
