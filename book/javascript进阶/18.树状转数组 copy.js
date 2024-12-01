const convert = (tree) => {
  let arr = [];
  const bianli = (tree, parentId) => {
    if (Array.isArray(tree)) {
      for(let i = 0; i< tree.length; i++) {
        if (tree[i].children) {
          bianli(tree[i].children, tree[i].id)
        }
        arr.push({
          id: tree[i].id,
          parentId,
        })
      }
    }
  }
  bianli(tree, 0);
  return arr;
}
console.log(convert([{"id":1,"text":"节点1","children":[{"id":2,"text":"节点1_1","children":[{"id":3,"text":"节点1_1_1"}]}]}]
))