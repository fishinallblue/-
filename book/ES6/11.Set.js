// 利用js实现ES6的Set对象
// 首先明确 set是一个类数组对象，但是她的成员都是唯一的
// 使用new Set()来创建set对象
// 方法有四个：add(value) delete(value) has(value) clear

var Set = function (arr) {
    this.value = arr ? arr : [];
    this.value = this.quchong(this.value);
}
Set.prototype.quchong =  function (arr) {
    // 去掉数组中重复的值
    if (!Array.isArray(arr) || arr.length == 1) {
        return arr;
    }
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}
Set.prototype.add = function (num) {
    if (!this.has(num)) {
        this.value.push(num);
    }
    return this;
}
Set.prototype.equal = function (num, num2) {
    if (isNaN(num) && isNaN(num2)) {
        return true;
    }
    return num === num2;
}

Set.prototype.has = function (num) {
    for (var i = 0; i < this.value.length; i++) {
        if (this.equal(num, this.value[i])) {
            return true;
        }
    }
    return false;
}
Set.prototype.delete = function (num) {
    for (var i = 0; i < this.value; i++) {
        if (this.equal(num, this.value[i])) {
            return this.value.splice[i, 1];
        }
    }
    return false;
}
Set.prototype.clear = function () {
    this.value = [];
}

var arr = [1, 13, 24, 11, 11, 14, 1, 2];
var set = new Set(arr);

console.log(set.has(13));
console.log(set.has(8));
console.log(set.add(8).add(23));
console.log(set.has(8));
console.log(set.delete(8));
console.log(set.has(8));
console.log(set.delete(14));
console.log(set.value);
console.log(set.clear());
console.log(set.value);

// 数组去重
let arr = [1,2,34,45,5,6,6]
let s = new Set(arr)
console.log(s)

// 数组并集
let arr1 = [1, 2, 3]
let arr2 = [3, 4, 5]
let s1 = new Set([...arr1, ...arr2])
console.log([...s1])

// 数组交集
let s2 = new Set(arr1);
let s3 = new Set(arr2);
let result = [...s2].filter((item) => {
    return s3.has(item);
})
console.log(result)

// 数组补集
let result1 = [...s2].filter((item) => {
    return !s3.has(item);
})
console.log(result1)