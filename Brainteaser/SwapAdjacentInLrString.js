/**
 * 在一个由 'L' , 'R' 和 'X' 三个字符组成的字符串（例如"RXXLRXRXL"）中进行移动操作。
 * 一次移动操作指用一个"LX"替换一个"XL"，或者用一个"XR"替换一个"RX"。现给定起始字符串start和结束字符串end，
 * 请编写代码，当且仅当存在一系列移动操作使得start可以转换成end时， 返回True。
示例 :
输入: start = "RXXLRXRXL", end = "XRLXXRRLX"
输出: True
解释:
我们可以通过以下几步将start转换成end:
RXXLRXRXL ->
XRXLRXRXL ->
XRLXRXRXL ->
XRLXXRRXL ->
XRLXXRRLX
 */
var canTransform = function(start, end) {
    let i=0;
    let j=0;
    while(i<start.length && j < end.length){
        while(start[i] === 'X' && i < start.length) i++
        while(end[j] === 'X' && j < end.length) j++
        if(start[i] !== end[j]) return false
        if(start[i] === 'R' && end[j] === start[i]){
            if(i > j) return false
        }
        if(start[i] === 'L' && end[j] === start[i]){
            if(i < j) return false
        }
        i++
        j++
    }
    return true
};