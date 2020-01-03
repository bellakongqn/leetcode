/**
 * 对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。
返回字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。
示例 1：
输入：str1 = "ABCABC", str2 = "ABC"
 */
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;
    if (len1 == len2) {
        if (str1 == str2) {
            return str1
        } else {
            return ''
        }
    } else if (len1 > len2) {
        let temp = str1.replace(str2, '');
        return gcdOfStrings(temp, str2)
    } else {
        let temp = str2.replace(str1, '');
        return gcdOfStrings(temp, str1)
    }
};