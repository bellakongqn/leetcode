/**
 * 面试题 01.05. 一次编辑
字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。 
给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。
示例 1:
输入: 
first = "pale"
second = "ple"
输出: True
*/
/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
    let len1 = first.length, len2 = second.length;
    // 长度差小于 2 => 0||1
    if(Math.abs(len1 - len2) > 1) return false;

    let diff = false;
    for(let i=0, j=0; i<len1 && j <len2;){
      // 不同 
        if(first[i++] != second[j++]){
            // 如果已存在不同 直接返回
            if(diff) return false;
            diff = true;
            // 删除 插入
            if(len1 !== len2)
            len1 > len2 ? j-- : i--;
        }
    }
    return true;
};

