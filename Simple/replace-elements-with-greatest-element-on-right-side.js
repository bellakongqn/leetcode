/**
 * 1299. 将每个元素替换为右侧最大元素
 * 给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。
完成所有替换操作后，请你返回这个数组。
示例：
输入：arr = [17,18,5,4,6,1]
输出：[18,6,6,6,1,-1]
*/

var findMax = function(array){
    let max = array[0]
    if(array.length===0){
        return -1
    }else{
        for(let i=1;i<array.length;i++){
            max = array[i]>max?array[i]:max
        }
        return max
    }
}

var replaceElements = function(arr) {
    for(let i =0;i<arr.length;i++){
        arr[i]=findMax(arr.slice(i+1))
    }
    return arr
};