// https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1;
    while(left < right) {
        let sum = left + right;
        if(sum === target) return [left, right];
        if(sum > target) right--;
        if(sum < target) left++;
    }
    return [];
};