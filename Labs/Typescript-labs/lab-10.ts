function sample<T>(arg:T):T{
    return arg;
}
let result1=sample<string>("sample string value");
let result2=sample<number>(100);

console.log(result1);
console.log(result2);