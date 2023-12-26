// https://leetcode-cn.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1, site = 0;
    while(left !== right) {
        site = left + Math.floor((right - left) / 2);
        if(nums[site] === target) return site;
        if(nums[site] > target) right = site;
        if(nums[site] < target) left = site + 1;
    }
    site = left;
    return site === nums.length - 1 && nums[site] < target ? site + 1 : site;
};

let result = searchInsert([1], 0)
console.log(result);