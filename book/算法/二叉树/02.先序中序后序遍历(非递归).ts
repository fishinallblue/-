// 2024.11.3
class TreeNode {
  val: string | number | undefined = undefined;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(val: string | number) {
    this.val = val;
  }
}

// 中序遍历
const zhongxu = (node: TreeNode | null) => {
  let res = [];
  let stack = [];
  while(node !== null || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    res.push(node.val)
    node = node.right;
  }
  return res;
}
// 先序遍历
const xianxu = (node: TreeNode | null) => {
  let res = [];
  let stack = [];
  while(node !== null) {
    res.push(node?.val);
    stack.push(node);
    node = node.left;
  }
  node = stack.pop();
  node = node?.right;
  return res;
}
// 后序遍历
const houxu = (node: TreeNode | null) => {
  let res = [];
  let stack = [];
  let pre = null;
  while(node !== null || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    if (node.right && pre !== node.right) {
      stack.push(node);
      node = node.right;
    } else {
      res.push(node.val);
      pre = node;
      node = null;
    }
  }
  return res;
}

const head = new TreeNode(1);
const headLeft = new TreeNode(2);
const headRight = new TreeNode(3);
const leftLeft = new TreeNode(4);
const rightRight = new TreeNode(5);
head.left = headLeft;
headLeft.left = leftLeft;
head.right = headRight;
headRight.right = rightRight;

console.log(zhongxu(head));;
console.log(xianxu(head));
console.log(houxu(head))


const zhongxu1 = (root) => {
  let stack = [];
  const dfs = (root) => {
    while (root || stack.length) {
      while (root) {
        stack.push(root);
        root = root.left;
      }
      root = stack.pop();
      console.log(root.val);
      root = root.right;
    }
  }
  return dfs(root);
}