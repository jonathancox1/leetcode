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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    
    let returnList = new ListNode();

    let current1 = l1;
    let current2 = l2;
    let returnCurr = returnList;
    
    while (current1 || current2) {
        let val1 = current1 ? current1.val : 0;
        let val2 = current2 ? current2.val : 0;

        let addition = val1 + val2;
                
        if (addition + returnCurr.val > 9) {
            returnCurr.val = returnCurr.val + addition - 10;
            returnCurr.next = new ListNode(1, null)
            
        } else {
            returnCurr.val += addition; 
            
            if (current1?.next || current2?.next) {
            returnCurr.next = new ListNode();                
            }
        }
        
        if ( current1 ) {
        current1 = current1.next;
        }
    
        if ( current2 ) {
        current2 = current2.next;
        }
    
        returnCurr = returnCurr.next;
    }
    
    return returnList;
};