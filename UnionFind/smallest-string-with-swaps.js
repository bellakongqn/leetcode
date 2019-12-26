/**
 * 给你一个字符串 s，以及该字符串中的一些「索引对」数组 pairs，其中 pairs[i] = [a, b] 表示字符串中的两个索引（编号从 0 开始）。
你可以 任意多次交换 在 pairs 中任意一对索引处的字符。
返回在经过若干次交换后，s 可以变成的按字典序最小的字符串。

示例 1:
输入：s = "dcab", pairs = [[0,3],[1,2]]
输出："bacd"
解释： 
交换 s[0] 和 s[3], s = "bcad"
交换 s[1] 和 s[2], s = "bacd"
 */
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    const parent = new Array(s.length)
    
    // parent=[0,0,0,0]
    for(let i = 0; i < parent.length; i++) 
        parent[i] = i
    
    
    for(let arr of pairs) 
        union(arr[0], arr[1])
    
    
    const map = new Map()
    
    for(let i = 0; i < parent.length; i++) {
        const root = find(parent[i])
        if(map.has(root)) {
            const strs = map.get(root)
            strs.push(s[i])
        } else {
            map.set( root, [s[i]] )
        }
    }
        
    for(let [rootIndex, strings] of map)
        strings.sort()
    
    let retStr = ""
    
    for(let i = s.length - 1; i > -1; i--) {
        const root = find(i)
        const strings = map.get(root)
        const str = strings.pop()
        retStr = str + retStr 
    }
    
    return retStr
    
    
    
    function find(p) {
        if(p !== parent[p])
            parent[p] = find(parent[p])
        return parent[p]
    }
    
    // 0,3=>0
    // 0,2=>0
    function union(p, q) {
        const pRoot = find(p)
        const qRoot = find(q)
        if(pRoot === qRoot)
            return
        
        parent[pRoot] = qRoot
    }
};