/**
 * 5143. 解压缩编码列表
 * 给你一个以行程长度编码压缩的整数列表 nums 。
考虑每相邻两个元素 [a, b] = [nums[2*i], nums[2*i+1]] 
（其中 i >= 0 ），每一对都表示解压后有 a 个值为 b 的元素。
请你返回解压后的列表。
示例：
输入：nums = [1,2,3,4]
输出：[2,4,4,4]。
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    // 计算数组长度
    let len = 0;
    for(let i=0;i<nums.length;i++) {
			len+=nums[i];
			i++;
	}
    // 填充
    let result = Array(len)
    let count = 0;
    for(let i=0;i<nums.length;i++) {
        for(let j=0;j<nums[i];j++) {
            result[count++] = nums[i+1];
        }
        i++;
    }
		
	return result;
};