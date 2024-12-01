const arrFlat = (arr) => {
  let target = [];
  const flat = (newArr) => {
    if (Object.prototype.toString.call(newArr) === '[object Array]') {
      newArr.forEach((info) => {
        flat(info);
      });
    } else {
      target.push(newArr);
    }
  }
  flat(arr);
  return target;
}
// console.log(arrFlat([1,2,[3,4,[5,[6]]]]));

// reduce实现
const reduceArr = (arr) => {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    return arr;
  }
  return arr.reduce((pre, temp) => {
    if (Object.prototype.toString.call(temp) === '[object Array]') {
      temp.forEach((info) => {
        reduceArr(info);
      });
    } else {
      pre.push(temp);
    }
    return pre;
  }, [])
}
// console.log(reduceArr([1,2,[3,4,[5,[6]]]]));

const reduceArr1 = (arr) => {
  return arr.reduce((pre, temp) => {
    if (Array.isArray(temp)) {
      return pre.concat(reduceArr1(temp));
    } else {
      pre.push(temp);
      return pre;
    }
  },[])
}

console.log(reduceArr1([1,2,[3,4,[5,[6]]]]));