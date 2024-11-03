// 观察者模式
class Watcher {
  constructor() {

  }
  update(event: string) {
    console.log('upadte event', event);
  }
}

type WatcherMaps = Record<string, Array<Watcher>>

class Sub {
  watcherMaps: WatcherMaps = {

  }
  add(event: string, watcher: Watcher) {
    if (!this.watcherMaps[event]) {
      this.watcherMaps[event] = [];
    }
    const tempWatcher = this.watcherMaps[event].find(item => item === watcher)
    if (!tempWatcher) {
      this.watcherMaps[event].push(watcher);
    }
  }
  remove(event: string, watcher: Watcher) {
    if (!this.watcherMaps[event]) {
      return;
    }
    const index = this.watcherMaps[event].findIndex(item => item === watcher)
    if (index === -1) {
      return
    }
    this.watcherMaps[event].splice(index, 1)
  }
  emit(event: string) {
    if (this.watcherMaps[event]?.length) {
      this.watcherMaps[event].forEach(element => {
        element.update(event);
      });
    }
  }
}
const sub = new Sub();
const watcherhe = new Watcher();

sub.add('eat', watcherhe)
sub.emit('eat')
sub.remove('eat', watcherhe)
sub.emit('eat')
