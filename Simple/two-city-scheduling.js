/**
 * 1029. 两地调度
 * 公司计划面试 2N 人。
 * 第 i 人飞往 A 市的费用为 costs[i][0]，飞往 B 市的费用为 costs[i][1]。
返回将每个人都飞到某座城市的最低费用，要求每个城市都有 N 人抵达。
示例：
输入：[[10,20],[30,200],[400,50],[30,20]]
输出：110
解释：
第一个人去 A 市，费用为 10。
第二个人去 A 市，费用为 30。
第三个人去 B 市，费用为 50。
第四个人去 B 市，费用为 20。
最低总费用为 10 + 30 + 50 + 20 = 110，每个城市都有一半的人在面试

假设A团体去A市，B团体去B市，此时费用为a。
假设上述A团体去B市，B团体去A市，此时费用为b。
求a的最小值，相当于求b的最大值，又相当于要使b-a的值是所有组合中最大的。
b-a的值等于A团体所有人的cost[1]-cost[0]的和，加上B团体所有人的cost[0]-cost[1]的和。
b-a的值又等于A团体所有人的cost[1]-cost[0]的和，减去B团体所有人的cost[1]-cost[0]的和。
那么只要A团体所有人的cost[1]-cost[0]的和最大，B团体所有人的cost[1]-cost[0]的和最小，就可以使得b-a最大。
只要对所有人的cost[1]-cost[0]排个序，前n个人去A市，后n个人去B市，即可使得b-a最大，亦即a最小。
 */

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]))
    let sum = 0;
    // 前一半取去A市，后一半取去B市，
    // 前一半是去A市最合适，后一半市去B市最合适。
    for (let i = 0; i < costs.length; i++) {
    	if (i < costs.length / 2) {
    		sum += costs[i][0]
    	} else {
    		sum += costs[i][1]
    	}
    }
    return sum
};