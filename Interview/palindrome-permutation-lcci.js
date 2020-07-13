/**
 * 面试题 01.04. 回文排列
给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。
回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。
回文串不一定是字典当中的单词。
示例1：
输入："tactcoa"
输出：true（排列有"tacocat"、"atcocta"，等等）
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    // 字符出现的次数为均为偶数次 或奇数次小于等于1
    let map={}
    for(let i=0;i<s.length;i++){
        if(map[s[i]]) {
            map[s[i]]++
        }else{
            map[s[i]]=1
        }
    }
    
    let single = 0
    for(let item of Object.values(map)){
        if(item%2!==0){
            single++
        }
    }
    return single<=1
}
