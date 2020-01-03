/**
 * 1051. 高度检查器
 * 学校在拍年度纪念照时，一般要求学生按照 非递减 的高度顺序排列。
请你返回至少有多少个学生没有站在正确位置数量。该人数指的是：能让所有学生以 非递减 高度排列的必要移动人数。
示例：
输入：[1,1,4,2,1,3]
输出：3
解释：
高度为 4、3 和最后一个 1 的学生，没有站在正确的位置

非递减 =》递增或者相等
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let init = [...heights]
    let list = heights.sort((n,m)=>n-m)
    let nums = 0
    list.forEach((item,index)=>{
      if(item != init[index]){
        nums++
      }
    })
    return nums
};