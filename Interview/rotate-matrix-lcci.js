/**
 * 面试题 01.07. 旋转矩阵
给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。
不占用额外内存空间能否做到？
示例 1:
给定 matrix = 
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
],
原地旋转输入矩阵，使其变为:
[
    [7,4,1],
    [8,5,2],
    [9,6,3]
]
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var len = matrix.length;
    for(var i=0; i<len; i++) {
        // 对角线互换
        for(var j=i+1; j<len; j++) {
            matrix[i][j] += matrix[j][i];
            matrix[j][i] = matrix[i][j] - matrix[j][i];
            matrix[i][j] = matrix[i][j] - matrix[j][i];
        }
        // 左右翻转
        matrix[i].reverse()
    }
    return matrix
};