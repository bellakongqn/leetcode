/**现在你总共有 n 门课需要选，记为 0 到 n-1。

在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们: [0,1]

给定课程总量以及它们的先决条件，判断是否可能完成所有课程的学习？

在有向图中选一个没有前驱的顶点
从图中删除该顶点和所有以它为尾的弧
重复上面的两步，直到全部顶点均已输出或图中不存在没有前驱的顶点为止
没有前驱的顶点的特征：入度为0

1、将当前不需要先决条件的课程（例如B）放入队列学习，
2、学习完K后需要将那些需要学习B作为先决条件去掉，在当前模型中表示为去掉弧B→A。
3、回到第一步
4、直到队列为空。

统计课程安排图中每个节点的入度，生成 入度表 indegrees。
借助一个队列 queue，将所有入度为 0的节点入队。
当 queue 非空时，依次将队首节点出队，在课程安排图中删除此节点 pre：
并不是真正从邻接表中删除此节点 pre，而是将此节点对应所有邻接节点 cur 的入度 -1−1，即 indegrees[cur] -= 1。
当入度 -1−1后邻接节点 cur 的入度为 0，说明 cur 所有的前驱节点已经被 “删除”，此时将 cur 入队。
在每次 pre 出队时，执行 numCourses--；
若整个课程安排图是有向无环图（即可以安排），则所有节点一定都入队并出队过，即完成拓扑排序。换个角度说，若课程安排图中存在环，一定有节点的入度始终不为 00。
因此，拓扑排序出队次数等于课程个数，返回 numCourses == 0 判断课程是否可以成功安排。
*/



// 2, [[1,0]]
var canFinish = function (numCourses, prerequisites) {
    let visited = new Array(numCourses).fill(0) // 课程状态；0：未学；1：已学
    //  visited  = [0,0]
    let indegree = new Array(numCourses).fill(0) // 顶点的入度
    //  indegree = [0,0]
    let topology = [] // 拓扑序列
    let prerqMap = {} // 先学课程

    for (let i = 0; i < prerequisites.length; i++) {
        indegree[prerequisites[i][0]]++     // 初始化顶点入度
        // indegree[1,1]
        if (prerqMap[prerequisites[i][1]]) { 
            prerqMap[prerequisites[i][1]].push(prerequisites[i][0])
            // prerqMap={0:[1],1:[0]}
        } else {
            prerqMap[prerequisites[i][1]] = [prerequisites[i][0]]
        }
    }

    while (topology.length < numCourses) {
        let hasNoPreNode = true
       
        for (let i = 0; i < numCourses; i++) {
            if (visited[i] == 0 && indegree[i] == 0) {  // 没有访问过并且没有前驱（入度为0）的顶点
                hasNoPreNode = false
                topology.push(i)
                visited[i] = 1
                if (prerqMap[i]) {
                    for (let out of prerqMap[i]) {
                        indegree[out]--
                    }
                }
            }
        }
        if (hasNoPreNode) break
    }

    return topology.length == numCourses // 没有环；可以修完所有课程
};









var canFinish = function(numCourses, prerequisites) {
	const degrees = [];
	const nodes = [];
	for (let i = 0; i < numCourses; i++) {
		degrees[i] = 0;
		nodes[i] = [];
	}

	for (let i = 0; i < prerequisites.length; i++) {
		const [output, entry] = prerequisites[i];
		degrees[output]++;
		if (!nodes[entry]) {
			nodes[entry] = [];
		}
		nodes[entry].push(output);
	}

	const stack = [];

	for (let i = 0; i < degrees.length; i++) {
		if (degrees[i] === 0) {
			stack.push(i);
		}
	}

	const visited = [];

	while (stack.length) {
		const top = stack.pop();
		if (visited[top]) continue;
		visited[top] = true;
		const ns = nodes[top];
		ns.map(node => {
			degrees[node]--;
			if (degrees[node] === 0) {
				stack.push(node);
			}
		})
	}
	return degrees.filter(node => node !== 0).length === 0;
};