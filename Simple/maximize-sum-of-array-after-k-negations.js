/**
 * 1005. K 次取反后最大化的数组和
 * 给定一个整数数组 A，我们只能用以下方法修改该数组：
 * 我们选择某个个索引 i 并将 A[i] 替换为 -A[i]，
 * 然后总共重复这个过程 K 次。（我们可以多次选择同一个索引 i。
 * 以这种方式修改数组后，返回数组可能的最大和。
示例 1：
输入：A = [4,2,3], K = 1
输出：5
解释：选择索引 (1,) ，然后 A 变为 [4,-2,3]。

负数的个数大于K，则只需将数组前K个负数转为正数，然后计算数组总和
负数的个数小于K且K减去负数个数后为偶数，
则需要将所有负数转为正数，然后计算数组总和，因为剩下的偶数次反转可以不改变值
负数的个数小于K且K减去负数个数后为奇数，
则需要将所有负数转为正数，
然后重新将数组按从小到大排序，并将最小值反转，然后计算数组总和

 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
    A.sort((a, b) => a - b);
    let sum = 0;
    let index = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] < 0) {
            if (i < K) {
                A[i] = -A[i];
            }
            index++;
        } else {
            break;
        }
    }
    if (index >= K || (K - index) %2=== 0) {
        return A.reduce(function(prev, cur) {
            return prev + cur;
        })
    } else {
        A.sort((a, b) => a - b);
        for (let i = 0; i < A.length; i++) {
            if (i === 0) {
                sum += -A[i];
            } else {
                sum += A[i];
            }
        }
        return sum;
    }
};