/**
 * 给你两个数组，arr1 和 arr2，
arr2 中的元素各不相同
arr2 中的每个元素都出现在 arr1 中
对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。
未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。
示例：
输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19]
解析：
根据元素出现的下标进行排序
 */
var relativeSortArray = function(arr1, arr2) {
    return arr1.sort((a, b) => {
        let ia = arr2.indexOf(a);
        let ib = arr2.indexOf(b);
        if(ia == -1 && ib == -1) {
            return a - b;
        } else if (ia == -1) {
            return 1;
        } else if (ib == -1) {
            return -1;
        } else {
            return ia-ib;
        }
    });
};