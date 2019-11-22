/**
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序
 * 使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
注意:
不能使用代码库中的排序函数来解决这道题。
示例:
输入: [2,0,2,1,1,0]
输出: [0,0,1,1,2,2]
简单方法：
一个直观的解决方案是使用计数排序的两趟扫描算法。
首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组
*/
var sortColors = function(nums) {
    var a = 0,b=0,c=0
     for(var i = 0; i < nums.length; i++){
            if(nums[i] == 0)
                a++;
            else if(nums[i] == 1)
                b++;
            else
                c++;
        }
    for(var i = 0; i < a; i++){
            nums[i] = 0;
        }
        for(var i = a; i < (a+b); i++){
            nums[i] = 1;
        }
        for(var i = (a+b); i < (a+b+c); i++){
            nums[i] = 2;
        }
};
// 算法2:荷兰国旗问题
/**
 * 
 * 我们用三个指针来分别追踪0的最右边界，2的最左边界和当前考虑的元素。
 * 当前为0 放在左边；当前为2放在右边
 * 

 */

var sortColors = function(nums) {
    let left = 0, right = nums.length - 1,i = 0;
    let temp;
    while(i <= right){
        if(nums[i] === 0){
            temp = nums[left];
            nums[left++] = nums[i];
            nums[i++] = temp;
        }else if(nums[i] === 2){
            temp = nums[i];
            nums[i]=nums[right];
            nums[right--]=temp;
        }
        else i++;
    }
};