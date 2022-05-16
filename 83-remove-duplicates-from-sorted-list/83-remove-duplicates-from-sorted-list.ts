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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let curr = head;
    
    while (head) {
        // end of list
        if (curr.next === null) break;
        
        // duplicate check
        if (curr.val === curr.next.val) {
            
            // splice 1
            curr.next = curr.next.next;
            
            continue;
        }
        
        curr = curr.next;
    }
    
    return head;
};