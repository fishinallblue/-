// 两两比较，一次循环后，冒泡到最上面的，就是最大的数
function sort(arr) { 
  for(let i=0; i< arr.length; i++) {
    for(let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp;
      }
    }
  }
  return arr
}
console.log(sort([5, 6, 3, 1, 8, 7, 2, 4]))