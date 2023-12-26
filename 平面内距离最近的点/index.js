// 定义点
class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// 获取两个点之间的距离
function getDistance(a, b) {
    const diff_x = a.x - b.x;
    const diff_y = a.y - b.y;
    return Math.sqrt(diff_x ** 2 + diff_y ** 2);
}

// 获取按照X坐标排序后的结果
function getSortByXList (point_list) {
    return point_list.slice().sort((a, b) => a.x - b.x);
}

// 获取按照Y坐标排序后的结果
function getSortByYList (point_list) {
    return point_list.slice().sort((a, b) => a.y - b.y);
}

// 主函数 找到列表中距离最短的两个点
function findShortestDistance(left, right) {
    // 一个节点无穷大
    if(right - left == 0) return Infinity;
    // 两个节点之间 直接返回距离
    if(right - left <= 1) return getDistance(sort_by_x_list[left], sort_by_x_list[right]);

    // middle 找到中间下标
    const middle = Math.floor((right - left) / 2);
    // left_sortest_distance 求左边的最短距离
    const left_sortest_distance = findShortestDistance(0, middle);
    // right_sortest_distance 求右边的最短距离
    const right_sortest_distance = findShortestDistance(middle + 1, right);

    // d 左侧区域和右侧区域的最短距离
    let d = Math.min(left_sortest_distance, right_sortest_distance);
    // m 横坐标中间值
    const m = (sort_by_x_list[middle].x + sort_by_x_list[middle - 1].x) / 2;
    // inside_left_edge 中间区域左边界
    const inside_left_edge = m - d;
    // inside_right_edge 中间区域右边界
    const inside_right_edge = m + d;

    // inside_sort_y_list 保存中间区域的所有点（按照纵坐标大小排序）
    let inside_sort_y_list = [];
    for(let point of sort_by_y_list) {
        if(point.x >= inside_left_edge && point.x <= inside_right_edge) {
            inside_sort_y_list.push(point);
        }
    }

    // 找到 中间区域左右点中距离最小的两个点
    for(let i = 0; i < inside_sort_y_list.length; i++) {
        for(let j = 1; j <= 7; j++) {
            if(!inside_sort_y_list[i + j]) break;
            const dis = getDistance(inside_sort_y_list[i], inside_sort_y_list[i + j]);
            if(dis < d) d = dis;
        }
    }

    return d;
}

// sort_by_x_list 所有点按照x大小排序列表
let sort_by_x_list = [];
// sort_by_y_list 所有点按照y大小排序列表
let sort_by_y_list = [];

// 执行入口
function entry() {
    // 初始化所有点
    const point_list = [new Point(1,2), new Point(3,4),new Point(2,4),new Point(5,2), new Point(2.5, 3.5)];

    sort_by_x_list = getSortByXList(point_list);
    sort_by_y_list = getSortByYList(point_list);
    
    return findShortestDistance(0, point_list.length - 1);
}

console.log("entry: ", entry());