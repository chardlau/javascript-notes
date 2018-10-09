/*
 * 1. 初始化对象
 */
let obj1 = {
    field: 'value'  // 可以不加引号
};

let obj2 = {
    'field': 'value'    // 可以加引号
};

let obj3 = {
    1: 'value'  // 数值作为key将被自动转为字符串
};

let obj4 = {
    '1+t': 'value'  // 不符合标识符命名规则的符号不能作为关键词，必须加引号
};

/*
 * 2. 对象的属性值可以是任一类型。多个属性之间可以逗号分隔，最后一个属性既可以加可以不加
 */
let obj5 = {
    v1: 1,
    v2: 'string',
    v3: false,
    v4: undefined,
    v5: null,
    v6: [],
    v7: {},
    v8: { sub: 'value' },
    v9: function () { console.log('v9 is a function.')}
};


/*
 * 3. 对象的引用：如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。
 * 修改其中一个变量，会影响到其他所有变量。
 *
 */
let o1 = {};
let o2 = o1;
console.log('o1 = o2 = {}');

o1.a = 1;
console.log('o1.a = 1');
console.log('o2.a: ', o2.a); // 1

o2.b = 2;
console.log('o2.b = 2');
console.log('o1.b: ', o1.b); // 2


/*
 * 4. 对象大括号带来的歧义
 * 如果行首是一个大括号，它到底是表达式还是语句？
 * V8 引擎规定，如果行首是大括号，一律解释为对象。不过，为了避免歧义，最好在大括号前加上圆括号。
 * 这种差异在eval函数（作用是对字符串求值）中反映得最明显。
 */
console.log('eval(\'{foo: 123}\'): ', eval('{foo: 123}')); // 123
console.log('eval(\'({foo: 123})\'): ', eval('({foo: 123})')); // {foo: 123}


/*
 * 5. 访问对象属性值（读写）
 * 有两种方法，一种是使用点运算符，还有一种是使用方括号运算符。
 * a. 方括号运算符内部还可以使用表达式。
 * b. 数字键可以不加引号，因为会自动转成字符串。
 * c. 数值键名不能使用点运算符（因为会被当成小数点），只能使用方括号运算符。
 */
let obj = {
    p: 'Hello World',
    'hello world': 'Hello World 2',
    0.7: 'Hello World 3',
};
console.log('obj.p: ', obj.p);
console.log('obj[\'p\']: ', obj['p']);
console.log('obj[\'hello\' + \' world\']: ', obj['hello' + ' world']);
console.log('obj[\'0.7\']: ', obj['0.7']);
console.log('obj[0.7]: ', obj[0.7]);
// obj.0.7 // Of course error happened
obj[0.8] = 'Hello world 4';
console.log('obj[0.8]: ', obj[0.8]);

/*
 * 6. Object.keys 查看对象属性名称
 */
console.log('Object.keys(obj): ', Object.keys(obj));

/*
 * 7. delete操作符：删除对象的属性
 * 无论删除一个存在的属性，还是删除不存在的属性，delete返回true
 * delete会返回false，那就是该属性存在，且不得删除。
 * 关于Object.defineProperty方法的介绍，请看《标准库》的 Object 对象一章
 * delete命令只能删除对象本身的属性，无法删除继承的属性（关于继承参见《面向对象编程》章节）
 */
console.log('delete obj.p: ', delete obj.p); // true
console.log('obj.p: ', obj.p);
console.log('delete obj.unexist: ', delete obj.unexist); // true
console.log('Object.keys(obj): ', Object.keys(obj));

let fieldFixedObject = Object.defineProperty({}, 'p', {
    value: 123,
    configurable: false
});
console.log('fieldFixedObject.p: ', fieldFixedObject.p);
console.log('delete fieldFixedObject.p: ', delete fieldFixedObject.p);

console.log('delete obj.toString: ', delete obj.toString);
console.log('obj.toString: ', obj.toString);

/*
 * 8. in运算符: 判断属性是否存在
 * in运算符的一个问题是，它不能识别哪些属性是对象自身的，哪些属性是继承的。
 * 使用对象的hasOwnProperty函数可以判断指定属性是否为对象自身的属性
 */
console.log('\'p\' in obj', 'p' in obj);
console.log('0.7 in obj', 0.7 in obj);
console.log('\'toString\' in obj', 'toString' in obj);
console.log('obj.hasOwnProperty(\'0.7\')', obj.hasOwnProperty('0.7'));
console.log('obj.hasOwnProperty(\'toString\')', obj.hasOwnProperty('toString'));


/*
 * 9. for...in 循环: 遍历对象的属性
 * 它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。例如toString默认是“不可遍历”的
 * 它不仅遍历对象自身的属性，还遍历继承的属性。
 */
obj = {a: 1, b: 2, c: 3};
for (let i in obj) {
    console.log('键名：', i);
    console.log('键值：', obj[i]);
}

/*
 * 10. with语句
 * 语法： with (对象) { 语句; }
 * 如果with区块内部有变量的赋值操作，必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量。
 * 这是因为with区块没有改变作用域，它的内部依然是当前作用域。这造成了with语句的一个很大的弊病，就是绑定对象不明确。
 */
obj = {
    p1: 1,
    p2: 2,
};
with (obj) {
    console.log('p1: ', p1);
    console.log('p2: ', p2);
    p1 = 4;
    p2 = 5;
    console.log('p1: ', p1);
    console.log('p2: ', p2);
    p3 = 3;
}
console.log('obj.p3: ', obj.p3);
console.log('p3: ', p3);
