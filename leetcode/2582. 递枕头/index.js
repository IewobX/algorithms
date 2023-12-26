// https://leetcode.cn/problems/pass-the-pillow/description/

/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let quotient = Math.floor(time / (n - 1));
    let remainder = time % (n - 1);

    if (quotient % 2 === 0) return remainder + 1;
    else return n - remainder;
};

console.log(passThePillow(20, 9)); // 10
