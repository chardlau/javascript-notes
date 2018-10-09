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
 */

