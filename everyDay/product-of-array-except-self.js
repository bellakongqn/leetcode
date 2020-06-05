/*
给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
示例:
输入: [1,2,3,4]
输出: [24,12,8,6]
*/ 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const number  =  nums.length
    const L = new Array(number)
    const R = new Array(number)
    const result =  new Array(number)

    L[0] = 1
    for(let i = 1;i< number ; i++){
         L[i] = nums[i - 1] * L[i - 1];
    }

    R[number-1] = 1
    for(let i = number-2;i >=0 ;i--){
        R[i]= nums[i+1] *  R[i+1]
    }

    for(let i = 0; i<number;i++){
        result[i] =  L[i] * R[i]
    }

    return result
};
