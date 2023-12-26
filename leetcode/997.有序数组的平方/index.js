// https://leetcode-cn.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0, right = nums.length - 1;
    let result = [];

    while(left <= right) {
        let leftAbs = Math.abs(nums[left]),rightAbs = Math.abs(nums[right]);
        if(leftAbs > rightAbs) {
            result.unshift(leftAbs ** 2);
            left++;
        } else {
            result.unshift(rightAbs ** 2);
            right--;
        }
    }
    return result;
};