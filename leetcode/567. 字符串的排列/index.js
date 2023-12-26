// https://leetcode-cn.com/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let s1ASCII = 0;
    let s1Map = {};
    for(let i = 0; i < s1.length; i++) {
        let tmp = s1[i];
        if(s1Map[tmp]) s1Map[tmp]++;
        else s1Map[tmp] = 1;
        s1ASCII += tmp.charCodeAt();
    }

    let left = 0, right = 0 ,s2ASCII = s2[0].charCodeAt();
    while(right < s2.length) {
        if(s2ASCII < s1ASCII) {
            right++;
            s2ASCII+= (s2[right] ? s2[right].charCodeAt() : 0);
            continue;
        }
        if(s2ASCII > s1ASCII) {
            s2ASCII-=s2[left].charCodeAt();
            left++;
            continue;
        }
        let s2Str = s2.substring(left, right + 1)
        let s1MapTmp = Object.assign({}, s1Map);
        for(let i = 0; i < s2Str.length; i++) {
            let tmp = s2Str[i];
            if(!s1MapTmp[tmp] || !--s1MapTmp[tmp]) delete s1MapTmp[tmp];
        }

        if(JSON.stringify(s1MapTmp) === '{}') return true;
        else {
            s2ASCII-=s2[left].charCodeAt();
            left++;
        }
    }
    return false;
};
