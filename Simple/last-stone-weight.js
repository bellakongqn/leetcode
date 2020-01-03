/**
 * 1046. 最后一块石头的重量
 * 有一堆石头，每块石头的重量都是正整数。
每一回合，从中选出两块最重的石头，然后将它们一起粉碎。
假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
如果 x == y，那么两块石头都会被完全粉碎；
如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0
 */
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let len = stones.length;
    if(len == 0)
        return 0;
    if(len == 1)
        return stones[0];
    stones.sort((a,b)=>{return a-b});
    if(len == 2){
        return stones[1]-stones[0];
    }
    // 排序后 最后两个最大块 然后删减后 排序 再计算最后两个
    while(stones[len-2]!=0){
        stones[len-1] = stones[len-1] - stones[len-2];
        stones[len-2] = 0;
        stones.sort((a,b)=>{return a-b});
    }
    return stones[len-1];
};