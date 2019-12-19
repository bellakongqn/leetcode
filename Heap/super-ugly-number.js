/**
 * 编写一段程序来查找第 n 个超级丑数。
超级丑数是指其所有质因数都是长度为 k 的质数列表 primes 中的正整数。
示例:
输入: n = 12, primes = [2,7,13,19]
输出: 32 
解释: 给定长度为 4 的质数列表 primes = [2,7,13,19]，前 12 个超级丑数序列为：[1,2,4,7,8,13,14,16,19,26,28,32] 。
 */
var nthSuperUglyNumber = function(n, primes) {
    let dp = [1]
    const counts = Array(primes.length).fill(0)
    n--
    while (n--) {
        const tmp = counts.map((count, i) => dp[count] * primes[i])
        const min = Math.min.apply(null, tmp)
        dp.push(min)
        primes.forEach((prime, i) => {
            if (min % prime === 0) counts[i]++
        })
    }
     return dp[dp.length - 1]

};