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
//         let lenA = 0, lenB = 0;

//     for (let i = headA; i != null; i = i.next) lenA++;
//     for (let i = headB; i != null; i = i.next) lenB++;

//     let diff = Math.abs(lenA - lenB);
//     let longerList = lenA > lenB ? headA : headB;
//     let shorterList = lenA > lenB ? headB : headA;

//     for (let i = 0; i < diff; i++) longerList = longerList.next;

//     while (longerList !== null || shorterList !== null) {
//         if (longerList === shorterList) return shorterList;
//         longerList = longerList.next;
//         shorterList = shorterList.next;
//     }

    let lenA = 0;
    let lenB = 0;
    for (let i = headA; i != null; i = i.next) lenA++;
    for (let i = headB; i != null; i = i.next) lenB++;

//     let longerList = lenA > lenB ? headA : headB;
//     let shorterList = lenA > lenB ? headB : headB;
    
//     let diff = Math.abs(lenA - lenB);
    
        let diff = Math.abs(lenA - lenB);
    let longerList = lenA > lenB ? headA : headB;
    let shorterList = lenA > lenB ? headB : headA;
    
    // call next on longer until lengths are the same
    for (let x = 0; x < diff; x++) longerList = longerList.next;
    
    // at this position the length of the remainig nodes are equal
    // perform check, I will use longer to iterate, though it does not matter

    while (longerList !== null || shorterList !== null) {
        
        // intersection point
        if (longerList === shorterList) return shorterList;
        
        longerList = longerList.next;
        shorterList = shorterList.next;
    }
    
//     return null;
};