/**
 * 给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。
假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。
注意：每次拼写时，chars 中的每个字母都只能用一次。
返回词汇表 words 中你掌握的所有单词的 长度之和。
示例 1：
输入：words = ["cat","bt","hat","tree"], chars = "atach"
输出：6
解释： 
可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
*/
var countCharacters = function(words, chars) {
    var map = new Map()
    var res =''
    for(c of chars){
        if(map.has(c))
         map.set(c,map.get(c)+1);
        else
         map.set(c,1); 
    }
    for(var i=0;i<words.length;i++){
        var newMap = new Map(map);
        let back=true;
        for(var j=0;j<words[i].length;j++){
            if(newMap.has(words[i][j])&&newMap.get(words[i][j])>0){
                newMap.set(words[i][j],newMap.get(words[i][j])-1);
            }else{
                back=false;
            }
        }
        if(back){
            res = res+words[i]
        }
    }
    return res.length
};