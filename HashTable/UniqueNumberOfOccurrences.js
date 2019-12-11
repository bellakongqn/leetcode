/**
 * 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
示例 1：
输入：arr = [1,2,2,1,1,3]
输出：true
解释：在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。没有两个数的出现次数相同。
*/

// map 结构
var uniqueOccurrences = function(arr) {
    var map =new Map()
    var res  = []
    for (let i = 0; i < arr.length; i++) {
        //利用Map的数据结构统计次数
        if (!map.has(arr[i])) {
            map.set(arr[i], 1)
        } else {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }
    for (let value of map.values()) {
        res.push(value)
    }
    return new Set(res).size ===res.length
};


// {}
var uniqueOccurrences = function(arr) {
    if(arr.length === 0) return true;
    const result = arr.reduce((acc, cur) => {
        if (acc.hasOwnProperty(cur)) {
            acc[cur]++;
        } else acc[cur] = 1;
        return acc;
    }, {})
    const valueList = Object.values(result);
    return valueList.length === new Set(valueList).size;
};