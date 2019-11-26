/**
 * 给出一个字符串数组words组成的一本英语词典。从中找出最长的一个单词，
 * 该单词是由words词典中其他单词逐步添加一个字母组成。
 * 若其中有多个可行的答案，则返回答案中字典序最小的单词。
 * 若无答案，则返回空字符串。
 * 输入: 
words = ["w","wo","wor","worl", "world"]
输出: "world"
解释: 
单词"world"可由"w", "wo", "wor", 和 "worl"添加一个字母组成。
输入: 
words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
输出: "apple"
解释: 
"apply"和"apple"都能由词典中的单词组成。但是"apple"得字典序小于"apply"。
 */
var longestWord = function(words) {
    // 按照字典顺序排序 ["a", "ap", "app", "appl", "apple", "apply", "peer"]
    words.sort();
    let set = new Set();
    res = '';
    for(let item of words) {
        if(item.length == 1 || set.has(item.substring(0, item.length - 1))) {
            // 预防长度一定时， 后面的'apply' 会覆盖前面的 'apple'
            res = item.length > res.length ? item : res;
            set.add(item);
        }
    }
    return res
};