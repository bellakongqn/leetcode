/**
 * 给出一个区间的集合，请合并所有重叠的区间。
示例 1:
输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2:
输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。

解析：首先将数组根据第一个数字进行从小到大的排序
     然后判断前一个数组的尾巴元素与当前数组的头元素大小关系
     如果尾巴<头，再判断尾巴是不是大于尾巴
        如果小于尾巴，则将当前尾巴赋给前尾巴
        
*/

function merge(intervals) {
    if(intervals.length == 0){
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    // 最外的res.push,是为了最后一个元素
    res.push(intervals.reduce((acc, cur) => {
        if(acc[1] >= cur[0]){
            if(acc[1] < cur[1]){
                acc[1] = cur[1];
            }
            return acc;
        }else{
            res.push(acc);
            return cur;
        }
    }));
    return res;
};