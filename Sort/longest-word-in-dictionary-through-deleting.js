/**
 * 给定一个字符串和一个字符串字典，找到字典里面最长的字符串，该字符串可以通过删除给定字符串的某些字符来得到。如果答案不止一个，返回长度最长且字典顺序最小的字符串。
 * 如果答案不存在，则返回空字符串。
示例 1:
输入:
s = "abpcplea", d = ["ale","apple","monkey","plea"]
输出: 
"apple"
 */
var findLongestWord = function(s, d) {
    // 排序 根据长度和字典顺序
    var newD = d.sort(function (a, b) {
        if (b.length !== a.length) {
            return b.length - a.length
        } else {
            return a === b ? 0 : a < b ? -1 : 1
        }
    })
    for (var i = 0; i < newD.length; i++) {
        var newS = s
        for (var j = 0; j < newD[i].length; j++) {
            if (newS.indexOf(newD[i][j]) < 0) {
                break;
            } else {
                newS = newS.substr(newS.indexOf(newD[i][j]) + 1)
            }
            if (j === newD[i].length - 1) {
                return newD[i]
            }
        }
    }
    return ""
};