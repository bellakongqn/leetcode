/**
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
L   C   I   R
E T O E S I I G
E   D   H   N
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

*/
 /**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s.length<=numRows) return s;
    let list = new Array(numRows)
    for(let i = 0; i< s.length; i++) list[i] = "";
    let downFlag = false
    let j = 0 
    
    for(let i=0;i<s.length;i++){
        list[j] += s[i];
        if(j == 0 || j == numRows - 1)
            downFlag = !downFlag;
        j += downFlag ? 1 : -1;
    }

    let ans = "";
    for(const item of list) {
        ans += item;
    }
    return ans;
};