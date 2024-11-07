// 地址： https://leetcode.cn/problems/7WHec2/
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
// 根据O(nlogn)和常数级空间复杂度两个条件考虑用归并
// 想了想更适合递归的方法
function sortList(head: ListNode | null): ListNode | null {

    const findmidInfo = (head) => {
        if (head && head.next) {
            let quickStart = head.next;
            let slowStart = head;
            while(quickStart && quickStart.next) {
                quickStart = quickStart.next.next;
                slowStart = slowStart.next;
            }
            return slowStart;
        }
        return head;
    };
    const sortLink = (head) => {
        if (head && head.next) {
            let mid = findmidInfo(head);
            let midNext = mid.next;
            mid.next = null;
            head = sortLink(head);
            midNext = sortLink(midNext);
            let newHead = new ListNode();
            let newNext = newHead;
            while(head && midNext) {
                if (head?.val <= midNext?.val) {
                    newNext.next = head;
                    head = head.next;
                } else {
                    newNext.next = midNext;
                    midNext = midNext.next;
                }
                newNext = newNext.next;
            }
            newNext.next = head || midNext;
            head = newHead.next;
        }
        return head;
    }
    return sortLink(head);
};