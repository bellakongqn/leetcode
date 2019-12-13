/**
 * 实现一个 MapSum 类里的两个方法，insert 和 sum。
 * 对于方法 insert，你将得到一对（字符串，整数）的键值对。字符串表示键，整数表示值。
 * 如果键已经存在，那么原来的键值对将被替代成新的键值对。
 * 对于方法 sum，你将得到一个表示前缀的字符串，你需要返回所有以该前缀开头的键的值的总和。

示例 1:
输入: insert("apple", 3), 输出: Null
输入: sum("ap"), 输出: 3
输入: insert("app", 2), 输出: Null
输入: sum("ap"), 输出: 5
 */
/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.map = new Map();
};

/** 
* @param {string} key 
* @param {number} val
* @return {void}
*/
MapSum.prototype.insert = function(key, val) {
   this.map.set(key, val);
};

/** 
* @param {string} prefix
* @return {number}
*/
MapSum.prototype.sum = function(prefix) {
   var sum = 0;
   this.map.forEach((val, key)=>key.indexOf(prefix)==0?sum+=val:'');
   return sum;
};