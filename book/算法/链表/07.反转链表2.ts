// 题目描述：https://leetcode.cn/problems/reverse-linked-list-ii/description/
// 本题的思路还是使用双指针
class ListNode {
  public val: number;
  public next: ListNode | null = null;
  constructor(value: number) {
    this.val = value;
    this.next = null;
  }
}