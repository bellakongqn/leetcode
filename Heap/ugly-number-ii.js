/**
 * 编写一个程序，找出第 n 个丑数。
丑数就是只包含质因数 2, 3, 5 的正整数。
示例:
输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
说明:  1 是丑数。n 不超过1690。
 */
var nthUglyNumber = function(n) {
    let i2 = 0,
        i3 = 0,
        i5 = 0;
    
    let dp = [1];
    for (let i = 1; i < n; i++) {
        let min = Math.min(dp[i2] * 2, dp[i3] * 3, dp[i5] * 5);
        if (min === dp[i2] * 2) i2++;
        if (min === dp[i3] * 3) i3++;
        if (min === dp[i5] * 5) i5++;
        dp.push(min);
    }
    return dp[n-1];
};