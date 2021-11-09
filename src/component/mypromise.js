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
module.exports = myPromise