// https://leetcode.cn/problems/single-number-iii/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        if(map[currentNum]) delete map[currentNum];
        else map[currentNum] = 1;
    }

    return Object.keys(map);
};
