/*
你的面前有一堵矩形的、由多行砖块组成的砖墙。 这些砖块高度相同但是宽度不同。
你现在要画一条自顶向下的、穿过最少砖块的垂线。
砖墙由行的列表表示。 每一行都是一个代表从左至右每块砖的宽度的整数列表。
如果你画的线只是从砖块的边缘经过，就不算穿过这块砖。你需要找出怎样画才能使这条线穿过的砖块数量最少，
并且返回穿过的砖块数量。
你不能沿着墙的两个垂直边缘之一画线，这样显然是没有穿过一块砖的
输入: [[1,2,2,1],
        [3,1,2],
        [1,3,2],
        [2,4],
        [3,1,2],
        [1,3,1,1]]

输出: 2
https://leetcode-cn.com/problems/brick-wall/
*/ 
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    let res = {} // new Map = > {}
    let max = 0 // 参考后优化新增
    // 长度
    const wallHeigth = wall.length

    for(let i =0 ;i<wallHeigth;i++){
        // 每行初始化每行砖块累计长度
        let data = 0
        for(let j=0;j<wall[i].length-1;j++){
            // 每行砖块累计长度为当前长度+前面砖长度和
            data += wall[i][j]
            if(res[data]){
                // 如果存在同样长度 对应的缝隙+1
                res[data]++
            }else{
                // 不存在同样长度 设置初始为1
                res[data] = 1
            }
            // 参考后优化新增代码  每次 取出最大值 无需进行后面转换
            max = Math.max(max, res[data])
        }
    }

    // Array.from(res).sort((a,b)=>b[1]-a[1])[0] 特殊情况 [[1],[1],[1]] res为空map =>[] undenfined
    // 其余情况为数组长度减去空隙
    // return Array.from(res).sort((a,b)=>b[1]-a[1])[0] ? wallHeigth - Array.from(res).sort((a,b)=>b[1]-a[1])[0][1] : wallHeigth
    return wallHeigth - max
};