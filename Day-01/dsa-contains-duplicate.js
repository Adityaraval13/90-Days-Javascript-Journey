// Given an integer array nums, return true if any value appears more than once in the array,
// otherwise return false.

function hasDuplicate(nums) {

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

