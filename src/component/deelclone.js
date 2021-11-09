function deelclone(target) {
    if(target == undefined || typeof target !== 'object'){
        return target;
    }
    if(target instanceof Date){
        return new Date(target);
    }
    if(target instanceof RegExp){
        return new RegExp(target);
    }
    let newTarget = new target.constructor();
    for(let key in target){
        if(target.hasOwnProperty(key)){ //判断是否在他的本身
            newTarget[key] = target[key];
        }
    }
    return newTarget;
}
export default deelclone;
