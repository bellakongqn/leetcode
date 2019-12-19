/**
 * 根据逆波兰表示法，求表达式的值。
有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
说明：
整数除法只保留整数部分。
给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
示例 1：
输入: ["2", "1", "+", "3", "*"]
输出: 9
解释: ((2 + 1) * 3) = 9
 */
var calc = function(s1,s2,char){
    switch(char){
        case "+":return s1+s2;
        case "-":return s1-s2;
        case "*":return s1*s2;
        case "/":return (s1/s2)<=0?Math.ceil(s1/s2):Math.floor(s1/s2);
    }
}
var evalRPN = function(tokens) {
    let stack = [],
        len = tokens.length;
    let res = null;
    for(let i = 0;i<len;i++){
        if(tokens[i]==="+"
          ||tokens[i]==="-"
          ||tokens[i]==="*"
          ||tokens[i]==="/"){
            let s2 = stack.pop(),
                s1 = stack.pop();
            res = calc(s1*1,s2*1,tokens[i]);
            stack.push(res);
        }else{
           stack.push(tokens[i]); 
        }
    }
    return stack.pop();
};