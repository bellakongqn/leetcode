/*
输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
示例 1：
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]

示例 2：
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
/*
/**
 * @param {number[][]} matrix
 * @return {number[]}
*/
var spiralOrder = function(matrix) {
    if(!matrix.length){
        return [];
    }
    let lef=0, rig=matrix[0].length-1, top=0, down=matrix.length-1;
    let i=0, j=0;
    let arr = [];
    let driection = "rig";
    while(lef<=rig && top<=down){
        switch(driection){
            case "rig":
                for(let i=lef; i<=rig; i++){arr.push(matrix[top][i])}
                top++;
                driection = "down";
                break;
            case "down":
                for(let j=top; j<=down; j++){arr.push(matrix[j][rig])}
                driection = "lef";
                rig--;
                break;
            case "lef":
                for(let i=rig; i>=lef; i--){arr.push(matrix[down][i])}
                driection = "top";
                down--;
            case "top":
                for(let j=down; j>=top; j--){arr.push(matrix[j][lef])}
                driection = "rig";
                lef++;
        }
    }
    return arr
};