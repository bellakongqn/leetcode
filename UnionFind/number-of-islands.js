/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // 数量 如果数组为null 则岛屿数量为0
    let m = grid.length;
    if(m == 0){
        return 0;
    }
    // 元素的长度
    let n = grid[0].length;
    // 岛屿数量
    let count = 0;
    // 并查集parent
    let parent = [];

    let find = (p) => {
        while(p != parent[p]){
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    }
    let union = (p,q) => {
        let rootP = find(p);
        let rootQ = find(q);
        if(rootP == rootQ){
            return;
        }
        parent[rootP] = rootQ;
        count--;
    }

    // 循环数组 设置并查集根元素
    for(let i = 0;i < m;i++){
        for(let j = 0;j < n;j++){
            if(grid[i][j] == 1){
                // 每一个元素的parent
                parent[i * n + j] = i * n + j;
                count++;
            }
        }
    }

    // 查找合并
    for(var i = 0;i<m;i++){
        for(var j = 0;j<n;j++){
            if(grid[i][j] == 1){
                // 边界值
                i-1>=0 && grid[i-1][j] == 1 && union(i*n + j,(i-1)*n + j);
                j-1>=0 && grid[i][j-1] == 1 && union(i*n + j,i*n + j-1);
                i+1<m && grid[i+1][j] == 1 && union(i*n + j,(i+1)*n + j);
                j+1<n && grid[i][j+1] == 1 && union(i*n + j,i*n + j+1);
            }
        }
    }
    return count;
};





// dfs
var numIslands = function(grid) {
    let num = 0
    grid.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell === '1') {
          num++
          dfs(grid, i, j)
        }
      })
    })
    return num
  }
  
  function dfs(grid, i, j) {
    let r = grid.length
    let c = grid[0].length
    if (i < 0 || j < 0 || i >= r || j >= c || grid[i][j] === '0') {
      return
    }
    grid[i][j] = '0'
    dfs(grid, i - 1, j)
    dfs(grid, i, j + 1)
    dfs(grid, i + 1, j)
    dfs(grid, i, j - 1)
  }