/**
 * 给定数组 A，我们可以对其进行煎饼翻转：
 * 我们选择一些正整数 k <= A.length，然后反转 A 的前 k 个元素的顺序。
 * 我们要执行零次或多次煎饼翻转（按顺序一次接一次地进行）以完成对数组 A 的排序。
返回能使 A 排序的煎饼翻转操作所对应的 k 值序列。任何将数组排序且翻转次数在 10 * A.length 
范围内的有效答案都将被判断为正确。
示例 1：
输入：[3,2,4,1]
输出：[4,2,4,3]
解释：
我们执行 4 次煎饼翻转，k 值分别为 4，2，4，和 3。
初始状态 A = [3, 2, 4, 1]
第一次翻转后 (k=4): A = [1, 4, 2, 3]
第二次翻转后 (k=2): A = [4, 1, 2, 3]
第三次翻转后 (k=4): A = [3, 2, 1, 4]
第四次翻转后 (k=3): A = [1, 2, 3, 4]，此时已完成排序。 
*/
var pancakeSort = function (A) {
    let res = []
    let n = A.length
    while (n > 0) {
        if (A[n - 1] !== n) {
            const i = A.indexOf(n)
            if (i > 0) {
                res.push(i + 1)
            }
            res.push(n)
            A = A.slice(i + 1, n).reverse().concat(A.slice(0, i))
        } else {
            A.pop()
        }
        n--
    }
    return res
};

/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
    let times=0;
    let list = []
        let B = A
        B.sort((a,b)=>{return a-b})
        for(let i=0;i<A.length;i++){
            times = findMax(A,B,i);
            if(times!=-1){
                if(times!=0){
                reverse(A,times);
                    list.add(times+1);
                }
                reverse(A,A.length-i-1);
                list.add(A.length-i);   
            }
        }
        return list;
};


function findMax(A,B,curr){
    let num=B[B.length-curr-1];
    let index=0;
    for(let i=0;i<A.length;i++){
        if(A[i]==num)
        {  
            index=i;
            break;
        } 
    }
    if(B.length-curr-1==index)
        return -1;
    return index;
}
function reverse(A,times){
    for(let i=0;i<(times+1)/2;i++){
        let temp=A[i];
        A[i]=A[times-i];
        A[times-i]=temp;
    }
    return A;
}

    // 1------简写
var pancakeSort = function(A) {
        let res = []
        for(let i = A.length - 1; i >= 0; i--) {
            if(A[i] == i+1) continue;
            let idx = A.indexOf(i + 1)
            if(idx != 0) {
                reverse(A, 0, idx)
                res.push(idx + 1)
            }
    
            reverse(A, 0, i)
            res.push(i + 1)
        }
        return res
};
// 交换
function reverse(A, start, end) {
    while(start < end) {
        [A[start], A[end]] = [A[end], A[start]]
        start++
        end--
    }
}