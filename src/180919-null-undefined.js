/*
 * 1. null与undefined
 */
if (!undefined) {
    console.log('undefined is false');
}
// undefined is false
if (!null) {
    console.log('null is false');
}
// null is false
console.log(undefined == null);
// true


/*
 * 2. null可转为0，undefined不能，为NaN
 */
console.log(Number(null)); // 0
console.log(5 + null);// 5
console.log(Number(undefined)); // NaN
console.log(5 + undefined); // NaN


/*
 * 3. 关于null，以下是否应该作为习惯用法？
 * 调用函数如果没有参数，用null；定义函数的默认值可以设置为null
 * function f(x = null) { console.log(x) }
 * f(1) or f(null)
 */
