/**
 * 给定一个用字符数组表示的 CPU 需要执行的任务列表。其中包含使用大写的 A - Z 字母表示的26 种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 
 *  在任何一个单位时间内都可以执行一个任务，或者在待命状态。然而，两个相同种类的任务之间必须有长度为 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。
 * 你需要计算完成所有任务所需要的最短时间。
示例 1：
输入: tasks = ["A","A","A","B","B","B"], n = 2
输出: 8
执行顺序: A -> B -> (待命) -> A -> B -> (待命) -> A -> B.
解析：
分块的计算：将字符分为长度为 n + 1的最高频数-1 块。统计出各个字符出现的频率，然后排序，将频率最高的数作为第一个数，然后将其他频率的数依次填入这些最高频字符的中间，最后计算最后一块的长度。
例如计算AAAABBBEEFFGG 3

1.统计出各字符的频率，按升序排列，
则为：「G,2」「F,2」「E,2」「B,3」「A,4」
2.根据最高频的数为 A，停止等待的时间为 n，那么构建一个以 A 为基字母，长度为 4 的的字符块。
此时为 AXXX-AXXX-AXXX-A （X 代表空位）
3.将第二高频的数加入，则为 ABXX-ABXX-ABXX-A
4.将第三高频的数加入，则变为 ABEX-ABEX-ABFX A
5.将第四高频的数加入，则为：ABEF ABEG ABFG A
6.观察规律，第五步中一共有 A 为首字母的块数为 3（最高频-1）* 4（n+1）=12
*/

var leastInterval = function(tasks, n) {
    let map = new Map();
    // 遍历计算所有任务出现的次数
    for (let i = 0; i < tasks.length; i++) {
        if (map.has(tasks[i])) {
            map.set(tasks[i], map.get(tasks[i])+1);
        } else {
            map.set(tasks[i], 1);
        }
    }
    // 对次数进行递减排序
    let arr = [...map.values()].sort((a,b) => b-a);
    let maxNum = arr[0];
    let res = (maxNum - 1) * (n + 1) + 1;
    // +1 是因为最后一个不需要间隔只需要执行自己
    let i = 1;
    while (i < arr.length && arr[i] === maxNum) {
        // 如果存在其他任务的出现次数跟最大次数相同
        res++;
        i++;
    }
    return Math.max(tasks.length, res)
};

/**
 * 解析2：
 * 大概思路呢，就是，首先统计出每个字母出现的频率，保存到count数组中，之后排序，从小到大升序排序，
 * 也就是数组中的最后一个频率是出现次数最多的频率，最大频率，也就是count[25]。
 * 我们要做的是在出现频率最多的那个字母比如A，中间插空，相邻的两个A中间需要插入（n-1）个字母（也包括 待命 命令）
 * ，因为A的出现频率为count[25]，也就是我们至少需要插count[25]-1个空，所以除去最后不需要插空的频率最高的字母A的时间为：count[25]-1*(n+1)，
 * 这里的n+1为 n个空+A；空插好了之后，还会剩下频率最高的字母A，
 * 当然所给的数据可能会有多个频率同样高的字母，可能还会有BCD……，
 * 我们需要把它们都给加上，整理到最后公式就为：count[25]-1*(n+1) + 25-temp （25-temp为频率最高的字母的个数）。
 *还有我们可以发现，如果刚好插满的情况下，也就是不用待命的时候，所需时间为数组的长度。而此时如果用上述公式计算的话，
 可能会出现时间小于数组的时候，所以，应该返回他两个之中比较大的那个。

*/
var leastInterval = function(tasks, n) {
    if(tasks.length === 0){return 0;}
    
    let vec = new Array(26).fill(0);
    let charCodeA = 'A'.charCodeAt();
    
    tasks.forEach((item)=>{vec[item.charCodeAt()-charCodeA]++});
    vec.sort((a,b)=>b-a);
   
    let maxCount = 1;
    for(let i = 1;i<26;i++){
        if(vec[i] !== vec[0]){
            break;
        }
        maxCount ++;
    }
    
    return Math.max((vec[0]-1)*(n+1)+maxCount,tasks.length);
    
};