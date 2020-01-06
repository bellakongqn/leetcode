/**
 * 有 N 个花园，按从 1 到 N 标记。在每个花园中，你打算种下四种花之一。
paths[i] = [x, y] 描述了花园 x 到花园 y 的双向路径。
另外，没有花园有 3 条以上的路径可以进入或者离开。
你需要为每个花园选择一种花，使得通过路径相连的任何两个花园中的花的种类互不相同。
以数组形式返回选择的方案作为答案 answer，
其中 answer[i] 为在第 (i+1) 个花园中种植的花的种类。花的种类用  1, 2, 3, 4 表示。保证存在答案。
示例 1：
输入：N = 3, paths = [[1,2],[2,3],[3,1]]
输出：[1,2,3]
 */
/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(N, paths) {
    const arr = new Array(N); 
    for (let i = 0; i < arr.length; i++) {
        arr[i] = [];
    }
    for (let i = 0; i < paths.length; i++) {
        if (paths[i][0] > paths[i][1]) {
            arr[paths[i][0] - 1].push(paths[i][1] - 1);
        } else {
            arr[paths[i][1] - 1].push(paths[i][0] - 1)
        }
    }

    const res = new Array(N);
    res[0] = 1; // 初始化第一朵花

    for (let i = 1; i < N; i++) {
        res[i] = 1;

        let idx = 0; // 索引，帮助遍历arr[i]数组

        while (idx < arr[i].length) {
            if (res[arr[i][idx]] === res[i]) {
                res[i]++;
                idx = 0;

                if (res[i] > 4) {
                    res[i] = 1;
                }
            } else {
                idx++;
            }
        }
    }

    return res;
};