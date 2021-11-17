const PENDING = 'PENDING',
    FULFILLED = 'FULFILLED',
    REJECTED = 'REJECTED';
function resolePromise(promise2,x,resolve,reject) {
    if(promise2 === x){
        return reject(new TypeError('error'))
    }else{
        let called = false;

        if( (typeof x === 'objecy' && typeof x !== null) || typeof x === 'function'){
            try{
                let then = x.then;
                if(typeof then === 'function'){
                    then.call(x,(y) =>{
                        if(called) return;
                        called = true;
                        resolve(y);
                        resolePromise(promise2,y,resolve,reject);
                    },(r) =>{
                        if(called) return;
                        called = true;
                        reject(r);
                    })
                }else{
                    resolve(x)
                }
            } catch(e){
                if(called) return;
                called = true;
                reject(e);
            }
        }else{
            resolve(x)   
        }
    }
}

function iterableToArray (iterable) {
    if (typeof Array.from === 'function') {
        // ES2015+, iterables exist
        iterableToArray = Array.from;
        return Array.from(iterable);
    }

    // ES5, only arrays and array-likes exist
    iterableToArray = function (x) { return Array.prototype.slice.call(x); };
    return Array.prototype.slice.call(iterable);
}
class myPromise {
    constructor(excutor){
        this.state = PENDING;
        this.value = undefined;//resolve的值
        this.reason = undefined;//rject的值
        this.FULFILLEDARR = [];
        this.REJECTEDARR = [];
        const resolve = (value) =>{
            if(this.state === PENDING) {
                this.value = value; 
                this.state = FULFILLED;
                this.FULFILLEDARR.forEach(fn => fn())
            }
        }

        const reject = (reason) =>{
            if(this.state === PENDING) {
                this.reason = reason; 
                this.state = REJECTED;
                this.REJECTEDARR.forEach(fn => fn())
            }
        }
        try {
            excutor(resolve,reject)
        } catch (e) {
            reject(e)
        }
    }
    then(onFulfilled,onRejected){
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };
        let Promise2 = new Promise((resolve, reject) =>{
            if(this.state === FULFILLED){
                setTimeout(() =>{
                    try{
                        let x = onFulfilled(this.value);
                        resolePromise(Promise2,x,resolve,reject);
                    } catch(e) {
                        reject(e);
                    }
                },0)
            }
            if(this.state === REJECTED){
                setTimeout(() =>{
                    try{
                        let x = onRejected(this.reason);
                        resolePromise(Promise2,x,resolve,reject);
                    } catch(e) {
                        reject(e);
                    }
                },0)
            }
            if(this.state === PENDING){
                //订阅
                this.FULFILLEDARR.push(() =>{
                    try{
                        let x = onFulfilled(this.value)
                        resolePromise(Promise2,x,resolve,reject);
                    } catch(e) {
                        reject(e);
                    }
                })
                this.REJECTEDARR.push(() =>{
                    try{
                        let x = onRejected(this.reason);
                        resolePromise(Promise2,x,resolve,reject);
                    } catch(e) {
                        reject(e);
                    }
                })
            }
        })
        return Promise2;
    }
    catch(err){
        return this.then(null,err);
    }
}

myPromise.resolve = function (value) {
    if (value instanceof Promise) return value;

    if (value === null) return NULL;
    if (value === undefined) return UNDEFINED;
    if (value === true) return TRUE;
    if (value === false) return FALSE;
    if (value === 0) return ZERO;
    if (value === '') return EMPTYSTRING;

    if (typeof value === 'object' || typeof value === 'function') {
        try {
        var then = value.then;
        if (typeof then === 'function') {
            return new myPromise(then.bind(value));
        }
        } catch (ex) {
        return new myPromise(function (resolve, reject) {
            reject(ex);
        });
        }
    }
    return valuePromise(value);
};

myPromise.all = function (arr) {
    var args = iterableToArray(arr);
    
    return new myPromise(function (resolve, reject) {
      if (args.length === 0) return resolve([]);
      var remaining = args.length;
      function res(i, val) {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          if (val instanceof myPromise && val.then === myPromise.prototype.then) {
            while (val._state === 3) {
              val = val._value;
            }
            if (val._state === 1) return res(i, val._value);
            if (val._state === 2) reject(val._value);
            val.then(function (val) {
              res(i, val);
            }, reject);
            return;
          } else {
            var then = val.then;
            if (typeof then === 'function') {
              var p = new myPromise(then.bind(val));
              p.then(function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      }
      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };
  
  myPromise.reject = function (value) {
    return new myPromise(function (resolve, reject) {
      reject(value);
    });
  };

export default myPromise;