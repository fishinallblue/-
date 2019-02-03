// requestAnimationFrame: 可以采用系统时间间隔，一秒钟走60次，保持最佳的绘制效率
window.addEventListener('scroll', scroll);
let flag = false;
function scroll() {
    if (!flag) {
        flag = true;
        requestAnimationFrame(logger);
    }
}
logger = function() {
    flag = false;
    console.log('log')
}