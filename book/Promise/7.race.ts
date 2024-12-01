Promise.race = (fns) => {
  return new Promise((resolve, reject) => {
    for(let i=0; i< fns.length; i++) {
      Promise.resolve(fns[i]).then((data) => {
        resolve(data);
      }).catch(e => {
        reject(e);
      })
    }
  });
}