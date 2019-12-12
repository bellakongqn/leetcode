/**
 * 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，
 * 但不是 4 次，则需要在最终答案中包含该字符 3 次。
你可以按任意顺序返回答案。
示例 1：
输入：["bella","label","roller"]
输出：["e","l","l"]
示例 2：
输入：["cool","lock","cook"]
输出：["c","o"]

解析：以第一个单词作为基础进行对比
然后过滤出在其它单词中含有得第一个单词中的字母，同时将遍历过的后面的对比单词删掉
 */

var commonChars = function(A) {
    let originalChars = A[0].split('');
   for (let i = 1; i < A.length; i++) {
       let tempChars = A[i].split('');
       originalChars = originalChars.filter(char => {
           let ind = tempChars.indexOf(char);
           return ind > -1 ? tempChars.splice(ind,1) : '';
       });
   }
   return originalChars;
};