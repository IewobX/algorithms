// https://leetcode.cn/problems/maximum-students-taking-exam/description/
/**
 * 给你一个 m * n 的矩阵 seats 表示教室中的座位分布。如果座位是坏的（不可用），就用 '#' 表示；否则，用 '.' 表示。
 * 学生可以看到左侧、右侧、左上、右上这四个方向上紧邻他的学生的答卷，但是看不到直接坐在他前面或者后面的学生的答卷。请你计算并返回该考场可以容纳的同时参加考试且无法作弊的 最大 学生人数。
 * 学生必须坐在状况良好的座位上。
 * [["#",".",".",".","#"],
 *  [".","#",".","#","."],
 *  [".",".","#",".","."],
 *  [".","#",".","#","."],
 *  ["#",".",".",".","#"]]
 */
function maxStudents(seats: string[][]): number {
    let result: number = 0;

    for(let i = 0; i < seats.length; i++) {
        for(let j = 0; j < seats[i].length; j++) {
            if(seats[i][j] !== '.') continue;
            if(seats[i][j - 1] === '0') continue;
            if(seats[i-1] && (seats[i-1][j-1] === '0' || seats[i-1][j+1] === '0')) continue;

            seats[i][j] = '0';
            result++;
        }

    }

    console.log('seats:', seats);
    return result;
};
const seats = [["#",".",".",".","#"],[".","#",".","#","."],[".",".","#",".","."],[".","#",".","#","."],["#",".",".",".","#"]];

maxStudents(seats);