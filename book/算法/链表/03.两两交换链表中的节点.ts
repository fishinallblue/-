// 题目描述：https://leetcode.cn/problems/swap-nodes-in-pairs/submissions/
class ListNode {
  public val: number;
  public next: ListNode | null = null;
  constructor(value: number) {
    this.val = value;
    this.next = null;
  }
}

var swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let before = head;
  let after = head.next;
  let pre = head;
  while(after) {
    before.next = after.next;
    after.next = before;
    pre.next = after;
    if (before.next) {
      pre = before;
      before = before.next;
      after = before.next;
    } else {
      break;
    }
  }
  return head;
};