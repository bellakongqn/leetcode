/**
 * 给你一个 n 行 m 列的二维网格 grid 和一个整数 k。你需要将 grid 迁移 k 次。
每次「迁移」操作将会引发下述活动：
位于 grid[i][j] 的元素将会移动到 grid[i][j + 1]。
位于 grid[i][m - 1] 的元素将会移动到 grid[i + 1][0]。
位于 grid[n - 1][m - 1] 的元素将会移动到 grid[0][0]。
请你返回 k 次迁移操作后最终得到的 二维网格。

输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
输出：[[9,1,2],[3,4,5],[6,7,8]]
 */

var shiftGrid = function(grid, k) {
    let x = grid.length - 1;
    let y = grid[0].length - 1;
    for(let i = 0; i < k; i++) {
        // 存储数组最后一个元素
        let last = grid[x][y];
        // 最后一行元素
        for(let j = x; j >= 1; j--) {
            // 删除最后一个
            grid[j].splice(y,1);
            // 
            grid[j].unshift(grid[j-1][y]);
        }
        grid[0].splice(y,1);
        grid[0].unshift(last);
    }
    return grid;
};




var shiftGrid = function(grid, k) {
    let old = [];
    // 复制老数组 变成一维数组
    for(let i = 0; i < grid.length; i++) {
        old.push(...grid[i]);
    }
    // old=[1,2,3,4,5,6,7,8,9]
    // k = 1
    k = k % old.length;
    if(k == 0) {
        return grid;
    }
    let pos = k;
    // let pos = 1;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            grid[i][j] = old[(i * grid[0].length + j - pos + old.length ) % old.length];
        }
    }
    return grid;
};