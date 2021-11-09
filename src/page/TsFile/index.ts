function TsT(){
    function identity<T>(arg: T): T {
        return arg;
    }
    let output = identity<string>("myString");  // type of output will be 'string'
    console.log(output,'output');
    console.log('1111');
}


export {TsT}