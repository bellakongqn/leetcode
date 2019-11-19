/**
 * 给出两个 非空 的链表用来表示两个非负的整数。
 * 其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
    您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
    输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
    输出：7 -> 0 -> 8
    原因：342 + 465 = 807

    解析：从最后一位开始相加，然后计算进位

    错误尝试：将链表转换成数字然后进行相加->会出现超出范围的情况
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let result = new ListNode(0)
    let current = result
    while(l1 || l2) {
        let x = l1 && l1.val || 0
        let y = l2 && l2.val || 0
        let plus = x + y + carry
        carry = Math.floor(plus / 10)
        current.next = new ListNode(plus % 10)
        current = current.next || null
        l1 = l1 && l1.next
        l2 = l2 && l2.next
    }
    
    if (carry) {
        current.next = new ListNode(carry)
    }
    return result.next
};