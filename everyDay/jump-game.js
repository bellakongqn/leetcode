/*
给定一个非负整数数组，你最初位于数组的第一个位置。
数组中的每个元素代表你在该位置可以跳跃的最大长度。
判断你是否能够到达最后一个位置。
示例 1:
输入: [2,3,1,1,4]
输出: true
解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
对于数组中的任意一个位置 yy，我们如何判断它是否可以到达？根据题目的描述，只要存在一个位置 xx，它本身可以到达，并且它跳跃的最大长度为 x + nums[x] 。
x+nums[x]，这个值大于等于 y即 x + nums[x] ≥y，那么位置 y 也可以到达。
*/ 
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxPosition = 0
    for(let i=0; i<nums.length; i++){
        if (maxPosition < i) return false;
        maxPosition = Math.max(nums[i] + i, maxPosition);
    }
    return maxPosition >= nums.length - 1
};
