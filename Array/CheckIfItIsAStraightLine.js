/**
 * 在一个 XY 坐标系中有一些点，我们用数组 coordinates 来分别记录它们的坐标，其中 coordinates[i] = [x, y] 表示横坐标为 x、
 * 纵坐标为 y 的点。
  请你来判断，这些点是否在该坐标系中属于同一条直线上，是则返回 true，否则请返回 false。
    输入：coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
    输出：true
    输入：coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
    输出：false
    解析：斜率一样 ;
 */
var checkStraightLine = function(coordinates) {
    for (let i = 1; i < coordinates.length-1; i++) {
        let y1 = coordinates[i][1] - coordinates[0][1]
        let x1 = coordinates[i][0] - coordinates[0][0]
        let y2 = coordinates[i+1][1] - coordinates[i][1]
        let x2 = coordinates[i+1][0] - coordinates[i][0]
        // 斜率一样 x1/y1===x2/y2 转换 y1*x2 !== x1*y2
        if (y1*x2 !== x1*y2) {
            return false
        }
    }
    return true
};
