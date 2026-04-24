/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;

        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Now slow is in the middle of the list
        // and fast is at the end of the list

        let firstList = head;
        let secondList = slow.next;
        slow.next = null;

        // Reverse second list

        let prev = null;
        while(secondList !== null) {
            let temp = secondList.next;

            secondList.next = prev;
            prev = secondList;
            secondList = temp;
        }

        secondList = prev;

        while(secondList !== null) {
            const temp1 = firstList.next;
            const temp2 = secondList.next;

            firstList.next = secondList;
            secondList.next = temp1;

            firstList = temp1;
            secondList = temp2;
        }
    }
}
