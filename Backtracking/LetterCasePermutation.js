/**
 * 给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合。
 * 示例:
    输入: S = "a1b2"
    输出: ["a1b2", "a1B2", "A1b2", "A1B2"]
 */
var letterCasePermutation = function(S) {
    // S = "a1b2"
    let res = [];
    
    let backtrack = function(i,s) {
        res.push(s);
        for (let j=i;j<s.length;j++) {
            if ('a'<=s[j] && s[j]<='z') {
                backtrack(j+1,s.slice(0,j) + s[j].toUpperCase()+s.slice(j+1))
                // backtrack(1,s)+'A1b2'=>s=>'A1b2'
            }else if ('A'<=s[j] && s[j]<='Z') {
                backtrack(j+1,s.slice(0,j) + s[j].toLowerCase() +s.slice(j+1))
            }
        }
    }
    backtrack(0,S);
    return res
};