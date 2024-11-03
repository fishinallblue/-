function isPalindrome(head: ListNode | null): boolean {
  if (!head) {
      return false;
  }
  if (!head.next) {
      return true;
  }
  const findMiddleNode = function (head) {
      let fastNode = head;
      let slowNode = head;
      while(fastNode && fastNode.next) {
          fastNode = fastNode.next.next;
          slowNode = slowNode.next;
      }
      return slowNode;
  }
  const reverseList = function (head: ListNode | null): ListNode | null {
      if (!head || !head.next) {
          return head;
      }
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
  };
  let endList = reverseList(findMiddleNode(head));
  while(endList && head) {
      if (endList.val === head.val) {
          endList = endList.next;
          head = head.next;
      } else {
          return false;
      }
  }
  return true;
};