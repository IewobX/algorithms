// https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    for(let i = 0; i < arr.length; i++) {
        let str = arr[i].split(''),left = 0, right = str.length - 1;
        while(left < right) {
            let temp = str[left];
            str[left] = str[right];
            str[right] = temp;
            left++;
            right--;
        }
        arr[i] = str.join('');
    }
    return arr.join(' ');
};
