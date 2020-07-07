/*
判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。
数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
输入:
[
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]
*/ 
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = {}
    let cols = {}
    let boxs = {} 
    
    for(let i = 0; i < board.length; i++) {
        rows[i] = {}
        cols[i] = {}
        boxs[i] = {}
    }
    
    for(let i = 0; i < board.length; i++) {
        
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] !== '.') {
                let boxIndex = parseInt((i/3)) * 3 + parseInt(j/3);
                if(rows[i][board[i][j]] || cols[j][board[i][j]] || boxs[boxIndex][board[i][j]] ) {
                    return false
                } else {
                    rows[i][board[i][j]] = 1
                    cols[j][board[i][j]] = 1
                    boxs[boxIndex][board[i][j]] = 1
                }
            }
        }
    }
    return true
}
