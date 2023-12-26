// https://leetcode-cn.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroNum = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) zeroNum++;
        else {
            let temp = nums[i];
            nums[i] = nums[i-zeroNum];
            nums[i-zeroNum] = temp;
        }
    }
    return nums;
};