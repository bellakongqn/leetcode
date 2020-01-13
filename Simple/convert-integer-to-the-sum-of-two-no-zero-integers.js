/**
 * 5307. 将整数转换为两个无零整数的和
 * 「无零整数」是十进制表示中 不含任何 0 的正整数。
给你一个整数 n，请你返回一个 由两个整数组成的列表 [A, B]，满足：
A 和 B 都是无零整数
A + B = n
题目数据保证至少有一个有效的解决方案。
如果存在多个有效解决方案，你可以返回其中任意一个。
示例 1：
输入：n = 2
输出：[1,1]
解释：A = 1, B = 1. A + B = n 并且 A 和 B 的十进制表示形式都不包含任何 0 。
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    let result =[0,0];
    for (let i = 1; i < n; i++) {
        result[0] = i;
        if (notContainsZero(i) && notContainsZero(n - i)) {
            result[1] = n - i;
            break;
        }
    }
    return result;
};
var notContainsZero = function(num) {
    return  (num+'').indexOf('0')===-1
}