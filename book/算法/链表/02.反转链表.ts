// 题目描述：https://leetcode.cn/problems/reverse-linked-list/
// 本题的思路还是使用双指针
class ListNode {
  public val: number;
  public next: ListNode | null = null;
  constructor(value: number) {
    this.val = value;
    this.next = null;
  }
}
function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let newHead = null;
  while (head) {
    let temp = head.next;
    head.next = newHead;
    newHead = head;
    head = temp;
  }
  return newHead;
};

// 2024.10.29 半小时A出，没有使用新的head，旧的head改造的
function reverseList1(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let next = head.next;
  head.next = null;
  while(next) {
    let nnext = next.next;
    next.next = head;
    head = next;
    next = nnext;
  }
  return head;
};
