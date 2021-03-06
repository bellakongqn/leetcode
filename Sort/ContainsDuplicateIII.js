/**
 * 给定一个整数数组，判断数组中是否有两个不同的索引 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值最大为 t，
 * 并且 i 和 j 之间的差的绝对值最大为 ķ。
示例 1:
输入: nums = [1,2,3,1], k = 3, t = 0
输出: true
示例 2:
输入: nums = [1,0,1,1], k = 1, t = 2
输出: true
示例 3:
输入: nums = [1,5,9,1,5,9], k = 2, t = 3
输出: false
解析：最大！！！！！
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    // 循环存储
    for(var i =0;i<nums.length;i++){
        for(var j=i+1;j<=Math.min(i+k,nums.length-1);j++){
            if(Math.abs(nums[i]-nums[j])<=t){
                return true
            }
        }
    }
    return false
};