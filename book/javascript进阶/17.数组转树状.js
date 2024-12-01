/* 列表转成树形结构
[
  {
      id: 1,
      text: '节点1',
      parentId: 0 //这里用0表示为顶级节点
  },
  {
      id: 2,
      text: '节点1_1',
      parentId: 1 //通过这个字段来确定子父级
  }
  ...
]

转成
[
  {
      id: 1,
      text: '节点1',
      parentId: 0,
      children: [
          {
              id:2,
              text: '节点1_1',
              parentId:1
          }
      ]
  }
]
*/
// 1. 递归方法
const arrToTree = (arr) => {
  let pidChildMaps = {};
  let target = [];
  arr.forEach(element => {
    if (element.parentId) {
      if (pidChildMaps[element.parentId]) {
        pidChildMaps[element.parentId].push(element)
      } else {
        pidChildMaps[element.parentId] = [element]
      }
    }
  });
  target = arr.filter(element => !element.parentId);
  const parseTarget = (target) => {
    for(let i = 0; i< target.length; i++) {
      let temp = target[i];
      if (pidChildMaps[temp.id]) {
        temp.children = parseTarget(pidChildMaps[temp.id])
      }
    }
    return target;
  }
  return parseTarget(target);
}

// 非递归方法
// 需要转换一下思路，感觉一时之间想不出来
function arrayToTree1(arr) {
  let obj = {};
  // obj对象的key为arr中每一个对象的id，value为每一个对象
  arr.map((item) => {
    obj[item.id] = item;
  });
  
  // 最终要返回的树型数组
  let newArr = [];
  
  // 对原一维数组进行遍历
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]; // 原一维数组中的每一项
    let parent = obj[item.parentId]; // 从之前保存的对象中取出当前项的父项
    if (parent) {
      if (parent.children) {
        parent.children.push(item); // 父项的children加入子项
      } else {
        parent.children = [];
        parent.children.push(item);
      }
    } else {
      newArr.push(item);   // 否则直接将当前项加入最后的树状数组作为根（因为此项没有父项）
    }
  }
  return newArr;
};

console.log(JSON.stringify(arrayToTree1([
  {
      id: 3,
      text: '节点1_1_1',
      parentId: 2
  },
  {
      id: 1,
      text: '节点1',
      parentId: 0 //这里用0表示为顶级节点
  },
  {
      id: 2,
      text: '节点1_1',
      parentId: 1 //通过这个字段来确定子父级
  }
])))