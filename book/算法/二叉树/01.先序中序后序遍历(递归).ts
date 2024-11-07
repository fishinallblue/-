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
const zhongxu = (node: TreeNode) => {
  let res = [];
  const dfs = (node: TreeNode | null, res) => {
    if (node !== null) {
      dfs(node.left, res);
      res.push(node.val);
      dfs(node.right, res);
    }
  }
  dfs(node, res);
  return res;
}
// 先序遍历
const xianxu = (node) => {
  let res = [];
  const dfs = (node, res) => {
      if (node !== null) {
          res.push(node.val);
          dfs(node.left, res);
          dfs(node.right, res);
      }
  };
  dfs(node, res);
  return res;
};
// 后序遍历
const houxu = (node) => {
  let res = [];
  const dfs = (node, res) => {
      if (node !== null) {
          dfs(node.left, res);
          dfs(node.right, res);
          res.push(node.val);
      }
  };
  dfs(node, res);
  return res;
};

const head = new TreeNode(1);
const headLeft = new TreeNode(2);
const headRight = new TreeNode(3);
const leftLeft = new TreeNode(4);
const rightRight = new TreeNode(5);
head.left = headLeft;
headLeft.left = leftLeft;
head.right = headRight;
headRight.right = rightRight;

console.log(zhongxu(head));
console.log(xianxu(head));
console.log(houxu(head));
