/**
 * 
 * 120. 三角形最小路径和
给定一个三角形，找出自顶向下的最小路径和。
每一步只能移动到下一行中相邻的结点上。
相邻的结点 在这里指的是 下标 与 上一层结点下标 
相同或者等于 上一层结点下标 + 1 的两个结点。
例如，给定三角形：
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
*/
// 自上而下
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const len = triangle.length
    const res = []
    for(let i=0;i<len;i++){
        res[i] = new Array(i).fill(0)
    }
    res[0][0] =  triangle[0][0]
    for(let i=1; i<len; i++){
        // i 行 第一个元素 只能是上一行的第一个 + triangle[i][0]
        res[i][0] = res[i-1][0]  + triangle[i][0]
        for(let j=1;j<i;j++){
            // 正常推理 i行j列 可以有 [i-1][j-1] + [i-1][j] + triangle[i][j]
            res[i][j] =  Math.min(res[i-1][j-1],res[i-1][j]) + triangle[i][j]
        }
        // i行最后一个元素 只能是上一行最后一个元素 [i-1][j-1] +  triangle[i][i]
        res[i][i] = res[i - 1][i - 1] + triangle[i][i];
    }
    return Math.min(...res[len - 1])
};

// 自下而上
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const len = triangle.length;
    if (len===0) {
        return 0;
    }
    // 从倒数第二行开始
    for(let i=len-2; i>=0; i--) {
        for(let j=0; j< i+1; j++) {
            // 当前点的值 为下一行的[i+1][j] 与 [i+1][j+1]间的较小值
            let min = Math.min(triangle[i+1][j], triangle[i+1][j+1]);
            triangle[i][j] += min;
        }
    }
    return triangle[0][0];
};