//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 //arr of int
 //iterate through each num using for loop
 //for loop for first placement at 0
 //for loop for second placement at 1 
 //if i + j = target 
 //return [i, j]
 //else 
 //increment by 1 

//my attempt
// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++){
//         //let i = 1; i < nums.length; i++)
//         for(let j = 1; j < nums.length; j++){
//             //for(let j = 2; j < nums.length; j++)
//             if(i + j === target){
//                 //2 + 4 = 6
//                  return [i, j]
//         } else {
//             i++
//             //i = 1
//             j++
//             //= 2
//         }
//     }
// };

//solution: 
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j];
            }
        }
    }
    return [];
}