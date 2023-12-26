// https://leetcode.cn/problems/distribute-money-to-maximum-children/

/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function(money, children) {
    if(money < children) return -1;
    if(money / 8 > children) return children - 1;

    let quotient = parseInt((money - children) / 7); // 分到7美元的人数
    let remainder = (money - children) % 7;
    let result = quotient;

    if(remainder === 3 && quotient === children - 1) return children - 2;

    return result;
};

distMoney(17, 2) // 1
