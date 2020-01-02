/**
 * 1304. 和为零的N个唯一整数
 * 给你一个整数 n，请你返回 任意 一个由 n 个 各不相同 的整数组成的数组，并且这 n 个数相加和为 0 。
示例 1：
输入：n = 5
输出：[-7,-1,1,3,4]
解释：这些数组也是正确的 [-5,-1,1,2,3]，[-3,-1,2,-2,4]。
 */
var sumZero = function(n) {
    var res =[]
    if(n%2===0){
        n=n/2
        for(var i=1;i<=n;i++){
            res.push(i,-i)
        }
    }else{
        n=parseInt(n/2)
        for(var i=1;i<=n;i++){
            res.push(i,-i)
        }
        res.push(0)
    }
    return res
    
};