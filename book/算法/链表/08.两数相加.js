// 题目描述：https://leetcode.cn/problems/lMSNwu/description/
class ListNode {
    val
    next
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1, l2) {
  if (l1 === null || l2 === null) {
    return l1 || l2;
  }

  function reverse (head) {
    if (!head || !head.next) {
        return head;
    }
    if (head.next) {
      let next = head.next;
      let pre = head;
      head.next = null;
      head = next;
      while(head) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
      }
      return pre;
    }
    return head;
  }

  let l1R = reverse(l1);
  let l2R = reverse(l2);
  let jinCount = 0;
  let preNode = null
  let preHead = null;

  while(l1R && l2R) {
    const val = l1R.val + l2R.val + jinCount;
    const value = Number(val % 10);
    jinCount = Number(val / 10);
    let newNode = new ListNode(value);
    if (preNode) {
      preNode.next = newNode
    } else {
      preHead = newNode;
    }
    preNode = newNode;
    l1R = l1R.next;
    l1R = l2R.next;
  }

  while(l1R) {
    const val = l1R.val + jinCount;
    const value = Number(val % 10);
    jinCount = Number(val / 10);
    let newNode = new ListNode(value);
    if (preNode) {
      preNode.next = newNode
      preNode = newNode;
    }
    l1R = l1R.next;
  }
  while(l2R) {
    const val = l2R.val + jinCount;
    const value = Number(val % 10);
    jinCount = Number(val / 10);
    let newNode = new ListNode(value);
    if (preNode) {
      preNode.next = newNode
      preNode = newNode;
    }
    l2R = l2R.next;
  }

  if (jinCount) {
    let newNode = new ListNode(jinCount);
    if (preNode) {
      preNode.next = newNode
    }
  }

  return reverse(preHead)

};

let head1 = new ListNode(7);
let node1 = new ListNode(2);
let node2 = new ListNode(4);
let node3 = new ListNode(3);
head1.next = node1;
node1.next = node2;
node2.next = node3;

let head2 = new ListNode(5);
let node21 = new ListNode(6);
let node22 = new ListNode(4);
head2.next = node21;
node21.next = node22;

const res = addTwoNumbers(head1, head2);
console.log(res)