/**
 * 给你一个整数数组 nums，请你返回其中位数为 偶数 的数字的个数。
 */

var findNumbers = function(nums) {
    let sum = 0
    for(let i=0;i<nums.length;i++){
        nums[i]=nums[i].toString()
        nums[i].length%2===0?sum+=1:sum
    }
    return sum
};


// 精简
var findNumbers = function(nums) {
    return nums.filter(i=>(i+'').length%2 == 0).length
};
