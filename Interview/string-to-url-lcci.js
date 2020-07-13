/**
 * URL化。编写一种方法，
 * 将字符串中的空格全部替换为%20。
 * 假定该字符串尾部有足够的空间存放新增字符，并且知道字符串的“真实”长度。
示例1:
输入："Mr John Smith    ", 13
输出："Mr%20John%20Smith"
 */
/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function(S, length) {
    var res = []
    for(let i =0 ;i<length;i++){
        if(S[i]!==' '){
            res.push(S[i])
        }else{
            res.push('%20')
        }
    }
    return res.join('')
    // return S.substr(0, length).split(" ").join("%20")
};
