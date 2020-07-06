/*一个机器人位于一个 m x n 网格的左上角,机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角.
现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
网格中的障碍物和空位置分别用 1 和 0 来表示。
说明：m 和 n 的值均不超过 100。
输入:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
输出: 2
解释:
3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右
 */ 
/**
 * @param {number[][]} nums
 * @return {number}
 */
var uniquePathsWithObstacles = function(nums) {
    let m=nums.length,n=nums[0].length;
    // 无法出发|无法到达|没有长度
    if(nums[0][0]===1 || nums[m-1][n-1]===1 || !nums.length) return 0;
    for(let i =0 ;i<m;i++){
        for(let j=0;j<n;j++){
            // 有障碍物 到达该点路径为0
            if(nums[i][j]===1){
                nums[i][j]=0;
            }else if(i==0 && j==0){
                // 初始点 到达该点路径为1
                nums[i][j] = 1
            }else {
                let up=0;
                let left=0;
                if(i>0) up=nums[i-1][j];
                if(j>0) left=nums[i][j-1];
                // 其余点 nums[i][j] = nums[i-1][j] + nums[i][j-1]
                nums[i][j]=up+left;
            }
        }
    }
    return nums[m-1][n-1];
};
