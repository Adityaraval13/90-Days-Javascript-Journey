/*Given an array of integers nums and an integer target,
 return the indices i and j such that nums[i] + nums[j] == target and i != j.*/

//Nested loop approach (O(n^2))
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// let nums = [4,5,6], target = 10
// console.log(twoSum(nums, target));



//Hash map approach (O(n))

function twoSumHash(nums ,target){
// 1. Create a new Map to act as our "Memory"
    const memory = new Map();

    for(let i = 0 ; i < nums.length ; i++){

      
        const currentNum= nums[i];
  // 2. Calculate what number we NEED to find
        const complement = target - currentNum ;

        // 3. Check if the "memory" already has that complement
        if(memory.has(complement)){
            // SUCCESS! Return the index of the complement and the current index
            return [memory.get(complement) ,i]
        }
        // 4. If not found, store the current number as the KEY 
        // and its index as the VALUE
        memory.set(currentNum, i);
    }
}

let nums = [4,5,6], target = 10
console.log(twoSumHash(nums, target));



