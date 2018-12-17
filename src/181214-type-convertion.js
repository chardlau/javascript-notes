
/*
 * 1. 强制转换
 */

// Number
// 对象转换规则：先看valueOf()的返回值是否可以转换，再看toString()返回的值，二者皆不可则报错
console.log('Number(324): ', Number(324));
console.log('Number(\'1.2\'): ', Number('1.2'));
console.log('Number(\'324abc\'): ', Number('324abc'));
console.log('Number(\'\'): ', Number(''));
console.log('Number(true): ', Number(true));
console.log('Number(false): ', Number(false));
console.log('Number(undefined): ', Number(undefined));
console.log('Number(null): ', Number(null));
console.log('Number({a: 1}): ', Number({a: 1}));
console.log('Number([1, 2, 3]): ', Number([1, 2, 3]));
console.log('Number([5]): ', Number([5]));

// String
// 对象转换规则：先看toString()返回的值，再看valueOf()的返回值是否可以转换，二者皆不可则报错
console.log('String(1.2): ', String(1.2));
console.log('String(\'abc\'): ', String('abc'));
console.log('String(true): ', String(true));
console.log('String(false): ', String(false));
console.log('String(undefined): ', String(undefined));
console.log('String(null): ', String(null));
console.log('String({a: 1}): ', String({a: 1}));
console.log('String([1, 2, 3]): ', String([1, 2, 3]));

// Boolean
// 除以下值其他都返回true
console.log('Boolean(undefined): ', Boolean(undefined));
console.log('Boolean(null): ', Boolean(null));
console.log('Boolean(0): ', Boolean(0));
console.log('Boolean(NaN): ', Boolean(NaN));
console.log('Boolean(\'\'): ', Boolean(''));
// 空对象、空数组都为true
console.log('Boolean({}): ', Boolean({}));
console.log('Boolean([]): ', Boolean([]));
console.log('Boolean(new Boolean(false)): ', Boolean(new Boolean(false)));


/*
 * 2. 自动转换
 * 自动转换以强制转换的规则为基础，
 * 自动转换的规则是这样的：预期什么类型的值，就调用该类型的转换函数。
 */


// 自动转换为数值：
// 除了加法运算符（+）有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值。
// null转为数值时为0，而undefined转为数值时为NaN
