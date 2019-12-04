/**
 * 
 */
// 输入: 4->2->1->3
// 输出: 1->2->3->4
var insertionSortList = function (head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    while (head && head.next) {
       if (head.val <= head.next.val) {
           head = head.next;
           continue;
       }
       let prev = dummy;
       while (prev.next.val < head.next.val) prev = prev.next;
       let curr = head.next;
       [prev.next, head.next, curr.next] = [curr, curr.next, prev.next];
       }
       return dummy.next;
   };