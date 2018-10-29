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
 * 作为运算子调用对象的valueOf方法，修改valueOf方法就可以定制对象作为运算子的值
 * 如果参加操作的运算子有一个字符串，则对象也需要转换为字符串类型，将调用toString方法
 * 这里有一个特例，如果运算子是一个Date对象的实例，那么会优先执行toString方法。
 */
let obj1 = {};
obj1.valueOf = function () { return 1; };
obj1.toString = function () { return 'hello'; };
console.log('obj1: ', obj1);
console.log('obj1.valueOf(): ', obj1.valueOf());
console.log('obj1.valueOf().toString(): ', obj1.valueOf().toString());
console.log('1 + obj1: ', obj1 + 1);
console.log('\'a\' + obj1: ', obj1 + 'a');
let obj2 = new Date();
obj2.valueOf = function () { return 1; };
obj2.toString = function () { return 'hello'; };
console.log('obj2: ', obj2);
console.log('obj2.valueOf(): ', obj2.valueOf());
console.log('obj2.valueOf().toString(): ', obj2.valueOf().toString());
console.log('1 + obj2: ', obj2 + 1);
console.log('\'a\' + obj2: ', obj2 + 'a');


/*
 * 4. 取余
 * 运算结果的正负号由第一个运算子的正负号决定
 */
console.log('5 % 3: ', 5 % 3);
console.log('-5 % 3: ', -5 % 3);


/*
 * 5. 数值运算符（+）
 * 相当于Number函数
 */
console.log('+true: ', +true);
console.log('+[]: ', +[]);
console.log('+{}: ', +{});

/*
 * 6. 负数值运算符（-）
 * 将一个值转为数值，只不过得到的值正负相反
 */
console.log('-true: ', -true);
console.log('-[]: ', -[]);
console.log('-{}: ', -{});


/*
 * 7. 指数运算符
 * 指数运算符是右结合，而不是左结合。即多个指数运算符连用时，先进行最右边的计算。
 */
console.log('(2**3)**2: ', (2**3)**2);
console.log('2**(3**2): ', 2**(3**2));
console.log('2**3**2: ', 2**3**2);
