/**
 * 有效括号字符串为空 ("")、"(" + A + ")" 或 A + B，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。
 * 例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。
如果有效字符串 S 非空，且不存在将其拆分为 S = A+B 的方法，我们称其为原语（primitive），
其中 A 和 B 都是非空有效括号字符串。
给出一个非空有效字符串 S，考虑将其进行原语化分解，使得：S = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。
对 S 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 S 

解析：
遇到(就+1，遇到)就-1。有2种情况表明(和)属于“最外
*/
// 输入："(()())(())"
// 输出："()()()"
// 输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
// 删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。
var removeOuterParentheses = function(S) {
    let delta = 0
    let res = ''
    for (const ch of S) {
        // 先后顺序
        if (ch === '(' && delta !== 0 || ch === ')' && delta !== 1) {
        res += ch
        }
        if (ch === '(') {
        ++delta
        } else if (ch === ')') {
        --delta
        }
    }

  return res
};