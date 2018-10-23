/*
 * 1. Js的指数运算符号是"**"，而不是其他语言的"^"，这里"^"为异或
 */
console.log('2**10: ', 2**10);
console.log('2^10: ', 2^10);
console.log('2^10 => 0010^1010 => 1000 => 8');


/*
 * 2. 加法运算
 */
console.log('1 + 1: ', 1 + 1);
console.log('true + true: ', true + true);
console.log('1 + true: ', 1 + true);
console.log('\'a\' + \'bc\': ', 'a' + 'bc');
console.log('1 + \'a\': ', 1 + 'a');
console.log('false + \'a\': ', false + 'a');
// 加法运算符是在运行时决定，到底是执行相加，还是执行连接。也就是说，运算子的不同，导致了不同的语法行为，这种现象称为“重载”（overload）。
console.log('\'3\' + 4 + 5: ', '3' + 4 + 5);
console.log('3 + 4 + \'5: ', 3 + 4 + '5');
// 其他算术运算符都不会发生重载。它们的规则是：所有运算子一律转为数值，再进行相应的数学运算。
console.log('1 - \'2\': ', 1 - '2');
console.log('1 * \'2\': ', 1 * '2');
console.log('1 / \'2\': ', 1 / '2');

/*
 * 3. 对象的相加
 */
