// 用户的scroll和resize方法会导致页面的不停的重复渲染dom，会出现页面卡顿
// 节流和防抖
// 1.节流： 保证一段时间内，核心代码只执行一次
// 2.防抖：一段时间吼，才能触发一次事件

// 节流的方法
function throttle(func,wait) {
    let previous = 0;
    return function() {
        let now = new Date();
        if (now - previous > wait) {
            func.apply(this, arguments);
            previous = now;
        }
    }
}
// 上面的代码有一点点问题，就是如果在很短的时间内点击很多次的话，那么有些点击会直接丢失
// 这其实有些是我们不希望的，有时候我们希望能够最后再执行一次点击
// 所以要用下面的方法优化代码

//  options就是是否开启上面那种模式的参数
// trailing 表示最后一次要触发的
function throttle(func,wait, options) {
    let previous = 0;
    let args, context, timeout;
    let later = function() {
        func.apply(context, args);
    }
    return function() {
        args = arguments;
        context = this;
        let now = new Date();
        let remaining = wait - (now - previous);
        if (remaining <= 0) {
            if (timeout) {
                clearTimeout(timeout)
                timeout = null;
            }
            func.apply(context, args);
            previous = now;
        } else if (!timeout && options.trailing !== false) {
            // 默认就是触发的
            timeout = setTimeout(later, remaining);
        }
    }
}

// 接下来继续加要求
// leading: true 表示第一次点击不执行
function throttle(func,wait, options) {
    let previous = 0;
    let args, context, timeout;
    let later = function() {
        previous = options.leading === false ? 0 : Date.now();
        func.apply(context, args);
    }
    return function() {
        args = arguments;
        context = this;
        let now = new Date();
        if(!previous && options.leading === false) previous = now;
        let remaining = wait - (now - previous);
        if (remaining <= 0) {
            if (timeout) {
                clearTimeout(timeout)
                timeout = null;
            }
            func.apply(context, args);
            previous = now;
        } else if (!timeout && options.trailing !== false) {
            // 默认就是触发的
            timeout = setTimeout(later, remaining);
        }
    }
}

// 防抖动： 狂点的时候不触发，松手的时候才触发
function debounce(func, wait) {
    let timeout ;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(this, arguments);
        }, wait);
    }
}
// 有个bug，第一次点的时候并没有触发
// 第三个参数表示的就是首次先触发一次
function debounce(func, wait, immidate) {
    let timeout ;
    return function() {
        clearTimeout(timeout);
        if (immidate) {
            let callNow = !timeout;
            if(callNow) {
                func.apply(this, arguments);
            }
        }
        timeout = setTimeout(function() {
            func.apply(this, arguments);
            timeout = null;
        }, wait);
    }
}

// 2024.11.18
// 节流 5 分钟内最多触发一次
const throttle = (fn, delay) => {
    let lastTime = 0;
    return function(...args) {
        const nowTime = Date.now();
        if (nowTime - lastTime > delay) {
            lastTime = nowTime;
            fn(...args);
        }
    }
}

// 防抖 debounce
const debounce = (fn, delay) => {
    let timer = null;
    return function(...args) {
        let _this = this;
        setTimeout(timer);
        timer = setTimeout(() => {
            fn.call(_this, ...args);
        }, delay)
    }
}


// 2024.12.1
const debounce = (fn, delay) => {
    let timer = null;
    return function(...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            fn(...args);
        }, delay);
    }
}

const throttle = (fn, delay) => {
    let lastTime = 0;
    return function(...args) {
        const nowTime = Date.now();
        if (nowTime - lastTime > delay) {
            lastTime = nowTime;
            return fn(...args);
        }
    }
}