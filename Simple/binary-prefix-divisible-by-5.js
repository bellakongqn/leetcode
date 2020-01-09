/**
 * 1018. 可被 5 整除的二进制前缀
 * 给定由若干 0 和 1 组成的数组 A。
 * 我们定义 N_i：从 A[0] 到 A[i] 的第 i 个子数组被解释为一个二进制数（从最高有效位到最低有效位）。
返回布尔值列表 answer，只有当 N_i 可以被 5 整除时，答案 answer[i] 为 true，否则为 false。
示例 1：
输入：[0,1,1]
输出：[true,false,false]
解释：
输入数字为 0, 01, 011；也就是十进制中的 0, 1, 3 。只有第一个数可以被 5 整除，因此 answer[0] 为真。
* 说明：
*  1、1110 = 111 * 2， 11100 = 1110 * 2
*  2、当前数字的尾数是0或者5就是满足的
*  3、tmp = tmp*2 + A[i] 计算当前尾数
*  4、为了计算简单，我们每次只计算当前数的尾数就好了 tmp %= 10
 */
/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    let temp = 0
    let arr = []
    for (let i = 0; i < A.length; i++) {
        temp = (temp * 2 + A[i]) % 10
        arr[i] = temp % 5 == 0
    }
    return arr
};