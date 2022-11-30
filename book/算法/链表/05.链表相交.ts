// 题目描述：https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/
class ListNode {
  public val: number;
  public next: ListNode | null = null;
  constructor(value: number) {
    this.val = value;
    this.next = null;
  }
}
// 自己的思路是，把其中一个链表改成双链表，然后，从另一个链表查询，找到有pre信息的第一个节点，然后再拆掉
var getIntersectionNode = function(headA, headB) {
  let head = headA
  while(head) {
    head.temp = 1;
    head = head.next;
  }
  head = headB
  let has = 0
  while(head) {
    if (head.temp) {
      has = 1
      return;
    }
    head = head.next;
  }
  let tempHead = headA
  while(tempHead) {
    delete tempHead.temp
    tempHead = tempHead.next;
  }
  if (has === 1) {
    return head;
  }
  return null
};

// 书上的实现思路：计算两个链表的长度差值，让比较长的链表先走差值步，然后短链表判断当前位跟长链表内容是否一致
// 如果不一致，两个一起next，直到一致为止
var getIntersectionNode1 = function(headA, headB) {
  const getLength = (head) => {
    let i = 0;
    while(head) {
      i++;
      head = head.next;
    }
    return i;
  }
  const lengtha = getLength(headA);
  const lengthb = getLength(headB);
  let cha = Math.abs(lengtha - lengthb);
  let longHead = lengtha > lengthb ? headA : headB;
  let shortHead = lengtha > lengthb ? headB : headA;
  while(cha > 0) {
    longHead = longHead.next;
    cha --;
  }
  while(longHead && shortHead) {
    if (longHead === shortHead) {
      return longHead
    }
    longHead = longHead.next;
    shortHead = shortHead.next;
  }
  return null;
 };