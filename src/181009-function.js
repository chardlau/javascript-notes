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
 * 函数体内部声明的函数，作用域绑定函数体内部。
 */
