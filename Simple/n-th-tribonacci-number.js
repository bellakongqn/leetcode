/**
 * 1137. 第 N 个泰波那契数
 * 泰波那契序列 Tn 定义如下： 
T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
给你整数 n，请返回第 n 个泰波那契数 Tn 的值。
示例 1：
输入：n = 4
输出：4
解释：
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
 */
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n == 0) return 0;
    if(n == 1 || n ==2 ) return 1;
    let arr = new Array(n);
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 1;
    for(let i=3;i<=n;i++) {
        arr[i] = arr[i-1] +  arr[i-2] +  arr[i-3];
    }
    return arr[n]
};