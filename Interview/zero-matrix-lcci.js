/*
面试题 01.08. 零矩阵
编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。
示例 1：
输入：
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出：
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
*/ 
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const xPosition = []
    const yPosition = []
    for(let i = 0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j] === 0){
                xPosition.push(i)
                yPosition.push(j)
            }
        }
    }

    for(let i = 0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(xPosition.indexOf(i)!==-1 || yPosition.indexOf(j)!==-1){
                matrix[i][j] = 0
            }
        }
    }
};