/**
 * 
 * 班上有 N 名学生。其中有些人是朋友，有些则不是。他们的友谊具有是传递性。
 * 如果已知 A 是 B 的朋友，B 是 C 的朋友，那么我们可以认为 A 也是 C 的朋友。所谓的朋友圈，是指所有朋友的集合
 * 给定一个 N * N 的矩阵 M，表示班级中学生之间的朋友关系。如果M[i][j] = 1，表示已知第 i 个和 j 个学生互为朋友关系，
 * 否则为不知道。你必须输出所有学生中的已知的朋友圈总数。
示例 1:
输入: 
[[1,1,0],
 [1,1,0],
 [0,0,1]]
输出: 2 
说明：已知学生0和学生1互为朋友，他们在一个朋友圈。
第2个学生自己在一个朋友圈。所以返回2。
示例 2:
输入: 
[[1,1,0],
 [1,1,1],
 [0,1,1]]
输出: 1
说明：已知学生0和学生1互为朋友，学生1和学生2互为朋友，所以学生0和学生2也是朋友，所以他们三个在一个朋友圈，返回1。
*/

var findCircleNum = function(M) {
    let n = M.length;
    if(n == 0){
        return 0;
    }
    let count = n;

    let parent = new Array(n);

    // parent:[0,1,2]
    for(let i = 0;i < n;i++){
        parent[i] = i;
    }
    //[[1,1,0],
    // [1,1,0],
    // [0,0,1]]
    // 
    for(let i = 0;i < n;i++){
        for(let j = 0; j < n;j++){
            if(M[i][j] == 1){
                union(i,j);
            }
        }
    }
    let find = (p) => {
        while( p != parent[p]){
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    }
    //          (0,1)
    let union = (p,q) => {
        let rootP = find(p);
        //  rootP = 0
        let rootQ = find(q);
        //  rootQ = 1
        if(rootP == rootQ){
            return;
        }
        // parent[0] = 1 => parent :[1,1,2]
        parent[rootP] = rootQ;
        count--; 
        // => count=2
    }
    return count;
};





var findCircleNum = function(M) {
    var count = 0
    var visited = []
    for (var i = 0;i < M.length;i++) {
        if (visited[i] == undefined) {
            dfs(M, visited, i)
            count++
        }
    }
    return count
};

var dfs = function(M, visited, i) {
    for (var j = 0;j < M.length;j++) {
        if (M[i][j] == 1 && visited[j] == undefined) {
            visited[j] = true
            dfs(M, visited, j)
        }
    }
}
