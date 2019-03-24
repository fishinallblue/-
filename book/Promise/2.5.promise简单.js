const PENDING = 'pengding';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function myPromise(fn) {
    const that = this;
    that.status = PENDING;
    that.value = null;
    that.resolvedCallbacks = [];
    that.rejectedCallbacks = [];

    function reslove(value) {
        if (that.status == PENDING) {
            that.status = RESOLVED;
            that.value = value;
            that.resolvedCallbacks.map(fn => fn(value));
        }
    }
    function reject(value) {
        if (that.status == PENDING) {
            that.status = REJECTED;
            that.value = value;
            that.rejectedCallbacks.map(fn => fn(value));
        }
    }
    try{
        fn(reslove, reject);
    }catch(e) {
        reject(e);
    }
}
myPromise.prototype.then = function(onfulfilled, onrejected) {
    const that = this;
    if (typeof onfulfilled !== 'function') {
        onfulfilled = function(s){return s};
    }

    if (typeof onrejected !== 'function') {
        onfulfilled = function(s){ throw s};
    }

    if (that.status == PENDING) {
        that.rejectedCallbacks.push(onrejected);
        that.resolvedCallbacks.push(onfulfilled);
    }

    if (that.status == RESOLVED) {
        onfulfilled(that.value);
    }

    if (that.status == REJECTED) {
        onrejected(that.value);
    }

}