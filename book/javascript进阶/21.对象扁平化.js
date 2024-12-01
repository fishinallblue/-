
/* 题目
var entryObj = {
  a: {
      b: {
          c: {
                  dd: 'abcdd'
          }
      },
      d: {
          xx: 'adxx'
      },
      e: 'ae'
  }
}

// 要求转换成如下对象
var outputObj = {
'a.b.c.dd': 'abcdd',
'a.d.xx': 'adxx',
'a.e': 'ae'
}

*/
// 2024.12.1 注意处理数组的情况
const flatObj = (obj) => {
  let target = {

  }
  const flat = (obj, str) => {
    if (typeof obj !== 'object') {
      target[str] = obj;
      return;
    }
    if (Array.isArray(obj)) {
      for(let i in obj) {
        flat(obj[i], str ? `${str}[${i}]` : i)
      }
    } else {
      for(let i in obj) {
        flat(obj[i], str ? `${str}.${i}` : i)
      }
    }
  }
  flat(obj, '');
  return target;
}
console.log(flatObj({
  a: {
      b: {
          c: {
                  dd: 'abcdd'
          }
      },
      d: {
          xx: 'adxx'
      },
      e: 'ae'
  }
}));
console.log(flatObj({ a: { aa: [{ aa1: 1 }] } }))