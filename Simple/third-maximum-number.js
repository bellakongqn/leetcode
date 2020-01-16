/**
 * 414. 第三大的数
 * 给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。
 * 要求算法时间复杂度必须是O(n)。
示例 1:
输入: [3, 2, 1]
输出: 1
解释: 第三大的数是 1.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let numsq = Array.from(new Set(nums))
    numsq.sort((a,b)=>{
        return b-a
    })
    return numsq.length>=3?
       numsq[2]:
       (numsq.length===2?numsq[0]:
       numsq.length===1?numsq[0]:null)
};