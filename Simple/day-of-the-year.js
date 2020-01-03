/**
 * 1154. 一年中的第几天
 * 给你一个按 YYYY-MM-DD 格式表示日期的字符串 date，请你计算并返回该日期是当年的第几天。
通常情况下，我们认为 1 月 1 日是每年的第 1 天，
1 月 2 日是每年的第 2 天，依此类推。每个月的天数与现行公元纪年法（格里高利历）一致。
示例 1：
输入：date = "2019-01-09"
输出：9
示例 2：
输入：date = "2019-02-10"
输出：41
 */
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    return Math.ceil((new Date(date) - new Date(new Date(date).getFullYear().toString()))/(24*60*60*1000))+1;
};