/**
 * 给定两个数组，编写一个函数来计算它们的交集。
   示例 1:
    输入: nums1 = [1,2,2,1], nums2 = [2,2]
    输出: [2]
   示例 2:
    输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    输出: [9,4]
 * 
 解析：
 includes()函数，交集去重可以采用Set
*/

var intersection = function(nums1, nums2) {
    var res = []
    nums1.forEach((item)=>{
        if(nums2.includes(item))
           if(!res.includes(item))
              res.push(item)
    })
    return res
};
