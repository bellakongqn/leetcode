/** 
1.爬楼梯
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

分析:
到达第三阶的方式有两种：从第一阶直接到第三阶；从第二阶到第三阶段
即：dq[3]=dp[2]+dp[1]
依次类推到达第i阶段：dp[i] = dp[i-1]+dp[i-2] 只跟第i-1阶和第i-2阶有关。
**/
var climbStairs = function(n) {
    if(n===1) return 1;
    if(n===2) return 2;
    let dp =[];
    dp[0] =1;
    dp[1] =2;
    for(let i=2;i<n;i++){
        dp[i] = dp[i-1]+dp[i-2];
    }
    return dp[n-1];
};