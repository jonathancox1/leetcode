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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    
    let lenA = 0;
    for (let x = headA; x !== null; x = x.next) lenA++;
    
    let lenB = 0;
    for (let x = headB; x !== null; x = x.next) lenB++;

    let longerList = lenA > lenB ? headA : headB;
    let shorterList = lenA > lenB ? headB : headA;
    
    let diff = Math.abs(lenA - lenB);
    
    // call next on longer until lengths are the same
    for (let x = 0; x < diff; x++) longerList = longerList.next;
    
    // at this position the length of the remainig nodes are equal
    // perform check, I will use longer to iterate, though it does not matter

    while (longerList !== null || shorterList !== null) {
        
        // intersection point
        if (longerList === shorterList) return longerList;
        
        longerList = longerList.next;
        shorterList = shorterList.next;
    }
    
    return null;
};