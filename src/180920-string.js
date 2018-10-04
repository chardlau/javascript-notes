/*
 * 1. 转义
 * \0 ：null（\u0000）
 * \b ：后退键（\u0008）
 * \f ：换页符（\u000C）
 * \n ：换行符（\u000A）
 * \r ：回车键（\u000D）
 * \t ：制表符（\u0009）
 * \v ：垂直制表符（\u000B）
 * \' ：单引号（\u0027）
 * \" ：双引号（\u0022）
 * \\ ：反斜杠（\u005C）
 *
 * \HHH: H为八进制符号，三个字符一起表示ASCII表的256个字符中的一个
 * \xHH: H为十六进制符号，两个字符一起表示ASCII表的256个字符中的一个
 * \uXXXX: X为十六进制符号，四个字符一起可以表示Unicode码点
 *
 * 如果在非特殊字符前面使用反斜杠，则反斜杠会被省略
 */
console.log('\\251: ', '\251');
console.log('\\xA9: ', '\xA9');
console.log('\\u00A9: ', '\u00A9');
console.log('\\a: ', '\a');


/*
 * 2. 字符串索引
 * 字符串可以类似数组那样使用索引访问其中的字符
 */
let s = 'hello';
console.log('s: ', s);
console.log('s[0]: ', s[0]);
console.log('s[4]: ', s[4]);
console.log('s[10]: ', s[10]);
console.log('s[-1]: ', s[-1]);
console.log('s[\'x\']: ', s['x']);


/*
 * 3. 字符串一旦创建就不能改变，因此它不能像数组那样修改每一个字符
 */
delete s[0];
console.log('delete s[0], s: ', s);
s[1] = 'a';
console.log('s[1] = \'a\', s: ', s);
s[5] = '.';
console.log('s[5] = \'.\', s: ', s);


/*
 * 4. 字符串的length属性
 * 该属性也无法改变
 */
console.log('s.length: ', s.length);
s.length = 3;
console.log('s.length = 3, s.length: ', s.length);
s.length = 7;
console.log('s.length = 7, s.length: ', s.length);


/*
 * 5. 字符集
 * JavaScript使用Unicode字符集。JavaScript引擎的所有字符也使用Unicode表示。
 * 例如下面代码可以使用Unicode定义代码变量，JavaScript引擎解析代码时可以正确识别变量名称。
 */
let f\u006F\u006F = 'abc';
console.log('f\\u006F\\u006F: ', f\u006F\u006F);
console.log('foo: ', foo);

/*
 * TODO UTF-16有多重字符长度？
 * 每个字符在JavaScript内部都是以16位（即2个字节）的 UTF-16 格式储存。
 * JavaScript 对 UTF-16 的支持是不完整的，由于历史原因，只支持两字节的字符，不支持四字节的字符。
 * 这是因为 JavaScript 第一版发布的时候，Unicode 的码点只编到U+FFFF，因此两字节足够表示了。
 * 后来，Unicode 纳入的字符越来越多，出现了四字节的编码。
 * 但是，JavaScript 的标准此时已经定型了，统一将字符长度限制在两字节，导致无法识别四字节的字符。
 * 四字节字符𝌆，Unicode码点U+1D306，写成 UTF-16 就是0xD834 0xDF06。
 * 浏览器会正确识别这是一个字符（支持4字节），但是 JavaScript 无法识别，会认为这是两个字符。
 */
console.log('\'𝌆\'.length: ', '𝌆'.length );
