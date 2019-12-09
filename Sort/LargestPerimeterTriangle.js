/**
 * 给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。

如果不能形成任何面积不为零的三角形，返回 0。
示例 1：
输入：[2,1,2]
输出：5
示例 2：
输入：[1,2,1]
输出：0

解析：三角形的满足条件：a≤b≤c，两边之和大于第三遍
数组排序 从小到大排序，然后取最后三个，不满足递减
 */
var largestPerimeter = function(A) {
    A.sort(function(a,b){return a-b})
    for (var i = A.length - 3; i >= 0; --i)
        if (A[i] + A[i+1] > A[i+2])
            return A[i] + A[i+1] + A[i+2];
    return 0;
};