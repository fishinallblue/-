// 题目描述：https://leetcode.cn/problems/linked-list-cycle-ii/
class ListNode {
  public val: number;
  public next: ListNode | null = null;
  constructor(value: number) {
    this.val = value;
    this.next = null;
  }
}

var detectCycle = function(head) {
  let slow = head, fast = head;
  while(fast && fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      fast = head
      while(fast !== slow) {
        fast = fast.next
        slow = slow.next
      }
      return slow
    }
  }
  return null
};