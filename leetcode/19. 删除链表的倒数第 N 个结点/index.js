// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let p = head, q = head;
    while(n) {
        q = q.next;
        n--;
    }
    if(!q) {
        head = head.next;
        return head;
    }
    while(q.next) {
        p = p.next;
        q = q.next;
    }
    p.next = p.next.next;

    return head;
};