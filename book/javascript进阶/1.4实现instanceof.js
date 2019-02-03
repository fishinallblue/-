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