/**
 * 面试题 02.06. 回文链表
编写一个函数，检查输入的链表是否是回文的。
示例 1：
输入： 1->2
输出： false 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    
    let l = 0, r = arr.length - 1;
    while (l <= r) {
        if (arr[l] !== arr[r]) return false;
        l++; r--;
    }

    return true;
};
