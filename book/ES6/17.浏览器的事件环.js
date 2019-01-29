// 浏览器中的事件环，会先执行主站中的代码执行后会清空微任务队列 -> 取一个宏任务执行 -> 再去清空微任务 -> 再取一个宏任务

// 宏任务有哪些 微任务有哪些
// microtask 微任务 Promise MutaiionOberserve MessageChannel
// macrotask 宏任务 setImmediate(IE 下面才有) setTimeOut