/**
 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
 对每个孩子 i ，都有一个胃口值 gi ，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j ，
 都有一个尺寸 sj 。如果 sj >= gi ，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。
 你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

 解析:
 如果某个饼干不能满足该孩子，一定不能满足需求因子更大的孩子；
 如果能用更小的饼干满足该孩子，则没必要用更大的；
 需求因子小的孩子更容易被满足，故应从小到大开始分配。
 排序：
 对饼干大小和孩子的需求因子从小到大排序；
 二路遍历，满足条件即比较下一个，直至一路完毕。
**/
var findContentChildren = function(g, s) {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0, j = 0; i < g.length && j < s.length; j++) {
        if (s[j] >= g[i]) {
            count++;
            i++;
        }
    }
    return count;
};