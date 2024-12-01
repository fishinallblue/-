// 最大并发
// const fn = new LimitFetch(3)
// fn(url).then()...
// fn(url).then()...

const limitFetch = (max: number) => {
  let waitList: any = [];
  let count = 0;
  const fetchInfo = (url, resolve, reject) => {
    if (count > max) {
      waitList.push([
        url,
        resolve,
        reject,
      ])
    } else {
      count ++;
      return fetch(url).then((data) => {
        count --;
        if (count <= max && waitList.length) {
          fetchInfo(...(waitList.shift()))
        }
        resolve(data);
      }).catch(reject);
    }
  }
  return (url) => {
    return new Promise((resolve ,reject) => {
      fetchInfo(url, resolve, reject);
    })
  }
}
