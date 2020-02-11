/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
示例 1:
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hash = {}, max = 0,left = 0
    for(let right = 0;right<s.length;right++){
        // 当前是否含有此元素
        let moveleft  = hash[s[right]]
        if(moveleft){
            // 判断当前重复字符距离上一个同样字符之间是否存在重复字符
            left = Math.max(left,moveleft)
        }
        hash[s[right]]=right+1
        max = Math.max(max, right-left+1)
    }
    return max
};