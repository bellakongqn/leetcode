/*
哦，不！你不小心把一个长篇文章中的空格、标点都删掉了，
并且大写也弄成了小写。像句子"I reset the computer. 
It still didn’t boot!"已经变成了"iresetthecomputeritstilldidntboot"。
在处理标点符号和大小写之前，你得先把它断成词语。当然了，
你有一本厚厚的词典dictionary，不过，有些词没在词典里。
假设文章用sentence表示，设计一个算法，把文章断开，
要求未识别的字符最少，返回未识别的字符数。
注意：本题相对原题稍作改动，只需返回未识别的字符数

输入：
dictionary = ["just","looked","like","her","brother"]
sentence = "jessl ookedj ustli ketim herbr other" 25
输出： 7
解释： 断句后为"just looked just like tim her brother"，共7个未识别字符。
 */ 
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function(dictionary, sentence) {
    if(sentence.length == 0) return 0;
    let dp = new Array(sentence.length).fill(0);
    // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for(let i = 1;i<=sentence.length;i++){
        dp[i] = dp[i-1]+1;

        // 上面表示，如果没有匹配那么dp[i]相比于dp[i-1]直接多1
        // 接着讨论如果新加一个字符，组成了一个词的情况
        
        for(let j=0;j<dictionary.length;j++){
            let word = dictionary[j].length;
            // word = just =4
            // just === (0, 4) jess
            if(dictionary[j] == sentence.substring(i-word,i) && word<=i){
                dp[i] = Math.min(dp[i],dp[i-word]);
            }
        }
    }
    return dp[sentence.length]
};