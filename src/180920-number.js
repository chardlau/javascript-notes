/*
 * 1. IEEE754浮点数的规格化表示
 * https://blog.csdn.net/dingzhenli1993/article/details/54017921
 */



/*
 * 2. number包含了整数和浮点数。
 * 实际上js中并没有整数类型，所有数据都是以IEEE754规范定义的64位双精度浮点数表示。
 * 整数只有在运算时才会把数值转成32位整数再进行运算。
 */


/*
 * 3. 浮点数表示的数组不是精确值，所以进行比较和运算时需要小心
 */
console.log('0.1 + 0.2 === 0.3  : ', (0.1 + 0.2 === 0.3));
console.log('0.3 / 0.1  : ', (0.3 / 0.1));
console.log('(0.3 - 0.2) === (0.2 - 0.1)  : ', ((0.3 - 0.2) === (0.2 - 0.1)));


/*
 * 4. 精度
 * 第1位：符号位，0表示正数，1表示负数
 * 第2位到第12位（共11位）：指数部分
 * 第13位到第64位（共52位）：小数部分（即有效数字）（规格化表示隐藏了首位1，所以能表示53位）
 */


/*
 * 4. 数值的表示方式
 * 科学表示法
 * 按进制表示： 10进制、16进制、8进制、2进制，进制表示如果符号不合法将报错
 */

console.log('0xff: ', 0xff);
console.log('0o77: ', 0o77);
// console.log('0o88: ', 0o88); //  Invalid or unexpected token


/*
 * 5. NaN Infinity
 */
console.log('NaN: ', NaN);
console.log('typeof NaN: ', typeof NaN);
console.log('0 * Infinity: ', 0 * Infinity);
console.log('Infinity - Infinity: ', Infinity - Infinity);
console.log('Infinity / Infinity: ', Infinity / Infinity);
// NaN与任何数（包括它自己）的运算，得到的都是NaN
console.log('NaN + 1: ', NaN + 1);
console.log('NaN * NaN: ', NaN * NaN);
console.log('0 / 0: ', 0 / 0);
console.log('1 / 0: ', 1 / 0);
console.log('-1 / 0: ', -1 / 0);
console.log('Math.pow(2, 1024): ', Math.pow(2, 1024));
// Infinity与NaN比较，总是返回false
console.log('Infinity > NaN: ', Infinity > NaN);


/*
 * 6. parseInt与parseFloat
 * 从左到右逐个字符检查，直到遇到不合法字符或者结束符就返回。返回结果为已经正确解析的值或者已经NaN
 * 自动过滤前导空字符
 */
// parseInt无法识别科学表示法的字符串，parseFloat可以
console.log('parseInt(3.14e3)', parseInt('3.14e3'));
console.log('parseFloat(3.14e3)', parseFloat('3.14e3'));
console.log('parseInt(\'\')', parseInt(''));
console.log('parseFloat(\'\')', parseFloat(''));


/*
 * 7. isNaN
 * 把参数转换成数值类型，转换结果是数值类型，则返回false，否则返回true
 */

isNaN([]);  // false
isNaN([123]);  // false
isNaN(['123']);  // false
isNaN({});  // true
isNaN(Number({}));  // true
isNaN(['xzy']);  // true
isNaN(Number(['xzy']));  // true

/*
 * 8. isFinite
 * 检查数值是否为有限数值，同样会进行类型转换
 */
isFinite(Infinity); // false
isFinite(-Infinity); // false
isFinite(NaN); // false
isFinite(undefined); // false
isFinite(null); // true
isFinite(-1); // true
