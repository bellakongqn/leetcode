/**
 * 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。
示例 1:
输入: [10,2]
输出: 210
示例 2:
输入: [3,30,34,5,9]
输出: 9534330
说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 */
var largestNumber = function(nums) {
    nums.sort(function(a, b) {
     return (b + '' + a) - (a + '' + b);
    });
 //    判断全0的特殊情况[0,0]
     while (nums.length > 1 && nums[0] === 0) {
         nums.shift();
     }
     return nums.join('');;
 };