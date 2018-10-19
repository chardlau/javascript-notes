/*
 * 1. 函数的声明方式
 */
// function 命令
function print1 (text) {
    console.log('text: ', text);
}
// 函数表达式
let print2 = function (text) {
    // 匿名函数赋值给print2
    console.log('text: ', text);
};
let print3 = function f (text) {
    // 非匿名函数，f仅在函数内可见，函数外不可见
    // 这种写法的用处有两个，一是可以在函数体内部调用自身，二是方便除错（除错工具显示函数调用栈时，将显示函数名）
    console.log('f: ', f);
    console.log('text: ', text);
};
// console.log('f: ', f); // ReferenceError: f is not defined
print1(1);
print2(2);
print3(3);
// Function 构造函数
let print4 = new Function('text', 'console.log(\'text: \', text);'); // 等价于print1与print2
print4(4);


/*
 * 2. 函数的重复声明
 * 后一次的函数声明覆盖了前面一次。而且，由于函数名的提升，前一次声明在任何时候都是无效的。
 * 所以之前即使已经定义了print1并且调用了print1，前后两次调用都是最后一次声明的那个。
 */
function print1 (text) {
    console.log('duplicate print1 text: ', text);
}
print1(1);


/*
 * 3. 函数的调用、返回与递归
 * 函数名后面紧跟一对圆括号，就会调用这个函数。括号内可以带参数。
 * 函数体内部的return语句，表示返回。
 * 函数可以调用自身，这就是递归。
 */
function add(x, y) {
    return x + y;
}
console.log('add(1, 1): ', add(1, 1));

function fib(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fib(num - 2) + fib(num - 1);
}
console.log('fib(6): ', fib(6));


/*
 * 4. 函数在JavaScript中也是一种变量类型，因此可以把函数赋值给变量。
 */
// 将函数赋值给一个变量
let operator = add;
console.log('operator(1, 1): ', operator(1, 1));


/*
 * 5. 函数名提升
 * JavaScript 引擎将函数名视同变量名，所以采用function命令声明函数时，整个函数会像变量声明一样，被提升到代码头部。
 */
f1();
function f1() { console.log('f1 is defined'); }
// f2();   // TypeError: f2 is not a function
// 调用f的时候，f只是被声明了，还没有被赋值，等于undefined，所以会报错。
var f2 = function (){ console.log('f2 is undefined'); };


/*
 * 6. 函数的属性和方法
 */
// name属性返回函数的名字，如果是通过变量赋值定义的匿名函数，那么name属性返回变量名。
function func () {}
console.log('func.name: ', func.name);
var func1 = function () {};
console.log('func1.name: ', func1.name);
var func2 = function myName() {};
console.log('func2.name: ', func2.name);
// length属性返回函数预期传入的参数个数，即函数定义之中的参数个数。
console.log('func.length: ', func.length);
function func4 (a, b, c) {}
console.log('func4.length: ', func4.length);
// toString方法返回一个字符串，内容是函数的源码。
console.log(func.toString());


/*
 * 7. 函数作用域
 * 作用域（scope）指的是变量存在的范围。
 * 在 ES5 的规范中，Javascript 只有两种作用域：
 * 一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；
 * 另一种是函数作用域，变量只在函数内部存在。
 */
var v1 = 1;
function func4 () {
    console.log(v1); // 函数内可访问外部的变量
}
func4();
// 函数内定义的变量外部无法使用
function func5 () {
    var v2 = 1;
}
// console.log('v2', v2); // ReferenceError: v2 is not defined
// 函数内部定义的变量，会在该作用域内覆盖同名全局变量。
var v3 = 1;
function func6(){
    var v3 = 2;
    console.log('v3 in function: ', v3);
}
func6(); // 2
console.log('v3 out of function: ', v3); // 1

/*
 * 8. 函数内的变量提升
 * var命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部。
 */
function func7 (x) {
    console.log('tmp: ', tmp);
    for (var i = 0; i < x; i++) {
        var tmp = x - i;
    }
    console.log('tmp: ', tmp);
}
func7(5);

/*
 * 9 函数本身的作用域
 * 函数本身也是一个值，也有自己的作用域。它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关。
 * 函数体内部声明的函数，作用域绑定函数体内部。参考与闭包有关的内容。
 */
var a = 1;
var func8 = function () {
    console.log(a);
};
function func9() {
    var a = 2;
    func8();
}
func9(); // 1

// 下方代码func10并无法访问到func11中的t1，因为t1是func11的局部变量
var func10 = function () {
    console.log(t1); // ReferenceError: t1 is not defined
};
function func11(f) {
    var t1 = 2;
    f();
}
// func11(func10);


/*
 * 10. 函数参数的省略
 * 无法省略前面的参数而只保留靠后的参数，要做到类似效果只能显示传入undefined
 */
function func12(a, b) {
    return a;
}
console.log('func12(1, 2, 3): ', func12(1, 2, 3));
console.log('func12(1): ', func12(1));
console.log('func12(): ', func12());
console.log('func12.length: ', func12.length);
// func12(, 2); // SyntaxError: Unexpected token ,
console.log('func12(undefined, 2): ', func12(undefined, 2));


/*
 * 11. 函数参数的传递方式
 */
