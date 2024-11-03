function instanceofFn(a, b) {
    let s = a.__proto__;
    let q = b.prototype;
    if (s === q) {
        return true;
    } else if (s == null || s == undefined) {
        return false
    } else {
        instanceofFn(s, b);
    }
}

// 2024.10.30
function instanceOf(a,b) {
    if (a.__proto__ === null) {
        return false;
    } else if (a.__proto__ === b.prototype) {
        return true;
    } else {
        return instanceOf(a.__proto__, b);
    }
}