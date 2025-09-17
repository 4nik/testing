// Problem: Find indices of two numbers in an array that add up to a target value
// Approach: Use a hashmap for O(n) time complexity

function findTwoSum(nums, target) {
  // Store numbers we've seen along with their indices
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // If the complement exists in our map, we found the solution
    if (seen[complement] !== undefined) {
      return [seen[complement], i];
    }

    // Otherwise, store the current number with its index
    seen[nums[i]] = i;
  }

  // If no pair is found
  return null;
}

// Example test cases
console.log(findTwoSum([2, 7, 11, 15], 9));   // [0, 1]
console.log(findTwoSum([3, 2, 4], 6));        // [1, 2]
console.log(findTwoSum([1, 5, 3, 7], 10));    // [1, 3]
console.log(findTwoSum([1, 2, 3], 7));        // null