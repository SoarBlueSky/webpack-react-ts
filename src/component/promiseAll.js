function promiseAll(list) {
  if (list.length === 0) {
    return Promise.resolve([]);
  }
  return new Promise((resolve, reject) => {
    let result = [];
    let errorRes = [];
    let count = 0;
    list.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          result[index] = res;
         
        })
        .catch((err) => {
            result[index] = err;
          
        }).finally((res) => {
            count ++;
            if(count === list.length){
                resolve(result);
                // reject(errorRes);
            }
        })
    });
  });
}
const asyncFn = (value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), 10000));
const promises = [Promise.reject("Error"), Promise.resolve(2)];
promiseAll(promises)
  .then((res) => {
    console.log(res, "res");
  })
  .catch((err) => {
    console.log(err, "err");
  });
