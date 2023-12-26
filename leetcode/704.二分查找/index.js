/**
 * https://leetcode-cn.com/problems/binary-search/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    let mid = 0;
    while(left <= right) {
        mid = left + Math.floor((right - left) / 2);
        console.log(mid);
        if(nums[mid] === target) return mid;
        if(nums[mid] < target) left = mid + 1;
        if(nums[mid] > target) right = mid - 1;
    }
    return -1;
};

console.log(search([-1,0,3,5,9,12], 9));