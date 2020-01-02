/**
 * 1184. 公交站间的距离
 * 环形公交路线上有 n 个站，按次序从 0 到 n - 1 进行编号。我们已知每一对相邻公交站之间的距离，
 * distance[i] 表示编号为 i 的车站和编号为 (i + 1) % n 的车站之间的距离。
 * 环线上的公交车都可以按顺时针和逆时针的方向行驶。
 * 返回乘客从出发点 start 到目的地 destination 之间的最短距离。
 * 
 * 顺时针 逆时针距离求较小
 */

 /**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    // 总路程
    let sum = distance.reduce((x,y) => x+y);
    if(start > destination) {
        [start,destination]=[destination,start]
    }
    let x = distance.slice(start,destination).reduce((x,y) => x+y);
    return Math.min(x,sum - x)
};