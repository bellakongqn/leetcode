/**
 * 
 * 给一非空的单词列表，返回前 k 个出现次数最多的单词。
    返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。
    示例 1：
    输入: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
    输出: ["i", "love"]
    解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
        注意，按字母顺序 "i" 在 "love" 之前。
    示例 2：

    输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
    输出: ["the", "is", "sunny", "day"]
    解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
        出现次数依次为 4, 3, 2 和 1 次。

    解析：先将数据存入对象内
    {i:2},{love:2},{leetcode:1},{coding:1}
    然后Objiect.keys()去除key=>['love','i','leetcode','coding']
    然后判断次数相同时根据字母顺序排序=>['i','love','leetcode','coding']
    最后数据截取前k个slice(0,k)
 */
var topKFrequent = function(words, k) {
    let hash = {}
    for(let i of words){
        if(i in hash){
            hash[i]++
        }else{
            hash[i] = 1
        }
    }
    return Object.keys(hash).sort((a,b)=>{
        if(hash[b]==hash[a]){
            return a<b ? -1 : 1
        }else{
            return hash[b] - hash[a]
        }
       
    }).slice(0,k);

};