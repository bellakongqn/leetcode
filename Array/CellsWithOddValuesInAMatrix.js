/**
 * 给你一个 n 行 m 列的矩阵，最开始的时候，每个单元格中的值都是 0。
另有一个索引数组 indices，indices[i] = [ri, ci] 中的 ri 和 ci 分别表示指定的行和列（从 0 开始编号）。
你需要将每对 [ri, ci] 指定的行和列上的所有单元格的值加 1。
请你在执行完所有 indices 指定的增量操作后，返回矩阵中 「奇数值单元格」 的数目。
输入：n = 2, m = 3, indices = [[0,1],[1,1]]
输出：6
解释：最开始的矩阵是 [[0,0,0],[0,0,0]]。
第一次增量操作后得到 [[1,2,1],[0,1,0]]。
最后的矩阵是 [[1,3,1],[1,3,1]]，里面有 6 个奇数。
 */

var oddCells = function(n, m, indices) {
    // 加油！！！！！！！！！！！
    // 初始化数组
    var arr = new Array(n);
    for(var len = 0;len< n; len++){
        arr[len] = new Array(m).fill(0)
    }
    // 开始赋值
    var res = 0;
    for (var i = 0; i < indices.length; i++) {
        // 行增加
        arr[indices[i][0]].forEach(function (currentValue, index) {
            arr[indices[i][0]][index] += 1;
        });
        // 列增加
        arr.forEach(function (currentValue, index) {
            arr[index][indices[i][1]] += 1;
        })
    }
    //判断奇数偶数
    for (var j = 0; j < arr.length; j++) {
        arr[j].forEach(function (currentValue) {
            if (currentValue % 2 !== 0) {
                res += 1
            }
        })
    }
    return res;

};