/*
给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。
每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。
每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：
如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
如果死细胞周围正好有三个活细胞，则该位置死细胞复活；

根据当前状态，写一个函数来计算面板上所有细胞的下一个（一次更新后的）状态。
 */ 
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const neighbors = [0, 1, -1]
    const rows =  board.length
    const cols = board[0].length
    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            // 对于每一个细胞统计其八个相邻位置里的活细胞数量
            let liveNeighbors  = 0
            for(let i=0; i< 3; i++){
                for(let j=0 ;j<3; j++){
                    if(!(neighbors[i]==0&& neighbors[j]==0)){
                        let r =  row + neighbors[i]
                        let c =  col + neighbors[j]
                        // 查看相邻的细胞是否是活细胞
                        if ((r < rows && r >= 0) && (c < cols && c >= 0) && (Math.abs(board[r][c]) == 1)){
                            liveNeighbors += 1;
                        }
                    }
                }
            }

            // 规则 1 或规则 3 
            if ((board[row][col] == 1) && (liveNeighbors < 2 || liveNeighbors > 3)) {
                // -1 代表这个细胞过去是活的现在死了
                board[row][col] = -1;
            }
            // 规则 4
            if (board[row][col] == 0 && liveNeighbors == 3) {
                // 2 代表这个细胞过去是死的现在活了
                board[row][col] = 2;
            }
        }
    }

    // 遍历 board 得到一次更新后的状态
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] > 0) {
                board[row][col] = 1;
            } else {
                board[row][col] = 0;
            }
        }
    }
};
