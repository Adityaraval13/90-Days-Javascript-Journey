/*contains duplicate 
Given an integer array nums, return true if any value appears more than once in the array,
 otherwise return false. */

function conatinsDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      //console.log(nums[i] , nums[j])
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false ;
}

let nums = [1, 2, 3, 3,  4];

console.log(conatinsDuplicate(nums));

// return false only runs if the loops complete without ever triggering return true.