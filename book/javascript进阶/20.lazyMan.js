// https://q.shanyue.tech/fe/code/810
/*
LazyMan("Hank");
// 输出：
// Hi!This is Hank!
 
LazyMan("Hank").sleep(10).eat("dinner");
// 输出：
// Hi! This is Hank!
// 等待10秒..
// Wake up after 10
// Eat dinner~
 
LazyMan("Hank").eat("dinner").eat("supper");
// 输出：
// Hi This is Hank!
// Eat dinner~
// Eat supper~
 
LazyMan("Hank").sleepFirst(5).eat("supper");
// 输出：
// 等待5秒..
// Wake up after 5
// Hi This is Hank!
// Eat supper
*/

// 2024.12.1
// 自己的方式，有想过用 Promise 但是不太熟悉Promise写法放弃了
// 持续优化，不要每个写一个next,而是实现一个中控的next
function LazyMan (name) {
  function Lazy (name) {
    let info = {
      fn: () => {
        console.log('this is ' + name);
        info.next?.fn?.();
      }
    }
    this.list = [info];
    this.name = name;
    this.sleepFirst = (time) => {
      let info = {
        fn: () => {
          setTimeout(() => {
            console.log(`Wake up after ${time}!`);
            info.next?.fn?.();
          }, time * 1000)
        }
      }
      this.list.unshift(info)
      return this;
    }
    this.eat = (name) => {
      let info = {
        fn: () => {
          console.log('eat' + name);
          info.next?.fn?.();
        }
      }
      this.list.push(info)
      return this;
    }
    this.sleep = (time) => {
      let info = {
        fn: () => {
          setTimeout(() => {
            console.log(`Wake up after ${time}!`);
            info.next?.fn?.();
          }, time * 1000)
        }
      }
      this.list.push(info)
      return this;
    }
    this.lian = () => {
      for(let i=0; i<this.list.length -1; i++) {
        this.list[i].next = this.list[i+1];
      }
    }
    setTimeout(() => {
      this.lian();
      console.log('this.list', this.list)
      this.list[0].fn();
    }, 0)
  }
  return new Lazy(name);
}
LazyMan("Hank").sleepFirst(5).eat("lunch").sleep(5).eat("supper");

// 网上的async 参考答案
class LazyLazyMan {
  constructor(name) {
    this.tasks = [];
 
    // 添加初始问候任务
    this.tasks.push(async () => {
      console.log(`Hi! This is ${name}!`);
    });
 
    // 开始执行任务队列
    this.runTasks();
  }
 
  async runTasks() {
    setTimeout(async () => {
      for (const task of this.tasks) {
        await task();
      }
    }, 0);
  }
 
  sleep(seconds) {
    this.tasks.push(async () => {
      console.log(`等待${seconds}秒..`);
      await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
      console.log(`Wake up after ${seconds}`);
    });
    return this;
  }
 
  sleepFirst(seconds) {
    this.tasks.unshift(async () => {
      console.log(`等待${seconds}秒..`);
      await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
      console.log(`Wake up after ${seconds}`);
    });
    return this;
  }
 
  eat(food) {
    this.tasks.push(async () => {
      console.log(`Eat ${food}~`);
    });
    return this;
  }
}
 
function LazyMan(name) {
  return new LazyLazyMan(name);
}