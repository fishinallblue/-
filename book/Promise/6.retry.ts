const retry = (fnPromise, times) => {
  let count = 0;
  const fn = (resolve, reject) => Promise.resolve(fnPromise).then((data) => {
      resolve(data)
    }).catch(e => {
      if (count < times) {
        count++;
        return fn(resolve, reject);
      } else {
        reject(e)
      }
    })
  return new Promise((resolve, reject) => {
    fn(resolve, reject)
  })
}