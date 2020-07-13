/**
 * 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。
示例 1：
输入: s = "leetcode"
输出: false 

示例 2：
输入: s = "abc"
输出: true
 */
/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    const map = {}

    for(let i=0;i<astr.length ;i++){
        if(map[astr[i]]){
            return false
        }else{
            map[astr[i]] = 1
        }
    }
    return true
    // return astr.length === [...new Set(astr.split(''))].length
};

