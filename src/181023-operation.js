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


/*
 * 8. 比较运算符
 * JavaScript 一共提供了8个比较运算符。
 */
/*
> 大于运算符
< 小于运算符
<= 小于或等于运算符
>= 大于或等于运算符
== 相等运算符
=== 严格相等运算符
!= 不相等运算符
!== 严格不相等运算符
*/
// 分成两类：相等比较和非相等比较
// 对于非相等比较：先看两个运算子是否是字符串，是则按字典顺序比较（实际上是比较Unicode码点）；否则将两个运算子都转成数值，再比较数值大小。

/*
 * 9. 字符串的非相等比较
 */
console.log('\'cat\' > \'dog\': ', 'cat' > 'dog' );
console.log('\'cat\' > \'catalog\': ', 'cat' > 'catalog' );
console.log('\'cat\' > \'Cat\': ', 'cat' > 'Cat' );
console.log('\'大\' > \'小\': ', '大' > '小' );

/*
 * 10. 非字符串的非相等比较
 */
// 原始类型
console.log('5 > \'4\': ', 5 > '4');
console.log('true > false: ', true > false);
console.log('2 > true: ', 2 > true);
// 任何值（包括NaN本身）与NaN比较，返回的都是false
console.log('1 > NaN: ', 1 > NaN);
console.log('1 <= NaN: ', 1 <= NaN);
console.log('\'1\' > NaN: ', '1' > NaN);
console.log('NaN > NaN: ', NaN > NaN);
console.log('NaN <= NaN: ', NaN <= NaN);
// 运算子是对象，会转为原始类型的值，再进行比较。
console.log('[2].valueOf().toString(): ', [2].valueOf().toString());
console.log('typeof [2].valueOf().toString(): ', typeof [2].valueOf().toString());
console.log('[2] > 11: ', [2] > 11);
console.log('[2] > \'11\': ', [2] > '11');
console.log('{ x: 2 } > { x: 1 }: ', { x: 2 } > { x: 1 });
console.log('{ x: 2 } >= { x: 1 }: ', { x: 2 } >= { x: 1 });


/*
 * 11. 严格相等运算符(严格不相等运算符在此基础上对结果取反）
 */
// 两个值的类型不同，直接返回false
console.log('1 === \'1\': ', 1 === '1');
// 同一类型的原始类型的值（数值、字符串、布尔值）比较时，值相同就返回true，值不同就返回false
// 需要注意的是，NaN与任何值都不相等（包括自身）。另外，正0等于负0
console.log('1 === 0x1: ', 1 === 0x1);
console.log('NaN === NaN: ', NaN === NaN);
console.log('+0 === -0: ', +0 === -0);
// 复合类型（对象、数组、函数）的数据比较时，而是比较它们是否指向同一个地址。(不等运算比较值）
console.log('{} === {}: ', {} === {});
console.log('[] === []: ', [] === []);
console.log('function () {} === function () {}: ', function () {} === function () {});
// undefined 和 null与自身严格相等
console.log('undefined === undefined: ', undefined === undefined);
console.log('null === null: ', null === null);


/*
 * 12. 相等运算符（不相等运算符在此基础上取反）
 */
// 同类型比较与严格相等运算符一样
// 原始类型：转换成数值再进行比较
console.log('1 == true: ', 1 == true);
console.log('\'true\' == true: ', 'true' == true);
console.log('\'\\n  123  \\t\' == 123: ', '\n  123  \t' == 123);
// 对象（这里指广义的对象，包括数组和函数）与原始类型的值比较时，对象转换成原始类型的值，再进行比较。
console.log('[1] == 1: ', [1] == 1);
console.log('[1] == \'1\': ',  [1] == '1');
console.log('[1, 2] == \'1,2\': ', [1, 2] == '1,2');
console.log('[1] == true: ', [1] == true);
console.log('[2] == true: ', [2] == true);
// undefined 和 null 与其他值比较都为false，它们相互比较时结果为true
console.log('false == null: ', false == null);
console.log('0 == null: ', 0 == null);
console.log('undefined == null: ', undefined == null);


/*
 * 13. 取反运算（!）
 * 对6个值取反为true，它们分别为：undefined、null、false、0、NaN、空字符串('')，其他都为false
 */
console.log('!undefined: ', !undefined);
console.log('!null: ', !null);
console.log('!false: ', !false);
console.log('!0: ', !0);
console.log('!NaN: ', !NaN);
console.log('!\'\': ', !'');


/*
 * 14. 且运算符（&&）（它的返回值不一定是布尔值）
 * 如果第一个运算子的布尔值为true，则返回第二个运算子的值（注意是值，不是布尔值）；
 * 如果第一个运算子的布尔值为false，则直接返回第一个运算子的值，且不再对第二个运算子求值
 */
console.log('\'t\' && \'\': ', 't' && '');
console.log('\'t\' && \'f\': ', 't' && 'f');
console.log('\'\' && \'f\': ', '' && 'f');
let x = 1;
console.log('let x = 1; (1 - 1) && ( x += 1): ', (1 - 1) && ( x += 1), ', x: ', x);

/*
 * 15. 或运算符（||）
 * 如果第一个运算子的布尔值为true，则返回第一个运算子的值，且不再对第二个运算子求值；
 * 如果第一个运算子的布尔值为false，则返回第二个运算子的值。
 */
console.log('\'t\' || \'\': ', 't' || '');
console.log('\'t\' || \'f\': ', 't' || 'f');
console.log('\'\' || \'f\': ', '' || 'f');
let y = 1;
console.log('let y = 1; 1 || ( y += 1): ', 1 || ( y += 1), ', y: ', y);


/*
 * 16. 三元条件运算符（ condition ? true_option : false_option ）
 */
console.log('\'t\' ? \'hello\' : \'world\': ', 't' ? 'hello' : 'world');
console.log('0 ? \'hello\' : \'world\': ', 0 ? 'hello' : 'world');


/*
 * 17. 二进制位运算符
 * | 二进制或运算符
 * & 二进制与运算符
 * ~ 二进制否运算符
 * ^ 二进制异或运算符
 * << 左移运算符
 * >> 右移运算符
 * >>> 带符号位的右移运算符
 */

function toInt32(value) {
    return value | 0;
}


/*
 * 18. 其他运算符
 */
// void，执行一个表达式，但不返回任何值
// 这个运算符的主要用途是浏览器的书签工具（bookmarklet），以及在超级链接中插入代码防止网页跳转。
// <script> function f() {console.log('Hello World');}</script>
// <a href="javascript: void(f())">文字</a>
// 等价于下面代码：
// <script> function f() {console.log('Hello World');}</script>
// <a href="http://example.com" onclick="f(); return false;">点击</a>
console.log('void 0: ', void 0);

// 逗号运算符返回后一个表达式的值
let d = 0;
let j = (d++, 10);
console.log('d: ', d);
console.log('j: ', j);


/*
 * 结合性
 */
// 大部分都是左结合，除了=（赋值运算）、?:（条件运算）、**（指数运算）
