/**
 * 1287. 有序数组中出现次数超过25%的元素
 * 给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。
请你找到并返回这个整数
示例：
输入：arr = [1,2,2,6,6,6,6,7,10]
输出：6
 */

var findSpecialInteger = function(arr) {
    let percent = arr.length/4
    for(let i=0;i<arr.length;i++){
        if(arr.filter(item=>(item===arr[i])).length>percent)
           return arr[i]
    }
};


//  有序有序有序！！！！！！！
var findSpecialInteger = function(arr) {
    let temp=parseInt(arr.length/4);
    for(let i=0;i<arr.length;i++){
        if(arr[i]==arr[i+temp])return arr[i];
    }
};