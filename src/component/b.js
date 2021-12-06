import { obj } from './a';
console.log(obj,'obj');
setTimeout(function() {
    obj.name = 2;
    console.log(obj);
},1000)