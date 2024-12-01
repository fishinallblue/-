const all = (fns) => {
  return new Promise((resolve, reject) => {
    let resCount = 0;
    let res = new Array(fns.length);
    for(let i = 0; i< fns.length; i++) {
      Promise.resolve(fns[i]).then((data) => {
        resCount ++
        res[i] = data;
        if (resCount === fns.length) {
          resolve(res);
        }
      }).catch(e => {
        reject(e);
      })
    }
  })
}