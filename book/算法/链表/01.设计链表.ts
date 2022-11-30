// 题目描述：https://leetcode.cn/problems/design-linked-list/
class ListNode {
  public val: number;
  public next: ListNode | null = null;
  constructor(value: number) {
    this.val = value;
    this.next = null;
  }
}
class MyLinkedList {
  header: ListNode
  constructor() {
    this.header = new ListNode(0);
  }

  getNode(index: number): ListNode | null {
    if (index === -1) {
      return this.header
    }
    if (index >= 0) {
      let temp = this.header.next
      let i = 0;
      while(temp && i < index) {
        temp = temp.next
        i++;
      }
      if (i === index) {
        return temp;
      }
    }
    return null
  }

  get(index: number): number {
    const node = this.getNode(index)
    return node ? node.val : -1;
  }

  addAtHead(val: number): void {
    const node = new ListNode(val)
    if (this.header) {
      node.next = this.header.next
      this.header.next = node
    }
  }

  addAtTail(val: number): void {
    let temp = this.header!;
    while(temp?.next) {
      temp = temp.next
    }
    temp.next = new ListNode(val)
  }

  addAtIndex(index: number, val: number): void {
    const node = new ListNode(val);
    if(index <= 0) {
      node.next = this.header.next
      this.header.next = node
    } else {
      const info = this.getNode(index - 1)
      if (info) {
        node.next = info.next
        info.next = node
      }
    }
  }

  deleteAtIndex(index: number): void {
    const node = this.getNode(index -1);
    if (node?.next) {
      node.next = node.next?.next
    }
  }
}

const linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
console.log(linkedList.get(1));            //返回2
linkedList.deleteAtIndex(1);  //现在链表是1-> 3
console.log(linkedList.get(1));            //返回3
