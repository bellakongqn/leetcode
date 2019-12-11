/**
 * 给你个整数数组 arr，其中每个元素都 不相同。
请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。
示例 1：
输入：arr = [4,2,1,3]
输出：[[1,2],[2,3],[3,4]]
示例 2：
输入：arr = [1,3,6,10,15]
输出：[[1,3]]
示例 3：
输入：arr = [3,8,-10,23,19,-4,-14,27]
输出：[[-14,-10],[19,23],[23,27]]
 */
var minimumAbsDifference = function(arr) {
    arr.sort(function(a, b) {return a - b;});
    var min = Math.abs(arr[0] - arr[1]);
    var ansArr = [];
    arr.reduce(function (acc, cur) {
        if (Math.abs(cur - acc) < min) {
            min = Math.abs(cur -acc);
            ansArr = [[acc,cur]];
        } else if (Math.abs(cur - acc) == min) {
            ansArr.push([acc,cur]);
        }
        return cur;
     });
     return ansArr;
 };