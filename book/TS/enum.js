class Arrange {
  constructor() {
    this.tasks = [] // 任务队列
    this.forward = 1 // 添加任务的方向 -> 1表示向后添加，0表示向前添加
    this.arrangePos = 0 // arrange 任务在task中的位置
  }
  addTaskFunc(type, cb) {
    if (this[type]) {
      return this
    }
    this[type] = () => cb({
      tasks: this.tasks,
      forward: this.forward,
      arrangePos: this.arrangePos,
      createNewTask: this.createNewTask.bind(this)
    })
    return this
  }
  createNewTask(time = 0, message) {
    const newTask = () => {
      setTimeout(() => {
        this.next()
      }, time * 1000)
      if (typeof message === 'string') {
        console.log(message)
      } else if (typeof message === 'function') {
        message()
      }
    }
    return newTask
  }
  waitFirst(time) {
    const newTask = this.createNewTask(time)
    this.forward = 0
    this.tasks.splice(this.arrangePos, 0, newTask)
    this.arrangePos++
    return this
  }
  wait(time) {
    const newTask = this.createNewTask(time)
    this.forward = 1
    this.tasks.push(newTask)
    return this
  }
  do(info) {
    const newTask = this.createNewTask(0, `start to ${info}`)
    if (this.forward) {
      this.tasks.push(newTask)
    } else {
      this.tasks.splice(this.arrangePos, 0, newTask)
      this.arrangePos++
    }
    return this
  }
  // 执行队列
  next() {
    if (this.tasks.length > 0) {
      let fn = this.tasks.shift()
      fn()
    }
  }
  start(name) {
    const newTask = this.createNewTask(0, `${name} is notified`)
    this.tasks.push(newTask)
    setTimeout(() => {
      this.next() // 需要有一个初始的start
    }, 0)
    return this
  }
}

function arrange(name) {
  let arr = new Arrange()
  // 可以在这里添加自己的处理逻辑
  // arr.addTaskFunc('finally', function({ tasks, forward, arrangePos, createNewTask}){
  //     const newTask = createNewTask(0, 'finally done')
  //     tasks.push(newTask)
  //     return arr
  // })
  return arr.start(name)
}