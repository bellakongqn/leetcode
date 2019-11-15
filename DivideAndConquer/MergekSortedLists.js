/**
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 * 
 * 解析：将数组中的链表分治，就是不断的将数组中的链表中间划分，分别合并，然后整体合并成一个大链表。
*/

var mergeKLists = function(lists) {
    let len = lists.length;
    if(len < 3){
      return mergeTwoLists(lists[0] || null,lists[1] || null);
    }else{
      let mid = len >> 1;
      return mergeTwoLists(mergeKLists(lists.slice(0,mid)),mergeKLists(lists.slice(mid)));
    }
};
  
function mergeTwoLists(l1, l2) {
    if(!l1 || !l2) return l1 || l2;
    let head,tmp;
    if(l1.val < l2.val){
      tmp = head = l1;
      l1 = l1.next;
    }else{
      tmp = head = l2;
      l2 = l2.next;
    }
    while(l1 && l2){
      if(l1.val < l2.val){
        tmp.next = l1;
        tmp = l1;
        l1 = l1.next;
      }else{
        tmp.next = l2;
        tmp = l2;
        l2 = l2.next;
      }
    }
    if(l1){
      tmp.next = l1;
    }else{
      tmp.next = l2;
    }
    return head;
};