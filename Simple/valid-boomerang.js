/**
 * 回旋镖定义为一组三个点，这些点各不相同且不在一条直线上。
给出平面上三个点组成的列表，判断这些点是否可以构成回旋镖。
示例 1：
输入：[[1,1],[2,3],[3,2]]
输出：true

斜率
 */
var isBoomerang = function(points) {
    let x1 = points[0][0] - points[1][0];
    let y1 = points[0][1] - points[1][1];
    
    let x2 = points[0][0] - points[2][0];
    let y2 = points[0][1] - points[2][1];
    return x1 * y2 != x2 * y1;
};