// 如果参数是原始类型执行值传递（passes by value）：在函数体内修改参数值，不会影响到函数外部。
var p = 2;
function func13 (p) {
    p = 3;
}
func13(p);
console.log('p: ', p);
// 如果函数参数是复合类型的值（数组、对象、其他函数），传递方式是传址传递（pass by reference）:传入函数的原始值的地址，
// 因此在函数内部修改参数，将会影响到原始值。
var obj = { p: 1 };
function func14(o) {
    o.p = 2;
}
func14(obj);
console.log('obj.p: ', obj.p); // 2
// 如果函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数，这时不会影响到原始值。
var obj = [1, 2, 3];
function func15(o) {
    o = [2, 3, 4];
}
func15(obj);
console.log('obj: ', obj);

/*
 * 12. 同名参数
 * 如果有同名的参数，则调用时取最后出现的那个值，即使后面的参数外部没有值或被省略，也是以其为准。
 * 可以用arguments对象访问其他参数的值
 */
function func16(a, a) {
    console.log(a);
}
func16(1, 2);   // 2
func16(1);  // undefined


/*
 * 13. arguments对象
 * arguments对象包含了函数运行时的所有参数，arguments[0]就是第一个参数，arguments[1]就是第二个参数，以此类推。只能在函数内部使用。
 */
var func17 = function (one) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
};
func17(1, 2, 3);
// 正常模式下，arguments对象可以在运行时修改
var func18 = function(a, b) {
    arguments[0] = 3;
    arguments[1] = 2;
    return a + b;
};
console.log('func18(1, 1): ', func18(1, 1)); // 5
// 严格模式下，arguments对象是一个只读对象，修改它是无效的，但不会报错。
var func19 = function(a, b) {
    'use strict';
    arguments[0] = 3;
    arguments[1] = 2;
    return a + b;
};
console.log('func19(1, 1): ', func19(1, 1)); // 5
// 通过arguments对象的length属性，可以判断函数调用时到底带几个参数。
function func20() {
    return arguments.length;
}
console.log('func20(1, 2, 3): ', func20(1, 2, 3)); // 3
console.log('func20(1): ', func20(1)); // 1
console.log('func20(): ', func20()); // 0
// NOTE: arguments很像数组，但它是一个对象。
function func21() {
    console.log('Array.isArray(arguments): ', Array.isArray(arguments));
    console.log('Array.isArray([]): ', Array.isArray([]));
}
func21();
// callee 属性: 返回它所对应的原函数。这个属性在严格模式里面是禁用的，因此不建议使用。
var func22 = function () {
    console.log('arguments.callee === func22: ', arguments.callee === func22);
};
func22(); // true


/*
 * 14. 闭包
 */
// 在借用返回在函数A内部声明的子函数B的变通方法，让函数A外部可以访问到函数A内部的局部变量。
function func23() {
    var n = 999;
    function func24() {
        return n;
    }
    return func24;
}
var result = func23();
console.log('result(): ', result()); // 999
// 闭包可以让函数A的变量声明周期交由外部引用控制，例如下方的inc可以控制变量闭包内容start的生命周期。
function createIncrementor(start) {
    return function () {
        return start++;
    };
}
var inc = createIncrementor(1);
console.log('inc(): ', inc());
console.log('inc(): ', inc());
console.log('inc(): ', inc());
var inc2 = createIncrementor(1);
console.log('inc2(): ', inc2());
console.log('inc2(): ', inc2());
// 闭包可以用于封装对象的私有属性和私有方法
function Person(name) {
    var _age;
    function setAge(n) {
        _age = n;
    }
    function getAge() {
        return _age;
    }

    return {
        name: name,
        getAge: getAge,
        setAge: setAge
    };
}
var p1 = Person('张三');
p1.setAge(25);
console.log('p1.getAge(): ', p1.getAge()); // 25

/*
 * 15. 立即调用的函数表达式（IIFE）
 */
(function(){ /* code */ }());
// 或者
(function(){ /* code */ })();
// 通常情况下，只对匿名函数使用这种“立即执行的函数表达式”。
// 它的目的有两个：一是不必为函数命名，避免了污染全局变量；二是 IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量。
/*
// 写法一
var tmp = newData;
processData(tmp);
storeData(tmp);
// 写法二
(function () {
    var tmp = newData;
    processData(tmp);
    storeData(tmp);
}());
*/


/*
 * 16. eval函数：接受一个字符串作为参数，并将这个字符串当作语句执行。
 */
// eval没有自己的作用域，都在当前作用域内执行，因此可能会修改当前作用域的变量的值，造成安全问题。
eval('var a = 1;');
console.log('a: ', a);
// 为了防止这种风险，JavaScript 规定，如果使用严格模式，eval内部声明的变量，不会影响到外部作用域。
(function func25 () {
    'use strict';
    eval('var foo = 123');
    // console.log(foo); // ReferenceError: foo is not defined
})();
// 为了保证eval的别名不影响代码优化，JavaScript 的标准规定，凡是使用别名执行eval，eval内部一律是全局作用域。
var c = 1;
function func26() {
    var c = 2;
    var e = eval;
    // 按例子的解释这里应该不报错且打印c为1，但是我实际运行时报了下面错误
    // e('console.log(c)'); // ReferenceError: c is not defined
}
func26(); // 1
