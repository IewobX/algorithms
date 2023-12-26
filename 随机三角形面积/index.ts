// 随机三个点围成三角形的面积

const triangleArea = (points: Array<{x: number, y: number}>): number => {
    if(points.length < 3) return Infinity;



    return 0;
}

const getRandomPoint = (max: number): {x: number, y: number} => {
    return {
        x: Math.random() * max,
        y: Math.random() * max
    }
}