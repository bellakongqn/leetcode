/**
 * 给定两个字符串 s1 和 s2，请编写一个程序，
 * 确定其中一个字符串的字符重新排列后，能否变成另一个字符串。
示例 1：
输入: s1 = "abc", s2 = "bca"
输出: true 
示例 2：
输入: s1 = "abc", s2 = "bad"
输出: false
*/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
    if(s1.length !== s2.length) {
        return false
    }else{
        return s1.split('').sort().toString() === s2.split('').sort().toString()
    }
};

