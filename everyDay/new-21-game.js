/*
爱丽丝参与一个大致基于纸牌游戏 “21点” 规则的游戏，描述如下：
爱丽丝以 0 分开始，并在她的得分少于 K 分时抽取数字。 抽取时，她从 [1, W] 的范围中随机获得一个整数作为分数进行累计，其中 W 是整数。 每次抽取都是独立的，其结果具有相同的概率。
当爱丽丝获得不少于 K 分时，她就停止抽取数字。 爱丽丝的分数不超过 N 的概率是多少？
示例 1：
输入：N = 10, K = 1, W = 10
输出：1.00000
说明：爱丽丝得到一张卡，然后停止。

示例 2：
输入：N = 6, K = 1, W = 10
输出：0.60000
说明：爱丽丝得到一张卡，然后停止。
在 W = 10 的 6 种可能下，她的得分不超过 N = 6 分。

示例 3：
输入：N = 21, K = 17, W = 10
输出：0.73278
*/
/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
var new21Game = function(N, K, W) {
    if (K === 0 || N >= K + W) {
    return 1;
}
const dp = Array(N + 1).fill(0);
let res = 0,
    sum = 0;
// 计算总和不大于 N 的概率
for (let i = 1; i <= N; i++) {
    if (i <= W) {
    // 选择 1 到 i - 1 再选择 i - 1 到 1 或者直接选择 W
    // dp[i] = dp[1] / W + dp[2] / W + ... + dp[min(k - 1, i - 1)] / W + 1 / W
        dp[i] = sum / W + 1 / W;
    } else {
    // 选择 x - 1 到 x - W 再选择 1 到 W
    // dp[i - W] / W + dp[i - W + 1] / W + ... + dp[min(k - 1, i - 1)] / W
        dp[i] = sum / W;
    }
    // i < K 时为满足得分不小于 K 的前提
    if (i < K) {
        sum += dp[i];
    }
    // i > W 则之前的 则 i - W + 加上 [1, W] 中的任何数字都不满足等于 N 的条件
    if (i > W) {
        sum -= dp[i - W];
    }
    // 累加满足 K <= i <= N 的概率和
    if (i >= K) {
        res += dp[i];
    }
}

    return res;
};