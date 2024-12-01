const sleep = (time) => {
  let lastTime = Date.now();
  while(time>0) {
    let nowTime = Date.now();
    time = time - (nowTime - lastTime);
    lastTime = nowTime;
  }
}