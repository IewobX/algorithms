// https://leetcode-cn.com/problems/max-area-of-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const ROW_NUM = grid.length, // 行数
        COLUMN_NUM = grid[0].length; // 列数
    let abscissa = 0, // 行坐标
        ordinate = 0; // 列坐标
    let tmp = 0, // 计数器
        result = 0; // 返回值
    const fn = (i, j) => {
        if(!grid[i][j]) return false;
        grid[i][j] = 0;
        tmp++;
        result = Math.max(result, tmp);
        if(j > 0) fn(i, j - 1);
        if(j < COLUMN_NUM - 1) fn(i, j+1);
        if(i < ROW_NUM - 1) fn(i + 1, j);
        if(i > 0) fn(i - 1, j);
    }

    while(abscissa < ROW_NUM) {
        ordinate = 0;
        while(ordinate < COLUMN_NUM) {
            tmp = 0;
            fn(abscissa, ordinate);
            ordinate++;
        }
        abscissa++;
    }

    return result;
};
let arr = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];
console.log(maxAreaOfIsland(arr));