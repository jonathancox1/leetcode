/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(root: ListNode | null): void {
    if (!root) return;
    
    // instead of 'deleting' the node
    // reassign the current node to the contents of the next node
    root.val = root.next.val;
    root.next = root.next.next;
};