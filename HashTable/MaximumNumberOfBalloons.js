/**
 * 给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。
字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。
输入：text = "nlaebolko"
输出：1
输入：text = "loonbalxballpoon"
输出：2
 */
var maxNumberOfBalloons = function(text) {
    let map = new Map()
    let arr = text.split('')
    arr.forEach((item) => {
        if (/[ban]/.test(item)) {
            if (!map.has(item)) {
                map.set(item, 1)
            } else {
                map.set(item, map.get(item)+1)
            }
        } else if (/[lo]/.test(item)) {
            if (!map.has(item)) {
                map.set(item, 0.5)
            } else {
                map.set(item, map.get(item)+0.5)
            }
        }
    })
    let min = Math.min(...map.values())
    if (map.size < 5) {
    	return 0
    } else {
    	return parseInt(min)
    }
};