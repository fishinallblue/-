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
  head = after;
  while(after) {
    before.next = after.next;
    after.next = before;
    if (before.next && before.next.next) {
      let temp = before
      before = before.next;
      after = before.next;
      temp.next = after;
    } else {
      break;
    }
  }
  return head;
};

// 2024.10.29 A用时一个小时 
function swapPairs2(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
      return head;
  }
  let after = head.next;
  let newHead = after;
  let nnext = null;
  let pre = null;
  while(after) {
      nnext = after.next;
      after.next = head;
      if (pre) {
          pre.next = after;
      }
      pre = head;
      if (nnext) {
          head = nnext;
          after = head.next;
      } else {
          pre.next = null;
          break;
      }
  } 
  if (nnext && pre) {
      pre.next = nnext;
  }
  return newHead;
};