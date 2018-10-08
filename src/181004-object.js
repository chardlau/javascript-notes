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
 * 2. 对象的属性值可以是任一类型
 */
