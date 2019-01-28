var instanceOf = (left, right) => {
    let proto = right.prototype;
    let info = left.__proto__;
    while(proto != info) {
        if (info == null) {
            return false;
        }
        info = info.__proto__;
    }
    return true;
}