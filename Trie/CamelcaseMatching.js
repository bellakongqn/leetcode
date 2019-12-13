/**
 * 如果我们可以将小写字母插入模式串 pattern 得到待查询项 query，那么待查询项与给定模式串匹配。
 * （我们可以在任何位置插入每个字符，也可以插入 0 个字符。）给定待查询列表 queries，
 * 和模式串 pattern，返回由布尔值组成的答案列表 answer。只有在待查项 queries[i] 与模式串 pattern 匹配时， 
 * answer[i] 才为 true，否则为 false。
示例 1：
输入：queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"
输出：[true,false,true,true,false]
示例：
"FooBar" 可以这样生成："F" + "oo" + "B" + "ar"。
"FootBall" 可以这样生成："F" + "oot" + "B" + "all".
"FrameBuffer" 可以这样生成："F" + "rame" + "B" + "uffer".

输入：queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBa"
输出：[true,false,true,false,false]
解释：
"FooBar" 可以这样生成："Fo" + "o" + "Ba" + "r".
"FootBall" 可以这样生成："Fo" + "ot" + "Ba" + "ll".

示例：
"FooBar" 可以这样生成："F" + "oo" + "B" + "ar"。
"FootBall" 可以这样生成："F" + "oot" + "B" + "all".
"FrameBuffer" 可以这样生成："F" + "rame" + "B" + "uffer".
输出：queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBaT"
输入：[false,true,false,false,false]
解释： 
"FooBarTest" 可以这样生成："Fo" + "o" + "Ba" + "r" + "T" + "est".

解析：
对于一个带查询的字符串query和pattrn我们可以用如下的方式判断它们是否匹配

开始分别用两个指针idx1和idx2指向query和pattrn的头部。
判断两个指针所指向的字符是否相等，如果相等则同时后移
若不相等，则idx1的指针不断后移，直到走到query字符串末尾或和idx2指向的字符相等。注意根据题意我们只能插入小写字母，故idx1后移的过程中若遇到不匹配大写字母，则立即返回false。
当指针idx1或idx2走到字符串的末尾时退出循环，这时我们要判断idx2是否走到了pattrn字符串的末尾，如果不是，说明我们还有剩余字符未成功匹配,返回false。同时我也要判断query中剩余的字符中是否全是小写字母，若不是返回false。
 */
var camelMatch = function(queries, pattern) {
    let res  = []
    let patternLen = pattern.length
    queries.forEach(item=>{
        let patternIndex = 0
        for (let i = 0, len = item.length; i < len; i++) {
            if (item[i] === pattern[patternIndex]) {
                patternIndex++;
            } else if (patternIndex <= patternLen && item[i].codePointAt() <= 96) {
                res.push(false);
                return;
            }
        }
        if (patternIndex === patternLen) res.push(true);
        else res.push(false);
    })
    return res
};