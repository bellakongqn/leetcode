/**
 * 给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。
输入为三个整数：day、month 和 year，分别表示日、月、年。
您返回的结果必须是这几个值中的一个 {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}。

示例 1：
输入：day = 31, month = 8, year = 2019
输出："Saturday"
示例 2：
输入：day = 18, month = 7, year = 1999
输出："Sunday"
示例 3：
输入：day = 15, month = 8, year = 1993
输出："Sunday"
解析： 生成当天日期 然后根据getDay判断第几天然后再进行匹配
 */
var dayOfTheWeek = function(day, month, year) {
    const m ={0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"}
    return m[new Date(`${year}-${month}-${day}`).getDay()]
};