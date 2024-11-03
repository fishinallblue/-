// 题目描述：https://leetcode.cn/problems/design-linked-list/
// https://leetcode.cn/problems/SLwz0R/
// 本题的思路是使用快慢指针
class ListNode {
  public val: number;
  public next: ListNode | null = null;
  constructor(value: number) {
    this.val = value;
    this.next = null;
  }
}
var removeNthFromEnd = function(head, n) {
  if (!head || n <= 0) {
    return head;
  }
  let fast = head, slow;
  let count = 1;
  while(fast.next) {
    if (count >= n) {
      if (count === n) {
        slow = head;
      } else {
        slow = slow.next
      }
    }
    fast = fast.next;
    count ++;
  }
  if (slow) {
    slow.next = slow.next.next;
  }
  if (count === n) {
    return head.next;
  }

  return head;
};

// 2024.10.30
